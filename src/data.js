export const config = {
  portfolio: {
    portfolioLogo: 'Portfolio',
    projectCard: {
      cards: [
        {
          heading: 'Sensor Monitoring System',
          description:
            'I have created this project to minimzise this risk of fire hazards. This website helps us to monitor real time data various sensors for example: MQ2 Gas sensor and DHT11 Temperature and Humidity sensor.',
          animationDelay: '300',
          buttonLink: 'https://sensor-monitor.netlify.app/',
          buttonText: 'CHECK OUT',
        },
        {
          heading: 'Codemmit',
          description:
            'Building blog website for posting content related to frontend development',
          animationDelay: '500',
          buttonLink: 'https://codemmit.netlify.app/',
          buttonText: 'CHECK OUT',
        },
        {
          heading: 'DigiShop',
          description: 'React Native shopping app.',
          animationDelay: '700',
          buttonText: 'CHECK OUT',
        },
        {
          heading: 'TextUtils',
          description:
            'Simple React.js website helpful to perform various operations on text',
          animationDelay: '900',
          buttonText: 'CHECK OUT',
        },
        {
          heading: 'Under Construction',
          description: '</>',
          animationDelay: '1100',
          buttonText: '',
        },
        // {
        //   heading: "Prima Fuel",
        //   description:
        //     "I have created this project to minimzise this risk of fire hazards",
        //   animationDelay: "1300",
        //   buttonText: "CHECK OUT",
        // },
      ],
    },
    internships: {
      internship: [
        {
          companyName: 'Dyeus',
          role: 'Front-end Developer',
          introText: '',
          duration: '29/03/2022 - 29/05/2022',
          keyPointOne: 'Developing front-end of multiple website using ReactJS',
          keyPointTwo:
            'Learned Liquid template language and built new sections in shopify store',
          keyPointThree: 'Built new user-facing features and reusable code',
          keyPointFour:
            'Followed best practices, conventions and instruction provided by the company to deliver high quality code',
          offsetValue: '0',
        },
        {
          companyName: 'ONGC',
          role: 'Industrial Trainee',
          introText: '',
          duration: '14/06/2021 - 14/07/2021',
          keyPointOne: 'Undergone Virtual Industrial Training',
          keyPointTwo: 'Learned to code Arduino and NodeMCU ESP8266',
          keyPointThree:
            'Created an IoT project which is very helpful for minimizing fire hazards',
          keyPointFour:
            'Built an website which shows real-time data of various sensors like MQ2 Gas Senor and DHT11 Temperature and Humidity sensor',
          offsetValue: '-1000',
        },
        {
          companyName: 'Clear Exam',
          role: 'HTML Developer',
          introText: '',
          duration: '10/09/2020 - 10/11/2020',
          keyPointOne:
            'Worked in a team to develop quizzes using HTML, CSS and JavaScript',
          keyPointTwo: '',
          keyPointThree: '',
          keyPointFour: '',
          offsetValue: '-1000',
        },
      ],
    },
  },
  portfolio2: {
    brandName: 'Brand Two',
    location: 'Online Store',
    metas: [
      {
        name: 'description',
        content: 'This is Brand Two',
      },
    ],
  },
  portfolio3: {
    brandName: 'Brand Three',
    location: 'Online Store',
    metas: [
      {
        name: 'description',
        content: 'This is Brand Three',
      },
    ],
  },
};

export default config;
