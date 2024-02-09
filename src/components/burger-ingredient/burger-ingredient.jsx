import { CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient.module.css";
import cn from "classnames";
import {ingredientPropType} from "../../utils/prop-types";


function BurgerIngredient({ingredient}) {
  return (
    <article className={styles.burgeringredient}>
      <img src={ingredient.image} alt={ingredient.name} className={cn(styles.image, 'ml-4 mr-4')}/>
      <div className={cn(styles.price, 'mb-1 mt-1')}>
        <p className="text text_type_digits-default mr-2">{ingredient.price}</p>
        <CurrencyIcon />
      </div>
      <p className={cn("text text_type_main-default", styles.name)}>{ingredient.name}</p>
      <Counter className={styles.counter} count={1} size="default"/>
    </article>
  );
}

BurgerIngredient.propTypes = {
  ingredient:ingredientPropType.isRequired
}

export default BurgerIngredient;