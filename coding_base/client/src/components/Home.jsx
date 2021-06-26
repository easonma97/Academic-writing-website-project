import React, {useState} from "react";
import Input from "./Input";
import { BrowserRouter as Link } from 'react-router-dom';
import image4 from '../assets/img/about.jpg';

function Home(){ 
    return <div>
    {/* ======= Slider ======= */}
    <section id="slider">
      <div className="slider-container">
        <div id="sliderCarousel" className="carousel slide carousel-fade" data-ride="carousel">
          <ol className="carousel-indicators" id="slider-carousel-indicators" />
          <div className="carousel-inner" role="listbox">
            {/* Slide 1 */}
            <div className="carousel-item active" style={{backgroundImage:"url("+require("../assets/img/slide/slide-1.jpg").default+")"}}>
              <div className="carousel-container">
                <div className="carousel-content container">
                  <h2 className="animated fadeInDown">Welcome to <span>Academic Writing Suggestion Site</span></h2>
                  <p className="animated fadeInUp">The website can help you to improve your academic writing. Come and join us now !</p>
                  <a href='/login' className="btn-get-started animated fadeInUp scrollto">Log In</a>
                  <a href='/signUp' className="btn-get-started animated fadeInUp scrollto">Join Us Now</a>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="carousel-item" style={{backgroundImage:"url("+require("../assets/img/slide/slide-2.jpg").default+")"}}>
              <div className="carousel-container">
                <div className="carousel-content container">
                  <h2 className="animated fadeInDown">Only three steps and you can improve your academic writing !</h2>
                  <p className="animated fadeInUp">Step 1 : Register</p>
                  <p className="animated fadeInUp">Step 2 : Log In</p>
                  <p className="animated fadeInUp">Step 3 : Improve your sentences</p>
                  <a href='/login' className="btn-get-started animated fadeInUp scrollto">Log In</a>
                  <a href='/signUp' className="btn-get-started animated fadeInUp scrollto">Join Us Now</a>
                </div>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="carousel-item" style={{backgroundImage:"url("+require("../assets/img/slide/slide-3.jpg").default+")"}}>
              <div className="carousel-container">
                <div className="carousel-content container">
                  <h2 className="animated fadeInDown">The advantage of the website</h2>
                  <p className="animated fadeInUp">Give multi-suggestions to academic writing</p>
                  <p className="animated fadeInUp">Give user inspiration to rewrite their own sentence</p>
                  <a href='/login' className="btn-get-started animated fadeInUp scrollto">Log In</a>
                  <a href='/signUp' className="btn-get-started animated fadeInUp scrollto">Join Us Now</a>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#sliderCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#sliderCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon icofont-rounded-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
    {/* End slider */}
    <main id="main">
      {/* ======= About Us Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-6 video-box">
              <img src={image4} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
              <div className="section-title">
                <h2>About Us</h2>
                <p>This project will use the off-the-shelf NLP technique to automatically mining example sentences from published academic papers and organize them according to the function of sentences, e.g., to describe a trend, to argue the
                  benefit of the proposed method, etc. Then for a query sentence, the Website will return the sentence with the same function and serve as a writing suggestion. The Website will allow a user to customize their own sentence
                  library and automatically collect the feedback from users to update the model for refining the search results.</p>
              </div>
              <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon"><i className="bx bx-check-circle" /></div>
                <h4 className="title"><a href>Get Suggestions</a></h4>
                <p className="description">Get suggestions about how to improve academic writing.</p>
              </div>
              <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon"><i className="bx bx-folder" /></div>
                <h4 className="title"><a href>See Collections</a></h4>
                <p className="description">See the good sentences you collected.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Us Section */}
      {/* ======= Steps Section ======= */}
      <section className="steps">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up">
              <span>01</span>
              <h4>Register</h4>
              <p>Firstly, Join us by clicking the Sign Up and Register by creating Username and Password.</p>
            </div>
            <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay={100}>
              <span>02</span>
              <h4>Sign In</h4>
              <p>Sign in by clicking the Log In and signing up by your Username and Password</p>
            </div>
            <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay={200}>
              <span>03</span>
              <h4> Improve your sentences</h4>
              <p>Get suggestions by typing in the sentence and you can also manage your collections.</p>
            </div>
          </div>
        </div>
      </section>
      {/* End Steps Section */}
      {/* ======= functions Section ======= */}
      <section id="functions" className="functions section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Functions</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon"><i className="icofont-check" /></div>
              <h4 className="title"><a href>Get Suggestions</a></h4>
              <p className="description">Get suggestions about the academic writing</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
              <div className="icon"><i className="icofont-chart-bar-graph" /></div>
              <h4 className="title"><a href>See your collections</a></h4>
              <p className="description">You can add suggestion sentences to the collections and see them anytime.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
              <div className="icon"><i className="icofont-gear" /></div>
              <h4 className="title"><a href>Manage collections</a></h4>
              <p className="description">You can manage your collections. For example, you can add your favorate sentences to the collections and you can delete suggestion collections.</p>
            </div>
          </div>
        </div>
      </section>
      {/* End functions Section */}
      {/* ======= Benefits Section ======= */}
      <section id="benefits" className="benefits">
        <div className="container">
          <div className="section-title">
            <h2>As a user, the benefits of you.</h2>
          </div>
          <div className="row  d-flex align-items-stretch">
            <div className="col-lg-12 benefits-item" data-aos="fade-up">
              <h4><i className="bx bx-check-circle" /> Suggestions from the state of the art NLP algorithm. Save time for searching sentences by yourself.
              </h4>
              <h4><i className="bx bx-check-circle" /> Your data and preference will be saved in the database. Even if your laptop get stolen you can still find it in the website.
              </h4>
              <h4><i className="bx bx-check-circle" /> Easy to use. Input your query and get the result immediately.
              </h4>
            </div>
          </div>
        </div>
      </section>
      {/* End Frequently Benefits Section */}
    </main>
    {/* End #main */}
    <a href='/' className="back-to-top"><i className="icofont-simple-up" /></a>
  </div>
} 

export default Home;
