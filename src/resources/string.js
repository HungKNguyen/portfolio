const S = {
    TAB_BAR_LOGO : 'HungKNguyen',
    TAB_BAR_ITEM_1 : 'About',
    TAB_BAR_ITEM_2 : 'Skills',
    TAB_BAR_ITEM_3 : 'Experiences',
    TAB_BAR_ITEM_4 : 'Hire me',
    TAB_BAR_ITEM_5 : 'Resume',

    ABOUT_GREET : <span className="accent">Hello,</span>,
    ABOUT_GREET_NAME : <span className="accent-secondary">I'm Hung K. Nguyen</span> ,
    ABOUT_GREET_STATEMENT : <span>I am an aspiring <span className="accent">Software Developer</span> and
                            I like to write <span className="accent">code</span>.</span>,
    ABOUT_GREET_INTRO : <span className="secondary">Welcome to my little corner of the Internet.
                    I am an undergraduate at Lawrence University majoring in Computer Science and Economics.
                    I love to solve problems, write software for businesses, and educate others.
                    If you are hiring for a software engineering position, I would love to connect for an interview.</span>,

    LANGUAGES_TITLE : <span className="accent-secondary">Programming Languages that I worked with</span>,
    LANGUAGES_PROFICIENCY : "Proficiency: ",

    LANGUAGE_C_TITLE : "C",
    LANGUAGE_C_ICON : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    LANGUAGE_C_LEVEL : "<1 Year",
    LANGUAGE_C_TEXTS : ["Built web-sockets on Linux as part of university coursework",
        "Teaching at an undergraduate level at Lawrence University"],

    LANGUAGE_JAVA_TITLE : "Java",
    LANGUAGE_JAVA_ICON : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    LANGUAGE_JAVA_LEVEL : ">2 Years",
    LANGUAGE_JAVA_TEXTS : ["Built JavaFX applications and SpringBoot servers as part of university coursework",
        "Built Android application as part of university coursework",
        "Teaching at an undergraduate level at Lawrence University"],

    LANGUAGE_PYTHON_TITLE : "Python",
    LANGUAGE_PYTHON_ICON : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    LANGUAGE_PYTHON_LEVEL : ">3 Years",
    LANGUAGE_PYTHON_TEXTS : ["Self-taught during summer of freshmen year","Built neural networks with Keras/Tensorflow",
                            "Teaching at an undergraduate level at Lawrence University"],

    LANGUAGE_CPP_TITLE : "C++",
    LANGUAGE_CPP_ICON : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    LANGUAGE_CPP_LEVEL : ">1 Year",
    LANGUAGE_CPP_TEXTS : ["Benchmarked complex data structures and algorithms as part of university coursework",
        "Teaching at an undergraduate level at Lawrence University"],

    LANGUAGE_JS_TITLE : "JavaScript",
    LANGUAGE_JS_ICON : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    LANGUAGE_JS_LEVEL : ">2 Years",
    LANGUAGE_JS_TEXTS : ["Self-taught during summer of sophomore year",
        "Built React.js websites (including this one) and Node.js servers"],

    LANGUAGE_HTML_TITLE : "HTML",
    LANGUAGE_HTML_ICON : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    LANGUAGE_HTML_LEVEL : ">2 Years",
    LANGUAGE_HTML_TEXTS : ["Self-taught as a high school senior"],

    LANGUAGE_CSS_TITLE : "CSS",
    LANGUAGE_CSS_ICON : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    LANGUAGE_CSS_LEVEL : ">2 Years",
    LANGUAGE_CSS_TEXTS : ["Self-taught as a high school senior"],

    LANGUAGE_SWIFT_TITLE : "Swift",
    LANGUAGE_SWIFT_ICON : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    LANGUAGE_SWIFT_LEVEL : "<1 Year",
    LANGUAGE_SWIFT_TEXTS : ["Built IOS applications as part of university coursework"],

    LANGUAGE_CS_TITLE : "C#",
    LANGUAGE_CS_ICON : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    LANGUAGE_CS_LEVEL : ">1 Year",
    LANGUAGE_CS_TEXTS : ["Self-taught during junior year",
                        "Taught at a high school level for a summer internship at iD Tech",
                        "Built Virtual Reality projects using Unity3D"],

    LANGUAGE_R_TITLE : "R",
    LANGUAGE_R_ICON : "https://www.r-project.org/logo/Rlogo.svg",
    LANGUAGE_R_LEVEL : ">2 Year",
    LANGUAGE_R_TEXTS : ["Built machine learning models as part of university coursework",
                        "Provide consultation for STEM research undergrads at Lawrence University"],

    TECH_TITLE: <span className="accent-secondary">Technologies that I worked with</span>,

    TECH_FRONTEND_TITLE : "Front End Web Dev",
    TECH_FRONTEND_ICONS : ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"],
    TECH_FRONTEND_TEXT : "I love to build beautiful websites using React.js and HTML/CSS for customization",

    TECH_BACKEND_TITLE : "Back End Servers",
    TECH_BACKEND_ICONS : ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
                            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg"],
    TECH_BACKEND_TEXT : "I am experienced in building web servers using Node.js/Express.js as well as SpringBoot." +
        " I have used Heroku in the past to deploy servers",

    TECH_MOBILE_TITLE : "Mobile Development",
    TECH_MOBILE_ICONS : ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"],
    TECH_MOBILE_TEXT : "I also built mobile application on IOS and Android platforms",

    TECH_VS_TITLE : "Version Control",
    TECH_VS_ICONS : ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"],
    TECH_VS_TEXT : "To manage my workflow and publish codes, I utilize Git and GitHub (this project included)",

    TECH_DB_TITLE : "Databases",
    TECH_DB_ICONS : ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"],
    TECH_DB_TEXT : "I have used MySQL and MongoDB to store application data for the backend",

    TECH_OS_TITLE : "Operating System",
    TECH_OS_ICONS : ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"],
    TECH_OS_TEXT : "I am familiar with most common operating systems including Windows, MacOS, and Linux (Ubuntu distro)",

    TECH_IDE_TITLE : "IDEs",
    TECH_IDE_ICONS : ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg"],
    TECH_IDE_TEXT : "As I code with more languages, I am flexible with various IDEs, including VS Code, Visual Studio, " +
        "JetBrains' IDEs, and XCode",

    TECH_OFFICE_TITLE : "Office Softwares",
    TECH_OFFICE_ICONS : ["https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"],
    TECH_OFFICE_TEXT : "Before I was a programmer, I was a tech savvy person. I am familiar with productivity software from" +
        "Microsoft and Google (especially Excel and Sheets)",

    TECH_RDEV_TITLE : "R Development",
    TECH_RDEV_ICONS : ["https://raw.githubusercontent.com/rstudio/hex-stickers/master/SVG/RStudio.svg",
        "https://raw.githubusercontent.com/rstudio/hex-stickers/master/SVG/shiny.svg",
        "https://raw.githubusercontent.com/rstudio/hex-stickers/master/SVG/rmarkdown.svg",
        "https://raw.githubusercontent.com/rstudio/hex-stickers/master/SVG/tidyverse.svg"],
    TECH_RDEV_TEXT : "For data analysis and machine learning, my go-to tech stack is R Markdown for document reports and R Shiny for" +
        "interactive web app reports",

    TECH_DOCKER_TITLE : "Docker",
    TECH_DOCKER_ICONS : ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg"],
    TECH_DOCKER_TEXT : "I have used Docker for virtualization in order to build Linux web sockets ",

    TECH_UNITY3D_TITLE : "Unity3D",
    TECH_UNITY3D_ICONS : ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"],
    TECH_UNITY3D_TEXT : "I have used Unity3D to build Virtual Reality applications",

    WORK_TITLE : <span className="accent-secondary">Work experience I got</span>,

    WORK_LU_INSTITUTION : <span className="accent-secondary">Lawrence University</span>,
    WORK_LU_TITLE : "Teaching Assistant",
    WORK_LU_LOCATION : "Appleton, WI",
    WORK_LU_DATE : "Jan 2022 - Present",
    WORK_LU_TEXTS : [<span><span className="accent">Tutoring</span> 60+ computer science and economics undergrads each term on <span className="accent">OOP</span>, <span className="accent">Data Structures and Algorithms</span>, and <span className="accent">Software Development</span></span>,
        <span>Managing 20+ undergrad <span className="accent">consultations</span> from different fields of study on Data Visualization Techniques, Data Analysis and Interpretation, <span className="accent">R programming</span>, and deploying <span className="accent">Git/GitHub</span> for version control</span>,
        <span><span className="accent">Troubleshooting</span> and <span className="accent">debugging</span> students' homework, proctoring exams, brainstorming assignments, and conducting extra classes to reinforce knowledge for an average of 20 hours per week</span>,
        <span><span className="accent">Boost</span> an average of <span className="accent">20%</span> of students' <span className="accent">GPA</span>, <span className="accent">reduce</span> students troubleshooting and debugging <span className="accent">time</span> by <span className="accent">66%</span></span>
    ],

    WORK_ID_INSTITUTION : <span className="accent-secondary">ID Tech Camp</span>,
    WORK_ID_TITLE : "Computer Science Instructor",
    WORK_ID_LOCATION : "Lake Forest, IL",
    WORK_ID_DATE : "Jun 2022 - Aug 2022",
    WORK_ID_TEXTS : [<span>Taught 70 high school students on advance programming: <span className="accent">AI</span>, <span className="accent">Cryptography/Blockchain</span>, <span className="accent">Game Development</span></span>,
        <span>Built 10 <span className="accent">Python</span> applications, 5 neural networks using <span className="accent">Keras/TensorFlow</span>, and 2 <span className="accent">Unity3D</span> projects for <span className="accent">Virtual Reality</span> development</span>,
        <span><span className="accent">Contributed</span> codes and recommended new ideas to improve curriculums on 3 company's forums</span>
    ],

    PROJECT_TITLE : <span className="accent-secondary">Did I mention that I like to code</span>,
    PROJECT_BADGE : "Project",

    PROJECT_PORTFOLIO_TITLE : <span className="accent-secondary">Portfolio Page</span>,
    PROJECT_PORTFOLIO_TEXT : "For the longest time, I have wanted my own website to showcase my skills as well as demonstrating my web development skills. So finally here it is, my portfolio website.",
    PROJECT_PORTFOLIO_KEY_WORDS : "React.js, HTML, CSS, Portfolio",
    PROJECT_PORTFOLIO_GITHUB_LINK : "https://github.com/HungKNguyen/portfolio",

    PROJECT_MINE_TITLE : <span className="accent-secondary">Minesweeper solver</span>,
    PROJECT_MINE_TEXT : "I made this project while teaching myself Python. " +
        "I used Pygame to remake the game and as an added bonus implemented an AI solver to play the game automatically",
    PROJECT_MINE_KEY_WORDS : "Python, Pygame, AI",
    PROJECT_MINE_GITHUB_LINK : "https://github.com/HungKNguyen/MineSweeperCloneAndAISolver",

    PROJECT_RESEARCH_TITLE : <span className="accent-secondary">COVID Research</span>,
    PROJECT_RESEARCH_TEXT : "This is part of my advanced econometrics coursework." +
        " I built a lagged first difference model to measure the effectiveness of COVID non-pharmaceutical interventions using R",
    PROJECT_RESEARCH_KEY_WORDS : "R Markdown, Tidyverse, Data Analysis, Research",
    PROJECT_RESEARCH_GITHUB_LINK : "https://github.com/HungKNguyen/COVIDNPIs",

    PROJECT_EBOOK_TITLE : <span className="accent-secondary">Mock EBook Website</span>,
    PROJECT_EBOOK_TEXT : "My first website, following a Coursera class on Fullstack web development." +
        " This website mocks a EBook selling service, with MongoDB database, Express.js/Node.js back-end, and React.js front-end." +
        " In addition, this website uses local-authentication and Facebook/Google OAuth2.0." +
        " The site is deployed using Heroku (this project will go offline on Nov 28th)",
    PROJECT_EBOOK_KEY_WORDS : "MERN Stack, OAuth2.0, Fullstack",
    PROJECT_EBOOK_GITHUB_LINK : "https://github.com/HungKNguyen/EBookVendorBackend",


    EDU_TITLE : <span className="accent-secondary">My education</span>,
    EDU_UNIVERSITY : "Lawrence University",
    EDU_DEGREE : "BA in Computer Science and Economics",
    EDU_GRADUATING : "June 2023",
    EDU_GPA : "3.99 GPA | 4.0 Major GPA",
    EDU_ACHIEVEMENT : ["Philip & Rosemary Wiley Bradley Achievement Scholarship in Economics",
        "Dean's List, International Student Scholarship & Grant",
        "Relevant Coursework: Software Development, System Programming, IOS/Android Development, Web Development, Objected Oriented Programming Design, Data Structure and Algorithms, Machine Learning,\n" +
        "Artificial Intelligence"],
    EDU_MERIT_LINK : "https://meritpages.com/hungknguyen",

    HIRING_TITLE : <span className="accent-secondary">Let's work together</span>,
    HIRING_TEXT : <span>
        <span>I am currently looking for a <span className="accent">junior software developer</span> position,</span>
        <span> in the fields of <span className="accent">Web Development</span> and <span className="accent">Mobile Development. </span></span>
        <span>If you are hiring for such position and interested in my skills, I would love to chat. </span>
        <span>I can be reached via email at <span className="accent">hung.k.nguyen@lawrence.edu.</span></span>
                    </span>,

    FOOTER_TITLE : <span className="accent-secondary">Designed and Built by Hung Nguyen</span>,
}

export default S;
