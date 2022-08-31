const fec = require('../media/fec.PNG')
const sdc = require('../media/sdc.PNG')
const dbz = require('../media/dbz.PNG')

const projectData = [
  {
    title: 'Project Atelier',
    info: `Delivered a fully functional web application that met the specifications and requirements outlined by the project stakeholders\n• Refactored React components by removing repetitive code and maximizing the reusability of components, improving the Lighthouse performance score by 12 points\n• Worked on an agile team of four engineers and used Git and Trello to keep organized on a single codebase\n• Implemented unit and end-to-end testing using Jest/ React Testing Library framework`,
    img: fec,
    repo: 'https://github.com/TeamSnuggie/FEC',
  },
  {
    title: 'Soulful Backend',
    info: `Replaced legacy server/ API for an E-commerce web application with a MVC design pattern and PostgreSQL database\n• Used the ETL process on millions of rows of data and formatted the queries to return the same formatted data that needs to be received by the front end\n• Local stress tested server with K6 and stress tested deployed server on Loader.io\n• Horizontally scaled the application with multiple Amazon EC2 instances and added a NGINX load balancer to handle over 2000 RPS with a less than 1% error rate`,
    img: sdc,
    repo: 'https://github.com/mrdooby/muppets',
  },
  {
    title: 'Vegetation Station',
    info: `Launched a mobile iOS application that allows users to trade plants with other plant lovers within a 150-mile radius\n• Collaborated with a team of nine engineers to create the product starting from wireframing to presenting live working demos to the client\n• Created and connected React Native widgets and components in line with Test Driven Development best practices\n• Designed the profile page and chat messages components for our app\n• Connected our Express server to our PostgreSQL database to create schemas and write queries to feed relevant data into our application`,
    img: dbz,
    repo: 'https://github.com/Blue-Ocean-DBZ/vegetationstation'
  }
];

module.exports = { projectData }