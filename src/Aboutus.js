import React from "react";
import "./Aboutus.css";

function Aboutus() {
  return (
    <div className="about">
      <div className="image">
        <img src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_960_720.jpg" />
      </div>
      <div className="head">
        <h1>
          *****HELLO GUEST, Welcome to a new era of shopping experiance.*****
        </h1>
        <h2>This WEB APPLICATION is created and developed by 'RAJ ADITYA'</h2>
      </div>
      <div className="section">
        <div className="first">
          <h2>some inportent websites used in this application</h2>
          <h3>There are many useful sites used in this web application.</h3>
        </div>
        <div className="sections">
          <div className="ek">
            <h1>1. Bootstrap</h1>
            <p>
              Bootstrap is a free and open-source CSS framework directed at
              responsive, mobile-first front-end web development. It contains
              HTML, CSS and JavaScript-based design templates for typography,
              forms, buttons, navigation, and other interface components.
            </p>
            <a href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)">
              Link for description
            </a>
          </div>
          <div className="do">
            <h1>2. W3school</h1>
            <p>
              W3Schools is a freemium educational website for learning coding
              online. Developed in 1998, it derives its name from the World Wide
              Web but is not affiliated with the W3C. W3Schools offers courses
              covering all aspects of web development. It is run by Refsnes Data
              in Norway
            </p>
            <a href="https://en.wikipedia.org/wiki/W3Schools">
              Link for description
            </a>
          </div>
        </div>
        <div className="sections">
          <div className="teen">
            <h1>3. React JS</h1>
            <p>
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on UI components. It is maintained
              by Meta and a community of individual developers and companies.
            </p>
            <a href="https://reactjs.org/">Link for description</a>
          </div>
          <div className="char">
            <h1>4. Node JS</h1>
            <p>
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on the V8 engine and executes
              JavaScript code outside a web browser.{" "}
            </p>
            <a href="https://nodejs.org/en/">Link for description</a>
          </div>
        </div>
        <div className="sections">
          <div className="teen">
            <h1>5. Firebase</h1>
            <p>
              Firebase is a platform developed by Google for creating mobile and
              web applications. It was originally an independent company founded
              in 2011. In 2014, Google acquired the platform and it is now their
              flagship offering for app development
            </p>
            <a href="https://firebase.google.com/?gclid=CjwKCAjw9-KTBhBcEiwAr19ig8p9KWZbqxOYoZghWk_UOdFsE7mq0jhEtqOWkmUtqIB5aTDEKIWfXxoCNVoQAvD_BwE&gclsrc=aw.ds">
              Link for description
            </a>
          </div>
          <div className="char">
            <h1>6. vercel</h1>
            <p>
              Vercel combines the best developer experience with an obsessive
              focus on end-user performance. Our platform enables frontend teams
              to do their best work.
            </p>
            <a href="https://vercel.com/dashboard">Link for description</a>
          </div>
        </div>
      </div>
      <div className="develop">
        <h1>About Developer.</h1>
        <div className="links">
          <a href="https://www.facebook.com/profile.php?id=100067139606076">
            *FACEBOOK*
          </a>
          <a href="https://www.instagram.com/rajaditya_2002/?hl=en">
            *INSTAGRAM*
          </a>
          <a href="https://twitter.com/i/flow/login">*TWITTER*</a>
          <a href="https://github.com/rajaditya1816/mybazaar">*GITHUB*</a>
        </div>
      </div>
    </div>
  );
}
export default Aboutus;
