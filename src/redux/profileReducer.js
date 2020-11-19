const ADD_POST = 'profile/ADD-POST';
const UPDATE_TEXT = 'profile/UPDATE-TEXT';

let initialState = {
    postData: [
        {id: 1, message: 'Хочу лето и тепло', like: 1},
        {id: 2, message: 'Люблю осеннюю погоду', like: 2}
    ],
    newTextPost: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newTextPost,
                likesCount: 0
            };
            state.postData.push((newPost));
            state.newTextPost = '';
            return state;
        case UPDATE_TEXT:
            state.newTextPost = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostAC = () => ({type: ADD_POST});
export const updateTextAC = (text) => ({
    type: UPDATE_TEXT, newText: text
});

export default profileReducer;