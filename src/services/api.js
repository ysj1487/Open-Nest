// JavaScript source code
// ���� �ۼ����� : 2024.12.26
// ���� �ۼ��� : ������
// ���� : API ȣ���� �����ϴ� ���� ����. Axios�� ����Ͽ� �鿣��� ���

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const login = (email, password, userType) =>
  api.post('/auth/login', { email, password, userType });

export const registerProject = (project) => api.post('/projects', project);

export const getProjects = () => api.get('/projects');

export const getProgress = () => api.get('/projects/progress');