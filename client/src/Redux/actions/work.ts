import {SET_OPEN_VACANCY} from "../constants";
import {openWorkType} from "./types";

export const openWork = (id:number):openWorkType => {
    return {
        type: SET_OPEN_VACANCY,
        id
    }
}