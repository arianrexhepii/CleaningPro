import React from 'react';

function Header() {
    return (
        <header id="nav-bar">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand" href="index.html"><img src="assets/img/1.svg" alt="logo" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#top">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#services">SERVICES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about-us">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#faq">FAQ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="tel:00389-70799-274">
                                    (044) 388 245</a>
                            </li>
                            <a class="nav-link " href="appointment.html">
                                <button class="buttons">BOOK NOW</button>
                            </a>
                        </ul>

                    </div>
    </nav>
</header>
  );
}

export default Header;