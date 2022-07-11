import React, {FC} from 'react';
import {DragLayerMonitor, useDragLayer} from 'react-dnd';
import {Images} from '../../constants';

export const DragLayer: FC<{children?: JSX.Element}> = ({children}) => {  
    
  const {isDragging, currentOffset, item} = useDragLayer(
    (monitor: DragLayerMonitor) => {
      return {
        isDragging: monitor.isDragging(),
        currentOffset: monitor.getSourceClientOffset(),
        item: monitor.getItem(),
      };
    }
  );

  return isDragging && currentOffset
    ? <div style={{
      transform: `translate(${currentOffset.x}px, ${currentOffset.y}px)`,
      position: 'fixed',
      top: 0,
      left: 0,
      pointerEvents: 'none',
    }}>
        <img src={Images[item.id].image} style={{transform: `rotate(${item.rotate}deg)`}}  alt={`puuzle-piece-${item.id}-prev`} />
      </div> 
      : null;
};