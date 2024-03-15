import {useState, useEffect} from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import cn from 'classnames';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIngredientsAsync } from '../../services/burger-ingredients/burger-ingredients.action';
import { setIngredientModal } from '../../services/ingredient-details/ingredient-details.action';
import { useInView } from 'react-intersection-observer';

function BurgerIngredients() {

  const dispatch = useDispatch();
  const ingredients = useSelector(store => store.burgerIngredients.ingredients);

  const {ref:myRefBuns, inView: myBunsAreVisible} = useInView();
  const {ref:myRefSauces, inView: mySaucesAreVisible} = useInView();
  const {ref:myRefMains, inView: myMainsAreVisible} = useInView();

  useEffect(() => {
    myMainsAreVisible && setCurrent("three");
    mySaucesAreVisible && setCurrent("two");
    myBunsAreVisible && setCurrent("one");
  }, [myBunsAreVisible, myMainsAreVisible, mySaucesAreVisible]);

  useEffect(() => {
    dispatch(fetchIngredientsAsync()); 
  }, [dispatch]);


  const ingredientModal = useSelector(store => store.ingredientDetails.ingredient);
  
  function closeIngredientModal() {
    dispatch(setIngredientModal(null));
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
      <ul ref={myRefBuns} className={cn('pl-4', 'pr-1', styles.list)}>
      {buns.map(bun => <li key={bun._id} onClick={() => dispatch(setIngredientModal(bun))} className={styles.item}><BurgerIngredient ingredient={bun} /></li>)}
      </ul>
      <h2 className="text text_type_main-medium mt-10 mb-6">Соусы</h2>
      <ul ref={myRefSauces} className={cn('pl-4', 'pr-1', styles.list)}>
      {sauces.map(sauce => <li key={sauce._id} onClick={() => dispatch(setIngredientModal(sauce))} className={styles.item}><BurgerIngredient  ingredient={sauce} /></li>)}
      </ul>
      <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>
      <ul ref={myRefMains} className={cn('pl-4', 'pr-1', styles.list)}>
      {mains.map(main => <li key={main._id} onClick={() => dispatch(setIngredientModal(main))} className={styles.item}><BurgerIngredient ingredient={main} /></li>)}
      </ul>
    </div>
    {ingredientModal && (
      <Modal title="Детали ингридиента" onClose={closeIngredientModal}><IngredientDetails ingredient={ingredientModal}/></Modal>
      )}
  </section>
  );
}

export default BurgerIngredients;