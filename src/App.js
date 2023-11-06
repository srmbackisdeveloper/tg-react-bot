import './App.css';
const imageSrc = 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/sushi-sashimi-1296x728-header.jpg?w=1155&h=1528'

function App() {
  useEffect(() => {
    const buyButton = document.getElementById("buy");
    const orderButton = document.getElementById("order");

    buyButton.addEventListener("click", () => {
      document.getElementById("main").style.display = "none";
      document.getElementById("form-info").style.display = "block";

      // You may set the value for user_name-info here (assuming it's an input)
      document.getElementById("user_name-info").value = tg.initDataUnsafe.user.first_name + " " + tg.initDataUnsafe.user.last_name;
    });

    orderButton.addEventListener("click", () => {
      tg.close();
    });

    return () => {
      // Cleanup event listeners when the component unmounts
      buyButton.removeEventListener("click");
      orderButton.removeEventListener("click");
    };
  }, []);


  return (
     <div className="container">
      <div id='main' className='main'>
        <h1>Sbake Sushi</h1>
        <p>Sushi Set {"<Syrymbek>"}</p>
        <img className='main-image' src={imageSrc} alt="Sushi Set" />
        <button id='buy'>Buy</button>
      </div>

      <form id='form-info' style={{ display: 'none' }}>
        <input type='text' placeholder='Name' id='user_name-info' />
        <input type='email' placeholder='Email' id='user_email' />
        <input type='tel' placeholder='Phone number' id='user_phone' />
        <button id='order'>Send Order</button>
      </form>

      <script src="https://telegram.org/js/telegram-web-app.js"></script>
    </div>
  );
}

export default App;
