import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
  experiences,
  blog,
  antuSlider,
  cuyenSlider
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody"; 
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import { Blog } from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";

import Experience from "./components/home/Experience";
import Sarah from "./components/sarah/index.jsx";
import Antu from "./components/antu/index.jsx";
import Cuyen from "./components/cuyen/index.jsx";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
       {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}

{getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
     
    

      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
      {
        experiences.show && (
          <Experience experiences={experiences}/>
        )
      }
      
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar logo={navBar.logo} ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
        <Route path={"/Antu"} element={<Antu ref={titleRef} img={antuSlider} />} />
        <Route path={"/Cuyen"} element={<Cuyen ref={titleRef} img={cuyenSlider} />} />
        <Route path={"/Sarah"} element={<Sarah ref={titleRef} img={antuSlider} />} />
      {blog.show && <Route path="/blog" exact component={Blog} />}
      </Routes>
      {/* {blog.show && <Route path="/blog/:id" component={BlogPost} />} */}
      <Footer>
       
      </Footer>
    </BrowserRouter>
  );
};

export default App;
