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

        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newTextPost,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newTextPost: ''
            }
        }
        case UPDATE_TEXT: {
            return{
                ...state,
                newTextPost: action.newText
            }
        }

        default:
            return state;
    }
};

export const addPostAC = () => ({type: ADD_POST});
export const updateTextAC = (text) => ({
    type: UPDATE_TEXT, newText: text
});

export default profileReducer;