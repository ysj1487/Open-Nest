// JavaScript source code
// 최초 작성일자 : 2024.12.26
// 최초 작성자 : 윤선재
// 내용 : 프로젝트 모델. MongoDB에서 프로젝트 데이터를 관리

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('Project', projectSchema);