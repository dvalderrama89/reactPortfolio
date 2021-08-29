import React from 'react';
import Project from '../components/Project';

function Home() {
  
  return (
    <>
    <Project
        repoURL="https://github.com/reddituser7777/grademy"
        imgURL="https://raw.githubusercontent.com/reddituser7777/grademy/main/Assets/login-screenshot.png"
        imgAltTag="Grademy application screenshot"
        projectDescription="Grademy - An all-in-one learning application for students and admin. Users are able to access their courses and communicate in real time through an integrated chat window."
    />
    <Project
        repoURL="https://github.com/reddituser7777/nosql-homework"
        imgURL="https://user-images.githubusercontent.com/1855513/128303302-c5226403-c635-4692-8915-fcac2778200b.png"
        imgAltTag="Nosql fitness tracker screenshot"
        projectDescription="Fitness tracker - Deployed a fitness tracker app to Heroku that can add workouts and display stats based on workout data."
    />
    <Project
        repoURL="https://github.com/reddituser7777/PWA-Homework"
        imgURL="https://user-images.githubusercontent.com/1855513/131232795-a6f4ac11-dcc0-4cc3-97aa-a29cee74fec0.png"
        imgAltTag="PWA service worker screenshot"
        projectDescription="Budget tracker - The goal of the app was to create a manifest and service worker to allow the app to run offline. All POST requests made while the connection is offline are then queued up and synced when the browser detects connectivity again."
    />
    </>
  );
}

export default Home;