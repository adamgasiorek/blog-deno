import {
    ImageMagick,
    IMagickImage,
    initialize,
    initializeImageMagick,
    MagickFormat,
} from "imagemagick";
import { walk } from "https://deno.land/std/fs/mod.ts";
import { ffmpeg } from "https://deno.land/x/fast_forward@0.1.6/ffmpeg.ts";
// await caches.delete("magick_native");

await initialize();

const asyncGenDirectories = await walk(`thumbs`, {
    maxDepth: 3,
    includeDirs: true,
    includeFiles: false,
    match: [`[^/]+/`],
});

const paths = [];
for await (let item of asyncGenDirectories) {
    paths.push(item.path);
}

for await (let path of paths) {
    await Deno.rename(path, path.replace(' ', '_'));
}

const asyncGen = await walk(`thumbs`, {
    maxDepth: 3,
    includeDirs: false,
    includeFiles: true,
    match: [`^.+\\.(jpg|jpeg|png|gif|webp|bmp|mp4|mov|tiff)$`],
});

for await (let item of asyncGen) {

    const tempFilePath = item.path;

    if(tempFilePath.includes('mp4') || tempFilePath.includes('mov')) {

        const thumbName = item.path.replace(item.name, '') + 'thumb-' + item.name.split('.')[0] + '.jpeg';
        const cmd = [
            '/Users/adamgasiorek/Dev/ffmpeg/ffmpeg', '-i', item.path, '-ss', '00:00:00.000', '-frames:v', '1', thumbName
        ];

        await Deno.run({ cmd: cmd }).status();

    } else {
        const data = await Deno.readFile(tempFilePath);

        await Deno.remove(item.path);

        await ImageMagick.read(new Uint8Array(data), async (img: IMagickImage) => {
            await img.write(
                MagickFormat.Jpeg,
                (data: Uint8Array) =>
                    Deno.writeFile(item.path.replace(item.name, '') + item.name.split('.')[0] + '.jpeg', data ),
            );

            img.resize(500);

            await img.write(
                MagickFormat.Jpeg,
                (data: Uint8Array) =>
                    Deno.writeFile(item.path.replace(item.name, '') + 'thumb-' + item.name.split('.')[0] + '.jpeg', data ),
            );

        });
    }

}
