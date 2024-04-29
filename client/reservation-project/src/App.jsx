import { useState } from 'react'
import Popup from './components/popups'
import axios from 'axios'

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [name, setName] = useState('');
  const [ID, setID] = useState('');
  const [address, setAddress] = useState('');
  const [duration, setDuration] = useState('');
  
  const handleSubmit = async () => {

    try {
      await axios.post('http://localhost:5000/add-user', {
        name: name,
        id: ID,
        address: address,
        duration: duration
      });
      setButtonPopup(false);
      setInitialFormState();
    } catch (error) {
      console.log("failed"),
      console.error('Error adding user:', error);
    }
  }

  const initialFormState = {
    name: '',
    ID: '',
    address: '',
    duration: ''
  }

  const setInitialFormState = () => {
    setName(initialFormState.name);
    setID(initialFormState.ID);
    setAddress(initialFormState.address);
    setDuration(initialFormState.duration);
  }

  return (
    <>
      <div>
        <main>
          <h1>Hotel Management System</h1>
          <br /><br />
          <button onClick={() => setButtonPopup(true)}>Check in</button>
          </main>
          <Popup trigger={buttonPopup} setTrigger = {setButtonPopup} onClose = {() => setInitialFormState()}>
            <p>New Customer</p>
            <br />
            <form>
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
              <br /><br />
              <input type="number" placeholder= "ID" value={ID} onChange={(e) => setID(e.target.value)}></input>
              <br /><br />
              <input type="text" placeholder= "Address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
              <br /><br />
              <select value = {duration} onChange={(e) => setDuration(e.target.value)}>
              <option value = "SELECT">SELECT</option>
              <option value = "Overnight">Overnight</option>
                {[...Array(12)].map((_, index) => (
                  <option key={index + 1} value={(index + 1).toString()}>{index + 1}</option>
                ))}
              </select>
            </form>
            <br />
            <button onClick = {handleSubmit}>Submit</button>
          </Popup>
      </div>

    </>
  )
}

export default App