import React from 'react';

export default function Footer(props) {
    return (
        <footer class="page-footer teal darken-3" id="contact">
            <div class="container">
              <div class="row">
                <div class="col l6 s12">
                  <h5 class="white-text">Contact</h5>
                  <p class="grey-text text-lighten-3">David Valderrama</p>
                  <p class="grey-text text-lighten-3">dvalderrama08@gmail.com</p>
                  <p class="grey-text text-lighten-3">951-201-8070</p>
                </div>
                <div class="col l4 offset-l2 s12">
                  <h5 class="white-text">Links</h5>
                  <ul>
                    <li><a class="grey-text text-lighten-3" href="https://github.com/reddituser7777">Github</a></li>
                    <li><a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/david-valderrama-9819ba94/">LinkedIn</a></li>
                    <li><a class="grey-text text-lighten-3" download href="./assets/images/david_valderrama_resume.pdf">Resume</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div class="container">
              © 2021 Copyright
              </div>
            </div>
        </footer>
    );
}