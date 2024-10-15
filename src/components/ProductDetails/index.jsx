// src/components/ProductDetails/index.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import prd1 from '../../assets/imgs/dh1.jpg';
import prd2 from '../../assets/imgs/dh2.jpg';
import prd3 from '../../assets/imgs/dh3.jpg';
import prd4 from '../../assets/imgs/dh4.jpg';

const products = [
  {
    id: 1,
    name: 'Đồng hồ Orient Small',
    price: 5490000,
    description: 'Đồng hồ cao cấp của Orient với thiết kế nhỏ gọn, thanh lịch, phù hợp cho cả nam và nữ.',
    material: 'Thép không gỉ',
    waterResistance: '30m',
    warranty: '2 năm',
  },
  {
    id: 2,
    name: 'Đồng hồ Orient Mako Solar',
    price: 2310000,
    description: 'Orient Mako Solar là mẫu đồng hồ năng lượng mặt trời, có khả năng chống nước tốt và thiết kế thể thao.',
    material: 'Thép không gỉ',
    waterResistance: '200m',
    warranty: '1 năm',
    image: prd2,
  },
  {
    id: 3,
    name: 'Citizen 38 mm Nam BM7334-58B',
    price: 11110000,
    description: 'Citizen 38mm với thiết kế sang trọng, nam tính, thích hợp cho người làm việc văn phòng.',
    material: 'Titanium',
    waterResistance: '100m',
    warranty: '3 năm',
    image: prd3,
  },
  {
    id: 4,
    name: 'Orient Mako Solar 42.8',
    price: 9990000,
    description: 'Orient Mako Solar 42.8mm với vẻ ngoài mạnh mẽ, thời trang và công nghệ năng lượng mặt trời.',
    material: 'Thép không gỉ',
    waterResistance: '100m',
    warranty: '2 năm',
    image: prd4,
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '300px', height: 'auto' }} />
      <p>Giá: {product.price.toLocaleString()} VND</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
