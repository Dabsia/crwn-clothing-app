import { authActionTypes } from "./auth.types";

const API_KEY = 'AIzaSyALtbC5nZbUmRw_irFfMxxEiJJa0Cb2bW8'

// User Registration
const userRegistrationStart = () => ({
    type: authActionTypes.REGISTER_START,
});

const userRegistrationSuccess = (data) => ({
    type: authActionTypes.REGISTER_SUCCESS,
    payload: data,
});

const userRegistrationFailed = (message) => ({
    type: authActionTypes.REGISTER_FAILED,
    payload: message,
});

export const userRegister = (userDetails) => async (dispatch) => {
    try {
        dispatch(userRegistrationStart());
        const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails),



        })

        if (res.ok) {
            // Sending the user datails to firebase

            const newRes = await fetch('https:crwn-clothin-76fb7-default-rtdb.firebaseio.com/.json', {
                method: 'POST',
                body: JSON.stringify(userDetails),
                headers: {
                    'Content-Type': 'application/json'
                }
            })


        }
        const data = await res.json();
        if (!res.ok) {
            dispatch(userRegistrationFailed(data.error.message))
        }
        else {
            dispatch(userRegistrationSuccess(data))
        }
        console.log(data)

    }
    catch {
        dispatch(userRegistrationFailed('Please check your internet connection'))
    }

}


// user login



const userLoginStart = () => ({
    type: authActionTypes.LOGIN_START,
});

const userLoginSuccess = (data) => ({
    type: authActionTypes.LOGIN_SUCCESS,
    payload: data,
});

const userLoginFailed = (message) => ({
    type: authActionTypes.LOGIN_FAILED,
    payload: message,
});

export const userLogin = (userDetails) => async (dispatch) => {
    try {
        dispatch(userLoginStart());
        const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails),
        })
        const data = await res.json();
        if (!res.ok) {
            dispatch(userLoginFailed(data.error.message))
        }
        else {
            dispatch(userLoginSuccess(data))
        }


    }
    catch {
        dispatch(userLoginFailed('Please check your internet connection'))
    }

}

export const logoutUser = () => ({
    type: authActionTypes.LOGOUT
})