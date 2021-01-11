import  './styles.css';
import { ReactComponent as Logo} from './logo.svg';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { useEffect, useState } from 'react';
import { Product } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

function Orders(){

    const [products, setProducts] = useState<Product[]>([]);

         useEffect( () => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(erro => console.log(erro))    
       
    }, [] )
return (
  <div className="orders-container"> 
     <h1>
         <StepsHeader />
         <ProductsList products= {products} />
         <OrderLocation />
     </h1>
  </div>
)

}
export default Orders;