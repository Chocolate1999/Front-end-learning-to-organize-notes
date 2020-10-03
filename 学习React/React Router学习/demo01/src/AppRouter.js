import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './Pages/Index'
import List from './Pages/List'

function AppRouter() {
  return (
    <Router>
        <ul>
            <li> <Link to="/">首页</Link> </li>
            <li><Link to="/list/">列表</Link> </li>
        </ul>
        {/* 精准匹配，路径信息要完全匹配成功，才可以实现跳转，匹配一部分是不行的 */}
        <Route path="/" exact component={Index} />
        <Route path="/list/" component={List} />
    </Router>
  );
}

export default AppRouter;