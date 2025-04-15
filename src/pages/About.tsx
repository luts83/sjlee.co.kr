import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';

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

  const copyEmailToClipboard = () => {
    const email = 'lee.sanggean@gmail.com';
    console.log('Attempting to copy email:', email); // Debug log
    if (navigator.clipboard && navigator.clipboard.writeText) {
      console.log('Using navigator.clipboard');
      navigator.clipboard
        .writeText(email)
        .then(() => {
          console.log('Copy successful');
          toast.success('Email copied to clipboard!'); // Default style
        })
        .catch((err) => {
          console.error('Copy failed:', err);
          toast.error('Failed to copy email.'); // Default style
        });
    } else {
      console.log('Falling back to execCommand');
      const input = document.createElement('input');
      input.value = email;
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      try {
        const result = document.execCommand('copy');
        console.log('execCommand result:', result);
        if (result) {
          toast.success('Email copied to clipboard!'); // Default style
        } else {
          throw new Error('execCommand failed');
        }
      } catch (err) {
        console.error('Fallback copy failed:', err);
        toast.error('Clipboard not supported in this browser.'); // Align with Footer
      } finally {
        document.body.removeChild(input);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      copyEmailToClipboard();
    }
  };

  return (
    <>
      <Helmet>
        <title>Sangjin Lee | About</title>
        <meta
          name="description"
          content="About Sangjin Lee, a creative architect and digital strategist."
        />
        <meta property="og:title" content="Sangjin Lee | About" />
        <meta
          property="og:description"
          content="Learn more about Sangjin Lee, a creative architect and digital strategist."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og/about-og-image.png" />
        <meta property="og:url" content="https://sjlee.co.kr/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="pt-24 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl font-light mb-12 tracking-tight text-gray-600 text-center"
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
            className="space-y-16"
          >
            {/* Intro Section */}
            <motion.section
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-lg p-6 sm:p-10"
            >
              <div className="relative">
                <div className="text-6xl text-gray-200 font-serif mb-4 select-none">“</div>
                <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-800 mb-4">
                  Tribrid Talent
                </h2>
                <p className="text-sm sm:text-base text-gray-500 mb-8 italic leading-relaxed">
                  Architecturally trained, digitally fluent, and commercially strategic.
                </p>
                <div className="text-gray-700 text-base sm:text-lg leading-loose font-serif">
                  <p className="mb-6">
                    I'm a creative architect who designs both physical spaces and ideas. From
                    architectural design to brand strategy and digital platforms, my work begins
                    by connecting environments, people, and the stories in between.
                  </p>
                  <p>
                    With a spirit of exploration, I travel the world to observe cultures,
                    constantly learning and expanding my horizon. More than just someone who
                    works well, I aim to be remembered as someone who designs new possibilities
                    and flows.
                  </p>
                </div>
                <div className="text-6xl text-gray-200 font-serif text-right mt-4 select-none">
                  "
                </div>
              </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section variants={fadeInUp}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-6">
                Contact
              </h3>
              <div className="flex items-center space-x-4 text-gray-600 text-base sm:text-lg leading-loose">
                <p>
                  Email:{' '}
                  <a
                    href="mailto:lee.sanggean@gmail.com"
                    className="text-gray-500 hover:text-gray-800 transition-colors duration-200"
                  >
                    lee.sanggean@gmail.com
                  </a>
                </p>
                <button
                  onClick={copyEmailToClipboard}
                  onKeyDown={handleKeyDown}
                  className="text-gray-500 hover:text-blue-500 transition-colors"
                  aria-label="Copy email"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section variants={fadeInUp}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-6">
                Skills and Knowledge
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 text-base leading-loose">
                <li>
                  <strong>Design:</strong> SketchUp, Photoshop, AutoCAD, 3D MAX, Illustrator,
                  Final Cut Pro
                </li>
                <li>
                  <strong>OA:</strong> MS Office, Google Docs Suite, Notion
                </li>
                <li>
                  <strong>Web/Dev:</strong> MERN Stack (MongoDB, Express, React, Node.js), HTML,
                  CSS, JavaScript, Bootstrap
                </li>
                <li>
                  <strong>Backend/Data:</strong> Python, SQL, REST APIs, Linux, Flask, AWS
                </li>
                <li>
                  <strong>Analytics:</strong> Google Analytics, Pandas, Numpy, Matplotlib,
                  Seaborn
                </li>
                <li>
                  <strong>Machine Learning:</strong> Scikit-Learn, Tensorflow, Keras
                </li>
              </ul>
            </motion.section>

            {/* Experiences Section */}
            <motion.section variants={fadeInUp}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-6">
                Experiences
              </h3>
              <ul className="space-y-8">
                <li className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="md:w-2/3">
                      <p className="text-gray-700 text-base leading-loose">
                        <span className="text-red-500 mr-2">•</span>
                        <strong>Digiocean / Co-Founder & Chief Operator</strong>
                        <br />
                        - Co-founded and spearhead an educational content brand, driving its
                        strategic vision and operational excellence.
                        <br />
                        - Direct brand strategy, digital marketing initiatives, and end-to-end
                        platform management.
                        <br />
                        - Oversee content curation, editing, and multi-channel publishing to
                        ensure high-quality output.
                        <br />
                        - Lead cross-functional efforts in UX optimization, data-driven
                        analytics, and integrated campaign execution to maximize audience
                        engagement and growth.
                      </p>
                    </div>
                    <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                      May 2023 – Present
                      <br />
                      Woking, United Kingdom
                    </div>
                  </div>
                </li>
                <li className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="md:w-2/3">
                      <p className="text-gray-700 text-base leading-loose">
                        <span className="text-red-500 mr-2">•</span>
                        <strong>Cheil Europe / Head of Retail</strong>
                        <br />
                        - Led retail marketing business for Samsung Electronics UK, developed
                        new business through on-off retail marketing proposals, operated retail
                        management, and improved efficiency and profitability.
                        <br />
                        - Developed EO Guidelines and piloted the construction of the first
                        store.
                      </p>
                    </div>
                    <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                      Nov. 2022 – Apr. 2023
                      <br />
                      London, United Kingdom
                    </div>
                  </div>
                </li>
                <li className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="md:w-2/3">
                      <p className="text-gray-700 text-base leading-loose">
                        <span className="text-red-500 mr-2">•</span>
                        <strong>HS Ad (An LG Company) / Senior Retail Manager</strong>
                        <br />
                        - Developed omnichannel retail strategies, managed in-store SI,
                        analyzed revenues for ROI optimization, conducted store trend analysis,
                        and managed store renovations.
                        <br />
                        - Major Projects: Digital marketing for retailer websites, LG
                        Shop-In-Shop design, LG Brand Shop renovation (BBY, US), LG Electronics
                        GCC Region ISM Improvement (13 countries, 313 stores), LG G5 Launch
                        Roadshow, and more.
                      </p>
                    </div>
                    <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                      Feb. 2021 – Oct. 2022
                      <br />
                      Johannesburg, South Africa
                      <br />
                      Dec. 2015 – May 2019
                      <br />
                      Dubai, United Arab Emirates
                    </div>
                  </div>
                </li>
                <li className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="md:w-2/3">
                      <p className="text-gray-700 text-base leading-loose">
                        <span className="text-red-500 mr-2">•</span>
                        <strong>Eduocean (E-learning platform) / Co-Founder, Developer</strong>
                        <br />
                        - Conducted market research, designed software and database, developed
                        an adaptive website using Django and Bootstrap, deployed with AWS, and
                        analyzed user data with Google Analytics and Hotjar.
                        <br />
                        - Major Project: Launched Eduocean e-learning platform website.
                      </p>
                    </div>
                    <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                      Feb. 2020 – Jan. 2021
                      <br />
                      London, United Kingdom
                    </div>
                  </div>
                </li>
                <li className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="md:w-2/3">
                      <p className="text-gray-700 text-base leading-loose">
                        <span className="text-red-500 mr-2">•</span>
                        <strong>One Agency (Cheil Worldwide) / Space Designer</strong>
                        <br />
                        - Analyzed store conditions and consumer behavior, managed site
                        supervision, designed 3D models, and coordinated with subcontractors.
                        <br />
                        - Major Projects: Gitex DU Promotion Booth, Samsung Premium Mobile
                        Store, Samsung Galaxy S5 Launch Event, and more.
                      </p>
                    </div>
                    <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                      Oct. 2013 – Nov. 2015
                      <br />
                      Dubai, United Arab Emirates
                    </div>
                  </div>
                </li>
                <li className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="md:w-2/3">
                      <p className="text-gray-700 text-base leading-loose">
                        <span className="text-red-500 mr-2">•</span>
                        <strong>Jungdo Civil & Architecture Engineering / Civil Engineer</strong>
                        <br />
                        - Managed construction and inspection.
                        <br />
                        - Major Project: Samsung sports park renovation.
                      </p>
                    </div>
                    <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                      July 2013 – Sept. 2013
                      <br />
                      Suwon, South Korea
                    </div>
                  </div>
                </li>
                <li className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="md:w-2/3">
                      <p className="text-gray-700 text-base leading-loose">
                        <span className="text-red-500 mr-2">•</span>
                        <strong>MAP Group / Architectural Engineer</strong>
                        <br />
                        - Managed construction and inspection.
                        <br />
                        - Major Projects: Construction of Valeo automotive plant, basic design
                        of DAS new plant building, canteen remodeling in Hyundai automotive
                        plant.
                      </p>
                    </div>
                    <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                      Nov. 2012 – Feb. 2013
                      <br />
                      Chennai, India
                    </div>
                  </div>
                </li>
                <li className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="md:w-2/3">
                      <p className="text-gray-700 text-base leading-loose">
                        <span className="text-red-500 mr-2">•</span>
                        <strong>DᆞLim Architecture / Designer</strong>
                        <br />
                        - Focused on design, analysis, case studies, design competitions, and
                        modeling.
                        <br />
                        - Major Projects: Ahn Jung-Geun Memorial Hall, Gang-nam residential
                        urban development, Paju Heyri Gallery, and more.
                      </p>
                    </div>
                    <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                      Mar. 2009 – Dec. 2010
                      <br />
                      Seoul, South Korea
                    </div>
                  </div>
                </li>
              </ul>
            </motion.section>

            {/* Education Section */}
            <motion.section variants={fadeInUp}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-6">
                Education
              </h3>
              <ul className="space-y-6">
                <li>
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="md:w-2/3">
                      <p className="text-gray-700 text-base leading-loose">
                        <span className="text-red-500 mr-2">•</span>
                        <strong>
                          Queen Mary University of London / Master of Science in Computing and
                          Information Systems
                        </strong>
                        <br />
                        Grade Achieved: Merit
                      </p>
                    </div>
                    <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                      Sep. 2019 – Oct. 2020
                      <br />
                      London, United Kingdom
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="md:w-2/3">
                      <p className="text-gray-700 text-base leading-loose">
                        <span className="text-red-500 mr-2">•</span>
                        <strong>Hongik University / Master of Architecture</strong>
                        <br />
                        GPA: 3.69 / 4.5 (90.59 / 100)
                      </p>
                    </div>
                    <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                      Mar. 2009 – Feb. 2011
                      <br />
                      Seoul, South Korea
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="md:w-2/3">
                      <p className="text-gray-700 text-base leading-loose">
                        <span className="text-red-500 mr-2">•</span>
                        <strong>
                          Namseoul University / Bachelor of Engineering in Architecture
                        </strong>
                        <br />
                        GPA: 3.61 / 4.5 (87.51 / 100)
                      </p>
                    </div>
                    <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                      Mar. 2003 – Feb. 2009
                      <br />
                      Chungnam, South Korea
                    </div>
                  </div>
                </li>
              </ul>
            </motion.section>

            {/* Military Service Section */}
            <motion.section variants={fadeInUp}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-6">
                Military Service
              </h3>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="md:w-2/3">
                  <p className="text-gray-700 text-base leading-loose">
                    Discharged upon completing military service as a sergeant of ROKA (Military
                    Engineer)
                  </p>
                </div>
                <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                  Feb. 2005 – Feb. 2007
                  <br />
                  South Korea
                </div>
              </div>
            </motion.section>

            {/* Activities Section */}
            <motion.section variants={fadeInUp}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-6">
                Activities
              </h3>
              <ul className="space-y-6">
                <li>
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="md:w-2/3">
                      <p className="text-gray-700 text-base leading-loose">
                        <span className="text-red-500 mr-2">•</span>
                        ICAI Summer Design Camp 2009 - Life University
                      </p>
                    </div>
                    <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                      Jul. 2008 – Aug. 2008
                      <br />
                      Sihanoukville, Cambodia
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="md:w-2/3">
                      <p className="text-gray-700 text-base leading-loose">
                        <span className="text-red-500 mr-2">•</span>
                        YUST Summer Design Camp 2007 - Yanbian University of Science and
                        Technology
                      </p>
                    </div>
                    <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                      Jul. 2007
                      <br />
                      Yanbian, China
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="md:w-2/3">
                      <p className="text-gray-700 text-base leading-loose">
                        <span className="text-red-500 mr-2">•</span>
                        Worldwide Talented Training Program - Architectural Technology
                        Education Centre
                      </p>
                    </div>
                    <div className="md:w-1/3 text-right text-gray-400 italic text-sm md:pl-4 md:border-l md:border-gray-200">
                      Mar. 2012 – May 2012
                      <br />
                      Seoul, South Korea
                    </div>
                  </div>
                </li>
              </ul>
            </motion.section>

            {/* Honors and Awards Section */}
            <motion.section variants={fadeInUp}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-6">
                Honors and Awards
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-700 text-base leading-loose">
                  <span className="text-red-500 mr-2">•</span>
                  Sustainable Design Award Competition (3rd Prize), 2008
                </li>
                <li className="text-gray-700 text-base leading-loose">
                  <span className="text-red-500 mr-2">•</span>
                  Korean Architecture Award of Chungnam Province (Entry Prize), 2008
                </li>
                <li className="text-gray-700 text-base leading-loose">
                  <span className="text-red-500 mr-2">•</span>
                  Korea Iron & Steel Association Award (Entry Prize), 2008
                </li>
                <li className="text-gray-700 text-base leading-loose">
                  <span className="text-red-500 mr-2">•</span>
                  Rural Village Architecture Award (Entry Prize), 2007
                </li>
                <li className="text-gray-700 text-base leading-loose">
                  <span className="text-red-500 mr-2">•</span>
                  Korean Architecture Award of Pyeongtaek Province (3rd Prize), 2004
                </li>
              </ul>
            </motion.section>

            {/* Language Section */}
            <motion.section variants={fadeInUp}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-6">
                Language
              </h3>
              <p className="text-gray-700 text-base leading-loose">
                Korean (Native), English (Working Proficiency)
              </p>
            </motion.section>

            {/* Publication and Thesis Section */}
            <motion.section variants={fadeInUp}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-6">
                Publications and Theses
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-700 text-sm sm:text-base leading-relaxed font-serif">
                  <span className="text-red-500 mr-2">•</span>
                  Sangjin Lee, Yeonghwan Lim. 2010.{' '}
                  <span className="italic">
                    The Recovery of "Placeness" in School Buildings
                  </span>
                  . Conference on Architectural Institute of Korea.
                </li>
                <li className="text-gray-700 text-sm sm:text-base leading-relaxed font-serif">
                  <span className="text-red-500 mr-2">•</span>
                  Sangjin Lee, Joseph Doyle. 2020.{' '}
                  <span className="italic">
                    Evaluating the Effectiveness of a Customized E-Learning Platform for Online
                    Group Study
                  </span>
                  . MSc Projects 2019/2020, School of Electronic Engineering and Computer
                  Science, Queen Mary University of London.
                </li>
              </ul>
            </motion.section>

            {/* Interests Section */}
            <motion.section variants={fadeInUp}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-6">
                Interests
              </h3>
              <p className="text-gray-700 text-base leading-loose pb-12">
                Retail Management, Retail Design, Data Analytics, Digital Marketing, Smart
                Buildings, IoT, Cycling
              </p>
            </motion.section>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-md border border-gray-200 rounded-full shadow-lg hover:bg-gray-100 transition-all"
              aria-label="Back to top"
              variants={fadeInUp}
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;