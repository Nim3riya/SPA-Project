const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';

let initialState = {
    users: [
        {id: 1, follow: true, fullName: 'Наталья', status: 'Как хорошо дома', location: 'Москва'},
        {id: 2, follow: false, fullName: 'Александр', status: 'Хочу тепло', location: 'Москва'}
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((user)=> {
                    if (user.id === action.userId) {
                        return { ...user, follow: true,}
                    }
                    return user
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((user)=> {
                    if (user.id === action.userId) {
                        return { ...user, follow: false,}
                    }
                    return user
                })
            }
        }

        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

export default usersReducer;