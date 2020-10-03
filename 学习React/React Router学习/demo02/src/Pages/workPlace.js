import React from "react";
import {  Route, Link  } from "react-router-dom";
import Money from './workPlace/Money'
import Getup from './workPlace/Getup'


function WorkPlace(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/workplace/Moeny">程序员加薪秘籍</Link></li>
                    <li><Link to="/workplace/Getup">程序员早起攻略</Link></li>

                </ul>
            </div>
            <div className="videoContent">
                <div><h3>职场软技能</h3></div>
                <Route path="/workplace/Moeny/"   component={Money} />
                <Route path="/workplace/Getup/"   component={Getup} />

            </div>
        </div>
    )
}
export default WorkPlace;