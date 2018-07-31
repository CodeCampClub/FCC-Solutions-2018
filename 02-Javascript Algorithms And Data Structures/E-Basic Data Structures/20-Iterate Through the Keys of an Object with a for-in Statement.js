// Iterate Through the Keys of an Object with a for ... in Statement

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line
  let no = 0;
	for (let user in users) if (users[user].online) no++;
		return no;
  
  // change code above this line
}

console.log(countOnline(users));
