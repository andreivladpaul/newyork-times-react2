import React from 'react';
import style from '../../css/loading-style.css';

export const Loading = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <div className="lds-facebook"><div></div><div></div><div></div></div>
    </div>
  )
}
