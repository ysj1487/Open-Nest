// JavaScript source code
// 최초 작성일자 : 2024.12.26
// 최초 작성자 : 윤선재
// 내용 : 애플리케이션의 루트 컴포넌트. 라우팅 설정

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import ViewProjects from './components/ViewProjects';
import CheckProgress from './components/CheckProgress';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/register" component={Register} />
        <Route path="/view-projects" component={ViewProjects} />
        <Route path="/check-progress" component={CheckProgress} />
      </Switch>
    </Router>
  );
}

export default App;