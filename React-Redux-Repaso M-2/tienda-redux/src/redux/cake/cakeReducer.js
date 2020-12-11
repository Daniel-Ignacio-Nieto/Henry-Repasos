const { BUY_CAKE } = require

const initialState = {
    numOfCake: 10
}

function cakeReducer (state = initialState, action) {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state
            }
    }
}