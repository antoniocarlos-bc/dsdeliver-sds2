import  './styles.css';
import { ReactComponent as Logo} from './logo.svg';
import StepsHeader from './StepsHeader';

function Orders(){
return (
  <div className="orders-container"> 
     <h1>
         <StepsHeader />
     </h1>
  </div>
)

}
export default Orders;