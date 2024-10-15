// src/components/Products/index.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import prd1 from '../../assets/imgs/dh1.jpg';
import prd2 from '../../assets/imgs/dh2.jpg';
import prd3 from '../../assets/imgs/dh3.jpg';
import prd4 from '../../assets/imgs/dh4.jpg';

const products = [
  {
    id: 1,
    name: 'Đồng hồ Orient Small',
    price: 5490000,
    description: 'Thiết kế thanh lịch, nhỏ gọn.',
    image: prd1, 
  },
  {
    id: 2,
    name: 'Đồng hồ Orient Mako Solar',
    price: 2310000,
    description: 'Năng lượng mặt trời, chống nước tốt.',
    image: prd2, 
  },
  {
    id: 3,
    name: 'Citizen 38 mm Nam BM7334-58B',
    price: 11110000,
    description: 'Sang trọng, nam tính.',
    image: prd3, 
  },
  {
    id: 4,
    name: 'Orient Mako Solar 42.8',
    price: 9990000,
    description: 'Mạnh mẽ, năng lượng mặt trời.',
    image: prd4, 
  },
];

const ProductList = ({ addToCart }) => {
  const navigate = useNavigate();

  const viewDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <h1>Danh sách đồng hồ</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price.toLocaleString()} VND</p>
            <button 
              className="button-details" 
              onClick={() => viewDetails(product.id)}>
              Chi tiết sản phẩm
            </button>
            <button 
              className="button-cart" 
              onClick={() => addToCart(product)}>
              Thêm vào giỏ hàng
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
