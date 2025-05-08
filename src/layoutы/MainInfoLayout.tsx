import type { FC, ReactNode } from 'react';

interface IProps {
  readonly children: ReactNode;
}

export const MainInfoLayout: FC<IProps> = ({children}) => {
  return (
    <main className="flex-1 flex items-center justify-center overflow-hidden">
      <div className="max-h-full overflow-auto max-w-96">
        { children }
      </div>
    </main>
  )
}