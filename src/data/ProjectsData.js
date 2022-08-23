const fec = require('../media/fec.PNG')
const sdc = require('../media/sdc.PNG')

const projectData = [
  {
    title: 'fec',
    info: `Delivered a fully functional web application that met the specifications and requirements outlined by the project stakeholders\n\n• Refactored React components by removing repetitive code and maximizing the reusability of components, improving the Lighthouse performance score by 12 points\n• Worked on an agile team of four engineers and used Git and Trello to keep organized on a single codebase\n• Implemented unit and end-to-end testing using Jest/ React Testing Library framework`,
    img: fec,
    repo: 'https://github.com/TeamSnuggie/FEC',
  },
  {
    title: 'sdc',
    info: `Replaced legacy server/ API for an E-commerce web application with a MVC design pattern and PostgreSQL database\n• Used the ETL process on millions of rows of data and formatted the queries to return the same formatted data that needs to be received by the front end\n• Local stress tested server with K6 and stress tested deployed server on Loader.io\n• Horizontally scaled the application with multiple Amazon EC2 instances and added a NGINX load balancer to handle over 2000 RPS with a less than 1% error rate`,
    img: sdc,
    repo: 'https://github.com/TeamSnuggie/FEC',
  }
];

module.exports = { projectData }