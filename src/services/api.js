// JavaScript source code
// 최초 작성일자 : 2024.12.26
// 최초 작성자 : 윤선재
// 내용 : API 호출을 관리하는 서비스 파일. Axios를 사용하여 백엔드와 통신

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const login = (email, password, userType) =>
  api.post('/auth/login', { email, password, userType });

export const registerProject = (project) => api.post('/projects', project);

export const getProjects = () => api.get('/projects');

export const getProgress = () => api.get('/projects/progress');