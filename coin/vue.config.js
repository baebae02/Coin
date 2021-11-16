module.exports = {
    devServer: {
        disableHostCheck: true,
        port: 8080,
        public: '0.0.0.0:8080',
        proxy: {
            '^/api/': {
              target: 'http://0.0.0.0:5000',
              ws: true,
              changㄴeOrigin: true,
            },
          },
    },
    publicPath: "/"
}