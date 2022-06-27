import React from 'react';
import loading from './loading.gif'

function Spinner() {
  return (
    <div className='text-center'>
        <img src={loading} alt='loading'/>
        <h2>The Data Is Loading , Please wait !!!</h2>
    </div>
  )
}

export default Spinner