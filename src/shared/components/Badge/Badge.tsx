import { FC } from 'react';

interface IProps {
  readonly value: string;
}

export const Badge: FC<IProps> = ({value}) => {
  return (
    <div className='border rounded-2xl px-2 text-gray-500'>{value}</div>
  )
}