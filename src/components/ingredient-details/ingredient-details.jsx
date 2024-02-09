import styles from './ingredient-details.module.css';
import cn from 'classnames';
import {ingredientPropType} from "../../utils/prop-types";

function IngredientDetails({ingredient}) {
  console.log(ingredient);
  return (
    <div className={styles.details}>
      <img className={styles.image} src={ingredient.image_large} alt={ingredient.name}/>
      <p className={cn("pt-4 pb-8 text text_type_main-medium")}>{ingredient.name}</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={cn("text text_type_main-default text_color_inactive")}>Калории,ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
        </li>
        <li className={styles.item}>
          <p className={cn("text text_type_main-default text_color_inactive")}>Белки, г </p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</p>
        </li>
        <li className={styles.item}>
          <p className={cn("text text_type_main-default text_color_inactive")}>Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.fat}</p>
        </li>
        <li className={styles.item}>
          <p className={cn("text text_type_main-default text_color_inactive")}>Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</p>
        </li>
      </ul>
    </div>
  )
}

IngredientDetails.propTypes = {
  ingredient:ingredientPropType.isRequired
}

export default IngredientDetails;