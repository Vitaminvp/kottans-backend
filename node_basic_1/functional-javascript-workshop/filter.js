const getShortMessages = messages =>
  messages
      .reduce((acc, cur) => [...acc, cur.message], [])
      .filter(message => message.length < 50);


module.exports = getShortMessages;
