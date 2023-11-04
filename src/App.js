import './App.css';

function App() {
  const imageSrc = 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/sushi-sashimi-1296x728-header.jpg?w=1155&h=1528'

  return (
    <div className="container">
      <h1>Sbake Sushi</h1>
      <img className='main-image' src={imageSrc} />

      <p>Text text text text text text text text text text</p>
      <button id="buy">Order</button>
      <script src="https://telegram.org/js/telegram-web-app.js"></script>
    </div>
  );
}

export default App;
