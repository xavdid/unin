#! /usr/bin/env node
'use strict';

const fs = require('fs');
const rm = require('rimraf');

function delete_directory(path) {
  // use a default 
  path = path || 'bower_components';
  // console.log('path is',path);
  rm(`./${path}`, (err) => {
    if (err) {
      console.error(`Unable to clear ${path}`);
    }
    // done! 
  });
}

fs.access('.bowerrc', fs.F_OK | fs.R_OK, (err) => {
  if (err) {
    // bowerrc doesn't exist, use bower_components
    delete_directory();
  } else {
    fs.readFile('.bowerrc', (err, file) => {
      let data = JSON.parse(file);
      if (data.directory) {
        delete_directory(data.directory);
      } else {
        delete_directory();
      }
    });
  }
});
