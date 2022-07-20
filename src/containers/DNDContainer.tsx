import {FC} from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

export type DNDContainerProps = {
  children?: JSX.Element;
};

export const DNDContainer: FC<DNDContainerProps> = ({
  children,
}): JSX.Element => <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
