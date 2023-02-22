const fs = require('fs');

fs.copyFile('seo/robots.txt', 'dist/apps/blog/browser/robots.txt', (err) => {
  if (err) throw err;
  console.log('copied succesfull');
});

fs.copyFile('seo/sitemap.xml', 'dist/apps/blog/browser/sitemap.xml', (err) => {
  if (err) throw err;
  console.log('copied succesfull');
});
