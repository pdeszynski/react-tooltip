import React from 'react';

import { Header } from './Header';
import './page.css';

export interface Props {
  title: string;
  children: React.ReactNode;
}

export const Page = ({ title, children }: Props) => {
  return (
    <article>
      <Header />

      <section>
        <h2>{title}</h2>
        <div className="content">{children}</div>
      </section>
    </article>
  );
};
