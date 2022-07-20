import {FC} from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import {Puzzle} from '../pages';

export const Router: FC = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Puzzle />} />
    </Routes>
  </BrowserRouter>
);
