import React from 'react'

const Signup = () => {
  return (
    <div>
         <div>
      <div className="container">
        <div className="row p-5">
          <div className="card rounded-5 p-5 bg-info ">
            <h1 className='p-2 b-5'>Register Here</h1>
            <form action="#" className='Registeration-form'>
              <div className='justify-content-center'>
              <label For="Username" className='form-label mx-2  b-5'>UserName<span
                className="text-muted">(Compulsory)</span></label>
              <input type="text" className='form-control ' id='UserName' placeholder='Enter UserName' />
              </div>
              <div>
              <label For="Email" className='form-label mx-2'>Email<span
                className="text-muted">(Compulsory)</span></label>
              <input type="text" className='form-control' id='Email' placeholder='Enter Email' />
              </div>
              <div>
              <label For="PassWord" className='form-label mx-2'>PassWord<span
                className="text-muted">(Compulsory)</span></label>
              <input type="text" className='form-control' id='PassWord' placeholder='Enter PassWord' />
              </div>
              <div>
              <label For="PassWord" className='form-label mx-2'>PassWord<span
                className="text-muted">(Compulsory)</span></label>
              <input type="text" className='form-control' id='PassWord' placeholder='Re-Enter PassWord' />
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Signup