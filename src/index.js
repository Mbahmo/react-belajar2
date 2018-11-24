import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter as Router,Route,Link} from "react-router-dom";

import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

class App extends React.Component {
        render() {
            return(
                <Router>
                    <div>
                        <Route path="/" exact component={ProductList} />
                        <Route path="/product/:slug" component={ProductDetail} />
                </div>
                </Router>
                )
        }
    }
    ReactDOM.render(<App/>, document.getElementById('root'));
