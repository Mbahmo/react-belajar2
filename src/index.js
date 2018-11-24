import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './ProductList';

class App extends React.Component {
        render() {
            return(
                <div>
                    <ProductList/>
                </div>
                )
        }
    }
    ReactDOM.render(<App/>, document.getElementById('root'));
