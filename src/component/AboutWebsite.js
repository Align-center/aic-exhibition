import React from 'react';

function AboutWebsite() {
    return (
        <div className='about'>
            <h1>About this Website</h1>

            <p>
                This website is a personnal project that I created to promote my skills. The project started with the design in late july. <br />
                I used Figma as my design software; First I created the pages and their components so I had a general idea and feeling for the website. Than I redone few elements, polish the design in order to have a satisfying result. As web design wasn’t my focus on this project, I didn’t make an over-worked one. But still, I wanted to have a clean and readable design for the website.
            </p>

            <p>
                Most of the website principle rely on the Art Institute of Chicago’s API. This was my starter on this project. After playing with it for a moment, I settled on displaying a complete gallery of an exhibition. Of course I had to choose one with one of my favorite painters : Rembrandt. After this I just had to create the design according to what I received from the API and what I wanted to show. 
            </p>

            <p>
                For the Front-end Developpement, I was first tempted to use vanilla JavaScript as it is what I am the best at. But I also wanted to test my abilities in React JS so this is what is used for the website. <br />
                Also React was a good choice since all the exhibition’s informations come from JS and that I wanted to dynamically update the content. The renderer of React is exactly what is needed to simplify the insertion of content from JS to the DOM. The integration was done in vanilla CSS.
            </p>

            <p>
            And that’s it for this website’s informations. If you enjoyed it please star the project on GitHub : <a target='_blank' rel='noreferrer' href="https://github.com/Align-center/aic-exhibition">github.com/Align-center/aic-exhibition</a>, check out my other projects on my GitHub profile : <a target='_blank' rel='noreferrer' href="https://github.com/Align-center">github.com/Align-center</a> and feel free to share this website with friends.
            </p>
        </div>
    );
}

export default AboutWebsite;