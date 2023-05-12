import React from 'react';
import Profile from './Components/Profile';
import './style.css';

function App() {

  return (
    <div>
    
        <nav id="navbar" class="nav">
            <a class="nav-link" href="#welcome-section">Welcome</a>            
            <a class="nav-link" href="#about-section">About</a>        
            <a class="nav-link" href="#project-section">Projects</a>
            <a class="nav-link" href="#contact-section">Contact</a>        
          </nav>

        <nav id="navbar" class="nav">
            <ul class="nav-list">
                <li>
                    <a href="#welcome-section">Welcome</a>
                </li>
                <li>
                    <a href="#about-section">About</a>
                </li>
                <li>
                    <a href="#project-section">Projects</a>
                </li>
                <li>
                    <a href="#contact-section">Contact</a>
                </li>
            </ul>
        </nav>


        <main>
            <div id="welcome-section" class="main-section">
                    <h1 id="welcome-header">Hi I am Jean</h1>
                    <h3>a web developer</h3>

            </div>

            <div id="about-section" class="main-section">
                <img id="profile-img" src="img/Jean.jpg"/>

                <div id="profile-contents">
                    <p>As recent graduate from University of Canterbury, BSc with Computer Science, I am looking for a career in the Information Technology sector. Highly focused with a comprehensive knowledge of developing the usability of a website and structure of server side design.
                        Always eager to learn and able to get along with both work col-leagues and senior managers. Currently looking for a suitable graduate developer position.</p>
                </div>

            </div>

            <div id="project-section" class="main-section">
                <h1 class="projects-section-header">Projects involved</h1>
                <div id="project-section-contents" class="project-grid">
                    <div class="card project-section-card">
                        <img src="img/Greenbeans.PNG" class="card-img-top project-card-img" />
                        <div class="card-body">
                            <p class="card-text">Greenbeans</p>
                        </div>
                    </div>

                    <a
                        href="https://greenbeans.co.nz"
                        target="_blank"
                        class="project project-title"
                    >
                        <img
                            class="project-image"
                            src="img/Greenbeans.PNG"
                            alt="project"
                        />
                        <p class="project-title">
                            <span class="code">&lt;</span>
                            GreenBeans
                            <span class="code">&#47;&gt;</span>
                        </p>


                    </a>

                    <a
                        href="https://greenbeans.co.nz"
                        target="_blank"
                        class="project project-title"
                    />
                        <img
                            class="project-image"
                            src="img/Greenbeans.PNG"
                            alt="project"
                        />
                        <p class="project-title">
                            <span class="code">&lt;</span>
                            Title Page
                            <span class="code">&#47;&gt;</span>
                        </p>
                  




                </div>
            </div>

            <div id="contact-section" class="main-section">
                <div class="contact-section-header">
                    <h2>Let's work together</h2>
                </div>
                <div class="contact-links">
                     Facebook 
                    <a
                        href="https://www.facebook.com/jinyoung.park.52056"
                        target="_blank"
                    >
                        <i></i>Facebook
                    </a>

                     Github
                    <a
                        id="profile-link"
                        href="https://github.com/qkrwls5998"
                        target="_blank"
                    >
                        Github
                    </a>

                    LinkedIn
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/jean-park-46a74494"
                    >
                        LinkedIn
                    </a>

                     Email 
                    <a
                        href="mailto:uc.jinyoungpark@gmail.com"
                    >
                        Send a Email
                    </a>

                     Phone 
                    <a
                        href="tel:+64221706073"
                    >
                        Call me
                    </a>
                </div>

            </div>

        </main>


    </div>
  );
}

export default App;