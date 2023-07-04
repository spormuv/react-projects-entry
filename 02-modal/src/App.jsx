import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={() => setOpen(true)}>
        ✨ Open Modal
      </button>

      {/* {open && <Modal setOpen={setOpen} open={open} />} */}

      <Modal setOpen={setOpen} open={open} />
    </div>
  );
}

export default App;
