import React from "react";
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

const Checkout = ()=>{
    const [{basket}, dispatch] = useStateValue();
    return(
        < div className="checkout">
            <div className="checkout__left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/LATV/1071374_750x200_8._V515060851_.jpg" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping basket
                    </h2>
                    {basket.map(item =>(
                        <CheckoutProduct
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={item.rating}
                        
                        />
                    ))}
                </div>

            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
             
        </div>

    )
}

export default Checkout;