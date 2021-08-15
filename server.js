const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '19240821',
            'gender': '남자',
            'job': '떠돌이'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '화랑',
            'birthday': '19240821',
            'gender': '남자',
            'job': '어부'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '강남',
            'birthday': '19240821',
            'gender': '여자',
            'job': '부자'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));