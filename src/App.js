import React from 'react';
import './App.css';
import Task1 from './Components/Task1';
import Task2 from './Components/Task2';
import Task3 from './Components/Task3';
import Task4 from './Components/Task4';
import { ThemeContext } from './Components/ThemeContext';
import { CartProvider } from './Components/Task5';
import ProductList from './Components/ProductList';
import Withuser from './Components/Task7';

function App() {
    return (
        <div className="App">
            <Task1 />
            <hr></hr>
            <Task2 />
            <hr></hr>
            <Task3>
            </Task3>
            <hr></hr>
            <Task4> 
            <ThemeContext/>
             </Task4>
            <hr></hr>
            <CartProvider>
                <h1>Product Inventory System</h1>
                <ProductList />
            </CartProvider>
            <hr></hr>
            <Withuser/>


        </div>
    )
}

export default App;
