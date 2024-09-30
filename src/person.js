import PropTypes from 'prop-types';

export const person = {
  basics: {
    name: 'Tao Zhou',
    label: 'Software Engineer (Scala | Akka | Cassandra | Mesos | Kafka | C# |Spark )',
    picture: './tao.jpg',
    // email: 'erlich@piedpiper.com',
    phone: '86 139 1750 ****',
    email:'scuipio33@gmail.com',
    website: 'https://wherby.github.io/',
    summary: '"enthusiastic about new tech : reactive, stream, monadic, actor, dynamic, fast data, cluster"',
    location: {
      address: ' ',
      postalCode: '200211',
      city: 'shanghai',
      countryCode: 'China',
      region: 'shanghai',
    },
    profiles: [
      {
        network: 'GitHub',
        username: 'wherby',
        url: 'https://github.com/wherby',
      },
      {
        network: 'Linkedin',
        username: 'tao-zhou',
        url: 'https://www.linkedin.com/in/tao-zhou-92102641/',
      },
      {
        network: 'Docs',
        username: 'docs',
        url: 'https://wherby.github.io/docs/',
      },
    ],
  },
  work: [
    {
      company: 'PwC',
      position: 'Senior Solution manager',
      website: '',
      startDate: '2018-07-09',
      endDate: '2024-07-31',
      summary: 'Technical Lead: Built high-performing technical teams from scratch at PwC.<br>\
      •	Scala and Play Framework Mentor: Empowered new hires to become proficient in the Scala technical stack with Play framework.<br>\
      •	AI Audit Tool Development: Leveraged OCR and NLP to create an innovative AI tool for assurance services.<br>\
      •	Digital Solution Leadership: Led teams in developing impactful digital solutions for Tax and Assurance businesses.<br>\
    Example Solution:<br>\
      •	Tax Solution: Contributed to the development of a digital tax solution (Link: https://digitalpfictesting.pwchk.com/en/home.html)<br>\
    Technical Expertise<br>\
      •	Distributed Job Management: Designed and built Doradilla, a distributed job management library on Akka Cluster, used in all PwC digital solutions to address high concurrency and resource management challenges (More information: https://wherby.github.io/doradilla/).<br>\
      •	Financial Data Management: Developed a robust solution to handle the processing',
      highlights: ["Scala", "Play", "ReactJS", "Slick", "Kubernate"],
    },
    {
      company: 'Oracle',
      position: 'Principal member of the technical staff',
      website: '',
      startDate: '2018-01-26',
      endDate: '2018-07-08',
      summary: 'Joined Oracle to develop a PaaS platform leveraging Docker technology.<br>\
      Designed and implemented a job management system for the PaaS platform using Java. ',
      highlights: ["Akka", "Java" ,"Docker", "ReactJS"],
    },
    {
      company: 'Develop for Hydra',
      position: 'Nonemployee',
      website: 'https://wherby.github.io/introduction-to-hydra/',
      startDate: '2017-09-01',
      endDate: '2018-01-01',
      summary: 'High Availability Container with Hydra <br>\
      •	Developed Hydra, a highly available container solution built on Akka Cluster.<br>\
      •	Hydra uses containerization for application deployment.<br>\
      •	In case of application crashes, Hydra detects the failure in a timely manner and automatically redeploys the application on a healthy node.<br>\
      •	Additionally, Hydra integrates with Akka Cluster to detect node failures.<br>\
      •	Upon detecting a node failure, Hydra seamlessly redeploys all affected applications to available nodes within the cluster.<br>\
      •	For more information on Hydra, please refer to: https://wherby.github.io/introduction-to-hydra/',
      highlights: ['HA container', 'Lambda Service', 'Akka Cluster'],
    },
    {
      company: 'Autodesk',
      position: 'Senior software developer for Autodesk',
      website: '',
      startDate: '2014-09-09',
      endDate: '2017-09-08',
      summary: 'Autodesk Cloud Platform <br>\
      •	Contributed to the development of SaaS software on Autodesk\'s cloud platform. <br>\
      •	Built front-end applications using AngularJS and Mosaic, and back-end services using Scala\'s Play framework and Cassandra database.<br>\
      •	Deployed applications on AWS, leveraging Autodesk\'s cloud collaboration and visualization services to process customer data.<br>\
      •	Developed a web portal using Spark for monitoring web services within the Kepler project.<br>\
      •	Created the core Derivative Service for Autodesk using Scala.<br>\
      •	Utilized a robust technology stack including Play, Akka, Spark, Mesos, Cassandra, Docker, Hadoop, AWS, and Jenkins.<br>\
', 
      highlights: ['Scala', 'Akka', "AngularJS", "Cloud service", "Aws" , "Cassandra"],
    },
    {
      company: 'EMC',
      position: 'Software Engineer for EMC solution integration (ESI)',
      website: '',
      startDate: '2011-09-09',
      endDate: '2014-08-20',
      summary: 'EMC - Software <br>\
      •	Self-Adaptive Automation Framework: Developed a novel, self-adaptive test automation framework using C# unit testing as a foundation. This framework could autonomously generate test cases based on target software modifications. Received second place at the EMC China COE QA Council Symposium 2012 for this innovation (Leveraged PowerShell and ScaleOut technologies).<br>\
      •	Test Process Optimization: Built a web-based platform to monitor and analyze project bug status, providing valuable insights through statistical reporting.<br>\
      •	VMware Integration Testing: Designed and implemented an automated test framework using Test Complete for VMware VSI FLEX integration testing.<br>\
      ', 
      highlights: ['C#', 'python', "Powershell", "Javascript", "Storage" , "Automation framework"],
    },
    {
      company: 'Wicresoft',
      position: 'Team owner',
      website: '',
      startDate: '2009-07-15',
      endDate: '2011-08-20',
      summary: 'Wicresoft - Microsoft PET3<br>\
      •	Joined Wicresoft as a vendor resource for Microsoft\'s PET3 group.<br>\
      •	Led a team responsible for Lync server testing as Project Owner.<br>\
      •	Implemented the Call Park service stack.<br>\
      •	Developed SIP/SDP stacks for Communicator using C#.<br>\
      •	Conducted protocol testing for audio/video transmission (RTP) and web authentication.<br>\
      ', 
      highlights: ['C#', 'Hyper-v', "Spec Explorer", "Powershell", "SharePoint" ],
    },
  ],
  education: [
    {
      institution: 'University of Electronic Science and Technology of China (UESTC)',
      area: 'Signal and Information Processing',
      studyType: 'Master of Science in Electronic Engineering',
      startDate: '2006-09',
      endDate: '2009-07',
      gpa: '3.9',
      courses: [
      ],
    },
    {
      institution: 'University of Electronic Science and Technology of China (UESTC)',
      area: 'Physical Electronics',
      studyType: 'Bachelor of Science in Physical Electronics',
      startDate: '2002-09',
      endDate: '2006-07',
      gpa: '3.5',
      courses: [
      ],
    },
  ],
  publications: [
    {
      name: 'Job manage system which will handle the job request in reactive way',
      publisher: '',
      releaseDate: '2022-10-1',
      website: 'https://wherby.github.io/doradilla/overview.html',
      summary: 'Introduction to doradilla, a distributed job management library on Akka Cluster, used in all PwC digital solutions to address high concurrency and resource management challenges',
    },
    {
      name: 'Using Akka Cluster to create HA container--- Introduction to Hydra',
      publisher: '',
      releaseDate: '2017-11-13',
      website: 'https://wherby.github.io/introduction-to-hydra/',
      summary: 'introduction to hydra',
    },
    {
      name: 'Create your own lambda service',
      publisher: '',
      releaseDate: '2018-02-21',
      website: 'Create your own lambda service -- introduction to Hydra 0.2.1',
      summary: 'How to create event driven service on distributed system',
    },
  ],
  skills: [
    {
      name: 'scala',
      level: '95',
      keywords: [
        'https\://wherby.github.io/tags/#scala',
        'Let\'s monadic the world',
        'future, map, flatmap, '
      ],
    },
    {
      name: 'akka',
      level: '97',
      keywords: [
      'akka is beautiful, so I create Hydra',
      'react to the message of the world',
      ],
    },
    {
      name: 'Web Development',
      level: '60',
      keywords: [ 'reactjs', 'angular'],
    },
    {
      name: 'python',
      level: '85',
      keywords: [
        "life is short",
      ],
    }
  ],
  references:[
    {
      name:'Leetcode',
      reference:'Leetcode profile: https://leetcode.cn/u/taoz-kc/',
      url:'./leetcode.png'
    },
    {
      name:'Hacker rank',
      reference:'Hacker rank profile: https://www.hackerrank.com/h187225577?hr_r=1',
      url:'./hackerrank.jpg'
    },
    {
    name:'Google AI chanllege 2010',
    reference:'The photo is the snap for rank list (rank 18 of more than 2400 competitors from all over the world) of the Google AI challenge 2010, but not the final result. May the information help to demonstrate my ability.',
    url:'./google.jpg'
  },
    

  ]
};

export const locationType = PropTypes.shape({
  address: PropTypes.string,
  postalCode: PropTypes.string,
  city: PropTypes.string,
  countryCode: PropTypes.string,
  region: PropTypes.string,
}).isRequired;

export const profileType = PropTypes.shape({
  network: PropTypes.string,
  username: PropTypes.string,
  url: PropTypes.string,
}).isRequired;

export const basicsType = PropTypes.shape({
  name: PropTypes.string,
  label: PropTypes.string,
  picture: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
  summary: PropTypes.string,
  location: PropTypes.shape(locationType),
  profiles: PropTypes.arrayOf(profileType),
}).isRequired;

export const workType = PropTypes.arrayOf(PropTypes.shape({
  company: PropTypes.string,
  position: PropTypes.string,
  website: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  summary: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const volunteerType = PropTypes.arrayOf(PropTypes.shape({
  organization: PropTypes.string,
  position: PropTypes.string,
  website: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  summary: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const educationType = PropTypes.arrayOf(PropTypes.shape({
  institution: PropTypes.string,
  area: PropTypes.string,
  studyType: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  gpa: PropTypes.string,
  courses: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const awardsType = PropTypes.arrayOf(PropTypes.shape({
  title: PropTypes.string,
  date: PropTypes.string,
  awarder: PropTypes.string,
  summary: PropTypes.string,
})).isRequired;

export const publicationsType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  publisher: PropTypes.string,
  releaseDate: PropTypes.string,
  website: PropTypes.string,
  summary: PropTypes.string,
})).isRequired;

export const skillsType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  level: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const languagesType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  level: PropTypes.string,
})).isRequired;

export const interestsType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const referencesType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  reference: PropTypes.string,
  url: PropTypes.string,
})).isRequired;

export const resumeType = PropTypes.shape({
  basics: basicsType,
  work: workType,
  volunteer: volunteerType,
  education: educationType,
  awards: awardsType,
  publications: publicationsType,
  skills: skillsType,
  languages: languagesType,
  interests: interestsType,
  references: referencesType,
});
