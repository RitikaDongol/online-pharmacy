import React, { Component } from 'react';

import CartBody from './cartbody';

class UserCart extends Component{
    render(){
        return(
            <div>
                
                <header className="carthead text-white text-center">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 mx-auto">
                                <h1 className="mb-5 header-capital">
                                One click away from easy home delivery
                                </h1>
                            </div>
                        </div>
                    </div>
                </header>
                <CartBody/>
               
            </div>
        );
    }
}
export default UserCart;