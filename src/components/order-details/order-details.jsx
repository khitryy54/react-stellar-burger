import styles from './order-details.module.css';
import cn from 'classnames';
import Icon from '../../images/done.svg';

function OrderDetails() {
  return(
    <div className={cn('pt-4 pb-15', styles.details)}>
      <p className={"text text_type_digits-large"}>034536</p>
      <p className={cn("pt-8 pb-15 text text_type_main-medium")}>идентификатор заказа</p>
      <img src={Icon} alt={"иконка"}/>
      <p className={cn("pt-15 pb-2 text text_type_main-small")}>Ваш заказ начали готовить</p>
      <p className={cn("text text_type_main-small text_color_inactive")}>Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}
export default OrderDetails;