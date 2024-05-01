import React from 'react'

const See = () => {
    return (
        <div>
            <section id="team" classname="team">
                <div classname="container section-title" >
                    <div className='bg-dark '>
                    <h2>TEAM</h2>
                    <h3 className='text-light m-3' >MEET OUR TEAM OF MANAGEMENT</h3>
                    </div>
                </div>
                <div classname="container">

                    <div classname="col-4 member" >
                        <div classname="member-img">
                            <img src="assets/img/team/team-1.jpg" classname="img-fluid" alt="" />
                        </div>
                        <div classname="member-info text-center">
                            <h2>Babatope Ojo</h2>
                            <p>Chief Executive Officer</p>
                        </div>
                    </div>
                    <div classname="col-4  member" >
                        <div classname="member-img">
                            <img src="assets/img/team/team-2.jpg" classname="img-fluid" alt="" width={450} />
                        </div>
                        <div classname="member-info text-center">
                            <h2>Chroma Felix</h2>
                            <p>Managing Director</p>
                        </div>
                    </div>
                    <div classname="col-4 " >
                        <div classname="">
                            <img src="assets/img/team/team-3.jpg" classname="" alt="" width={450} />
                        </div>
                        <div classname="member-info text-center">
                            <h2>Alayemi Adeyemi</h2>
                            <p>IT Manager</p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default See