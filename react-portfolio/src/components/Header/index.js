import React from 'react';
import {Link} from "react-router-dom";
import resume from '../../david_valderrama_resume.pdf';

export default function Header() {
    return (
        <nav>
            <div className="nav-wrapper teal darken-3">
            <Link to="/" className="brand-logo">Home</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
                <li>
                <a class="grey-text text-lighten-3" download href={resume}>Resume</a>
                </li>
            </ul>
            </div>
      </nav>
    );
}