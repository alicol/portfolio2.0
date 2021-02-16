import logo from './logo.svg';
import './App.css';
import headshot from './assets/headshot.jpg';

function App() {
  return (
    <div className="App" id="top-div">
      <div id="first">
        <h1 id="first-header">ALI COLGLAZIER</h1>
        <div id="first-header-2">
          <div><h2 id="first-title">JUNIOR WEB DEVELOPER</h2> </div>
          <button id="first-contact-button"><a href="#form-flexbox">CONTACT ME</a></button>
        </div>
        <div class="horizontal-line" id="light-pink"></div>
        <div id="first-header-3">
        <img src={headshot} id="headshot-sizing" />
        <div id="about-flexbox">
          <h3>ABOUT</h3>
          <p id="about-text">I am a recent Web Development Bootcamp grad, and have been working as a Learning Assistant at Eleven Fifty Academy as I prepare to begin my career in Technology. I'm an incredibly quick learner with both an eye for design & a mind for code.</p>
        </div>
        </div>
      </div>

      <div id="second">
        <div id="skillset-flexbox">
          <h3 id="skillset-spacing">SKILLSET</h3>
          <h5 id="list-of-skills-spacing">
            JAVASCRIPT <br />
            REACT <br />
            TYPESCRIPT <br />
            NODE <br />
            HTML <br />
            CSS <br />
            GIT 
          </h5>
        </div>
        <div class="horizontal-line" id="light-brown"></div>
        <div>
          <h3>PROJECTS</h3>
        </div>
      </div>

      <div id="third">
        <div id="button-flexbox">
          <button class="button-styling">
            <a href="https://alicol.github.io/staticLayout-efaGold/" target="blank">
            <h5 id="project-titles">Static Layout</h5> 
            <p>A purely HTML & CSS website intended to mimic Hulu's landing page.</p>
            </a>
          </button>
          <button class="button-styling">
            <a href="https://codepen.io/alicol/pen/BaovpGy" target="blank">
            <h5 id="project-titles">CSS Creature</h5> 
            <p>A page that uses CSS to create a monster!</p>
            </a>
          </button>
          <button class="button-styling">
          <a href="https://repl.it/@alicol" target="blank">
            <h5 id="project-titles">Repls</h5> 
            <p>A collection of coding challenges presented to me by Eleven Fifty Academy.</p>
            </a>
          </button>
          <button class="button-styling">
          <a href="https://recipe-api-fce2b.web.app/"  target="blank">
            <h5 id="project-titles">Recipe API</h5> 
            <p>This website uses an API to help users find diet and health-friendly recipes to satisfy
            their cravings.</p>
            </a>
          </button>
          <button class="button-styling">
          <a href="https://recipe-box-bluebadgeclient.herokuapp.com"  target="blank">
            <h5 id="project-titles">Recipe Box</h5> 
            <p>Individual full-stack project using postgresql, node and javascript. </p>
            </a>
          </button>
          <button class="button-styling">
          <a href="https://ss-gn-client.herokuapp.com/"  target="blank">
            <h5 id="project-titles">Trivia Website</h5> 
            <p>Full-stack group project with Admin portal, using an API.</p>
            </a>
          </button>
        </div>
      </div>

      <div id="fourth">
        <div id="flexbox">
        <div>
          <h3>CONTACT</h3>
          <form action="https://formspree.io/f/moqkwqlo"
          method="POST" id="form-flexbox">
            <input type="text" name="_replyto" id="email" placeholder="email"/>
            <textarea name="message" id="message" placeholder="message" type="text"></textarea>
            <button type="submit" id="sendbutton">SEND</button>
          </form>
        </div>
        <div id="link-flexbox">
          <h5>LET'S GET IN TOUCH</h5>
          <h5><a href="https://www.linkedin.com/in/ali-colglazier-85818b127/" target="blank">LinkedIn</a></h5>
          <h5><a href="https://github.com/alicol" target="blank">GitHub</a></h5>
          {/* <h5><a href="https://github.com/alicol" target="blank">LinkedIn</a></h5> */}
        </div>
        <div>
        </div>
      </div>
      </div>
      <p> &#169; 2021, ALI COLGLAZIER</p>
    </div>
  );
}

export default App;
