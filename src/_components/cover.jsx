export default function ({title, url, thumbnail}) {
    return (
        <a className="cursor container" href={url}>
            <h3 className="album-title">{title}</h3>
            <div className="album-image"
                 style={{
                     backgroundImage: `url(/img/data/${thumbnail}.webp)`,
                 }}></div>
        </a>
    )
}
