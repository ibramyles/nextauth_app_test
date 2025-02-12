/** @format */

import React from 'react';
import { logout } from '@/lib/authactions';

const LogoutBtn = () => {
  return (
    <form action={logout}>
      <button className='p-2 bg-blue-500 text-white' type='submit'>
        Logout
      </button>
    </form>
  );
};

export default LogoutBtn;
