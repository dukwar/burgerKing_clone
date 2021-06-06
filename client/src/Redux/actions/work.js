import {SET_OPEN_VACANCY} from "../constants";

export const openWork = id => {
    return {
        type: SET_OPEN_VACANCY,
        id
    }
}