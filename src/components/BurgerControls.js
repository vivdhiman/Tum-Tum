import React from "react";

export default class BurgerControls extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <div className="">
                        Meat: {this.props.count.meat} &emsp;<button onClick={() => this.props.addItem('meat')}>Add</button><button className="m-2" onClick={() => this.props.removeItem('meat')}>Remove</button>
                    </div>
                    <div className="">
                        Chesse: {this.props.count.chesse} <button onClick={() => this.props.addItem('chesse')}>Add</button><button className="m-2" onClick={() => this.props.removeItem('chesse')}>Remove</button>
                    </div>
                    <div className="">
                        Salad: {this.props.count.salad} &emsp;<button onClick={() => this.props.addItem('salad')}>Add</button><button className="m-2" onClick={() => this.props.removeItem('salad')}>Remove</button>
                    </div>
                    <div className="" >
                        Bacon: {this.props.count.bacon} &emsp;<button onClick={() => this.props.addItem('bacon')}>Add</button><button className="m-2" onClick={() => this.props.removeItem('bacon')}>Remove</button>
                    </div>
                </div>
                <div>
                    <button className="" onClick={this.props.handleAddToCart}>Add to cart</button>
                </div>
            </div>
        );
    }
}
