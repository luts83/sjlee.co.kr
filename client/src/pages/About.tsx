import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="pt-20 px-6 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl font-light mb-12 tracking-tight text-gray-600"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Sangjin Lee
        </motion.h1>

        

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-12">
          <div className="relative bg-white py-20 px-6 md:px-12 rounded-lg shadow-sm border border-gray-200">
  <div className="relative z-10">
    <div className="text-6xl text-gray-300 font-serif mb-4 select-none">“</div>

    <h1 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-800 mb-2">
      Tribrid talent —
    </h1>
    <p className="text-sm sm:text-base text-gray-500 mb-8 italic">
      architecturally trained, digitally fluent, and commercially strategic.
    </p>

    <div className="text-gray-700 text-base sm:text-lg leading-relaxed font-serif max-w-3xl">
      <p className="mb-5">
        I'm a creative architect who designs both physical spaces and ideas.
        From architectural design to brand strategy and digital platforms,
        my work begins by connecting environments, people, and the stories in between.
      </p>
      <p>
        With a spirit of exploration, I travel the world to observe cultures,
        constantly learning and expanding my horizon. More than just someone who works well,
        I aim to be remembered as someone who designs new possibilities and flows.
      </p>
    </div>

    <div className="text-6xl text-gray-300 font-serif text-right mt-4 select-none">”</div>
  </div>
</div>




</motion.div>


          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-600">
              Contact
            </h3>
            <p className="text-gray-600 mb-12">
              {/* Contact: +44(0)7510273881<br /> */}
              Email: <a href="mailto:lee.sanggean@gmail.com" className="text-gray-400 hover:text-black transition-colors">lee.sanggean@gmail.com</a><br />
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
  <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-600">
    Skills and Knowledge
  </h3>
  <ul className="space-y-2 mb-12 text-gray-600">
    <li><strong>Design:</strong> SketchUp, Photoshop, AutoCAD, 3D MAX, Illustrator, Final Cut Pro</li>
    <li><strong>OA:</strong> MS Office, Google Docs Suite, Notion</li>
    <li><strong>Web/Dev:</strong> MERN Stack (MongoDB, Express, React, Node.js), HTML, CSS, JavaScript, Bootstrap</li>
    <li><strong>Backend/Data:</strong> Python, SQL, REST APIs, Linux, Flask, AWS</li>
    <li><strong>Analytics:</strong> Google Analytics, Pandas, Numpy, Matplotlib, Seaborn</li>
    <li><strong>Machine Learning:</strong> Scikit-Learn, Tensorflow, Keras</li>
  </ul>
</motion.div>



          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-600">
              Experiences
            </h3>
            <ul className="space-y-6 mb-12">
            <li>
  <div className="flex flex-col md:flex-row justify-between gap-4">
    <div className="md:w-2/3">
      <p className="text-gray-600 leading-loose">
        <span className="text-red-500 mr-2">•</span>
        <strong>Digiocean / Co-Founder & Chief Operator</strong><br />
        - Co-founded and spearhead an educational content brand, driving its strategic vision and operational excellence.<br />
        - Direct brand strategy, digital marketing initiatives, and end-to-end platform management.<br />
        - Oversee content curation, editing, and multi-channel publishing to ensure high-quality output.<br />
        - Lead cross-functional efforts in UX optimization, data-driven analytics, and integrated campaign execution to maximize audience engagement and growth.
      </p>
    </div>
    <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
      May 2023 – Present<br />
      Woking, United Kingdom
    </div>
  </div>
</li>

              <li>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="md:w-2/3">
                    <p className="text-gray-600 leading-loose">
                      <span className="text-red-500 mr-2">•</span>
                      <strong>Cheil Europe / Head of Retail</strong><br />
                      - Led retail marketing business for Samsung Electronics UK, developed new business through on-off retail marketing proposals, operated retail management, and improved efficiency and profitability.<br />
                      - Developed EO Guidelines and piloted the construction of the first store.
                    </p>
                  </div>
                  <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                    Nov. 2022 – Apr. 2023<br />
                    London, United Kingdom
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="md:w-2/3">
                    <p className="text-gray-600 leading-loose">
                      <span className="text-red-500 mr-2">•</span>
                      <strong>HS Ad (An LG Company) / Senior Retail Manager</strong><br />
                      - Developed omnichannel retail strategies, managed in-store SI, analyzed revenues for ROI optimization, conducted store trend analysis, and managed store renovations.<br />
                      - Major Projects: Digital marketing for retailer websites, LG Shop-In-Shop design, LG Brand Shop renovation (BBY, US), LG Electronics GCC Region ISM Improvement (13 countries, 313 stores), LG G5 Launch Roadshow, and more.
                    </p>
                  </div>
                  <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                    Feb. 2021 – Oct. 2022<br />
                    Johannesburg, South Africa<br />
                    Dec. 2015 – May 2019<br />
                    Dubai, United Arab Emirates
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="md:w-2/3">
                    <p className="text-gray-600 leading-loose">
                      <span className="text-red-500 mr-2">•</span>
                      <strong>Eduocean (E-learning platform) / Co-Founder, Developer</strong><br />
                      - Conducted market research, designed software and database, developed an adaptive website using Django and Bootstrap, deployed with AWS, and analyzed user data with Google Analytics and Hotjar.<br />
                      - Major Project: Launched Eduocean e-learning platform website.
                    </p>
                  </div>
                  <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                    Feb. 2020 – Jan. 2021<br />
                    London, United Kingdom
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="md:w-2/3">
                    <p className="text-gray-600 leading-loose">
                      <span className="text-red-500 mr-2">•</span>
                      <strong>One Agency (Cheil Worldwide) / Space Designer</strong><br />
                      - Analyzed store conditions and consumer behavior, managed site supervision, designed 3D models, and coordinated with subcontractors.<br />
                      - Major Projects: Gitex DU Promotion Booth, Samsung Premium Mobile Store, Samsung Galaxy S5 Launch Event, and more.
                    </p>
                  </div>
                  <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                    Oct. 2013 – Nov. 2015<br />
                    Dubai, United Arab Emirates
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="md:w-2/3">
                    <p className="text-gray-600 leading-loose">
                      <span className="text-red-500 mr-2">•</span>
                      <strong>Jungdo Civil & Architecture Engineering / Civil Engineer</strong><br />
                      - Managed construction and inspection.<br />
                      - Major Project: Samsung sports park renovation.
                    </p>
                  </div>
                  <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                    July 2013 – Sept. 2013<br />
                    Suwon, Korea
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="md:w-2/3">
                    <p className="text-gray-600 leading-loose">
                      <span className="text-red-500 mr-2">•</span>
                      <strong>MAP Group / Architectural Engineer</strong><br />
                      - Managed construction and inspection.<br />
                      - Major Projects: Construction of Valeo automotive plant, basic design of DAS new plant building, canteen remodeling in Hyundai automotive plant.
                    </p>
                  </div>
                  <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                    Nov. 2012 – Feb. 2013<br />
                    Chennai, India
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="md:w-2/3">
                    <p className="text-gray-600 leading-loose">
                      <span className="text-red-500 mr-2">•</span>
                      <strong>DᆞLim Architecture / Designer</strong><br />
                      - Focused on design, analysis, case studies, design competitions, and modeling.<br />
                      - Major Projects: Ahn Jung-Geun Memorial Hall, Gang-nam residential urban development, Paju Heyri Gallery, and more.
                    </p>
                  </div>
                  <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                    Mar. 2009 – Dec. 2010<br />
                    Seoul, Korea
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-600">
              Education
            </h3>
            <ul className="space-y-6 mb-12">
              <li>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="md:w-2/3">
                    <p className="text-gray-600 leading-loose">
                      <span className="text-red-500 mr-2">•</span>
                      <strong>Queen Mary University of London / Master of Science in Computing and Information Systems</strong><br />
                      Grade Achieved: Merit
                    </p>
                  </div>
                  <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                    Sep. 2019 – Oct. 2020<br />
                    London, United Kingdom
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="md:w-2/3">
                    <p className="text-gray-600 leading-loose">
                      <span className="text-red-500 mr-2">•</span>
                      <strong>Hongik University / Master of Architecture</strong><br />
                      GPA: 3.69 / 4.5 (90.59 / 100)
                    </p>
                  </div>
                  <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                    Mar. 2009 – Feb. 2011<br />
                    Seoul, South Korea
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="md:w-2/3">
                    <p className="text-gray-600 leading-loose">
                      <span className="text-red-500 mr-2">•</span>
                      <strong>Namseoul University / Bachelor of Engineering in Architecture</strong><br />
                      GPA: 3.61 / 4.5 (87.51 / 100)
                    </p>
                  </div>
                  <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                    Mar. 2003 – Feb. 2009<br />
                    Chungnam, South Korea
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-600">
              Military Service
            </h3>
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="md:w-2/3">
                <p className="text-gray-600 leading-loose mb-12">
                  Discharged upon completing military service as a sergeant of ROKA (Military Engineer)
                </p>
              </div>
              <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                Feb. 2005 – Feb. 2007
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-600">
              Activities
            </h3>
            <ul className="space-y-6 mb-12">
              <li>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="md:w-2/3">
                    <p className="text-gray-600 leading-loose">
                      <span className="text-red-500 mr-2">•</span>
                      <strong>ICAI Summer Design Camp 2009 - Life University</strong>
                    </p>
                  </div>
                  <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                    Jul. 2008 – Aug. 2008<br />
                    Sihanoukville, Cambodia
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="md:w-2/3">
                    <p className="text-gray-600 leading-loose">
                      <span className="text-red-500 mr-2">•</span>
                      <strong>YUST Summer Design Camp 2007 - Yanbian University of Science and Technology</strong>
                    </p>
                  </div>
                  <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                    Jul. 2007 – Jul. 2007<br />
                    Yanbian, China
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="md:w-2/3">
                    <p className="text-gray-600 leading-loose">
                      <span className="text-red-500 mr-2">•</span>
                      <strong>Worldwide talented training program held by Architectural Technology Education Centre</strong>
                    </p>
                  </div>
                  <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                    Mar. 2012 – May 2012<br />
                    Seoul, Korea
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-600">
              Honors and Awards
            </h3>
            <ul className="space-y-2 mb-12">
              <li className="text-gray-600">
                <span className="text-red-500 mr-2">•</span>
                Sustainable Design Award Competition (3rd Prize), 2008
              </li>
              <li className="text-gray-600">
                <span className="text-red-500 mr-2">•</span>
                Korean Architecture Award of Chungnam province (Entry Prize), 2008
              </li>
              <li className="text-gray-600">
                <span className="text-red-500 mr-2">•</span>
                Korea Iron & Steel Association Award (Entry Prize), 2008
              </li>
              <li className="text-gray-600">
                <span className="text-red-500 mr-2">•</span>
                Rural Village Architecture Award (Entry Prize), 2007
              </li>
              <li className="text-gray-600">
                <span className="text-red-500 mr-2">•</span>
                Korean Architecture Award of Pyeongtaek province (3rd Prize), 2004
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-600">
              Language
            </h3>
            <p className="text-gray-600 mb-12">
              Korean (native), English (working proficiency)
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-600">
              Publication and Thesis
            </h3>
            <ul className="space-y-2 mb-12">
              <li className="text-gray-600">
                <span className="text-red-500 mr-2">•</span>
                Sangjin Lee, Yeonghwan Lim. 2010. ‘The Recovery of “Placeness”’ in school-buildings. Conference on Architectural Institute of Korea.
              </li>
              <li className="text-gray-600">
                <span className="text-red-500 mr-2">•</span>
                Sangjin Lee, Joseph Doyle. 2020. Evaluating the effectiveness of a customised e-learning platform for online group study. The MSc projects 2019/2020 within the School of Electronic Engineering and Computer Science at Queen Mary University of London.
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-600">
              Interests
            </h3>
            <p className="text-gray-600 mb-12">
              Retail Management, Retail Design, Data Analytics, Digital Marketing, Smart Buildings, IoT, Cycling
            </p>
          </motion.div>
          {/* Signature Section */}
<motion.div
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
  className="mt-24 pt-12 border-t border-gray-200 text-center relative pb-20"
>
  <p className="text-gray-500 mb-6 text-sm">
    Thanks for stopping by — let's connect.
  </p>

  <button
  onClick={() => {
    const email = "lee.sanggean@gmail.com";

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email)
        .then(() => alert("📋 Email copied to clipboard!"))
        .catch(() => fallbackCopy(email));
    } else {
      fallbackCopy(email);
    }

    function fallbackCopy(text: string) {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed"; // avoid scrolling to bottom
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand("copy");
        alert("📋 Email copied to clipboard!");
      } catch (err) {
        prompt("Copy email:", email);
      }

      document.body.removeChild(textArea);
    }
  }}
  className="text-gray-400 hover:text-black transition-colors text-sm underline"
>
  lee.sanggean@gmail.com
</button>


  {/* Scroll to top round button */}
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md border border-gray-300 rounded-full shadow-md hover:bg-white transition"
    aria-label="Back to top"
  >
    <i className="fas fa-arrow-up text-gray-700"></i>
  </button>
</motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default About;