import React from 'react';
import './Home.css';

const Home = () => {
  document.addEventListener('DOMContentLoaded', function () {
    var counters = document.querySelectorAll('.count-number');
    var windowHeight = window.innerHeight;
    // localStorage.setItem("cart",JSON.stringify(["sample"]));
    function animateCounters() {
      counters.forEach(function (counter) {
        var counterPosition = counter.getBoundingClientRect().top;

        if (counterPosition - windowHeight <= 0) {
          var targetValue = parseInt(counter.textContent, 10);
          var currentValue = 0;
          var delay = 10;
          var increment = targetValue / (1000 / delay);

          var interval = setInterval(function () {
            currentValue += increment;
            counter.textContent = Math.floor(currentValue);

            if (currentValue >= targetValue) {
              clearInterval(interval);
              counter.textContent = targetValue;
            }
          }, delay);
        }
      });
    }
    window.addEventListener('scroll', animateCounters);
    animateCounters();


  });

  localStorage.setItem("wishlist", JSON.stringify(["Nike Air Monarch IV"]));
  localStorage.setItem("cart", JSON.stringify(["Nike Air Monarch IV"]));
  return (
    <div>
      {/* <Navbar/> */}
      <div className='body'>
        <section className="one">
          <nav className="nav">
            <ul className="d-flex navbar-link">
              <li><a href="/" style={{ color: "#fff" }}>About</a></li>
              <li><a href="/Category" style={{ color: "#fff" }}>Categories</a></li>
              <li><a href="/Login" style={{ color: "#fff" }}>Sign Up</a></li>
              <li className='LoginKaro'>
                <section className="three">
                  <span><a href="/Login" style={{ color: "#fff" }}>login</a></span>
                  <svg viewBox="0 0 150 150">
                    <path
                      id="curve"
                      fill="transparent"
                      d="M 75 75 m -50, 0 a 50, 50 0 1, 1 100, 0 a 50, 50 0 1, 1 -100, 0"
                    />
                    <text>
                      <textPath xlinkHref="#curve" fill="#fff">
                        | INNOVATE | THINK | CONQUER |
                      </textPath>
                    </text>
                  </svg>
                </section>
              </li>
            </ul>
          </nav>
          <video className="video-bg" autoPlay muted>
          // <source type="video/mp4" src={"https://res.cloudinary.com/nischal1/video/upload/v1688173328/NeonBg_ccmqik.mp4"} />
          </video>

          <div className="linear-background"></div>
          <div className="XL-text">TechKits</div>
          <div className="L-text">M A R K E T P L A C E</div>

          <div className="container-center">
            <div className="M-text">Connecting Innovation, One Bot at a Time</div>
          </div>

          <div className="text-M">
            <span></span>= INNOVATION
          </div>
          <span to="/auth/register" className="GetStarted">
            Get Started
          </span>

          {/* <div className="featured">FEATURED</div> */}
        </section>

        <div className="heading">
          <h2>FEATURED PRODUCTS</h2>
          <div className="underline"></div>
        </div>
        <section className="two">
          <img
            src={
              "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/287eab66-0f73-4b97-8e74-849c5f06d542/denm9yd-106dade8-9cf8-4bf8-858d-916385ea39d7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI4N2VhYjY2LTBmNzMtNGI5Ny04ZTc0LTg0OWM1ZjA2ZDU0MlwvZGVubTl5ZC0xMDZkYWRlOC05Y2Y4LTRiZjgtODU4ZC05MTYzODVlYTM5ZDcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rQzwFnBfPXDUmn3GRCWr-1JJjgd6DNfYXIYnlJ5TSx4"
            }
            alt=""
          />
          <img
            src={
              "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            }
            alt=""
          />
          <img
            src={
              "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c169ce80625385.5ce676e88618e.png"
            }
            alt=""
          />
          <img
            src={
              "https://cdnb.artstation.com/p/assets/images/images/029/987/025/large/romain-butrot-neon-street.jpg?1599237812"
            }
            alt=""
          />
          <img
            src={
              "https://www.blendernation.com/wp-content/uploads/2020/06/image12.gif"
            }
            alt=""
          />
          <img
            src={
              "https://cdna.artstation.com/p/assets/images/images/020/580/896/large/andreea-cristiana-papuc-final-render.jpg?1568326193"
            }
            alt=""
          />
          <img
            src={
              "https://cdnb.artstation.com/p/assets/images/images/038/314/817/large/hind-vitry-hind-vitry-final.jpg?1622743033"
            }
            alt=""
          />
          <img
            src={
              "https://img.freepik.com/premium-photo/illustration-cyber-tokyo-neon-street-rainy-nigh-3d-rendering-raster-illustration_717906-764.jpg?w=2000"
            }
            alt=""
          />
        </section>

        <section className="four">
          <div className="Patners"></div>
          <div className="line-left"></div>

          <div className="brands  ">
            <img
              src={
                "https://res.cloudinary.com/nischal1/image/upload/v1688173589/samsung_ndxpft.webp"
              }
              alt=""
            />

            <img
              src={
                "https://res.cloudinary.com/nischal1/image/upload/v1688173589/cocacola_mjtzeh.webp"
              }
              alt=""
            />
            <img
              src={
                "https://res.cloudinary.com/nischal1/image/upload/v1688173589/4f_fkdogj.webp"
              }
              alt=""
            />
            <img src="https://res.cloudinary.com/nischal1/image/upload/v1688173589/ikea_rjeou7.webp" alt="" />
          </div>
          <div className="line-right"></div>

          <span className="million">*Along with 1 million users</span>

          <button className="getstarted-btn">get started</button>
        </section>

        <section className="five">
          <div className="five-content">
            <span className="circle-b">TK</span>
            <div className="Why"></div>
          </div>
          <p className="five-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque optio
            provident laboriosam eligendi nisi accusamus deleniti vero dolorum
            quidem neque consequuntur omnis, ratione ea nobis magni eius
            reiciendis dignissimos voluptate molestias distinctio obcaecati.
            Minima architecto nesciunt dolorem provident numquam adipisci quas,
            obcaecati vero possimus veniam soluta sed est, commodi, voluptatibus
            rerum eum. Quia!
          </p>
          <p className="five-p">
            We often help start ups to get their first site live! Don’t be shy
            send a question!
          </p>

          <p className="five-p">Check out our services.</p>
        </section>

        <section className="six">
          <img src={"barcode"} alt="" className="barcode" />
          <div className="about"></div>
          <section id="statistic" class="statistic-section one-page-section">
            <div class="containercounter">
              <div class="rowcounter text-center">
                <div class="col-xs-12 col-md-3">
                  <div class="counter">
                    <i class="fa fa-coffee fa-2x stats-icon"></i>
                    <h2 class="timer count-title count-number">7,000+</h2>
                    <div class="stats-line-black"></div>
                    <p class="stats-text">Products</p>
                  </div>
                </div>
                <div class="col-xs-12 col-md-3">
                  <div class="counter">
                    <i class="fa fa-code fa-2x stats-icon"></i>
                    <h2 class="timer count-title count-number">18,000+
                    </h2>
                    <div class="stats-line-black"></div>
                    <p class="stats-text">Transactions</p>
                  </div>
                </div>
                <div class="col-xs-12 col-md-3">
                  <div class="counter">
                    <i class="fa fa-clock-o fa-2x stats-icon"></i>
                    <h2 class="timer count-title count-number">250+</h2>
                    <div class="stats-line-black"></div>
                    <p class="stats-text">Categories</p>
                  </div>
                </div>
                <div class="col-xs-12 col-md-3">
                  <div class="counter">
                    <i class="fa fa-laptop fa-2x stats-icon"></i>
                    <h2 class="timer count-title count-number">25,000</h2>
                    <div class="stats-line-black"></div>
                    <p class="stats-text">Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <p className="six-p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            veniam sint omnis labore soluta, optio laborum beatae libero modi
            facere magni nobis ullam dolore quasi cumque voluptatibus sit
            blanditiis atque in? Illo earum, deleniti voluptatum architecto, neque
            odio vel laudantium facere consectetur aperiam qui?
          </p>
          <p className="six-p">
            Numerous of contacts allow to push the business above the boundaries.
            We work everyday and we want to make sure that our clients are
            satisfied as possible with the final result.
          </p>
        </section>

        <section className="seven">
          <video className="footer-bg" autoPlay muted loop>
            <source
              type="video/mp4"
              src={
                "https://res.cloudinary.com/nischal1/video/upload/v1688173444/hand_neon_rfhyde.mp4"
              }
            />
          </video>

          <div className="linear-gradient"></div>

          <div className="quote">
            <div>"Empowering Your Robotic Dreams,</div>
            <div> One Innovation at a Time"</div>
          </div>
        </section>

        <section className="footer">
          <div className="footer-content">
            <ul className="d-flex navbar-link">
              <li className="logo">
                <span className="circle-border">TK</span> <span>TECHKITS</span>
              </li>
              <li>Categories</li>
              <li>About</li>
              <li>Get started</li>
            </ul>
            <div className="footer-icon">
              <span></span>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <span></span>
            </div>
            <ul className="footer-link">
              <li className="footer-title">HeadQuarters</li>
              <li className="footer-text">Mumbai, INDIA</li>
              <li className="footer-title">Phone no:</li>
              <li className="footer-text">+91 998795231</li>
              <li className="footer-title">Mail:</li>
              <li className="footer-text">aztec@gmail.com</li>
            </ul>
          </div>

          <div className="line-right"></div>

          <div className="copyright">
            Copyrights © 2022 Winkle’Media. All rights reserved.
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
