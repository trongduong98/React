let initialState = [
    {
        id: 1,
        name: 'Iphone x',
        image: 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/193246051.jpeg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 10000000,
        inventory: 10,
        rating: 5
    },
    {
        id: 2,
        name: 'Redmi note 8',
        image: 'https://cdn.tgdd.vn/Products/Images/42/209535/xiaomi-redmi-note-8-blue-1-200x200.jpg',
        description: 'Sản phẩm do Xiaomi sản xuất',
        price: 9000000,
        inventory: 15,
        rating: 3
    },
    {
        id: 3,
        name: 'Samsung S21',
        image: 'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 12000000,
        inventory: 8,
        rating: 4
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default products;