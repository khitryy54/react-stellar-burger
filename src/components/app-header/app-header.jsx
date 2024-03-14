
import { Logo, BurgerIcon, ProfileIcon, ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import cn from 'classnames';
import React from 'react';


function AppHeader() {
  return (
  <header className={cn(styles.header, 'pt-4', 'pb-4')}>
    <nav className={cn(styles.nav)}>
      <div className={styles.link__wrap}>
        <a href="#" className={cn(styles.link, 'pt-4', 'pb-4', 'pl-5', 'pr-5', 'mr-2')}>
          <BurgerIcon type="primery"/>
          <span className={'text text_type_main-default ml-2'}>Конструктор</span>
        </a>
        <a href="#" className={cn(styles.link, 'pt-4', 'pb-4', 'pl-5', 'pr-5')}>
          <ListIcon type="secondary"/>
          <span className={'text text_type_main-default text_color_inactive ml-2'}>Лента заказов</span>
        </a>
      </div>
      <div className={styles.logo}>
        <Logo />
      </div>
      <a href="#" className={cn(styles.link, 'pt-4', 'pb-4', 'pl-5', 'pr-5')}>
        <ProfileIcon type="secondary"/>
        <span className={'text text_type_main-default text_color_inactive ml-2'}>Личный кабинет</span>
      </a>
    </nav>  
  </header>
  );
}

export default AppHeader;
