function showHTML() {

  const introduction = document.getElementById('introduction');
  if (introduction) {
    introduction.style.display = 'none';
  }

  let content = document.getElementById('content');
  if (!content) {
 
    content = document.createElement('div');
    content.id = 'content';
    content.className = 'content';

  
    content.innerHTML = `
       <header>
        <h1 class="logo">Portfolio.</h1>
        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skill">Skill </a></li>
            <li><a href="#project"> Project </a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </header>

    <main class="bodyy">
        <section class="intro" id="home">
            <div class="intro-text">
                <h1>Hi, I'm</h1>
                <h2>Ira Kristine</h2>
                <h3>And I'm a <span class="highlight">Web Developer</span></h3>
                <p>Welcome to my web development portfolio! I'm Ira,
        a skilled and creative web developer with a passion
        for creating beautiful, responsive, and user-friendly websites</p>
                <div class="social-icons">
                  <a href="#"><i class="bx bxl-facebook"></i></a>
                  <a href="#"><i class="bx bxl-instagram"></i></a>
                  <a href="#"><i class="bx bxl-twitter"></i></a>           
                </div>
                <button>Contact</button>
            </div>
            <div class="intro-image">
                <img src="img head.png" alt="Profile Picture">
            </div>
        </section>
        
        <!-----About ---->

        <section class="about" id="about">
            <div class="about-text">
                <h1>About <span> Me </span></h1>
                <p>I am Ira 21 years old from Buenavista Marinduque, as a student my journey in coding is not easy, writing even the simplest lines of code felt overwhelming. I faced countless errors, frustrating bugs, and moments where I doubted if I could truly learn to program. But each problem became an opportunity to grow, and every solution taught me something new. Programming has taught me not only technical skills but also patience, problem-solving, and the importance of never giving up. It has shown me that mistakes are just stepping stones toward improvement. I am a beginner in web development, but I am driven by curiosity and a desire to learn more about building beautiful, responsive, and user-friendly websites. This portfolio is not just a display of my work it’s a testament to my determination to grow and improve as a web developer. As someone who is passionate about creating functional and visually appealing websites, I’m excited to showcase my progress and share what I’ve learned so far.
</p>
            </div>
            <div class="about-image">
                <img src="About-2.png" alt="Profile Picture">
            </div>
        </section>

          <!-----Skills ---->
              <section id="skill" class="skills-section">
          <div class="skills-header">
              <h2>My Skills</h2>
          </div>

          <div class="skills-container">
              <!-- HTML Skill -->
              <div class="skills__names">
                  <i class="fab fa-html5 skills__icon"></i>
                  <span class="skills__name">HTML</span>
              </div>
              <div class="skills__bar skills__html"></div>
              <div>
                  <span class="skills__percentage">50%</span>
              </div>

              <!-- CSS Skill -->
              <div class="skills__names">
                  <i class="fab fa-css3-alt skills__icon"></i>
                  <span class="skills__name">CSS</span>
              </div>
              <div class="skills__bar skills__css"></div>
              <div>
                  <span class="skills__percentage">55%</span>
              </div>
              <!-- JavaScript Skill -->
              <div class="skills__names">
                  <i class="fab fa-js-square skills__icon"></i>
                  <span class="skills__name">JavaScript</span>
              </div>
              <div class="skills__bar skills__js"></div>
              <div>
                  <span class="skills__percentage">20%</span>
              </div>
          </div>
      </section>

      <!-----Project ----->
          <section class="project_section" id="project">
          <h2 class="section-item">My Projects</h2>
          <p>This is my working project, it is a reflection of my beginnings in the world of web development.
       These projects help me to improve my skills in coding and learn something to create different websites and basic apps using different programming languages.</p>
            <div class="project__container">          
                <div>
                <div class="wrappers">
                    <div class="pic">
                    <img src="project1.jpeg">
                    <img src="project2.jpeg">
                    <img src="project3.jpeg">
                    <img src="project4.jpeg">
                    <img src="project5.jpeg">
                </div>
                </section>
                <!----Contact--->
                <section id="contact" class="contact">
              <div class="container">
                <h2 class="section-title"></h2>
                <form class="contact-form">
                  <h3>Contact</h3>

                  <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                  </div>

                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                  </div>

                  <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                  </div>

                  <button type="submit">Send Message</button>
                </form>
              </div>
            </section>
                </main>
            </body>
            </html>
          <footer class="footer">
            <p class="footer__copy">Gmail:irakristinesoleta@gmail.com</p>
        </footer>

    `;

    document.body.appendChild(content);
  } else {
   
    content.style.display = 'block';
  }
}
