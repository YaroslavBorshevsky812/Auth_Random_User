


const initialState = {
    user: {
        email: '',
        password: '',
        picture: '',
        name: '',
        lastName: '0',

    }
}


export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD':
            return {
                ...state, 
                user: {
                    email: state.user.email = action.addEmail,
                    password: state.user.password = action.addPassword,
                    picture: state.user.password = action.addPicture,
                    name: state.user.name = action.addName,
                    lastName: state.user.lastName = action.addLastName,
                }
            }
        default: 
            return state
    }
}
