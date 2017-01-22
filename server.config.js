module.exports = {
  "files": ["./src/**/*.{js, html, css}"],
  "port": process.env.PORT || 3215,
  "host": process.env.IP || 'localhost',
  "notify": false,
  "server": {
    "baseDir": "./src"
  }
};
