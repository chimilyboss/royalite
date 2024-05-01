import React from 'react'

const Header = () => {
  return (
    <div>
      {/* Header  */}
      <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="container-fluid d-flex align-items-center justify-content-between">

          <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <h1>RO<span className="text-danger">YAL</span>ITE</h1>

          </a>

          {/* Nav Menu */}
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="/#div" className="#">Home</a></li>
              <li><a href="/services#serve" className='scroll-to'>Services</a></li>
              <li><a href="/team" className='#'>Team</a></li>
              <li className="dropdown has-dropdown"><a href="#"><span>Categories</span> <i className="bi bi-chevron-down"></i></a>
                <ul className="dd-box-shadow">
                  <li><a href="/royalitesolution" className='scroll-to'>Royalite Solutions</a></li>
                  <li><a href="/royaliteacademy" className=''>Royalite Academy</a></li>
                </ul>
              </li>
              <li><a href="/contact">Contact</a></li>
            </ul>

            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>{/* End Nav Menu */}

          <a className="btn-getstarted" href="#">Register </a>

        </div>
      </header>{/* End Header */}
    </div>
  )
}

export default Header