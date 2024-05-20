const users = {};

function getUserData(username) {
  return users[username];
};

function isValid(username) {
  let isValid = true;
  isValid = !!username && username.trim();
  isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
  return isValid;
}

function addUser(username) {
  users[username] = {
    name: username,
    theme: 'light',
    color: 'black',
  };
};

function changeTheme(username) {
  if (users[username].theme == 'light') {
    users[username].theme = 'dark';
  } else {
    users[username].theme = 'light';
  }
};

module.exports = {
  isValid,
  getUserData,
  changeTheme,
  addUser,
};
