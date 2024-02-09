import {useState, useEffect} from "react";
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./burger-constructor.module.css";
import cn from 'classnames';
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {ingredientPropType} from "../../utils/prop-types";
import PropTypes from "prop-types";


function BurgerConstructor({ingredients}) {

  const [orderModal, setOrderModal] = useState(null);
  
  function closeOrderModal() {
    setOrderModal(null);
  }

  return (
    <section className={styles.burgerConstructor}>
      <div className={cn(styles.burger, 'pt-25', 'pl-4','pr-4', 'pb-10')}>
        <div className={'pl-8'}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </div>
        <ul className={cn('custom-scroll', styles.list)}>
        {ingredients.map(ingredient => <li key={ingredient._id} className={cn('pr-1', styles.item)}><DragIcon type="primary" /><ConstructorElement text={ingredient.name} price={ingredient.price} thumbnail={ingredient.image} /></li>)}
        </ul>
        <div className={'pl-8' }>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </div>
      </div>
      <div className={styles.order}>
        <div className={cn('mr-10', styles.total)}>
          <span className={cn("text text_type_digits-medium")}>1234567890</span>
          <CurrencyIcon className={"pl-2 pr-10"} type="primary"/>
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={() => {setOrderModal(true)}}>Оформить заказ</Button>
         {orderModal && <Modal title="" onClose={closeOrderModal}><OrderDetails></OrderDetails></Modal>}
      </div>      
    </section>
  )
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType),
}

export default BurgerConstructor;