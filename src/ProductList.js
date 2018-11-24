import React from 'react';

class ProductList extends React.Component{
    render(){
        return(
            <div className="container">
                <nav className="navbar" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/"><img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} /></a><a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"><span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" /></a>
                    </div>
                    <div className="navbar-end">
                        <a className="navbar-item">Home</a>
                        <div className="dropdown navbar-item ">
                            <div className="dropdown-trigger">
                                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span>en</span><span className="icon is-small"><i className="fas fa-angle-down" aria-hidden="true" /></span>
                                </button>
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <a href="#" className="dropdown-item is-active">en</a><a href="#" className="dropdown-item ">id</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="columns">
                    <div className="column is-full">
                        <div>
                            <h3 className="title">Our Products</h3>
                            <div className="columns">
                                <div className="column">
                                    <a href="/product/rustic-plastic-bacon">
                                        <div className="card">
                                            <div className="card-image">
                                                <figure className="image is-4by3">
                                                    <img alt="Rustic Plastic Bacon" src="https://images.nike.com/is/image/DotCom/PDP_HERO/132170C_001_A_PREM/converse-chuck-taylor-all-star-leather-unisex-high-top-shoe.jpg" />
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <div className="media">
                                                    <div className="media-content">
                                                        <p className="title is-4">Rustic Plastic Bacon</p>
                                                        <div className="content">
                                                            Dolorem commodi id eveniet neque amet voluptatem
                        ipsa.<br />
                                                        </div>
                                                        <h5>320.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="column">
                                    <a href="/product/ergonomic-cotton-chips">
                                        <div className="card">
                                            <div className="card-image">
                                                <figure className="image is-4by3">
                                                    <img alt="Ergonomic Cotton Chips" src="https://media.journeys.com/images/products/1_259094_ZM.JPG" />
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <div className="media">
                                                    <div className="media-content">
                                                        <p className="title is-4">Ergonomic Cotton Chips</p>
                                                        <div className="content">Rem et aut.<br /></div>
                                                        <h5>423.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="column">
                                    <a href="/product/licensed-steel-sausages">
                                        <div className="card">
                                            <div className="card-image">
                                                <figure className="image is-4by3">
                                                    <img alt="Licensed Steel Sausages" src="https://media.endclothing.com/media/f_auto,q_auto,w_760,h_760/prodmedia/media/catalog/product/0/5/05-07-2017_newbalance_u520avintage_blue_u520ab_eh_1.jpg" />
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <div className="media">
                                                    <div className="media-content">
                                                        <p className="title is-4">Licensed Steel Sausages</p>
                                                        <div className="content">
                                                            Ipsum expedita at cum porro sit ut.<br />
                                                        </div>
                                                        <h5>50.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="column">
                                    <a href="/product/gorgeous-concrete-ball">
                                        <div className="card">
                                            <div className="card-image">
                                                <figure className="image is-4by3">
                                                    <img alt="Gorgeous Concrete Ball" src="https://media.endclothing.com/media/f_auto,q_auto,w_760,h_760/prodmedia/media/catalog/product/0/5/05-07-2017_newbalance_u520avintage_blue_u520ab_eh_1.jpg" />
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <div className="media">
                                                    <div className="media-content">
                                                        <p className="title is-4">Gorgeous Concrete Ball</p>
                                                        <div className="content">
                                                            Reiciendis est minus blanditiis repellendus
                        veritatis amet numquam nam.<br />
                                                        </div>
                                                        <h5>39.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default ProductList;