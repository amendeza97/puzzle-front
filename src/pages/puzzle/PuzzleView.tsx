import React, {FC, useCallback, useState} from 'react';
import {useDrop} from 'react-dnd';
import update from 'immutability-helper';

import {StylesContainer} from './styles';
import {ItemTypes, Images} from './constants';
import {Item, DragLayer} from './components';
import {Image} from './models';
import Rotate from '../../assets/icons/rotate.png';
import View from '../../assets/icons/view.png';
import Hidden from '../../assets/icons/hidden.png';

const ROtATE_DEG = 90;
const MAX_ROTATE_DEG = 360;

export const PuzzleView: FC = (): JSX.Element => {

  const [pictures, setPictures] = useState<Record<string, Image>>(Images);
  const [showLabel, setShowLabel] = useState<boolean>(false);

  const moveImage = useCallback(
    (id: string, left: number, top: number) => {
      setPictures(
        update(pictures, {
          [id]: {
            $merge: { left, top },
          },
        }),
      );
    },
    [pictures, setPictures],
  );

  const rotateImage = useCallback(
    (id: string, rotate: number) => {
      setPictures(
        update(pictures, {
          [id]: {
            $merge: { rotate, left: pictures[id].left + 1, top: pictures[id].top },
          },
        }),
      );
    },
    [pictures, setPictures],
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.IMAGE,
      drop(item: any, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as any;
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveImage(item.id, left, top);
        return undefined
      },
    }),
    [moveImage],
  );

  const handleOnWatchClick = (): void => {
    setShowLabel((prevShow) => !prevShow);
  }

  const handleOnRotateImageClick = (key: string) => {
    const {rotate} = pictures[key];
    rotateImage(key, (rotate + ROtATE_DEG) % MAX_ROTATE_DEG);
  }

  return (
    <StylesContainer>
      <div className='base' ref={drop}>
        <button
          className='btnWatch'
          onClick={handleOnWatchClick}>
            <img src={showLabel ? View : Hidden} alt='view' />  
        </button>
      {Object.keys(pictures).map((key) => {
        const {left, top, image, label, rotate} = pictures[key];
        return (
          <Item
            key={key}
            id={key}
            left={left}
            top={top}
            rotate={rotate}
          >
            <div className='wrapperItem'>
              <img src={image} style={{transform: `rotate(${rotate}deg)`}} alt={`puuzle-piece-${key}`} />
              {showLabel && <button
                className='buttonRotateImage'
                onClick={() => handleOnRotateImageClick(key)}
                >
                  <img className='rotateImage' src={Rotate} alt='rotate' />  
              </button>}
              {showLabel && <p className='label'>{label}</p>}
            </div>
          </Item>
        )
      })}
      <DragLayer />
      </div>
    </StylesContainer>
  );
}
