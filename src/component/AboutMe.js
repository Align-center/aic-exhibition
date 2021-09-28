import React from 'react';
import './About.css';

function AboutMe() {
    return (  
        <div className='about'>
            <h1>About me</h1>

            <p>
                Hi !<br />
                I’m Lucas and I’m a Front-end Developer from South of France. <br />
                One of my first goal as a developer is not to make the user notice the webiste they are on. I explain myself : I want the user to navigate freely without having to think about where the navigation is, about to get to a certain page or how to access a certain information. I also try my best to give simple access to all of this to disabled users. 
            </p>

            <p>
                On a more personnal subject, I like generative algorithm. On the first months I discovered Web Development, I also discovered Maze generation algorithm and how, in a more general way, content generation algorithm were awesome. So I spend few months, on and off, to look for informations about these algorithms and how they work. Finaly I decided to get into it and make my own using two main things : a tree graph data structure and a backtracking recursive algorithm. You can find this project on my GitHub if you want to know more about it : <a href="https://github.com/Align-center/maze-generator">Github repo</a>.
            </p>

            <p>
                Yet, even if I really am obsessed with algorithm, I can’t go far from building websites: knowing that people are going to use what I built and spend so much time on is very rewarding at a profesionnal but also personnal level.
            </p>

            <p>
                That’s a wrap for now, you can find following this all my links, feel free to check them out and to share this website or any of my other projects.
            </p>

            <ul>
                <li><a target='_blank' rel='noreferrer' href="https://github.com/Align-center">My GitHub profile</a></li>
                <li><a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/lucas-frech/">My LinkedIn Profile</a></li>
                <li><a target='_blank' rel='noreferrer' href="https://lucas-web-portfolio.herokuapp.com/">My portfolio website</a></li>
            </ul>
        </div>
    );
}

export default AboutMe;