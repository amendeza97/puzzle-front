import React, {FC} from 'react';
import {useDrag} from 'react-dnd';

import {ItemTypes} from '../../constants';
import {Container} from './styles';

export type ItemProps = {
  id: string;
  left: number;
  top: number;
  children: JSX.Element | string;
};

export const Item: FC<ItemProps> = ({id, left, top, children}): JSX.Element => {
  const [{isDragging}, drag] = useDrag(
    () => ({
      type: ItemTypes.IMAGE,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top],
  )

  if (isDragging) {
    return <div ref={drag} />
  }

  return (
    <Container
      className="image"
      ref={drag}
      style={{left, top}}
      data-testid="image"
    >
      {children}
    </Container>
  )
}
