import React from 'react';

function Footer() {
    return (
        <footer id="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 footer-box">
                        <a href="index.html"><img src="assets/img/1.svg" /></a>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.5885580569015!2d20.96911351544521!3d42.00910487921195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353f0ebd6b210e5%3A0xc8dce90c11445a14!2sIlindenska%2C%20Tetovo%201220!5e0!3m2!1sen!2smk!4v1573860901158!5m2!1sen!2smk" width="350" height="150" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
                    </div>
                    <div class="col-md-4 footer-box">
                        <h6><b>Contact Us</b></h6>
                        <ul id="sidemenu" class="nav nav-pills flex-column">
                            <li class="nav-item"><a href="https://goo.gl/maps/DVRkeh9im3Pg2HRY8" class="nav-link"><i class="fa fa-map-marker"></i>Illindenska,Tetove,North Macedonia</a></li>
                            <li class="nav-item"><a href="tel:00389-70799-274" class="nav-link"><i class="fa fa-phone"></i>+389 (70) 799 274</a></li>
                            <li class="nav-item"><a href="mailto:someone@example.com" target="_top" class="nav-link"><i class="fa fa-envelope-o"></i>cleaningpros@gmail.com</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-box">
                        <h6><b> Find Jobs</b></h6>
                        <a href="job.html">
                            <button type="submit" class="btn-third">Become a cleaner</button>
                        </a>
                    </div>
                </div>
                <hr />
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p class="copyright">&copy;2021 Cleaningproservices.com. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;