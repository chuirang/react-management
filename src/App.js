import React from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [{
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
]

function App() {
  return (
    <div>
      {
        customers.map(c=>{
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;