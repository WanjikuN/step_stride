import React, { useState } from "react";

export default function OrderTrack() {
    const [orderId, setOrderId] = useState("");
    const [order, setOrder] = useState({});

    function searchOrder() {
        fetch(`http://localhost:3030/orders/${orderId}`)
            .then(resp => resp.json())
            .then(data => setOrder(data));
    }

    const status = ["Follow your Order", "We've got it", "On its way", "With your courier", "Delivered"];

    return (
        <div id="track">
            <h4>Search Order</h4>
            <input className="filter"
                type="text"
                placeholder="Enter Order ID"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                required
            />
            <button className="btn" onClick={searchOrder}>Search</button>
            <h4></h4>
            <div className="rope">
                {status.map((s, index) => (
                    <div>
                    
                    <div key={index} className={ s === order.status ? "circle" : ""}></div>
                    <p className="order_text"
                    
                            key={index}
                            style={{ fontWeight: s === order.status ? "bold" : "normal" }}
                        >
                            {s}
                        
                    </p>
                    
                        </div>
                ))}
                
            </div>
        </div>
    );
}
