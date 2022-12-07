import React from "react";

export default class BurgerIngredients extends React.Component {
    render() {
        let ingredients = null;
        switch (this.props.type) {
            case "meat":
                ingredients = <div className="patty my-1" />;
                break;
            case "chesse":
                ingredients = <div className="chesse my-1" />;
                break;
            case "salad":
                ingredients = <div className="salad my-1" />;
                break;
            case "bacon":
                ingredients = <div className="bacon my-1" />;
                break;
            default:
                ingredients = null;
        }
        return ingredients;
    }
}