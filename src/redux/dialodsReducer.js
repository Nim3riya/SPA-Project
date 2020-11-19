const UPDATE_MESSAGE_TEXT = 'dialogs/UPDATE_MESSAGE_TEXT';
const ADD_MESSAGE = 'dialogs/ADD_MESSAGE';

let initialState = {
    dialogData: [
        {id: 1, name: 'Наталья'},
        {id: 2, name: 'Александр'}
    ],
    messagesData: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Как дела?'}
    ],
    newMessageBody: ""
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            state.newMessageBody = action.text;
            return state;
        case ADD_MESSAGE:
            let text = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 6, message: text});
            return state;
        default:
            return state;
    }
};

export const addMessageAC = () => ({type: ADD_MESSAGE});
export const updateMessageTextAC = (text) =>
    ({type: UPDATE_MESSAGE_TEXT, text: text});

export default dialogReducer;