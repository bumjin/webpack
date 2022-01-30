//import {add, hello} from './util';
import "./style.css";
import "./header.css";

//const text = hello('<h1>나는 누구게?</h1>');
//const num  = add(1, 2);
import logo from "./images/mungchi.jpg";
//import logo2 from "./images/coffee.jpg";
const img = `<img src="${logo}" alt="뭉치"/>`;
//const img2 = `<img src="${logo2}" alt="coffee"/>`;
import List from "./List";

const users = [
    {
        id: 1,
        name: '블랙 위도우',
    },
    {
        id: 2,
        name: '아이언맨',
    },
    {
        id: 3,
        name: '헐크',
    },
    {
        id: 4,
        name: '스파이더맨',
    },
    {
        id: 5,
        name: '캡틴 아메리카',
    }

]


//document.getElementById('root').innerHTML = img + text + num;
console.log(users)
document.getElementById('root').appendChild(List({userList: users}));