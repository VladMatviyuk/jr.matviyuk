import type { FC } from 'react';
import { Badge } from '@/features';

interface IProps {
  readonly list: string[];
}

export const TechnologiesList: FC<IProps> = ({list}) => {
  if (!list.length) return;

  return list.map((tech, index) => <Badge key={ index } value={ tech }/>);
}