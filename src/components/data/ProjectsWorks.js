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
    modalSections: [
      {
        title: "Overview",
        content:
          "First ever project about HTML, CSS and JS. IIT Quest gives user the head start in providing a gamified approach into preparation before the semester begins.",
      },
      {
        title: "Features",
        items: [
          "Gamified learning concept for incoming students",
          "Interactive frontend using HTML, CSS and JavaScript",
          "Simple and clean user flow for early exposure to school content",
        ],
      },
      {
        title: "Target Audience",
        content: "Students who want a head start before the semester begins.",
      },
      {
        title: "Learning Outcomes SIUUUU",
        items: ["learn the basics about HTML, CSS and JS"],
      },
    ],
  },
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
    source_code_link:
      "https://github.com/GohJerrill/Application-Database_Development_Project",
    modalSections: [
      {
        title: "Overview",
        content:
          "TP Vendings is a school project where it first introduced me to web applications with Database. We used a SQL database for this application along with HTMl, CSS and Javascript. I have also implemented CRUD operations for the admin user to Read, Create, Update and Delete.",
      },
      {
        title: "Features",
        items: [
          "Allows the Admin user to Create new vending Machine Items",
          "Allows the Admin user to Delete any Vending Machine Items",
          "Allows the Admin user to Update any Vending Machine Items",
        ],
      },
      {
        title: "Target Audience",
        content: "TP Vending Machine Vendors HEHEH",
      },
      {
        title: "Learning Outcome",
        items: [
          "Learned how Databases interact with the website frontend",
          "Learned the fundamentals of a SQL database like foreign Key and Primary Key",
        ],
      },
      {
        title: "Future Enhancements",
        items: ["Make the web application responsive"],
      },
    ],
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
    source_code_link: "https://github.com/GohJerrill/Cloud-AWS-Microservice",
    live_link: "https://www.youtube.com/watch?v=UjgwlVwT4qQ",
    modalSections: [
      {
        title: "Overview",
        content:
          "Many Temasek Polytechnic (TP) students are eager to support their favourite sport teams during competitions, however they often lack the necessary information to do so. Crowd support can make a huge difference to a team’s performance, yet students are frequently left to dig for information at the various CCA’s Instagram pages to find competition’s dates, venue or result which can be inconvenient and time consuming. Thus, I propose TP Unite (A cloud based web application using AWS), a centralise website that collates and display competition schedules and match details for TP Sports CCAs. The respective CCA admin in this website will populate and update the data on the platform for student's viewing.",
      },
      {
        title: "Features",
        items: [
          "View matches - Allows user to view the different matches, live, past or in the future",
          "Favourite CCA - Allows the user to favourite their CCA, to show support to their CCA.",
          "Predictions - When the user enters the match, he is able to make a prediction on which team will win",
          "Comments - When the user enters a match, they are able to leave comments to discuss with others about the game.",
          "Login for user - Using AWS Cognito, Users can login and use the application.",
        ],
      },
      {
        title: "Target Audience",
        content:
          "The primary target audience is TP Students; however, the platform also welcomes alumni, family members and supporters who wish to support their team.",
      },
      {
        title: "Learning Outcomes",
        items: [
          "First time touching AWS cloud solutions, learned a lot of the different services.",
          "First time being exposed to a NoSQL database, DynamoDB",
          "Learned Microservice Architecture",
        ],
      },
      {
        title: "Future Enhancements",
        items: [
          "Plan to make my application responsive",
          "Make the Favourite CCA feature better, by including favourite CCA at the top",
        ],
      },
      {
        title: "** Note ** ",
        content:
          "This Project was done in my School Learner lab for AWS, thus, the hosting is now not available.",
      },
    ],
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
    source_code_link: "https://github.com/GohJerrill/PROJECT-3-Flutter",
    live_link: "https://www.youtube.com/watch?v=kyqBEdcivK0",
    modalSections: [
      {
        title: "Overview",
        content:
          "To a build a greener and more sustainable future, Singapore have embraced 5 key pillars. One of these pillars City in Nature, aims to bring nature more deeply into urban life and protect the florae and fauna of Singapore. However, as Singapore continue to rapidly urbanize from a developing country to a metropolis, many of its rich natural biodiversity are being loss to steel and concrete. To address this, I have made an application that addresses both pillars called Nature Quest. It was designed for users to reconnect to the greener side in Singapore. By completing nature-based missions like visiting parks, spotting wildlife and participating in eco events, it will contribute to the growth of growing their very own virtual plant. This reinforces the user's role in building a greener future.",
      },
      {
        title: "Main Goals",
        items: [
          "Many Singaporeans are used to urban lifestyle and have grown distant from the natural environment. Thus, Nature Quest provides daily tasks and challenges for users to go to parks, nature reserves, go cycling and eco events.",
          "In the Nature Quest there are also small mini facts and explanations in the description of the challenges that the user is doing. This can educate and raise environment literacy to the users about Singapore's rich biodiversity and ways to be live more sustainably.",
          "Finally, the growth points earned by the user from completing the challenges will grow their virtual tree. This promotes connection and user engagement to the app.",
        ],
      },
      {
        title: "Target Audience",
        content:
          "People living in Singapore both young and old willing to make a difference environmentally in Singapore.",
      },
      {
        title: "Features",
        items: [
          "Login and Authentication - This allows the user to login using email/password, Google and Micosoft account. This is supported by Firebase Auth",
          "Challenges and challenges - Users can choose and challenge and upload a picture to complete the challenge to earn points.",
          "Virtual Trees - User is able to perform CRUD operations on this feature. Every tree has a max point and user must used earned points to sucessfully grow their plants,",
        ],
      },
      {
        title: "Learning Outcome",
        items: [
          "Learned Mobile Application Devlopment using Flutter and Dart",
          "Learned how to use Firebase Auth and Firebase.",
        ],
      },
      {
        title: "Future Enhancements",
        items: [
          "Improve the Challenge feature as there are some features require user geolocation.",
          "I plan to implement a notification feature, where it will remind users when their challenges run out of time.",
          "Lastly I plan to implement a badge feature in the app icon displaying all in progress challenges, reminding the user to complete them.",
        ],
      },
    ],
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
        content:
          "This application was done on a Innovation Learner Lab Account, thus the hosting is now not available.",
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
    source_code_link:
      "https://github.com/GohJerrill/ApplicationSecurity_Project",
    live_link: "https://www.youtube.com/watch?v=EkwccUEuSe8",
    modalSections: [
      {
        title: "Overview",
        content:
          "This is a security subject where I reused my old design from IIT Quest. The main goal of this project is learning application security specifically in Authentication and keeping our application redundant against threats stated in Owasp top 10.",
      },
      {
        title: "Features",
        items: [
          "Secure user login, user Mongo DB and JsonWebTokens",
          "Integrated Recaptcha for further security against bots",
          "To enhance security, I implemented Multi-Factor Authentication TOTP",
          "Implemented Account Log out if user fails mulitple times",
        ],
      },
    ],
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
    source_code_link:
      "https://github.com/GohJerrill/DEVOPS_Project_CineMEI-GohJerrill",
    modalSections: [
      {
        title: "Overview",
        content:
          "CineMEI is a movie management web application that enables user to view, organise, and manage their movie library. Its a group project where my team has implemented CRU Features. This Project ultimate aim was for us to explore the DevOps lifecycle and its tools with a simple html web application.",
      },
      {
        title: "Target Audience",
        content: "For users viewing, editing and deleting movies.",
      },
      {
        title: "Features",
        items: [
          "Use Jenkins to automate the CI/CD lifecycle",
          "Utlised Jest, Playwright, Postman/Newman, Mocha+Chai and Cypress for backend, API and frontend testing",
          "Leveraged Docker and Kubernetes/MiniKube for Deployment. Managed to implement Github Actions, Podman, and Azure Cloud Kubernetes for alternative CI/CD workflow.",
        ],
      },
      {
        title: "Learning Outcomes HEHEHE",
        items: [
          "Learned the main DevOps CI/CD worflow of Build, Test and Deploy.",
          "Familiarised myself with multiple DevOps tools",
        ],
      },
      {
        title: "Future Enhancements",
        items: ["Implement monitor feature using tools like Data Dog"],
      },
    ],
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
    live_link: "https://re8rqj.axshare.com",
    modalSections: [
      {
        title: "Overview",
        content:
          "Royal Harmony was a UI/UX project where we had to design a music app for users. This was my first experience in seeing how designing your application in a certain way can greatly impact the way a user navigates and uses your application. I did this project using Axure RP",
      },
      {
        title: "Features",
        items: [
          "Login and input name feature",
          "Elderly Friendly UI and youth UI",
          "Rewards and point system",
          "Save music to playlist",
          "Tik Tok like music feature",
        ],
      },
      {
        title: "Target Audience",
        content: "Youths and Elderly who love Music",
      },
      {
        title: "Learning Outcomes",
        items: [
          "Understand how a small design change can impact how users use your application",
          "How to craft a User persona",
          "How to craft a user Journey map",
          "How to craft a story Board",
          "How to craft usability testing",
          "Lo-fi and Hi-fi",
        ],
      },
    ],
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
    live_link:
      "https://www.figma.com/design/knn8b2R1Bphe0ugGvFqFVK/AGILE-Wireframe?node-id=0-1&t=jbtF11zVptlhHZkN-1",
    modalSections: [
      {
        title: "Overview",
        content:
          "This project was done for my Agile/SCRUM project. The Mobile application figma design name is TP Seatria. This applications main purpose to help Temasek Polytechnic students find comfortable and conducive study spaces. There are 3 problems that arises, first study areas that are popular often overcrowded, while lesser known study spaces are underutilize. 2nd problem students are not willing to search lesser known study spaces, and finally a lack of real time positive and negative information of a study space inhibits students to make smart decisions.",
      },
      {
        title: "Features",
        items: [
          "A map showing all the available study area in Temasek Polytechnic - This will show the different study areas to the users so that they can know which study area that they want to use, even those that are not visible to them.",
          "Finding the study area. - Based on the user's location, the application can help the user find the best rated and most convenient study space available. The user can also click on the different study spaces and find that specific study space. This can help them find the study spaces more convenient to them which improves user's experience.",
          "Rating on the study space - When the users click on the study spaces, the study space's positive and negative ratings will appear. This can help the student be more aware of the different study spaces limitations, like for example if a certain study space has no charger, than they should have their computers fully charged first and use that study space for a short while. This can also be a feedback to the school's facilities management for poorly rated study spaces",
          "Scanning for table - When the user has found their perfect study area to use, they scan the QR code available on the study area and use the table. Depending on the rarity of the study area they will get their reward points",
          "Redeeming rewards - The user can use their reward points to redeem rewards from the reward page. Rewards can be like $5 coupon for Western Stall in IIT canteen. $10 voucher for stationary vending machine in HSS. This gives the user incentives to explore and utilize all study spaces efficiently.",
        ],
      },
      {
        title: "Target Audience",
        content:
          "Temasek Polytechnic students finding it hard to search for studies spaces during peak exam periods.",
      },
      {
        title: "Learning Outcomes",
        items: [
          "Learnt crucial Agile Principles during software development",
          "Learned how to craft sprints, epic and backlogs",
          "Learned the MosCow prioritisation approach.",
          "The value of defintion of done",
        ],
      },
    ],
  },
];

export const personalProjects = [
  {
    name: "Peppers Quiz",
    description:
      "AWS powered web application for my Christian brothers in TP. Users login via a code, points are recorded and displayed on a leaderboard. Microservice Architecture.",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "API Gateway", color: "text-purple-300" },
      { name: "Lambda", color: "text-yellow-500" },
      { name: "DynamoDB", color: "text-blue-200" },
    ],
    image: PeppersQuiz,
    source_code_link: "https://github.com/GohJerrill/QuizBaby",
    modalSections: [
      {
        title: "Overview",
        content:
          "This website is for my brothers and sisters in Christ in Temasek Poly. Its a Biblical Quiz that is powered by AWS. It features login for users via a code, it also has a quiz section where the user can choose the correct answer for the different questions. Lastly it features a leaderboards to track who gets the most questions right!",
      },
      {
        title: "Features",
        items: [
          "Login using a code for users using Dynamo DB",
          "Quiz feature that updates in real-time using API Gateway, Dynamo DB and Lambda",
          "Leaderboard features",
          "Video of encouragement",
        ],
      },
      {
        title: "Learning Outcome",
        items: ["Reinforced my learning of using AWS"],
      },
    ],
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
    live_link:
      "https://www.figma.com/design/0BhGKWUCMqjtiJp3achVn5/API-Hackathon?node-id=0-1&t=xghjHOEIaD3cYacr-1",
    modalSections: [
      {
        title: "Overview",
        content:
          "Me and my teamates devloped this Figma idea for PolyFintech Hackathon 2025.",
      },
      {
        title: "Features",
        items: [
          "Split the Bill feature allowing NETS users to pay their own share when dining together.",
          "Challenges feature allows user to complete simple challenges to keep a streak for a chance to win prizes by spinning the wheel.",
          "Ai Fraud Detection to detect and fradulent transactions and inform the users about it",
          "Unlock and Earn allows user to share different discounts with each other to keep the trend of NETS",
        ],
      },
      {
        title: "Target Audience",
        content: "Anybody and Everybody HEHEHEH",
      },
      {
        title: "Learning Outcome",
        items: ["Going put cool stuff", "BRUH", "BRUH"],
      },
    ],
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
    source_code_link: "https://github.com/GohJerrill/Jerrill-Portfolio-Website",
    modalSections: [
      {
        title: "Overview",
        content:
          "WHATS UP TO THIS PROJECT MY BROTHERS AND SISTERS. This project took time, effort and a broken computer to complete. I hope you are able to learn more about me through this website. Interested to learn more about you! HEHEHE",
      },
      {
        title: "Features",
        items: [
          "Home displaying a computer 3D model using ThreeJS",
          "Tech Stack using Magic Ui Wheel",
          "Projects using React Framer Motion and Tilt",
          "Tech Stack using React Framer Motion",
          "Finally contact me page using React Framer Motion and Magic UI Globe",
        ],
      },
      {
        title: "Target Audience",
        content: "Anybody and Everybody HEHEHEH",
      },
      {
        title: "Learning Outcome",
        items: [
          "Learn how to implement 3D models in my web application using ThreejS",
          "Learned how to integrate Magic UI components",
          "Implemented TailWind CSS BABY!",
        ],
      },
    ],
  },
];
