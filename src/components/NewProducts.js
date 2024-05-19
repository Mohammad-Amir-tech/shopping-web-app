import React from 'react';
import ProductCard from './ProductCard';

const productsData = [
     {
     img: "/jacket-1.jpg",
     title: "Coat",
     desc: "MEN Yarn Fleece Full Coat",
     rating: 4,
     price: "2499",
},
     {
          img: "/dress.jpg",
          title: "Dress",
          desc: "Vintage Floral Print Summer Dress",
          rating: 5,
          price: "2499"
     
},
     {
          img: "/tshirt.jpg",
          title: "T-Shirt",
          desc: "Graphic Printed Cotton T-Shirt",
          rating: 3,
          price: "999"
},
     {
     img: "/shirt-1.jpg",
     title: "Shirt",
     desc: "Pure Garment Dyed Cotton Shirt",
     rating: 4,
     price: "1299",
},
     {
     img: "/sports-1.jpg",
     title: "Sports",
     desc: "Trekking & Running Shoes - Black",
     rating: 4,
     price: "4999",
},
     {
     img: "/watch-1.jpg",
     title: "Watches",
     desc: "Smart Watches Vital Plus",
     rating: 5,
     price: "1999",
},
     {
     img: "/watch-2.jpg",
     title: "Watches",
     desc: "Pocket Watch Leather Pouch",
     rating: 3,
     price: "999",
},
{
     img: "/snkrs.jpg",
     title: "Sneakers",
     desc: "High-Top Nike AIR Sneakers",
     rating: 4,
     price: "1999"
  },
];


const NewProducts = () => {
  return (
    <div>
     <div className='container pt-16'>
          <h2 className='font-medium text-2xl pb-4'>New Products</h2>

          <div className='grid gridl-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
               {
                    productsData.map((item,index)=>{
                         return (
                             <ProductCard 
                             key = {index}
                             img = {item.img}
                             title = {item.title}
                             desc = {item.desc}
                             rating = {item.rating}
                             price = {item.price}
                             />
                         );
                    })
               }
          </div>
     </div>
    </div>
  )
}

export default NewProducts