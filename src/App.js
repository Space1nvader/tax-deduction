import React, {useState} from 'react';
import MyModal from './components/MyModal';
import './App.css';

function App() {
  const [modal, setModal] = useState(false)
  const closeModal = () => {
    setModal(false)
  }
  return (
    <div className="App">
      {
        modal
        ? <MyModal props={closeModal}/>
        : <button onClick={()=>setModal(true)} className='button'>Налоговый вычет</button>
      }
    </div>
  );
}

export default App;
