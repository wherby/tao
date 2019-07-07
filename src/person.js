import PropTypes from 'prop-types';

export const person = {
  basics: {
    name: 'Tao Zhou',
    label: 'Software Engineer (Scala | Akka | Cassandra | Mesos | Kafka | C# |Spark )',
    picture: './tao.jpg',
    // email: 'erlich@piedpiper.com',
    phone: '86 139 1750 ****',
    website: 'https://wherby.github.io/',
    summary: '"enthusiastic about new tech : reactive, stream, monadic, actor, dynamic, fast data, cluster, "',
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
    ],
  },
  work: [
    {
      company: 'PwC',
      position: 'Senior Solution Specialist',
      website: '',
      startDate: '2018-07-09',
      endDate: 'present',
      summary: 'Join PwC Digtal Solution team, setup Scala based development team from zero,\
        lead the development for PFIC project',
      highlights: ["Scala", "Play", "ReactJS", "Slick", "Kubernate"],
    },
    {
      company: 'Oracle',
      position: 'Principal member of the technical staff',
      website: '',
      startDate: '2018-01-26',
      endDate: '2018-07-08',
      summary: ' ',
      highlights: ["Akka", "Java" ,"Docker", "ReactJS"],
    },
    {
      company: 'Develop for Hydra',
      position: 'Nonemployee',
      website: 'https://wherby.github.io/introduction-to-hydra/',
      startDate: '2017-09-01',
      endDate: '2018-01-01',
      summary: 'Create a High available container based on Akka Cluster, which will detect the failure in consistent time. The Hydra Cluster is based on Akka Cluster,\
       which is use a container to deploy application: If the application crash, the container will report to Hydra, Hydra will redeploy the application to another node.\
        If the node fails, then the Akka Cluster will detect the node failure and then report the failure to Hydra, then Hydra will redeploy the apps on the node to other nodes.\
        \r \
        Use the Hydra to create Lambda service.  https://wherby.github.io/create-lambda-service/',
      highlights: ['HA container', 'Lambda Service', 'Akka Cluster'],
    },
    {
      company: 'Autodesk',
      position: 'Senior software developer for Autodesk',
      website: '',
      startDate: '2014-09-09',
      endDate: '2017-09-08',
      summary: 'Using AngularJS and Mosaic web framework as frontend and using Play framework of Scala (Function program language running on JVM) with Cassandra as backend. \
       The platform which is using cloud collaboration and visualization service of Autodesk is deployed on AWS and processing data from Autodesk customers.\
       \r\
Develop web portal using Spark for web services monitor in Kepler project.\r\
Develop core service (Derivative Service) of Autodesk using Scala.\
', 
      highlights: ['Scala', 'Akka', "AngularJS", "Cloud service", "Aws" , "Cassandra"],
    },
    {
      company: 'EMC',
      position: 'Software Engineer for EMC solution integration (ESI)',
      website: '',
      startDate: '2011-09-09',
      endDate: '2014-08-20',
      summary: '2009.07—2010.11 work as a RS member and RS reviewer for code review for the team members. Test the Web Service protocol of workflow and info path for Microsoft SharePoint. \r\
                2010.11—2011.03 work as a Stack member for Lync Server testing, using C# language to implement SIP/SDP stack of Communicator, \
                test protocol for audio/video transmission using RTP and protocol for web authentication \r\
                  2011.03 –2011.09 work as a Project Owner to manage a team for Lync server testing, implement the stack of Call park service.\
      ', 
      highlights: ['C#', 'python', "Powershell", "Javascript", "Storage" , "Automation framework"],
    },
    {
      company: 'Wicresoft',
      position: 'Team owner',
      website: '',
      startDate: '2009-07-15',
      endDate: '2011-08-20',
      summary: 'Develop a new automation test framework which could self-adapting to the target software modification and the framework will auto-generate test cases for the target software. \
      The test framework based on Unit test of C#, and there are many components which designed by me: \r\
      Monitor which will auto-generate class for test object (Powershell cmdlet) \r\
      Case generator which will generate test cases for test object\r\
      Test driver which will automatically deploy test suit and publish test result\r\
       Result web portal which will display test result of each test round\r\
       Log analyze tool which for test result analyze\r\
       And the paper for the framework wins the second prize of EMC China COE QA Council Symposium 2012 (See Powershell,  ScaleOut  ).\r\
        The paper for the web portal win the third prize of EMC China COE QA Council Symposium 2013.\
          Develop a web site to monitor the project bug status. Generate statistic views for project.\
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
