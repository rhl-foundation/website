const template = document.createElement("template");
template.innerHTML = `

<nav class="navbar navbar-expand-lg" id="main_navbar">
<div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="assets/images/logo.png" alt="" width="60" height="60" class="d-inline-block align-text-top" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/about" role="button" data-bs-toggle="dropdown">
                    About
                </a>
                <ul class="dropdown-menu">

                    <li><a class="dropdown-item" href="/about">Who Are We</a></li>
                    <li>
                        <a class="dropdown-item" href="/team">Our Team</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/legal">Our Legal</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/partners">Our Partners</a>
                    </li>
                </ul>
            </li>
            <!--Programmes  -->
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">
                    Programmes
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="/programs/0">Emergency Medical Support</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/programs/1">Grace Food Bank</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">Mission Education Program</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="dropdown-item dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            Public Health And Nutrition
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="/programs/2">Mission Smile Program</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/programs/3">Disability Elimination Program</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/programs/6">Maternal And Child Health</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Malnutrition Eradication Program</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Mobile Medical Van</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Tuberculosis Elimination Program</a>
                            </li>
                            <li></li>
                            <li>
                                <a class="dropdown-item" href="#">Anemia Elimination Program</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/programs/4">
                            Home For Homeless Program</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/programs/7">
                            Women & Youth Empowerment Program</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/programs/8"> Animal Welfare Program</a>
                    </li>
                </ul>
            </li>

            <!-- donation -->
            <li class="nav-item">
                <a class="nav-link" href="#">Monthly Donation</a>
            </li>

            <!-- get involve -->

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    Get Involved
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="/volunteerism">Volunteerism</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/carrier">Careers</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/">Partnership</a>
                    </li>
                </ul>
            </li>

            <!-- media-->
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    Media
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="/blog">Blog</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/gallery">Photo/Video</a>
                    </li>
                </ul>
            </li>

            <!-- Donate Us -->
            <li class="nav-item">
                <button href="/donate" class="btn btn-donate" type="submit">Donate Us</button>
            </li>

            <!-- contact us -->
            <li class="nav-item">
                <a class="nav-link" href="/contact">Contact Us</a>
            </li>
        </ul>
    </div>
</div>
</nav>

  <hr style="height: 2px; background: #e83e8c;" class="w-100">
`;



document.body.appendChild(template.content);
