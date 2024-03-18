import {useMemo} from "react";
import {ConstructorElement, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./burger-constructor.module.css";
import cn from 'classnames';
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import BurgerConstructorElement from "../burger-constructor-element/burger-constructor-element";
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { createOrderAsync, createOrderSuccess} from "../../services/order-details/order-details.action";
import { useDrop } from "react-dnd";
import { constructorAdd, constructorDelete, constructorFree } from "../../services/burger-constructor/burger-constructor.action";
import { fetchIngredientsAsync, ingredientsAdd, ingredientsDelete} from "../../services/burger-ingredients/burger-ingredients.action";


function BurgerConstructor() {

  const dispatch = useDispatch();
  const orderIsLoading = useSelector(store => store.orderDetails.isLoading);
  const orderNumber = useSelector(store => store.orderDetails.orderNumber);
  const ingredients = useSelector(store => store.burgerConstructor.ingredients);
  const bun = useSelector(store => store.burgerConstructor.bun);

  function createOrder() {
    dispatch(createOrderAsync([bun,...ingredients, bun]))
      .then(dispatch(constructorFree()))
      .then(dispatch(fetchIngredientsAsync()))
    }

  function closeOrderModal() {
    dispatch(createOrderSuccess(null));
  }

  function deleteConstructorIngredient(ingredient) {
    dispatch(constructorDelete(ingredient));
    dispatch(ingredientsDelete(ingredient));
  }

  const [{isHover}, dropRef] = useDrop({
    accept: 'ADD_CONSTRUCTOR',
    drop: (ingredient) => {
      dispatch(constructorAdd(ingredient));
      dispatch(ingredientsAdd(ingredient));
      },
    collect: (monitor) => ({
        isHover: monitor.isOver(),
    })
  });

  const totalPrice = useMemo(() => {  
    const sum =  ingredients.reduce(function(sum, elem) {
      return (sum + elem.price);
    }, 0);
    return bun ? (2 * bun.price + sum) : sum;
  }, [ingredients, bun]); 


  return (
    <section className={styles.burgerConstructor}>
        <div ref={dropRef} className={cn(styles.burger, 'mt-25', 'pl-4','pr-4')} style={{border: isHover && 'gray dashed'}}>
          <h1 className={cn(`text text_type_main-medium`, styles.title)}>
          {(ingredients.length === 0) && !isHover && "Выберите ингредиенты"}
          {isHover && "Отпустите элемент над выделенной областью"}
          </h1>
          {bun && <div className={'pl-8'}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>}
          <ul className={cn('custom-scroll', styles.list)}>
          {ingredients.map((ingredient, index) => <BurgerConstructorElement key={ingredient.id} index={index} ingredient={ingredient} onDelete={deleteConstructorIngredient}/>)}
          </ul>
          {bun && <div className={'pl-8' }>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>}
        </div>
      <div className={cn(styles.order, 'pt-10')}>
        <div className={cn('mr-10', styles.total)}>
          <span className={cn("text text_type_digits-medium")}>{totalPrice}</span>
          <CurrencyIcon className={"pl-2 pr-10"} type="primary"/>
        </div>
        <Button htmlType="button" type="primary" disabled = {!totalPrice || !bun} size="large" onClick={createOrder}>Оформить заказ</Button>
        {orderIsLoading && <Modal title="Загрузка..." onClose={closeOrderModal}></Modal>}
        {orderNumber && <Modal title="" onClose={closeOrderModal}><OrderDetails orderNumber={orderNumber}></OrderDetails></Modal>}
      </div>      
    </section>
  )
}

// BurgerConstructor.propTypes = {
//   ingredients: PropTypes.arrayOf(ingredientPropType),
// }

export default BurgerConstructor;