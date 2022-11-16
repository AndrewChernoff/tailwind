import { useState } from 'react';
import s from  './App.module.scss';
///import  './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={s.content}>
      <h1 className={s.title}>Hello User</h1>
      <input className={s.input} placeholder='Email'/>
      <input className={s.input} placeholder='Password'/>
      <button className={s.btn} onClick={() => setIsOpen(!isOpen)}>Login</button>
      {isOpen ? <div className='animate-fading text-center mt-2'>Yo</div> : null}
    </div>
  );
}

export default App;
