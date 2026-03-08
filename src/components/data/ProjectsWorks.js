// images
import TPVendings from "../../assets/TPVendings.png";
import IITQuest from "../../assets/IITQuest.png";
import TPUnite from "../../assets/TPUnite.png";
import NatureQuest from "../../assets/NatureQuest2.png";
import GrowMate from "../../assets/GrowMate.png";
import IITQuestSecurity from "../../assets/IITQuestAppsec.png";
import TPSeatria from "../../assets/TPSeatria.png";
import RoyalHarmony from "../../assets/RoyalHarmony.png";
import TPEventure from "../../assets/TPEventure.png";
import CineMEI from "../../assets/CineMEI.png";
import FootballPredictions from "../../assets/FootballPredictions.png";
import PeppersQuiz from "../../assets/PeppersQuiz.png";
import Eric from "../../assets/Eric4Sons.png";
import Portfolio from "../../assets/Portfolio.png";
// import MoreProjectsCard from "./MoreProjectsCard";

export const schoolProjects = [
  {
    name: "IIT Quest",
    description:
      "My first ever assignment on HTML, CSS and JS. This is a gamified approach for students to learn before the school semester begins to get a head start in their learning.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "text-yellow-500",
      },
    ],
    image: IITQuest,
    source_code_link: "https://github.com/",
  },

  // {
  //   id: "iit-quest",
  //   name: "IIT Quest",
  //   description:
  //     "My first ever assignment on HTML, CSS and JS. This is a gamified approach for students to learn before the school semester begins.",
  //   tags: [
  //     { name: "HTML", color: "orange-text-gradient" },
  //     { name: "CSS", color: "blue-text-gradient" },
  //     { name: "Javascript", color: "text-yellow-500" },
  //   ],
  //   image: IITQuest,
  //   source_code_link: "https://github.com/",
  //   live_link: "",
  // modalSections: [
  //   {
  //     title: "Overview",
  //     content:
  //       "IIT Quest was my first project where I explored core frontend development using HTML, CSS, and JavaScript. The project uses gamification to make pre-semester learning more engaging for students.",
  //   },
  //   {
  //     title: "Features",
  //     items: [
  //       "Gamified learning concept for incoming students",
  //       "Interactive frontend using HTML, CSS and JavaScript",
  //       "Simple and clean user flow for early exposure to school content",
  //     ],
  //   },
  //   {
  //     title: "Target Audience",
  //     content:
  //       "New students who want a head start before the semester begins.",
  //   },
  // ],
  // },
  {
    name: "TP Vendings",
    description:
      "A web based application using HTML, CSS and Javascript to make API calls for the admin users to perform CRUD functionalities to Vending machines in Temasek Polytechnic",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "text-yellow-500",
      },
      {
        name: "Express JS",
        color: "pink-text-gradient",
      },
      {
        name: "Rest API",
        color: "text-purple-400",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: TPVendings,
    source_code_link: "https://github.com/",
  },
  {
    name: "TP Unite",
    description:
      "A AWS cloud based application for users to search, vote and view Temasek Polytechnic CCA matches live. This utilises Microservice Architecture AWS services like API Gateway, Lambda and Dynamo DB",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "text-yellow-500",
      },
      {
        name: "API Gateway",
        color: "text-purple-500",
      },
      {
        name: "Lambda",
        color: "text-orange-400",
      },
      {
        name: "Dynamo DB",
        color: "text-blue-300",
      },
      {
        name: "RDS",
        color: "green-text-gradient",
      },
      {
        name: "Cognito",
        color: "pink-text-gradient",
      },
    ],
    image: TPUnite,
    source_code_link: "https://github.com/",
  },
  {
    name: "TPEventure",
    description:
      "TPEventure is a full stack web application using the MERN stack. It leverages a gamified approach to encourage students to join TP related events. Users can use the points they earn to redeem reward incentivising the process.",
    tags: [
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "orange-text-gradient",
      },
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "text-blue-300",
      },
      {
        name: "React Framer Motion",
        color: "text-red-500",
      },
    ],
    image: TPEventure,
    source_code_link: "https://github.com/GohJerrill/Project2_Eventure",
    source_code_link_Backend:
      "https://github.com/GohJerrill/BackendServer_Eventure",
    modalSections: [
      {
        title: "Overview",
        content:
          "Eventure is a centralised, gamified event management platform designed to make discovering, joining, and attending Temasek Polytechnic events engaging and rewarding. It addresses the 4 main pain points of TP students: Fragmented Information, Lack of incentives and Motivations, Complicated Registration and No Notification and calendar.",
      },
      {
        title: "Main Goals",
        items: [
          "Centralisation of the event finding applications in TP.",
          "Motivation and gamification for user retention.",
          "Reducing complicated registration.",
          "Notification & Reminder.",
        ],
      },
      {
        title: "Features",
        items: [
          "Allow TP Students and admins to securely log into Eventure using their school credentials.",
          "This feature will display all Temasek Polytechnic events in one centralized page to help student to discover events easily. There is multiple filters feature as well to allow the user to search for the best event to participate in.",
          "It award points to the users for attending events. Points that the user redeem can be used to redeem rewards and items from the reward store.",
          "Together with the rewards feature this can further enhance motivation through participation through additional interactive elements like badges, leaderboards and achievements.",
          "To Remind students of any upcoming events that they have and have registered for.",
          "Enables the event organizers to perform CRUD Features on any event",
        ],
      },
      {
        title: "Target Audience",
        content:
          "Current Temasek Polytechnic Students and event/CCA organisers.",
      },
      {
        title: "Learning Outcomes",
        items: [
          "Learned how to code in React using the MERN stack.",
          "Understand technical concepts in React like React Hooks",
          "Learned how to use React Framer Motion",
        ],
      },
      {
        title: "Future Improvements BABY",
        items: [
          "Make the Application Responsive.",
          "Host the React Frontend using vercel/Netlify or AWS.",
          "Host the Express JS backend.",
        ],
      },
    ],
  },
  {
    name: "Nature Quest",
    description:
      "A nature based mobile application made using Flutter. Users can grow trees via completing tasks and challenges to earn growth points. The application is supported by Firebase.",
    tags: [
      {
        name: "Dart",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "Firebase Auth",
        color: "pink-text-gradient",
      },
    ],
    image: NatureQuest,
    source_code_link: "https://github.com/",
  },
  {
    name: "GrowMate",
    description:
      "A web application powered by AWS for users to use IOT devices to grow plants. If the user has sucessfully grown their plants, they received points where they can spent as a reward.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "text-blue-500",
      },
      {
        name: "AWS",
        color: "orange-text-gradient",
      },
      {
        name: "IOT Core",
        color: "green-text-gradient",
      },
      {
        name: "Lambda",
        color: "text-orange-400",
      },
      {
        name: "Dynamo DB",
        color: "text-blue-300",
      },
      {
        name: "API Gateway",
        color: "text-purple-500",
      },
      {
        name: "Amplify",
        color: "text-yellow-400",
      },
      {
        name: "Cognito",
        color: "pink-text-gradient",
      },
      {
        name: "M5 Core",
        color: "white-text-gradient",
      },
    ],
    image: GrowMate,
    source_code_link:
      "https://github.com/GohJerrill/growmate-project-application",
    modalSections: [
      {
        title: "Overview",
        content:
          "GrowMate is an IoT-powered smart plant coaching device (Uses M5 Core) that's designed to help users care, understand, and grow healthier plants through data-driven analytics and insights. Using IOT Devices, GrowMate constantly monitors and collects key environmental factors/data like temperature, humidity, pressure, and soil and moisture. GrowMate also integrates cloud computing to enable efficient and secure feedback and data analytics. The readings are then transmitted to AWS IOT Core, where cloud services like Lambda, Dynamo DB, and SNS process, store, and translate them into meaningful feedback to the user. GrowMate focuses on educating and guiding users through the plant-growing process.  ",
      },
      {
        title: "Features",
        items: [
          "Personalized Plant Profile - GrowMate offers a variety of plant species for the user to choose and displays the plant's ideal environmental variables. User can select a plant, and view the plant's ideal temperature, humidity, soil moisture and sunlight ranges.",
          "Real-Time Coaching Feedback - GrowMate acts like a sort of mentor. It collects information such as humidity or temperature and evaluates these readings against the plant profiles to send coaching tips using AWS SNS to the users.",
          "Progress Visualization and Insights - GrowMate uses the data collected to also allow users to view the plant's progress over time through clear visualization and trend analysis. Sensor's data are logged into S3, then processed or visualized in the application.",
          "Gamified System - GrowMate motivates its users for their plants consistently through a simple points-based reward system.",
          "Profile/Log in feature - This feature is the most crucial as it allows users to sign up/log in with their information and use the application. Users can change profile pictures and usernames. ",
        ],
      },
      {
        title: "Target Audience",
        items: [
          "Students and young adults",
          "Working Professional",
          "Sustainability Activist",
        ],
      },
      {
        title: "Challenges faced",
        items: [
          "Time in M5 core - When doing the M5 core, the M5 core kept publishing date that was not correct.",
          "Hardcoded User-sub - When doing the M5 core, and the mock sensor, I had to hardcode the user-sub because there was no way to connect the device.",
          "AWS Quick Sight - Initially I wanted to embed Quick Sight charts as my data visualisation. However it needed enterprise level plan",
        ],
      },
      {
        title: "Learning Outcome BABY",
        items: [
          "Learn how to design solely using Material UI",
          "Learned the fundamental flow of how IOT systems work",
          "Further strengthened my knowledge in AWS",
        ],
      },
      {
        title: "Future Enhancements",
        items: [
          "Implement a Chat Feature for users to share their passions and knowledge about plants",
          "Better and more robust point system",
          "Allow the application to allow users to have multiple M5 core to connect to their plants",
        ],
      },
      {
        title: "** Note **",
        content: "This application was done on a Innovation Learner Lab Account, thus the hosting is now not available."
      },
    ],
  },

  {
    name: "IITQuest Security",
    description:
      "This is a follow up project for my IIT Quest website project. I implemented further security meausres especially in authentication using MongoDB and JWT tokens while keeping the website in line with Owasp top 10.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "text-yellow-500",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "JSONwebtokens",
        color: "pink-text-gradient",
      },
      {
        name: "Recaptcha",
        color: "text-white-500",
      },
      {
        name: "MFA",
        color: "text-purple-500",
      },
    ],
    image: IITQuestSecurity,
    source_code_link: "https://github.com/",
  },

  {
    name: "CineMEI",
    description:
      "This is a movie website for admin users to view different movie ratings. The main focus of this project is to simulate DevOps workflow of build, test and deployment using node, jest/Playwright and docker/Minikube.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "text-yellow-500",
      },
      {
        name: "Jenkins",
        color: "text-purple-500",
      },
      {
        name: "Jest",
        color: "text-red-500",
      },
      {
        name: "Playwright",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "text-blue-300",
      },
      {
        name: "Minikube",
        color: "text-blue-200",
      },
    ],
    image: CineMEI,
    source_code_link: "https://github.com/",
  },

  {
    name: "Football Prediction",
    description:
      "With the World Cup 2026 just around the corner, I wanted to see how much I would be worth if I was a football player. Thus, I did this machine learning project using Machine learning CrispDM lifecycle. I have also publish a StreamLit website for users to try it out as well.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "StreamLit",
        color: "orange-text-gradient",
      },
    ],
    image: FootballPredictions,
    source_code_link:
      "https://github.com/GohJerrill/Football_Supervised_MachineLearningProj",
    live_link: "https://footballvaluepriceprediction.streamlit.app/",
    modalSections: [
      {
        title: "Overview",
        content:
          "In Modern football, clubs invest millions of dollars in finding new talent and purchasing new players. Accurately estimating a player's transfer value is crucial for negotiating fair prices, avoiding overpaying for overrated players, and making financially responsible decisions. Currently, valuations for players are typically influenced by human scouting judgment, market hype, and media influence. Thus, a data-driven ML Model can provide objective, consistent, and evidence-based estimates of a player's value.",
      },
      {
        title: "Main Goals",
        content:
          "Our goal is to build a supervised machine learning regression model that accurately predicts the player's transfer value based on the relevant features in the dataset. We will analyse the dataset using EDA, generate a benchmark ML Model, improve the model, and produce a fully documented, CRISP-DM aligned workflow. Ultimately, it is not just a model but a systematic approach that mirrors real-world ML practices",
      },
      {
        title: "Target Audience",
        items: [
          "Football clubs and scouts.",
          "Sports Analyst.",
          "Pundits.",
          "Fans and football fanatics HEHEHEH.",
        ],
      },
      {
        title: "Dataset Features",
        items: [
          "Age",
          "Height",
          "Weight",
          "overall_rating",
          "potential",
          "value_euro (target)",
          "wage_euro",
          "preferred_foot",
          "international_reputation(1-5)",
          "weak_foot(1-5)",
          "skill_moves(1-5)",
          "primary_position",
          "body_type_clean",
          "continent",
          "pace_index",
          "shooting_index",
          "passing_index",
          "dribbling_index",
          "defending_index",
          "physical_index",
          "growth",
          "position_group",
        ],
      },
      {
        title: "Learning Outcomes",
        items: [
          "Supervised Machine Learning.",
          "Gradient Boosting Model.",
          "Streamlit.",
          "Feature Engineering/ Feature Selection",
        ],
      },
      {
        title: "Future Enhancements",
        items: [
          "Validate and test on newer dataset to ensure robustness",
          "Expand the number of features if data is available to ensure relevance",
        ],
      },
    ],
  },

  {
    name: "Royal Harmony",
    description:
      "This was my first project for user UIUX. Royal Harmony is a gamified music application where users can find their favourite tunes and socialise. Users can also earn points if they maintain a consistent streak of using the application.",
    tags: [
      {
        name: "Axure RP",
        color: "blue-text-gradient",
      },
    ],
    image: RoyalHarmony,
    source_code_link: "https://github.com/",
  },
  {
    name: "TPSetria",
    description:
      "TP Setria is a design mobile application concept designed using figma to help students to find suitable and quiet study spaces in TP. I have also implemented a gamification element to the application allowing users to earn points.",
    tags: [
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: TPSeatria,
    source_code_link: "https://github.com/",
  },
];

export const personalProjects = [
  {
    name: "Peppers Quiz",
    description:
      "AWS powered web application for my community. Users login via a code, points are recorded and displayed on a leaderboard. Microservice Architecture.",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "API Gateway", color: "text-purple-300" },
      { name: "Lambda", color: "text-yellow-500" },
      { name: "DynamoDB", color: "text-blue-200" },
    ],
    image: PeppersQuiz,
    source_code_link: "https://github.com/",
  },
  {
    name: "Eric4Sons",
    description:
      "This Wireframe was done for NETS PolyFintech Hackathon 2025. This is a gamified approach for how youths uses NETs. It empowers NETs to be relevant to Gen Z youths having Rewards feature and split the bill rewards. Our idea reached Paytech Category Finalist.",
    tags: [
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: Eric,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio Website",
    description:
      "WHATS UP TO THIS PROJECT! This project took much planning and mental resilience to pull through. I managed to implement React Framer Motion with ThreeJS for this project. ",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "orange-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "white-text-gradient",
      },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/",
  },
];
