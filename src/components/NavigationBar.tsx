import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const NavigationBar: FC = () => (
  <p>
    <NavLink to="/">Home</NavLink> | <NavLink to="/contacts">Contacts</NavLink>
  </p>
);
