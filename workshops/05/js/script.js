'use strict';
fetch('file.json')
  .then((res) => res.json())
  .then((info) => {
    for (let i = 0; i < info.length; i++) {
      console.log(info[i].student);
    }
  })
  .catch((err) => {
    console.log('error:', err);
  });
