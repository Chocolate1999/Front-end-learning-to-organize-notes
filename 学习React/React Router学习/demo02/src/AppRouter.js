import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './Pages/Index'
import Video from './Pages/Video'
import Workplace from './Pages/WorkPlace'
import './index.css'

function AppRouter() {
  let routeConfig = [
    { path: '/', title: '博客首页', exact: true, component: Index },
    { path: '/video/', title: '视频教程', exact: false, component: Video },
    { path: '/workplace/', title: '职场技能', exact: false, component: Workplace }
  ]
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            {
              routeConfig.map((item, index) => {
                return (<li key={index}> <Link to={item.path}>{item.title}</Link> </li>)
              })
            }
          </ul>
        </div>

        <div className="rightMain">
          {
            routeConfig.map((item, index) => {
              return (<Route key={index} exact={item.exact} path={item.path} component={item.component} />)
            })
          }

        </div>
      </div>
    </Router>
  );
}


export default AppRouter;