import React from 'react';
import profilePic from './david_color_portrait.jpg';

export default function Profile(props) {
    return (
        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="card-panel grey lighten-3 z-depth-1">
            <div className="row valign-wrapper">
                <div className="col s2">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/david-valderrama-9819ba94/">
                    <img src={profilePic} alt="" className="circle responsive-img"/>
                </a>
                </div>
                <div className="col s10">
                <span className="flow-text">
                    Hi my name's David Valderrama and I'm currently working in Quality Assurance looking to branch out into Front End Development. I've been on the QA side of things for about 5 years and have worked at both Enterprise level organizations and small tech startups.
                </span>
                </div>
            </div>
            </div>
        </div>
    )
}