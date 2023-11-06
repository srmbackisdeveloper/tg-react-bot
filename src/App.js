import './App.css';

function App() {
  const imageSrc = 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/sushi-sashimi-1296x728-header.jpg?w=1155&h=1528'

  let tg = window.Telegram.WebApp;
  let buy = document.getElementById("buy")
  let order = document.getElementById("order")

  buy.addEventListener("click", () => {
    document.getElementById("main").style.display = "none";
    document.getElementById("form-info").style.display = "block";

    document.getElementById("user_name-info").value
    = tg.initDataUnsafe.user.first_name + " " + tg.initDataUnsafe.user.last_name
  })

  order.addEventListener("click", () => {
    tg.close();
  })


  return (
    <div className="container">
      <div className='main'>
        <h1>Sbake Sushi</h1>
        <p>Sushi Set {"<Syrymbek>"}</p>
        <img className='main-image' src={imageSrc} />
        <button id='buy'>Buy</button>
      </div>

      <form id='form-info'>
        <input type='text' placeholder='Name' id='user_name' />
        <input type='email' placeholder='Email' id='user_email' />
        <input type='tel' placeholder='Phone number' id='user_phone' />
        <button id='order'>Send Order</button>
      </form>

      <button id="buy">Order</button>
      <script src="https://telegram.org/js/telegram-web-app.js"></script>
    </div>
  );
}

export default App;
