// JavaScript source code
// ���� �ۼ����� : 2024.12.26
// ���� �ۼ��� : ������
// ���� : ���� ���Ʈ. �α��� �� ���� ���� API ��������Ʈ�� ����

const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password, userType } = req.body;
  
  try {
    const user = await User.findOne({ email, userType });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
