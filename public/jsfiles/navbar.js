const template = document.createElement("template");
template.innerHTML = `
<header>
    <div class="nav">
      <div class="container">
        <div class="row">
          <div class="nav-items">
        
            <div class="logo">
              <a href="/"><img src="assets/images/logo.png"></a>
            </div>
            
            <div class="menu-toggle">
              <button type="button" id="donate-button" class="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-4 py-3 mr-2 mb-2 drop-shadow-2xl" onclick="window.location.href = '/donate';"><i class="fa-solid fa-heart"></i> Donate</button>
              <div class="menu-hamburger"></div>
            </div>
            <div class="menu-items">
              <div class="menu">
                <ul>
                  <li><a href="/">HOME</a></li>
                  <li>
                    <a href="/who">ABOUT US</a>
                    <ul>
                      <li><a href="/who">WHO ARE WE</a></li>
                      <li><a href="/team">OUR TEAM</a></li>
                      <li><a href="/legal">OUR LEGAL</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="/programmes">PROGRAMMES</a>
                    <ul class="dropdown">
                      <li><a href="/Program1">Emergency Medical Support</a></li>
                      <li><a href="/Program3">Grace Food Bank</a></li>
                      <li><a href="/Program9">Mission Smile Program</a></li>
                      <li><a href="/Program7">Clubfoot Elimination Program</a></li>
                      <li><a href="/Program4">Home for Homeless Program</a></li>
                      <li><a href="/Program11">Mission Education Program</a></li>
                      <li><a href="/Program8">Maternal and Child Health Program</a></li>
                      <li><a href="/Program6">Health & Nutrition Program</a></li>
                      <li><a href="/Women">Women Empowerment Program</a></li>
                      <li><a href="/Program10">WASH</a></li>
                      <li><a href="/Program2">Animal Welfare Program</a></li>
                    </ul>
                  </li>
                  <li><a href="#">GET INVOLVED</a>
                    <UL>
                      <li><a href="/volunteerism">VOLUNTEERISM</a></li>
                      <li><a href="/carrier">CARRIER</a></li>
                      <li><a href="/partners">OUR PARTNERS</a></li>
                    </UL>
                  </li>
                  <li>
                    <a href="#">MEDIA</a>
                    <UL>
                      <li><a href="/blog">BLOG</a></li>
                      <li><a href="/gallery">PHOTO/VIDEO</a></li>
                    </UL>
                  </li>
                  <li><a href="/donate">DONATE US</a></li>
                  <li><a href="/contact">CONTACT US</a></li>
                </ul>
              </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <hr style="height: 2px; background: #e83e8c;" class="w-100">
`;

document.body.appendChild(template.content);
