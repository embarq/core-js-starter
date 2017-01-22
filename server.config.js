module.exports = {
  "files": ["./src/**/*.{js, html, css}"],
  "port": process.env.PORT || 3000,
  "host": process.env.IP || 'localhost',
  "notify": false,
  "server": {
    "baseDir": "./src"
  }
};