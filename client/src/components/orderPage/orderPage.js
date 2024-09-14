//import react
import React from 'react';
import './orderPage.css';
import EnhancedTable from './orderTable';

const OrderPage = () => {
    return (
        <div class="content">
        <div class="Title">
         <h1>Orders</h1>  
        </div>
        <div class="Table">
         <EnhancedTable/>
        </div>
        </div>

    );
}

export default OrderPage;