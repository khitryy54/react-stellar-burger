import {useState, useEffect} from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import cn from 'classnames';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {ingredientPropType} from "../../utils/prop-types";
import PropTypes from "prop-types";

function BurgerIngredients({ingredients}) {
  
  const [ingredientModal, setIngredientModal] = useState(null);
  
  function closeIngredientModal() {
    setIngredientModal(null);
  }

  const [current, setCurrent] = useState('one');
  const buns = ingredients.filter(ingredient => ingredient.type === "bun");
  const mains = ingredients.filter(ingredient => ingredient.type === "main");
  const sauces = ingredients.filter(ingredient => ingredient.type === "sauce");
  return (
  <section className={cn(styles.ingredients)}>
    <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
    <div className={cn(styles.tab, 'mb-10')}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
    <div className={cn('custom-scroll', styles.container)}>
      <h2 className="text text_type_main-medium mb-6">Булки</h2>
      <ul className={cn('pl-4', 'pr-1', styles.list)}>
      {buns.map(bun => <li key={bun._id} onClick={() => setIngredientModal(bun)} className={styles.item}><BurgerIngredient ingredient={bun} /></li>)}
      </ul>
      <h2 className="text text_type_main-medium mt-10 mb-6">Соусы</h2>
      <ul className={cn('pl-4', 'pr-1', styles.list)}>
      {sauces.map(sauce => <li key={sauce._id} onClick={() => setIngredientModal(sauce)} className={styles.item}><BurgerIngredient  ingredient={sauce} /></li>)}
      </ul>
      <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>
      <ul className={cn('pl-4', 'pr-1', styles.list)}>
      {mains.map(main => <li key={main._id} onClick={() => setIngredientModal(main)} className={styles.item}><BurgerIngredient ingredient={main} /></li>)}
      </ul>
    </div>
    {ingredientModal && (
      <Modal title="Детали ингридиента" onClose={closeIngredientModal}><IngredientDetails ingredient={ingredientModal}/></Modal>
      )}
  </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType),
}

export default BurgerIngredients;