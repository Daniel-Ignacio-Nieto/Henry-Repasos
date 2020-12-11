import {BUY_CAKE} from '.cakeTypes';

export const buyCake = () => {
    return {
        type: BUY_CAKE,
        payload: 'algo'
    }
}

export default buyCake;