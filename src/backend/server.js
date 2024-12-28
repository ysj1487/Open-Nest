// JavaScript source code
// 최초 작성일자 : 2024.12.26
// 최초 작성자 : 윤선재
// 내용 : Express 서버 설정 파일. 서버를 초기화하고 라우트를 설정

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/real-estate-pf', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});