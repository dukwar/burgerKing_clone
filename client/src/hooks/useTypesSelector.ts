import {TypedUseSelectorHook, useSelector} from "react-redux";
import {reducersType} from "../Redux";


export const useTypesSelector:TypedUseSelectorHook<reducersType> = useSelector