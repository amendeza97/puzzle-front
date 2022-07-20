import {FC} from 'react';

import {DNDContainer} from '../../containers';
import {PuzzleView} from './PuzzleView';

export const Puzzle: FC = (): JSX.Element => {
  return (
    <DNDContainer>
      <PuzzleView />
    </DNDContainer>
  );
};
