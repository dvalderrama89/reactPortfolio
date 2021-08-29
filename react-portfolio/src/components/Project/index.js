import React from 'react';

export default function Project() {
    return(
        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="card-panel grey lighten-3 z-depth-1">
              <div className="row valign-wrapper">
                <div className="col s2">
                  <a target="_blank" rel="noreferrer" href="https://github.com/reddituser7777/week-fourteen-homework">
                      <img src="https://user-images.githubusercontent.com/1855513/123089560-f2d0c980-d3db-11eb-8b89-148da00e3ae2.png" alt="Tech board screenshot" className="responsive-img"/>
                  </a>
                </div>
                <div className="col s10">
                  <h3 className="flow-text">
                    Tech board app - a CMS application that simulates Wordpress and uses a combination of sequelize, express, sessions and handlebars.
                  </h3>
                </div>
              </div>
            </div>
        </div>
    )
}