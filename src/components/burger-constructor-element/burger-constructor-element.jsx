import { DragIcon, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor-element.module.css";
import cn from "classnames";
import {ingredientPropType} from "../../utils/prop-types";
import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch} from "react-redux";
import { constructorReorder } from "../burger-constructor/services/burger-constructor.action";


function BurgerConstructorElement({ingredient, onDelete, index}) {

  const {name, price, image} = ingredient;

  const dispatch = useDispatch();
  const ref = useRef(null);

  const [{isDrag}, dragRef] = useDrag({
    type: 'SORT_INGREDIENT',
    item: () => {return {ingredient, index}},
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    })
  });

  const [{handlerId}, dropRef] = useDrop({
    accept: 'SORT_INGREDIENT',
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
    }),
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action

      dispatch(constructorReorder({to: dragIndex, from: hoverIndex}));
      // moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

 

  const opacity = isDrag ? 0 : 1;

  dragRef(dropRef(ref));


  return (
    <div data-handler-id={handlerId} ref={ref} style={{opacity}} className={cn(styles.element, 'pr-1')}>
      <DragIcon type="primary" />
      <ConstructorElement handleClose={() => {onDelete(ingredient)}} text={name} price={price} thumbnail={image} />
    </div>
  );
}

BurgerConstructorElement.propTypes = {
  ingredient:ingredientPropType.isRequired
}

export default BurgerConstructorElement;