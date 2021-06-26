import React from "react";
import image from '../image/about.jpg';
import image4 from '../assets/img/about.jpg';

function About(){
  //   return <div className="container" style={{paddingTop: '120px'}}>
  //   <div className="row">
  //     <div className="col-1" />
  //     <div className="col-10 card md-6">
  //       <div className="row g-0">
  //         <div className="col-md-6">
  //           <img src={image} alt="about" name="about" height="400"/>
  //         </div>
  //         <div className="col-md-6">
  //           <div className="card-body">
  //             <br />
  //             <h1 className="card-title">About</h1>
  //             <br />
  //             <p className="card-text">This project will use the off-the-shelf NLP technique to automatically mining example sentences from published academic papers and organize them according to the function of sentences, e.g., to describe a trend, to argue the
  //               benefit of the proposed method, etc. Then for a query sentence, the Website will return the sentence with the same function and serve as a writing suggestion. The Website will allow a user to customize their own sentence
  //               library and automatically collect the feedback from users to update the model for refining the search results.</p>
  //             <br />
  //             {/* <button type="button" className="btn btn-primary" onclick="location.href='about.html'">More Details</button> */}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     {/* <div className="col-1" /> */}
  //   </div>
  // </div>
  return <div>
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
              <p>This project will use the off-the-shelf NLP technique to automatically mining example sentences from published academic papers and organize them according to the function of sentences, e.g., to describe a trend, to argue the benefit
                of the proposed method, etc. Then for a query sentence, the Website will return the sentence with the same function and serve as a writing suggestion. The Website will allow a user to customize their own sentence library and
                automatically collect the feedback from users to update the model for refining the search results.</p>
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
            <h4 className="title"><a href>Manage collectioins</a></h4>
            <p className="description">You can manage your collections. For example, you can add your favorate sentences to the collections and you can delete suggestion collections.</p>
          </div>
        </div>
      </div>
    </section>
    {/* End functions Section */}
    <a href='/about' className="back-to-top"><i className="icofont-simple-up" /></a>
  </div>
}

export default About;