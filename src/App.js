import { useEffect, useState } from 'react';
import './App.css';
const imageSrc = 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/sushi-sashimi-1296x728-header.jpg?w=1155&h=1528'



function App() {
  let tg = window.Telegram.WebApp;

  const [submitError, setSubmitError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [tgUser, setTgUser] = useState({});
  const [userDataEx, setUserDataEx] = useState({  
    name: '',
    email: '',
    phoneNumber: 0
  });


  // main -> form
  const handleBuyClick = () => {
    setShowForm(true);
  };

  // form -> tg
  const handleOrderClick = (e) => {
    e.preventDefault();

    if (userDataEx.name.length < 5 || userDataEx.email.length < 5 || userDataEx.phoneNumber.toString().length < 5) {
      setSubmitError('All fields are required to have minumum 5 symbols');
    } else {
      // sending
      tg.sendData(JSON.stringify(userDataEx));
      tg.close();
    }
    
    setTimeout(() => {
      setSubmitError('');
    }, 4000)
  };

  useEffect(() => {
    let tg = window.Telegram.WebApp;
    
    setTgUser({
      last_name: tg.initDataUnsafe?.user?.first_name,
      first_name: tg.initDataUnsafe?.user?.last_name,
      username: tg.initDataUnsafe?.user?.username,
    });
  }, []);

  return (
    <div className="container">
      <h1>Sbake Sushi</h1>
      <h3>Welcome, 
        { ` ${ tgUser.first_name } ${ tgUser.last_name } (${ tgUser.username })!` }
      </h3>

      <div style={{ display: showForm ? 'none' : 'block' }} >
        <p>Sushi Set {"<Syrymbek>"}</p>
        <img className='main-image' src={imageSrc} alt="Sushi Set" />
        <button id='buy' onClick={handleBuyClick}>Buy</button>
      </div>

      <div className='form-div' style={{ display: showForm ? 'block' : 'none' }}>
        <div className='form'>
          <input type='text' 
          placeholder={userDataEx.name ? userDataEx.name : "Name"} 
          onChange={(e) => setUserDataEx({...userDataEx, name: e.target.value})} />

          <input type='email' placeholder='Email'
          onChange={(e) => setUserDataEx({...userDataEx, email: e.target.value})} />

          <input type='tel' placeholder='Phone number'
          onChange={(e) => setUserDataEx({...userDataEx, phoneNumber: e.target.value})} />
          
          <button onClick={handleOrderClick}>
            Send order
          </button>
          <p className='error'>{submitError}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
