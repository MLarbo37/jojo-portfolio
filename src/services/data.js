import { Category } from '@mui/icons-material'

export const portfolioData = [
    {
        projectName: 'Church Management System',
        projectDescription: 'The church management system is designed to streamline administrative tasks, enhance member engagement, and facilitate efficient communication within the church community.',
        projectDate: 'March, 2022',
        role: 'Associate Product Manager',
       img: require('../asset/ChMS/chms-cover.png'),
        link: '/portfolio/amalifair'
    },
    {
        projectName: 'Enterprise Resource Planning & Management System',
        projectDescription: 'The project involves developing an Enterprise Resource Planning & Management System to streamline and integrate core business processes for enhanced efficiency and decision-making within the company.',
        projectDate: 'March, 2022',
        role: 'Associate Product Manager',
       img: require('../asset/ERPMS/erpms-cover1.png'),
        link: '/portfolio/amalifair'
    },
    {
        projectName: 'Clock-IT - Time logging application',
        projectDescription: 'The project aims to create a Clock-it system that enables employees to efficiently log and track their working hours for accurate time management and reporting.',
        projectDate: 'March, 2022',
        role: 'Associate Product Manager',
       img: require('../asset/ARMS-Clock-IT/clock-it-cover.png'),
        link: '/portfolio/amalifair'
    },
    {
        projectName: 'Resource Management System - Staffing & Utilization',
        projectDescription: 'The project focuses on developing a Resource Management System to optimize staffing and utilization processes, enabling the staffing team to effectively manage and deploy their workforce.',
        projectDate: 'March, 2022',
        role: 'Associate Product Manager',
       img: require('../asset/ARMS-RES/res-cover.png'),
        link: '/portfolio/amalifair'
    },
    {
        projectName: 'ARMS - Amalitech Resource Management System (Micro application & services)',
        projectDescription: "The project involves transforming the Amalitech Resource Management System (ARMS) into a microservice application to enhance scalability and support the company's expanding operations.",
        projectDate: 'March, 2022',
        role: 'Associate Product Manager',
       img: require('../asset/ARMS-MicroService/arms-microservice-cover.png'),
        link: '/portfolio/amalifair'
    },
        {
            projectName: 'ARMS - Amalitech Resource Management System',
            projectDescription: 'ARMS is an application that is designed to aid organizations manage their day-to-day business processes as well as store and manage data. ',
            projectDate: 'March, 2022',
            role: 'Associate Product Manager',
           img: require('../asset/arms.png'),
            link: '/portfolio/amalifair'
        },
        //  {
        //     projectName: 'Virtual Event Platform - Amalifair',
        //     projectDescription: 'Amalifair is a web based platform that allows businesses and individuals to host and attend live events and network. This platform has auditoriums for live conference sessions, exhibition halls and a chat section for networking.',
        //     projectDate: 'March, 2021',
        //      role: 'Associate- Product Owner',
        //     img: require('../asset/emptyProject.png'),
        //     link: '/portfolio/amalifair'
        // },
        {
            projectName: 'Virtual Event Platform - 3D Modelled Event Platform',
            projectDescription: 'The project involves creating a 3D modelled Virtual Event Platform to host virtual events, featuring a conference section for webinars, an exhibition hall with booths, and a networking lounge.',
            projectDate: 'September, 2020',
            role: 'Junior Associate- Product Owner/ Tester',
            img: require('../asset/virtuali1.png'),
            // link: '/portfolio/amalifair'
        },
         {
            projectName: 'IIOT Test Bench',
            projectDescription: 'The IIoT testbench is a web-based application that is designed to simulate the use of an IIoT message broker in  productive use. ',
            projectDate: 'March, 2020',
             role: 'Business Analyst',
            img: require('../asset/iiot.jpg'),
            // link: '/portfolio/amalifair'
        }
]

export const personalInformation = {
    description: <>Dynamic and results-driven Product Manager with over four years of experience in managing and developing ERP 
    systems. Proven track record in leading cross-functional teams, optimizing product strategies, and driving product 
    lifecycle from inception to launch. Adept at leveraging technical and analytical skills to deliver high-quality products 
    that meet market demands and business objectives. Committed to fostering innovation, enhancing user experience, and 
    achieving operational excellence.</>,
    firstName: 'Jojo',
    lastName: 'Abbiw',
    from: 'Accra, Ghana',
    email: 'abbiwjojo22@gmail.com',
    phone: '(+233)248651322',
    language: 'English',
    img: "https://res.cloudinary.com/akwaah/image/upload/v1723485699/memeem2_hcxpa2.png"
};

export const educationInformation = {
    title: 'Education',
    info: [
      {
      startDate: "September 2021",
      endDate: "To Date",
      institution: "Coursera",
      programme: "SOFTWARE PRODUCT MANAGEMENT",
      description:
        "Through this programme, I mastered Agile software management practices to lead a team of developers and interact with clients.",
    },
    {
      startDate: "August 2017",
      endDate: "November 2019",
      institution: "Kwame Nkrumah University of Science and Tech.",
      programme: "MBA - MANAGEMENT INFORMATION SYSTEM",
      description:
        "This degree program taught me how to integrate information and communication technology tools with business processes to solve contemporary challenges.",
    },
    {
      startDate: "June 2021",
      endDate: "To Date",
      institution: "University of Ghana",
      programme: "BA Philosophy ",
      description:
        "With this programme, I was able to build marketable communication, decision making, logic, and reasoning skills. ",
    }
    ]
};

export const experienceInformation = {
    title: 'Experience',
    info: [
      {
        startDate: "January 2021",
        endDate: "To Date",
        institution: "AmaliTech",
        programme: "Product Manager",
        description:
        <div className="group">
        <p>
        As a product manager, I guide the development of a product from concept to launch, ensuring it meets customer needs and aligns with our business goals.
        </p>
        <span className="hidden group-hover:inline">
        I collaborate closely with cross-functional teams to define the product vision, strategy, and roadmap, balancing both customer satisfaction and our business objectives.
        </span>
      </div>
      },
    {
      startDate: "January 2021",
      endDate: "To Date",
      institution: "AmaliTech",
      programme: "Product Owner",
      description:
      <div className="group">
      <p>
      As a product owner, my primary role is to define and prioritize the product backlog, ensuring that the most valuable features are delivered to the customers.
      </p>
      <span className="hidden group-hover:inline">
      I work closely with the development team to clarify requirements, provide feedback, and ensure the product meets the desired outcomes.
      </span>
    </div>,
    },
    {
      startDate: "March 2021",
      endDate: "To Date",
      institution: "AmaliTech",
      programme: "Web Developer",
      description:
      <div className="group">
          <p>
          As a web engineer, my primary role is to design, develop, and maintain web applications that are both functional and user-friendly.
          </p>
          <span className="hidden group-hover:inline">
          I focus on writing clean, efficient code and collaborating with other developers and designers to ensure the website performs optimally and meets project requirements.
          </span>
      </div>,
    },
    {
      startDate: "June 2021",
      endDate: "To Date",
      institution: "AmaliTech",
      programme: "Quality Assurance Analyst ",
      description:
      <div className="group">
      <p>
      As a Quality Assurance Analyst, my primary role is to test and evaluate software applications to ensure they meet quality standards and function correctly.
      </p>
      <span className="hidden group-hover:inline">
      I identify and document defects, work with development teams to resolve issues, and verify that the final product delivers a seamless user experience.
      </span>
    </div>,
    }
    ]
};

// export const designSkillInformation = {
//     firstWord: 'Product Management',
//     secondWord: 'Skills',
//     info: [
//         { skill: 'Strategy Development', level: 55 },
//         { skill: 'Project Planning', level: 60 },
//         { skill: 'Product Discovery', level: 65 },
//         { skill: 'Product Development', level: 75 }
//     ]
// };

// export const codingSkillInformation = {
//     firstWord: 'Coding',
//     secondWord: 'Skills',
//     info: [
//         { skill: 'React', level: 80 },
//         { skill: 'Vue', level: 85 },
//         { skill: 'HTML', level: 95 },
//         { skill: 'CSS', level: 90 },
//         { skill: 'JavaScript', level: 70 }
//     ]
// };

// export const WorkProcessInformation = [
//     {
//         icon: <Search sx={{ fontSize: 70 }} className="App-logo"/>,
//         service: 'Research',
//         description: 'Understand the problem, empathize with the person. Explore the competitive landscape. Identify strategic opportunities. Define design goals and requirements.',
//         step:'One'
//     },
//     {
//         icon: <DesignServices sx={{ fontSize: 70 }} className="App-logo"/>,
//         service: 'Design',
//         description: 'Combine effective interfaces, smart interactions, and consistent visual language into a captivating design that resonates with the target audience.',
//         step:'Two'
//     },
//     {
//         icon: <Code sx={{ fontSize: 70 }} className="App-logo"/>,
//         service: 'Build',
//         description: 'Map design to code. Smooth constraints. Solve edge cases. Move that button 3 pixels to the left. Fill the gap between functional and delightful.',
//         step:'Three'
//     },
//     {
//         icon: <Repeat sx={{ fontSize: 70 }} className="App-logo"/>,
//         service: 'Refine',
//         description: 'Test prototypes with real people against actual problems. Combine insights with gut intuition and experience. Iterate and improve in pursuit of perfection.',
//         step:'Four'
//     }
// ];

// export const servicesInformation = [
//     {
//         icon: <AccountTreeRounded fontSize="large" className="App-logo"/>,
//         service: 'Product Management',
//         description: "Guides every step of a product's life cycle - from development to positioning and pricing."
//     },
//     {
//         icon: <TerminalRounded fontSize="large" className="App-logo"/>,
//         service: 'Web App Development',
//         description: "Create and maintain websites as well as handle the site's technical aspect- performance & capacity."
//     }
// ];

// export const TestimonialInformation = [
//     {
//         img: 'https://avstechnolabs.com/Themeforest/Gaspar/01/Dark/assets/images/profile/wrap.jpg',
//         testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur, optio dolores aliquid ',
//         rate: 4
//     },
//     {
//         img: 'https://avstechnolabs.com/Themeforest/Gaspar/01/Dark/assets/images/profile/glitch.jpg',
//         testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur, optio dolores aliquid ',
//         rate: 5
//     },
//     {
//         img: 'https://avstechnolabs.com/Themeforest/Gaspar/01/Dark/assets/images/profile/partical.jpg',
//         testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur, optio dolores aliquid ',
//         rate: 3
//     }
// ];
    
export const blogsDetails = {
    title: 'How A Busy Mom Lost 9 Pounds Of Fat In 30 Days',
    img: 'https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512',
    body: <div>
        <strong>What is Lorem Ipsum?</strong>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <strong>Why do we use it?</strong>
        <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </div>,
    date: 'March 24, 2022',
    category: 'Product Management',
    author: {
        image: '',
        name: 'Mikky Michaels'
    }
}