import Lottie from "lottie-react"
import animationAbout from './animation/about.json';
import animationContact from './animation/contact.json';
import animationScrollTop from './animation/scroll-top.json';
import animationCall from './animation/call.json';
import animationChat from './animation/chat.json';
import Projects from "./components/Projects";
import { useEffect, useState } from "react";

function App() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-slate-900 text-white">

      <section id="banner" className="min-h-screen px-10 md:px-40 flex flex-col justify-center">
        <p className="text-center md:text-left text-lg md:text-2xl mb-8">
          Welcome to my Portfolio
        </p>
        <h1 className="text-center md:text-left text-2xl md:text-6xl font-bold mb-10">
          Hello, I am <span className="text-orange-500">Jhon Ivan Cuaco</span>
        </h1>
        <h2 className="text-center md:text-left text-lg md:text-3xl mb-10">
          <span className="text-orange-500">YOUR GO-TO EXPERT FOR:</span> Full Stack Web Development, WordPress Solutions, and More.
        </h2>
        <p className="text-center md:text-left md:text-2xl mb-20">
          Collaborate with an experienced Full Stack Web Developer who specializes in building dynamic, user-friendly websites and applications. I focus on delivering tailored solutions that meet your unique needs.
        </p>
        <div className="mx-auto md:mx-0">
          <a href="#contact" className="bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-full py-6 px-20">
            Contact Me
          </a>
        </div>
      </section>


      <div className="container mx-auto p-4">


        <section className="min-h-screen py-10">
          <h2 className="text-lg md:text-3xl text-center font-bold mb-4">
            About
          </h2>

          <div className="grid md:grid-cols-12">
            <div className="col-span-4 p-4">
              <Lottie
                animationData={animationAbout}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="col-span-8 p-4">
              <p className="mb-4">I am a dedicated IT professional with a strong passion for web and software development. With a Bachelor of Information Technology degree from Cavite State University, I have cultivated a solid foundation in programming, database management, and front-end and back-end development. I am always eager to tackle complex challenges and strive to produce solutions that are both practical and innovative. My technical expertise is complemented by a drive to constantly learn and adapt to new technologies, ensuring that my skills remain relevant and effective.</p>
              <p className="mb-4">Throughout my career, I have had the opportunity to collaborate with various clients across different industries, building a diverse portfolio of projects. My freelance experience includes working on platforms such as WordPress and CodeIgniter, where I have developed custom themes, plugins, and dynamic pages. I enjoy transforming ideas into digital solutions that are both functional and visually appealing. Each project I take on is approached with a meticulous eye for detail, ensuring that the final product aligns with the client's vision and requirements.</p>
              <p className="mb-4">One of my strengths is my ability to work independently while maintaining strong communication and collaboration with my clients. My previous roles have equipped me with a versatile skill set that goes beyond development, encompassing troubleshooting, data management, and project coordination. I am comfortable stepping into different roles as needed to ensure project success, whether it involves backend development, technical support, or client-facing interactions.</p>
              <p className="mb-4">I pride myself on being a problem-solver who thrives in dynamic environments where I can bring creative solutions to the table. I am not only focused on the technical side of development but also on delivering an experience that prioritizes usability and efficiency. My ability to analyze issues, propose effective solutions, and implement them seamlessly has been key to my success in previous projects.</p>
              <p className="mb-4">I am excited to continue building meaningful digital solutions that push the boundaries of what technology can achieve. I welcome the opportunity to work on new and challenging projects that allow me to apply my skills, collaborate with others, and create impactful results.</p>
            </div>
          </div>
        </section>

        <section className="min-h-screen py-10">
          <h2 className="text-lg md:text-3xl text-center font-bold mb-10">
            Maximize Your Business Impact in Just <br /> <span className="text-orange-500">5 Steps with Expert Guidance</span>
          </h2>

          <p className="text-sm md:text-2xl font-bold">STEP 1 | <span className="text-orange-500">Schedule a Free Consultation</span></p>
          <p className="text-xs md:text-base mb-4">Kickstart your web development journey by scheduling a free consultation with us. Whether you're looking to enhance your existing website or create something new, this initial call is designed to discuss your goals and explore how we can help you succeed online.</p>

          <p className="text-sm md:text-2xl font-bold">STEP 2 | <span className="text-orange-500">Onboard with Your Project Manager</span></p>
          <p className="text-xs md:text-base mb-4">After your consultation, our expert project manager will become your dedicated point of contact. During the onboarding session, we'll dive into your project objectives, specific requirements, and timelines. This ensures we have a clear understanding of your vision, allowing us to create a tailored development plan.</p>

          <p className="text-sm md:text-2xl font-bold">STEP 3 | <span className="text-orange-500">Designing and Developing Your Website</span></p>
          <p className="text-xs md:text-base mb-4">With your goals in mind, our skilled development team will begin crafting your website. From creating stunning designs to implementing robust functionality, we leverage the latest technologies to bring your vision to life. You can trust that your project is in the hands of experienced professionals.</p>

          <p className="text-sm md:text-2xl font-bold">STEP 4 | <span className="text-orange-500">Quality Assurance</span></p>
          <p className="text-xs md:text-base mb-4">Before launching your website, our quality assurance team conducts thorough testing to ensure everything works flawlessly. We meticulously review every element, from design responsiveness to functionality, ensuring that your website meets our high standards of quality and performance.</p>

          <p className="text-sm md:text-2xl font-bold">STEP 5 | <span className="text-orange-500">Launch and Revisions</span></p>
          <p className="text-xs md:text-base mb-4">Once the quality assurance process is complete, your project manager will guide you through the final deliverables and prepare for launch. If you need any adjustments or revisions, we're committed to making those changes until your website perfectly aligns with your vision and objectives.</p>
        </section >

        <section className="min-h-screen py-10">
          <h2 className="text-lg md:text-3xl text-center font-bold mb-4">
            My <span className="text-orange-500">Skills</span> and <span className="text-orange-500">Expertise</span>
          </h2>
          <p className="text-center mb-8">
            Empower Your Success with My Proficiency in Cutting-Edge Technologies. Let Me Enhance Your Online Presence with My Specialized Skill Set.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Frontend Development */}
            <div className="bg-slate-800 rounded p-4">
              <h3 className="md:text-2xl text-orange-500 text-center font-semibold mb-4">FRONTEND DEVELOPMENT</h3>
              <ul className="text-center">
                <li>HTML / HTML5</li>
                <li>CSS / CSS3</li>
                <li>SASS / SCSS</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
                <li>jQuery</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Zustand</li>
                <li>Redux / Redux Toolkit</li>
                <li>WordPress (Theme Development)</li>
              </ul>
            </div>

            {/* Backend Development */}
            <div className="bg-slate-800 rounded p-4">
              <h3 className="md:text-2xl text-center text-orange-500 font-semibold mb-4">BACKEND DEVELOPMENT</h3>
              <ul className="text-center">
                <li>PHP</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>CodeIgniter 3</li>
                <li>Laravel</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>REST API Development</li>
              </ul>
            </div>

            {/* WordPress Development */}
            <div className="bg-slate-800 rounded p-4">
              <h3 className="md:text-2xl text-center text-orange-500 font-semibold mb-4">WORDPRESS DEVELOPMENT</h3>
              <ul className="text-center">
                <li>Custom Theme Development</li>
                <li>Custom Plugin Development</li>
                <li>Elementor</li>
                <li>GeneratePress / GenerateBlocks</li>
                <li>Advanced Custom Fields (ACF)</li>
                <li>WPForms</li>
                <li>WooCommerce</li>
                <li>All In One SEO (AIOSEO)</li>
                <li>Roots Sage Theme (Blade Template)</li>
              </ul>
            </div>

            {/* Other Skills */}
            <div className="bg-slate-800 rounded p-4">
              <h3 className="md:text-2xl text-center text-orange-500 font-semibold mb-4">OTHER TOOLS & TECHNOLOGIES</h3>
              <ul className="text-center">
                <li>Git / GitHub</li>
                <li>Twilio SMS API</li>
                <li>Linux / Ubuntu</li>
                <li>Apache2</li>
                <li>AWS EC2 / Lightsail</li>
                <li>Hostinger</li>
                <li>GoDaddy</li>
                <li>Cloudways</li>
              </ul>
            </div>
          </div>
        </section>

        <Projects />

        <section id="contact" className="min-h-screen py-10">
          <h2 className="text-lg md:text-3xl text-center font-bold mb-4">
            Contact
          </h2>

          <div className="grid md:grid-cols-12">
            <div className="col-span-6 text-black p-4">
              <div className="bg-white rounded p-4">
                <h3 className="text-center text-2xl font-bold mb-10">Get in <span className="text-orange-500">touch</span></h3>

                <div className="mb-4">
                  <label className="font-bold" htmlFor="">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border border-gray-300 rounded p-2"
                    placeholder="Name"
                  />
                </div>

                <div className="mb-4">
                  <label className="font-bold" htmlFor="">Email</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border border-gray-300 rounded p-2"
                    placeholder="Name"
                  />
                </div>

                <div className="mb-4">
                  <label className="font-bold" htmlFor="">Subject</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border border-gray-300 rounded p-2"
                    placeholder="Name"
                  />
                </div>

                <div className="mb-4">
                  <label className="font-bold" htmlFor="message">Message</label>
                  <textarea name="message" className="w-full border border-gray-300 rounded p-2" placeholder="Write a message here..." rows="6"></textarea>
                </div>

                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Send Message</button>
              </div>
            </div>

            <div className="col-span-6 p-4">

              <div className="grid md:grid-cols-12">
                <div className="col-span-6 p-4">
                  <p className="my-10">Connect with me on:</p>
                  <p className="flex items-center mb-4">
                    <Lottie
                      animationData={animationChat}
                      loop={true}
                      autoplay={true}
                      style={{ width: 30, height: 30 }}
                      className="mr-2"
                    />

                    <a href="mailto:ivancuaco.dev@gmail.com">ivancuaco.dev@gmail.com</a>
                  </p>

                  <p className="flex items-center">
                    <Lottie
                      animationData={animationCall}
                      loop={true}
                      autoplay={true}
                      style={{ width: 30, height: 30 }}
                      className="mr-2"
                    />
                    <a href="tel:+639678061231">(+63) 967 806 1231</a>
                  </p>

                </div>

                <div className="col-span-6">
                  <Lottie
                    animationData={animationContact}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              <hr />

              <p className="my-10">Or you can connect with me on:</p>

              <ul>
                <li>
                  LinkedIn
                </li>
                <li>
                  WhatsApp
                </li>
                <li>
                  Skype
                </li>
                <li>
                  Viber
                </li>
              </ul>

            </div>



          </div>

        </section>

        <footer>
          <p className="text-center">
            &copy; {new Date().getFullYear()} <a href="/" className="text-orange-500 hover:underline">Jhon Ivan Cuaco</a>. All rights reserved.
          </p>

        </footer>

      </div>

      <button id="go-to-top" onClick={goToTop} className={`font-bold rounded-full  fixed right-10 bottom-10 z-10 ${showGoToTop ? 'block' : 'hidden'}`}>
        <Lottie
          animationData={animationScrollTop}
          loop={true}
          autoplay={true}
          style={{ width: 100, height: 100 }}
        />
      </button>
    </div >
  )
}

export default App
