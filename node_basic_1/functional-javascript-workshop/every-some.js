function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(item => {
      return goodUsers.some(good => {
        return good.id === item.id;
      });
    });
  };
}

module.exports = checkUsersValid;
