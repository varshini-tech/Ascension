import logo from './logo.svg';
import {Pictures,Header,Choose,Contact,Pricing,Navigation} from "./imports";
import "./App.css";

const pricingData = [
  { image: Pictures.wristLength, title: "Till Palm", price: "₹ 300 /-" },
  { image: Pictures.halfLength, title: "Below Wrist", price: "₹ 700 /-" },
  { image: Pictures.fullLength, title: "Full Hand", price: "₹ 1,300 /-" }
];


function App() {
  return (
    <div>
      <Header />
      <div className='space'></div>
      <Navigation />
      <Choose />
      <div className='pricing-container'>
        {pricingData.map((item,index)=>(
          <Pricing 
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        
        ))}
        <br></br>
        <Contact/>
      </div>
      
    </div>
  );
}

export default App;
