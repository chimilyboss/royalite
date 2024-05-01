import React from 'react'
import data from '../adata/data.jsx'
import Bg from '../adata/hero-bg.jpg';
import Header from '../components/Header.jsx';
import Section from '../components/Section.jsx';
import Footer from '../components/Footer.jsx';
import {Link} from 'react-router-dom';


const Home = () => {
const info = data;
// alert(info);
  return (
    <div>
      <div className="index-page" data-bs-spy="scroll" data-bs-target="#navmenu">
        <div id="div">
          <div>
            <Header/>
          </div>

          {/* Hero Section - Home Page */}
          <section id="hero" className="hero">

            <img src={Bg} alt="" data-aos="fade-in" />
            <img src={Bg} alt="" />

            <div className="container"> 
              <div className="row">
                <div className="col-lg-10 text-end">
                <h2 >WELCOME TO {info.name} </h2>
                  {/* <h2 data-aos="fade-up" data-aos-delay="100">WELCOME TO {info.name} </h2> */}
                  <p> {info.slogan}</p>
                  {/* <p data-aos="fade-up" data-aos-delay="200">  {info.slogan} </p> */}
                  <Link to='/register' className='btn m-3 btn-danger'>Register</Link>
                  <Link to='/login' className='btn m-3 btn-danger'>Login</Link>
                  
                  
                </div> <br />
                <div className="col-lg-5">
                  <form action="./signup" className="sign-up-form d-flex" >
                  {/* data-aos="fade-up" data-aos-delay="300" */}
                    <input type="text" className="form-control" placeholder="Enter email address" />
                    <input type="submit" className="btn btn-primary" value="Sign-up" />
                  </form>

                </div>
              </div>
            </div>

          </section>
          {/* End Hero Section */}

          {/* Scroll Top Button */}
          <a href="" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i
            className="bi bi-whatsapp"></i></a>

         <Section/>



         <Footer/>

        </div>
      </div>
    </div>
  )
};

export default Home;