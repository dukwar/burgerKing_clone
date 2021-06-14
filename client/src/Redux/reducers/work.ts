import {SET_OPEN_VACANCY} from "../constants";
import {vacancyType} from "./types";
import {openWorkType} from "../actions/types";


const initialState = {
   vacancy: [
       {
           id: 1,
           title: 'Cashier chef',
           subTitleOne: 'What do we have to do:',
           markerTextOne: [
               'Готовить вкуснейшие вопперы и другие позиции из меню ресторана',
               'Быстро и аккуратно собирать заказы',
               'Вести расчет по кассе',
               'Поддерживать чистоту в ресторане',
               'Помогать нашим гостям любить нас еще больше'
           ],
           subTitleTwo: 'We have waiting for you:',
           markerTextTwo: [
               'Официальное оформление',
               'Зарплата на банковскую карту, можно хоть каждую неделю!',
               'Премии и бонусы',
               'Гибкий график работы',
               'Бесплатное оформление медицинской книжки',
               'Вкусное питание и красивая форма от компании',
               'Огненная команда единомышленников',
               'Карьерный рост, на который Ты можешь влиять',
           ],

           isOpen: false
       },

       {
           id: 2,
           title: 'Delivery',
           subTitleOne: 'How to deliver our orders with your own vehicle:',
           markerTextOne: [
               'Быстро, чтобы они не успевали остыть',
               'Бережно, чтобы ничего не помялось и не потерялось в пути',
               'Вежливо, чтобы у гостей поднималось настроение не только от вкусной еды',
           ],
           subTitleTwo: 'What do we offer:',
           markerTextTwo: [
               'Стать нашим партнером - курьером на личном автомобиле',
               'Гибкий график работы',
               'Бесплатное оформление медицинской книжки',
               'Вкусное бесплатное питание',
               'Огненную команду единомышленников',
           ],

           isOpen: false
       },

       {
           id: 3,
           title: 'Shift manager',
           subTitleOne: 'What do we have to do:',
           markerTextOne: [
               'Организовывать работу ресторана (управление сменой)',
               'Контролировать соблюдение стандартов компании и санитарных норм',
               'Контролировать соблюдение технологических процессов',
           ],
           subTitleTwo: 'We have waiting for you:',
           markerTextTwo: [
               'Официальное оформление',
               'Зарплата на банковскую карту',
               'Премии и бонусы',
               'Гибкий график работы',
               'Бесплатное оформление медицинской книжки',
               'Вкусное питание и красивая форма от компании',
               'Огненная команда единомышленников',
               'Карьерный рост, на который Ты можешь влиять',
           ],

           isOpen: false
       },

       {
           id: 4,
           title: 'Fiery jobs in the Burger King office',
           subTitleOne: '',
           markerTextOne: [],
           subTitleTwo: '',
           markerTextTwo: [],
           isOpen: false
       },
   ] as vacancyType[]
}

type initialStateType = typeof initialState
type actionType = openWorkType


const work = (state = initialState, action:actionType):initialStateType => {

    switch (action.type) {
        case SET_OPEN_VACANCY:

            const newVacancy = state.vacancy.map((item) => {
                item.id !== action.id ? item.isOpen = false : item.id === action.id ? item.isOpen = !item.isOpen : item.isOpen = item.isOpen
                return item
            })

        return {
           ...state,
            vacancy: newVacancy
        }

        default:
            return state
    }
}

export default work