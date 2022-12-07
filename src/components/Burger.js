import React from "react";
import BurgerIngredients from "./BurgerIngredients";

export default class Burger extends React.Component {
    render() {
        // console.log(this.props.ingredients);
        let indexKey = 0;
        return (
            <div className="d-flex justify-items-center p-5 flex-column">
                <div className="top-bun" />
                {
                    this.props.ingredients.map((key) => {
                        indexKey = indexKey + 1;
                        return <BurgerIngredients key={indexKey} type={key} />
                    })
                }
                <div className="bottom-bun" />
            </div>
        );
    }
}
