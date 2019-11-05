const fs = require('fs');

const filePath = './counter.txt';

const params = {
  counter: 1,
  permissions: 0o777
};

const changeFilePermissions = (path, permissions) => {
  fs.chmod(path, permissions, error => {
    if (error) throw error;
  });
};

const writeToFile = (path, content) => {
  fs.writeFile(path, content, error => {
    if (error) process.exit(1);
  });
};

const changeFileContent = (path, data) => {
  const fileContent = parseInt(data, 10);
  if (Number.isFinite(fileContent)) {
    writeToFile(path, fileContent + 1);
  } else {
    process.exit(1);
  }
};

fs.access(filePath, error => {
  if (error) {
    writeToFile(filePath, params.counter);
    changeFilePermissions(filePath, params.permissions);
  } else {
    fs.readFile(filePath, (err, data) => {
      if (err) process.exit(1);
      else changeFileContent(filePath, data);
    });
  }
});
