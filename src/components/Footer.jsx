import React from 'react'

const Footer = () => {
    return (
        <div>
           <div class='bg-danger'>
           <footer id="footer" class="footer">

<div class="container footer-top">
    <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-about">
            <a href="index.html" class="logo d-flex align-items-center">
                <span>Royalite</span>
            </a>
            <p>Explore our comprehensive range of courses designed to meet the demands of the rapidly evolving tech landscape. 
               From programming languages and web development to artificial intelligence and data science, Royalite Academy offers industry-relevant programs curated by experts.*</p>
            <div class="social-links d-flex mt-4">
                <a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy policy</a></li>
            </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Product Management</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">Graphic Design</a></li>
            </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>11, Adedeji Street</p>
            <p>Ishaga, Lagos state</p>
            <p>Nigeria</p>
            <p class="mt-4"><strong>Phone:</strong> <span>+234 8081552334 </span></p>
            <p><strong>Email:</strong> <span>Royalite@gmail.com</span></p>
        </div>
    </div>
</div>
<div class="container copyright text-center mt-4">
    <p>&copy; <span>Copyright</span> <strong class="px-1">Royalite</strong> <span>All Rights Reserved</span></p>
</div>
</footer>
           </div>
        </div>
    )
}

export default Footer