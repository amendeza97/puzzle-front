import React, {FC, useEffect} from 'react';
import {useDrag} from 'react-dnd';
import {getEmptyImage} from 'react-dnd-html5-backend';

import {ItemTypes} from '../../constants';
import {Container} from './styles';

export type ItemProps = {
  id: string;
  left: number;
  top: number;
  children: JSX.Element;
};

export const Item: FC<ItemProps> = ({id, left, top, children}): JSX.Element => {

  const [{isDragging}, drag, dragPreview] = useDrag(
    () => ({
      type: ItemTypes.IMAGE,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top],
  );

  useEffect(() => {
    dragPreview(getEmptyImage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
