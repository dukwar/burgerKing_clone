import {promoType} from "./types";

export const initialState = {
   promo: [
       {
           id: 1,
           img: 'https://burgerking.ru/uploads/media/action_preview/0001/47/e0ddd337c498d1067f6fd2ef6b1d8193d156cd44.jpg'
       },

       {
           id: 2,
           img: 'https://burgerking.ru/uploads/media/action_preview/0001/47/e3259e26d6636e7f53cf713dd6131cd9277d3c77.jpg'
       },

       {
           id: 3,
           img: 'https://burgerking.ru/uploads/media/action_preview/0001/44/d61d4eca87313dc6f3e5497c5eab3c0ae0a6125f.png'
       },

       {
           id: 4,
           img: 'https://burgerking.ru/uploads/media/action_preview/0001/45/ada0c4855e00824c6d8b4364d36fce8ba918f98e.jpg'
       },

       {
           id: 5,
           img: 'https://burgerking.ru/uploads/media/action_preview/0001/44/2fa6533ce8066e3e5332a57f58bce7cfd3ceb8d0.jpg'
       },

       {
           id: 6,
           img: 'https://burgerking.ru/uploads/media/action_preview/0001/42/c694ece72e6886a8ddef8812584678a7c15308d8.png'
       },

       {
           id: 7,
           img: 'https://burgerking.ru/uploads/media/action_preview/0001/38/cc693ed0f48a8d2621569931f87022f083300045.png'
       },

       {
           id: 8,
           img: 'https://burgerking.ru/uploads/media/action_preview/0001/39/5dc0f6a49eaaadf9262c1b5f9c2b8d3e44a0ceb5.jpeg'
       },

       {
           id: 9,
           img: 'https://burgerking.ru/uploads/media/action_preview/0001/43/b047462d72aba99ff2e2fa7c9a11e94950b04520.png'
       },

       {
           id: 10,
           img: 'https://burgerking.ru/uploads/media/action_preview/0001/36/be513bc695c73ab216f33109eb4cf25804c1cf3f.png'
       },

       {
           id: 11,
           img: 'https://burgerking.ru/uploads/media/action_preview/0001/35/1426cb57b3952545b1ec9a826221177ba83a0763.png'
       },

       {
           id: 12,
           img: 'https://burgerking.ru/uploads/media/action_preview/0001/35/efb7101c3537a9a0c337812e46fbec337eeb6e42.png'
       },

       {
           id: 13,
           img: 'https://burgerking.ru/uploads/media/action_preview/0001/33/206444b15e54d16c4c08228208cdc6aae3172fe9.png'
       },

       {
           id: 14,
           img: 'https://burgerking.ru/uploads/media/action_preview/0001/03/97f6bf76b7e617ff9131d0d675deec1313343c1b.jpeg'
       },

       {
           id: 15,
           img: 'https://burgerking.ru/uploads/media/action_preview/0001/36/563f13dc8edcaf9ecad28104fd2f91cbfb1f3e9b.png'
       },

       {
           id: 16,
           img: 'https://burgerking.ru/uploads/media/action_preview/0001/35/39a232b30eb65963a0acd791e7e78cfea2ce0577.png'
       },

       {
           id: 17,
           img: 'https://burgerking.ru/uploads/media/action_preview/0001/01/dd26a2f2670e3c675c140be86f2cd2ee2ea7777c.jpeg'
       },

       {
           id: 18,
           img: 'https://burgerking.ru/uploads/media/action_preview/0001/01/b4c1aac2a4ba8b86864974db90b201bb4494cd6d.jpeg'
       },

       {
           id: 19,
           img: 'https://burgerking.ru/uploads/media/action_preview/0001/01/431df6a8f4730b655c8e282bcaf4a560335cdc6a.jpeg'
       },

       {
           id: 20,
           img: 'https://burgerking.ru/uploads/media/action_preview/0001/01/edcabedc5f4e6e890f18a7cea6e27707eaac4e76.jpeg'
       },
   ] as promoType[]
}

type initialStateType = typeof initialState

const promo = (state = initialState, action:any):initialStateType => {

    switch (action.type) {



        default:
            return state
    }
}

export default promo