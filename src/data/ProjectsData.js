const fec = require('../media/fec.PNG')
const sdc = require('../media/sdc.PNG')
const dbz = require('../media/dbz.PNG')

const projectData = [
  {
    title: 'fec',
    info: `Delivered a fully functional web application that met the specifications and requirements outlined by the project stakeholders`,
    img: fec,
    repo: 'https://github.com/TeamSnuggie/FEC',
  },
  {
    title: 'sdc',
    info: `Replaced legacy server/ API for an E-commerce web application with a MVC design pattern and PostgreSQL database`,
    img: sdc,
    repo: 'https://github.com/mrdooby/muppets',
  },
  {
    title: 'blue ocean',
    info: `Launched a mobile iOS application that allows users to trade plants with other plant lovers within a 150-mile radius`,
    img: dbz,
    repo: 'https://github.com/Blue-Ocean-DBZ/vegetationstation'
  }
];

module.exports = { projectData }