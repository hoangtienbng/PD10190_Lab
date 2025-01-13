const products = [
    { id: 1, name: "Son môi", price: 100000 },
    { id: 2, name: "Kem dưỡng da", price: 200000 },
    { id: 3, name: "Sữa rửa mặt", price: 150000 },
    { id: 4, name: "Nước hoa", price: 300000 },
    { id: 5, name: "", price: 250000 }, // Dữ liệu lỗi
    { id: 6, name: "Kem chống nắng", price: null }, // Dữ liệu lỗi
];


const productObject = Object.fromEntries(
    products
        .filter(product => product.name && product.price !== null) // trả về dữ liệu mới loại bỏ các dữ liệu lỗi
        .map(product => [product.id, product])
);

console.log(productObject);
