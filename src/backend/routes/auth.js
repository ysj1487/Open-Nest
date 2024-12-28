// JavaScript source code
// 최초 작성일자 : 2024.12.26
// 최초 작성자 : 윤선재
// 내용 : 인증 라우트. 로그인 및 인증 관련 API 엔드포인트를 제공

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
