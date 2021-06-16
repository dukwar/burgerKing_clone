// for auth
export type profileType = {
    accessToken: string,
    userId: string
    email: string
}

// for message
export type messageInnerType = {
    message: string,
    isOpen: boolean
}

// for vacancy
export type vacancyType = {
    id: number,
    title: string,
    subTitleOne: string,
    markerTextOne: string[],
    subTitleTwo: string,
    markerTextTwo: string[],
    isOpen: boolean
}




// for cart
export type itemsType = {
    [_id:string]: itemsInner
}

export type itemsInner = {
    items: burgerType[],
    totalPrice: number,
    totalCount: number,
    [key: number]:number
}

export interface burgerType {
    _id: string,
    name: string,
    picture: string,
    price: number,
}

// for burgers
export type burgersTypes = {
    [_id: string]: burgerApiType[]
}

export interface burgerApiMainType {
    message: string,
    burgers: burgerApiType[],
}

export interface burgerApiType {
    _id: string,
    name: string,
    picture: string,
    price: number,
    category: string
}

export interface addBurgerType {
    name: string,
    picture: string,
    price: number,
    category: string
}

// for category

export interface categoryApiType {
    message: string,
    categories: categoryType[]

}

export interface categoryType {
    id: string,
    name: string,
    value: string
}

export interface CategoryItemType {
    _id: string,
    name: string,
    picture: string,
    price: number
}

export interface addCategoryType {
    name: string,
    value: string
}





