export interface Project {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  description: string;
  descriptionText?: string;
  image: string;
  imageFiles: string[];
  tags: string[];
  isStudent: boolean;
  isComputer: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Samsung EO Retail Guide Pilot Store",
    category: "Guideline",
    date: "2023",
    location: "London, United Kingdom",
    description: "Design and construction of Samsung Electronics EO Retail Guide Pilot Store",
    image: "/images/arch-pro/01_SS_EO_Retail_Guide_Pilot_Store/04.png",
    imageFiles: ["03.png", "04.png", "05.png", "06.png"],
    tags: ["Retail Strategy", "Store Opening Coordination", "Guideline Development", "Project Reporting"],
    isStudent: false,
    isComputer: false
  },
  {
    id: 2,
    title: "LG Event - East Coast Radio Show",
    category: "Event",
    date: "2022",
    location: "Durban, South Africa",
    description: "Design and construction of LG Event booth at East Coast Radio Show",
    image: "/images/arch-pro/02_LG_Event_East_Coast_Radio_Show/08.png",
    imageFiles: ["07.png", "08.png", "09.png"],
    tags: ["Event Planning", "Timeline Management", "Vendor Management", "On-site Coordination"],
    isStudent: false,
    isComputer: false
  },
  {
    id: 3,
    title: "LG Shop-in-Shop Hirschs Waterfall",
    category: "Shop-in-Shop",
    date: "2022",
    location: "Johannesburg, South Africa",
    description: "Design and construction of LG Shop-in-Shop at Hirschs Waterfall",
    image: "/images/arch-pro/03_LG_Shop-in-Shop_Hirschs_Waterfall/11.png",
    imageFiles: ["10.png", "11.png", "12.png", "13.png", "14.png"],
    tags: ["Shop-in-Shop", "Construction Scheduling", "Vendor Management", "Fixture Installation"],
    isStudent: false,
    isComputer: false
  },
  {
    id: 4,
    title: "LG Shop-in-Shop Stax Woodlands",
    category: "Shop-in-Shop",
    date: "2021",
    location: "Pretoria, South Africa",
    description: "Design and construction of LG Shop-in-Shop at Stax Woodlands",
    image: "/images/arch-pro/04_LG_Shop-in-Shop_Stax_Woodlands/16.png",
    imageFiles: ["15.png", "16.png", "17.png"],
    tags: ["Shop-in-Shop", "Site Supervision", "Fixture Installation", "Kick-off Meeting Facilitation"],
    isStudent: false,
    isComputer: false
  },
  {
    id: 5,
    title: "LG Shop-in-Shop Tuskys T-Mall",
    category: "Shop-in-Shop",
    date: "2018",
    location: "Nairobi, Kenya",
    description: "Design and construction of LG Shop-in-Shop at Tuskys T-Mall",
    image: "/images/arch-pro/05_LG_Shop-in-Shop_Tuskys_T-Mall/19.png",
    imageFiles: ["18.png", "19.png", "20.png", "21.png"],
    tags: ["Shop-in-Shop", "Retail Operations", "Procurement", "Stakeholder Communication"],
    isStudent: false,
    isComputer: false
  },
  {
    id: 6,
    title: "LG Shop-in-Shop Plugin Dubai",
    category: "Shop-in-Shop",
    date: "2017",
    location: "Dubai, United Arab Emirates",
    description: "Design and construction of LG Shop-in-Shop at Plugin Dubai Festival City",
    image: "/images/arch-pro/06_LG_Shop-in-Shop_Plugin_Dubai/23.png",
    imageFiles: ["22.png", "23.png", "24.png", "25.png"],
    tags: ["Shop-in-Shop", "International Coordination", "Logistics", "Daily Progress Updates"],
    isStudent: false,
    isComputer: false
  },
  {
    id: 7,
    title: "Samsung Premium Brand Store Gateway",
    category: "Brand Shop",
    date: "2015",
    location: "Durban, South Africa",
    description: "Design and construction of Samsung Premium Brand Store at Gateway Mall",
    image: "/images/arch-pro/07_SS_Premium_Brand_Store_Gateway/27.png",
    imageFiles: ["26.png", "27.png", "28.png", "29.png", "30.png", "31.png"],
    tags: ["Brand Shop", "Design Coordination", "Store Planning", "Stakeholder Communication"],
    isStudent: false,
    isComputer: false
  },
  {
    id: 8,
    title: "Samsung Galaxy Note4 Event",
    category: "Event",
    date: "2015",
    location: "Various Location, South Africa",
    description: "Design and construction of Samsung Galaxy Note4 Roadshow Exhibition Event",
    image: "/images/arch-pro/08_SS_Galaxy_Note4_Event/33.png",
    imageFiles: ["32.png", "33.png", "34.png", "35.png", "36.png"],
    tags: ["Event Design", "Vendor Coordination", "On-site Execution", "Project Timeline"],
    isStudent: false,
    isComputer: false
  },
  {
    id: 9,
    title: "Samsung SES Guideline Development",
    category: "Guideline",
    date: "2015",
    location: "South Africa",
    description: "Development of Samsung SES Guidelines and Documentation",
    image: "/images/arch-pro/09_SS_SES_Guideline_Development/38.png",
    imageFiles: ["37.png", "38.png", "39.png"],
    tags: ["Guideline Development", "Visual Design", "Documentation", "Brand Consistency"],
    isStudent: false,
    isComputer: false
  },
  {
    id: 10,
    title: "Samsung Premium Mobile Store Ikeja",
    category: "Brand Shop",
    date: "2014",
    location: "Lagos, Nigeria",
    description: "Design and construction of Samsung Premium Mobile Store at Ikeja Mall",
    image: "/images/arch-pro/10_SS_Premium_Mobile_Store_Ikeja/41.png",
    imageFiles: ["40.png", "41.png", "42.png", "43.png", "44.png", "45.png"],
    tags: ["Retail Strategy", "Store Launch", "Brand Implementation", "Design Management"],
    isStudent: false,
    isComputer: false
  },
  {
    id: 11,
    title: "Samsung Show Window Display",
    category: "Show Window Display",
    date: "2013",
    location: "Johannesburg, South Africa",
    description: "Design and construction of Samsung Show Window Display",
    image: "/images/arch-pro/11_SS_Show_Window_Display/47.png",
    imageFiles: ["46.png", "47.png", "48.png", "49.png", "50.png"],
    tags: ["Visual Merchandising", "Show Window Design", "Branding", "Layout Planning"],
    isStudent: false,
    isComputer: false
  },
  {
    id: 12,
    title: "EduOcean E-learning Platform",
    category: "Web Development",
    date: "2020",
    location: "www.edu-ocean.com",
    description: "A full-featured E-learning platform built with Django and deployed on AWS.",
    descriptionText: `
  The website is built with HTML and Python programming language on top of the Django framework. The Django framework was chosen to shorten the time it takes to develop the site considering the given timeline. Bootstrap is used for responsive layout and AWS services including EC2 and RDS were utilized for deployment.
  
  Main Features:
  - Assignment Updates: Announcement and downloadable materials uploaded weekly.
  - Study Materials: Video lectures (via YouTube iframe) and audio files for speaking practice.
  - Vocabulary Test: Flashcard-style quizzes with performance tracking.
  - Test Score & Progress: Shows user and group averages to motivate.
  - Assignment Submission: Submit written/audio tasks, progress bar updated.
  - Tutor Comments: 1:1 communication with tutor, no peer messaging.
  - Vocabulary Test Page: Randomized flashcards, records latest scores for analysis.
  `,
    image: "/images/web-dev/edu-ocean/01.png",
    imageFiles: ["01.png", "02.png", "03.png"],
    tags: [
      "Django", "Python", "Bootstrap", "AWS EC2", "AWS RDS", "MySQL",
      "Responsive Design", "Flash Card Test", "Progress Tracker"
    ],
    isStudent: false,
    isComputer: true
  },
  {
    id: 13,
    title: "Evaluating the Effectiveness of a Customised E-learning Platform",
    category: "Data Analysis",
    date: "2020",
    location: "United Kingdom",
    description: "Analyzed learner engagement and academic outcomes on two e-learning platforms during COVID-19.",
    descriptionText: `
      <p>
        This research project explored the effectiveness of a Django-based e-learning platform compared to KakaoTalk, a popular messaging app, for online language study groups during the COVID-19 pandemic.
        Over 100 participants engaged in English and Chinese lessons across three months, and their behaviors were analyzed using chat logs, test results, and assignment completion data.
      </p>
  
      <h3>Main Hypotheses:</h3>
      <ul>
        <li>h1: Tutor’s feedback increases engagement</li>
        <li>h2: Peer communication increases engagement</li>
        <li>h3: Platform functions impact engagement</li>
        <li>h4: Engagement correlates with academic achievement</li>
      </ul>
  
      <h3>Key Findings:</h3>
      <ul>
        <li><strong>h2 and h4 were supported</strong>: Peer interaction strongly influenced engagement and academic outcomes.</li>
        <li><strong>h1 and h3 were not fully confirmed</strong>, suggesting communication features were more critical than tutor feedback or platform design.</li>
        <li>Despite the customised platform being preferred for its structure and feedback archiving, the open communication in KakaoTalk led to higher assignment completion.</li>
      </ul>
  
      <p>
        <strong>Skills demonstrated:</strong> Data analysis, experimental design, user behavior tracking, full-stack web development, visualization.
      </p>
    `,
    image: "/images/data-analysis/elearning-effectiveness/01.png",
    imageFiles: ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png", "09.png", "10.png", "11.png", "12.png"],
    tags: [
      "Data Analysis", "User Behavior", "Education Research", "Django",
      "KakaoTalk", "Flashcard Quiz", "Experimental Design", "COVID-19", "Python"
    ],
    isStudent: false,
    isComputer: true
  },
  {
    id: 14,
    title: "Website Traffic Analytics Report",
    category: "Data Analysis",
    date: "2020",
    location: "London, United Kingdom",
    description: "A detailed analytics report visualizing website traffic trends(edu-ocean.com), sources, and user behavior across a 6-month period.",
    descriptionText: `
      <p>
        This project showcases a customized website analytics report built with HTML, based on Google Analytics and behavioral data tracking.
        It visualizes performance metrics such as page views, bounce rates, traffic sources, device types, and time-on-site across multiple charts.
      </p>
      <p>
        Key metrics covered include:
      </p>
      <ul>
        <li>Total visits and unique visitors over time</li>
        <li>Breakdown of traffic sources: Organic, Direct, Referral, Social</li>
        <li>Top-performing pages by conversion rate</li>
        <li>Time and day of week analysis for peak user activity</li>
        <li>New vs. returning visitor ratios</li>
      </ul>
      <p>
        This standalone HTML report demonstrates skills in data visualization, frontend integration (Chart.js), and interpreting user engagement insights to guide marketing and UX strategy.
      </p>
      <div class="mt-8">
        <iframe
          src="/assets/data_analytics_for_website.html"
          width="100%"
          height="800"
          style="border: 1px solid #ccc;"
          title="Website Analytics Report"
        ></iframe>
      </div>
    `,
    image: "/images/data-analysis/web-analytics/01.png",
    imageFiles: ["01.png", "02.png", "03.png", "04.png"],
    tags: ["Data Visualization", "Google Analytics", "Chart.js", "Traffic Sources", "User Behavior"],
    isStudent: false,
    isComputer: true
  },
  {
    id: 15,
    title: "Data Analytics on KakaoTalk-Based Language Learning",
    category: "Data Analysis",
    date: "2020",
    location: "London, United Kingdom",
    description: "Analyzed learner engagement through chat data and task completion within KakaoTalk-based study groups.",
    descriptionText: `
      <p>
        This project focused on analyzing user behavior in online language learning environments using KakaoTalk as the main platform. The analysis included chat message frequency, assignment submission rates, and test scores to evaluate engagement and academic outcomes.
      </p>
  
      <h3>Key Focus Areas:</h3>
      <ul>
        <li>Correlation between number of messages and engagement score (E-Score)</li>
        <li>Impact of peer communication on assignment completion</li>
        <li>Data visualization using bar graphs and scatter plots</li>
      </ul>
  
      <p>
        Results confirmed that active peer-to-peer messaging was strongly linked to engagement. Study groups using KakaoTalk demonstrated higher assignment completion compared to groups without active communication. 
      </p>
  
      <p>
        <strong>Skills demonstrated:</strong> Chat log analysis, metric design (E-Score), hypothesis testing, data visualization, engagement analytics.
      </p>
      <div class="mt-8">
        <iframe
          src="/assets/data_analytics_for_KakaoTalk.html"
          width="100%"
          height="800"
          style="border: 1px solid #ccc;"
          title="Website Analytics Report"
        ></iframe>
      </div>
    `,
    image: "/images/data-analysis/kakaotalk-effectiveness/01.png",
    imageFiles: ["01.png", "02.png", "03.png", "04.png"],
    tags: [
      "KakaoTalk", "Engagement Metrics", "E-Score", "Chat Log Analysis", "Education Analytics",
      "Scatter Plot", "Bar Chart", "User Behavior", "COVID-19"
    ],
    isStudent: false,
    isComputer: true
  },
  {
    id: 16,
    title: "Email Marketing Dashboard and Performance Analysis",
    category: "Data Analysis",
    date: "2024",
    location: "United Kingdom",
    description: "Built a dashboard to analyze email campaign performance using open/click rates, unsubscribe behavior, and engagement trends.",
    descriptionText: `
      <p>
        This project showcases a data dashboard built to analyze over 1 year of email marketing campaign performance.
        Key indicators such as open rates, click rates, unsubscribe behavior, and subscriber growth were visualized
        to help identify what content resonated best with the audience.
      </p>
  
      <h3>Key Features:</h3>
      <ul>
        <li>Week-by-week performance breakdown (opens, clicks, net subscribers)</li>
        <li>Monthly click-through and open rate tracking</li>
        <li>Campaign-level insights by subject line and content tag</li>
      </ul>
  
      <p>
        The dashboard provided clear visibility into what topics and formats led to higher user engagement, 
        and informed content planning for future newsletters.
      </p>
  
      <p>
        <strong>Skills demonstrated:</strong> CSV parsing, time-series aggregation, data visualization (bar/line chart),
        user segmentation, HTML embedding.
      </p>
  
      <div class="mt-8">
        <iframe
          src="/assets/data_analytics_for_email.html"
          width="100%"
          height="800"
          style="border: 1px solid #ccc;"
          title="Email Marketing Analytics Report"
        ></iframe>
      </div>
    `,
    image: "/images/data-analysis/email-dashboard/01.png",
    imageFiles: ["01.png"],
    tags: [
      "Email Marketing", "Newsletter", "Open Rate", "Click Rate",
      "Engagement", "Subscriber Growth", "Dashboard", "Data Visualization"
    ],
    isStudent: false,
    isComputer: true
  }
  
  
  
  
  
];
