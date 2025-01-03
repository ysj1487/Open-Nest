const path = require('path');

module.exports = {
  entry: './src/index.js', // 엔트리 포인트
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // 제공할 파일들의 디렉토리
    compress: true,
    port: 9000, // 사용할 포트
    open: true, // 서버 시작 후 브라우저 자동 열기
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
