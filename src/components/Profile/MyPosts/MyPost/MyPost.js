import React from 'react';
import a from './MyPost.module.css';
const MyPost = () => {
    return <div>
        <div className={a.item}>
            <img src='https://i.pinimg.com/736x/ae/81/6e/ae816ed2690fe921067effb7d4dec532--fantasy-wolf-fantasy-art.jpg' alt='Фотография автора'/>
            <span>Сообщение от пользователя</span>
            <div>like 12</div>
        </div>
    </div>
};
export default MyPost;