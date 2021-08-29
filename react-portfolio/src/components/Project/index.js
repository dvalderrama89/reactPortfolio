import React from 'react';

export default function Project(props) {
    return(
        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="card-panel grey lighten-3 z-depth-1">
              <div className="row valign-wrapper">
                <div className="col s2">
                  <a target="_blank" rel="noreferrer" href={props.repoURL}>
                      <img src={props.imgURL} alt={props.imgAltTag} className="responsive-img"/>
                  </a>
                </div>
                <div className="col s10">
                  <h3 className="flow-text">
                    {props.projectDescription}
                  </h3>
                </div>
              </div>
            </div>
        </div>
    )
}