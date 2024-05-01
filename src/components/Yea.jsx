import React from 'react'

const Yea = () => {
  return (
    <div>
        <section id="about" class="about">

        <section id="contact" class="contact">


<div class="container section-title" >
  <h2>Contact</h2>
  <p>For More Information: contact us on the following</p>
</div>

<div class="container">

  <div class="row gy-4">

    <div class="col-lg-6">

      <div class="row gy-4">
        <div class="col-md-6">
          <div class="info-item" >
            <i class="bi bi-geo-alt"></i>
            <h3>11, Adedeji Close</h3>
            <p>Ishaga, Lagos</p>
            <p>Nigeria</p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="info-item" >
            <i class="bi bi-telephone"></i>
            <h3>Call Us</h3>
            <p>+234 8081552334</p>
            <p>+234 8136873187</p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="info-item" >
            <i class="bi bi-envelope"></i>
            <h3>Email Us</h3>
            <p>info@Royalite.com</p>
            <p>royalite@gmail.com</p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="info-item" >
            <i class="bi bi-clock"></i>
            <h3>Open Hours</h3>
            <p>Monday - Friday</p>
            <p>9:00AM - 05:00PM</p>
          </div>
        </div>

      </div>

    </div>

    <div class="col-lg-6">
      <form action="forms/contact.php" method="post" class="php-email-form" >
        <div class="row gy-4">

          <div class="col-md-6">
            <input type="text" name="name" class="form-control" placeholder="Your Name" required/>
          </div>

          <div class="col-md-6 ">
            <input type="email" class="form-control" name="email" placeholder="Your Email" required/>
          </div>

          <div class="col-md-12">
            <input type="text" class="form-control" name="subject" placeholder="Subject" required/>
          </div>

          <div class="col-md-12">
            <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
          </div>

          <div class="col-md-12 text-center">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Your message has been sent. Thank you!</div>

            <button type="submit">Send Message</button>
          </div>

        </div>
      </form>
    </div>

  </div>

</div>

</section>

</section>

    </div>
  )
}

export default Yea