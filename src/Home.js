import React from "react";
import "./Home.css"
import Product from "./Product"

const Home =() =>{
    return(
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce.jpg" alt="" className="home__image" />
                    <div className="home__row">
                        <Product 
                        id="12321341"
                        title="Bennett mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
                        price={11.96}
                        rating={5}
                        image="https://www.freeiconspng.com/uploads/bag-png-2.png"/>
                        <Product 
                        id="12321341"
                        title="Bennett mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
                        price={11.96}
                        rating={5}
                        image="https://www.freeiconspng.com/uploads/bag-png-2.png"/>
                        
                    </div>
                    <div className="home__row">
                    <Product 
                        id="12321341"
                        title="Bennett mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
                        price={11.96}
                        rating={5}
                        image="https://www.freeiconspng.com/uploads/bag-png-2.png"/>
                        <Product 
                        id="12321341"
                        title="Bennett mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
                        price={11.96}
                        rating={5}
                        image="https://www.freeiconspng.com/uploads/bag-png-2.png"/>
                        <Product 
                        id="12321341"
                        title="Bennett mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
                        price={11.96}
                        rating={5}
                        image="https://www.freeiconspng.com/uploads/bag-png-2.png"/>
                    </div>
                    <div className="home__row">
                    <Product 
                        id="12321341"
                        title="Bennett mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
                        price={11.96}
                        rating={5}
                        image="https://www.freeiconspng.com/uploads/bag-png-2.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;