var initialState = [
    {
        id : 1,
        name : 'Iphone 7 Plus',
        image : 'https://d2211byn0pk9fi.cloudfront.net/spree/products/78550/product/A9009011.png?1558324196',
        description : 'San pham do Apple san xuat',
        price : 500,
        inventory : 10,
        rating : 4
    },
    {
        id : 2,
        name : 'Iphone 8 Plus',
        image : 'https://d2211byn0pk9fi.cloudfront.net/spree/products/78550/product/A9009011.png?1558324196',
        description : 'San pham do Apple san xuat',
        price : 600,
        inventory : 15,
        rating : 3
    },
    {
        id : 3,
        name : 'Iphone 10 Plus',
        image : 'https://d2211byn0pk9fi.cloudfront.net/spree/products/78550/product/A9009011.png?1558324196',
        description : 'San pham do Apple san xuat',
        price : 1000,
        inventory : 20,
        rating : 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default : return [...state];
    }
}

export default products;