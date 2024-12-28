// JavaScript source code
// ���� �ۼ����� : 2024.12.26
// ���� �ۼ��� : ������
// ���� : ������Ʈ ��. MongoDB���� ������Ʈ �����͸� ����

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('Project', projectSchema);