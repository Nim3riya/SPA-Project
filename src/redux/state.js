const store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Хочу лето и тепло', like: 1},
                {id: 2, message: 'Люблю осеннюю погоду', like: 2}
            ],
            newTextPost: 'Введите текст'
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
    },
    _callSubscriber() {
        console.log()
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newTextPost,
            likesCount: 0
        };
        this._state.profilePage.postData.push((newPost));
        this._state.profilePage.newTextPost = '';
        this._callSubscriber(this._state);
    },
    updateText(newText) {
        this._state.profilePage.newTextPost = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    }
};

window.store = store;
export default store;
