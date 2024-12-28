// JavaScript source code
// 최초 작성일자 : 2024.12.26
// 최초 작성자 : 윤선재
// 내용 : 사용자 모델. MongoDB에서 사용자 데이터를 관리

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
