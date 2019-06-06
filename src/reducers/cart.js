import * as types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
    {
        product : {
            id : 3,
            name : 'Iphone 10 Plus',
            image : 'https://d2211byn0pk9fi.cloudfront.net/spree/products/78550/product/A9009011.png?1558324196',
            description : 'San pham do Apple san xuat',
            price : 1000,
            inventory : 20,
            rating : 5
        },
        quantity : 5
    }
];

const cart = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return [...state];
        default : return [...state];
    }
}

export default cart;