import React from 'react';

const SocialMedia = () => {
    return (
        <div className="social-media-container">
            <a className="pr-4" href="https://www.linkedin.com/in/alicanuver/">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a
                className="pr-4"
                href="https://stackoverflow.com/users/12348877/canuver"
            >
                <i className="fab fa-stack-overflow"></i>
            </a>
            <a className="pr-4"
                href="https://github.com/alican-uver">
                <i className="fab fa-github"></i>
            </a>
            <a className="pr-4"
                href="https://gitlab.com/alicanuver">
                <i className="fab fa-gitlab"></i>
            </a>
            <a href="https://codepen.io/codebyalican">
                <i className="fab fa-codepen"></i>
            </a>
        </div>
    )
}

export default SocialMedia;

