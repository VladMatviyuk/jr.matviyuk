import { Badge } from '@/shared/components';
import { FC } from 'react';

interface IProps {
  readonly list: string[];
}

export const TechnologiesList: FC<IProps> = ({list}) => {

  if (!list.length) return;

  return list.map((tech, index) => <Badge key={index} value={tech}/>);
}