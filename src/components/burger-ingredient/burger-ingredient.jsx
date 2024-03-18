import { CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient.module.css";
import cn from "classnames";
import {ingredientPropType} from "../../utils/prop-types";
import React from "react";
import { useDrag } from "react-dnd";


function BurgerIngredient({ingredient}) {

  const {count, name, price, image} = ingredient;

  const [{isDrag}, dragRef] = useDrag({
    type: 'ADD_CONSTRUCTOR',
    item: ingredient,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    })
});
  return (
    <article ref={dragRef} className={styles.burgeringredient} style={{opacity: isDrag? 0.1: 1}}>
      <img src={image} alt={name} className={cn(styles.image, 'ml-4 mr-4')}/>
      <div className={cn(styles.price, 'mb-1 mt-1')}>
        <p className="text text_type_digits-default mr-2">{price}</p>
        <CurrencyIcon />
      </div>
      <p className={cn("text text_type_main-default", styles.name)}>{name}</p>
      {count ?  <Counter className={styles.counter} count={count} size="default"/> : ""}
    </article>
  );
}

BurgerIngredient.propTypes = {
  ingredient:ingredientPropType.isRequired
}

export default BurgerIngredient;