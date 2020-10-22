import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Хочу лето и тепло', like: 1},
            {id: 2, message: 'Люблю осеннюю погоду', like: 2}
        ]
    },
    dialogsPage: {
        dialogData: [
            {id: 1, name: 'Наталья'},
            {id: 2, name: 'Александр'}
        ],
        messagesData: [
            {id: 1, message: 'Привет'},
            {id: 2, message: 'Как дела?'}
        ],
    }
};
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.postData.push((newPost));
    rerenderEntireTree(state);
};

export default state;
