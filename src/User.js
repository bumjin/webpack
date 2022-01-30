import photo from './images/mungchi.jpg';
import styles from "./User.css"

export default function User({name}) {
    console.log(name)
    const  li = document.createElement('li');
    li.classList.add('user');
    li.addEventListener('click', () => {
        alert(name);
    });
    li.innerHTML = `<img src="${photo}" alt="${name}"/>${name}`;
    return li
}