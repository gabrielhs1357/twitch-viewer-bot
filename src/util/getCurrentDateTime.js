const moment = require('moment-timezone');

module.exports = () => {
  const date = `${moment().tz('America/Sao_Paulo').format('DD/MM/YYYY')}`;
  const time = `${moment().tz('America/Sao_Paulo').format('HH:mm')}`;

  return (`[${date} - ${time}]`);
};
