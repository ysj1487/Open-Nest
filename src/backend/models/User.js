// JavaScript source code
// ���� �ۼ����� : 2024.12.26
// ���� �ۼ��� : ������
// ���� : ����� ��. MongoDB���� ����� �����͸� ����

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
