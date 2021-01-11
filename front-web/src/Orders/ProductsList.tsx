import  './styles.css';
import { ReactComponent as Logo} from './logo.svg';
import StepsHeader from './StepsHeader';
import ProductCard from './ProductCard';
import { Product } from './types';
import { fetchProducts } from '../api';

type Props = {

    products: Product[];
}

    function ProductsList({ products } : Props ){
return (
  <div className="orders-list-container"> 
     <div className="orders-list-items">
        {products.map(product => (
           <ProductCard key={product.id} product= {product} />

        ))}
     </div>
  </div>
)

}
export default ProductsList;