import React from 'react'

import Footer from '../components/Footer';

const Login = () => {
  return (
    <div>
      
      <div>

      <div className="container"> <br />
        <div className="row">  <br  className=' m-4' />
          <div className="col"></div>
          <div className="col">
          <div className="card rounded-5 justify-content-center border p-5 bg-info">
            <h1 className='p-4' >WELCOME TO LOGIN PAGE</h1>
            <form action="#" className="sign-up-form " >
              <div className="">
                <label For="Username" className='form-label mx-2  b-5'>UserName<span
                  className="text-muted">(Compulsory)</span></label>
                <input type="text" className='form-control' id='UserName' placeholder='Enter UserName' />
              </div>
              <div>
                <label For="PassWord" className='form-label mx-2'>PassWord<span
                  className="text-muted">(Compulsory)</span></label>
                <input type="text" className='form-control' id='PassWord' placeholder='Enter PassWord' />
                <button className='btn btn-primary btn-sm m-3'>
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
      </div>

      


      <Footer/>

    </div>

  )
}

export default Login