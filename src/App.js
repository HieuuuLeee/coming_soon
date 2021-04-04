import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={require("./logo1.png").default} alt="avatar" id="logo-light"/>
        <h1>Cảm ơn bạn đã ghé thăm trang web của chúng tôi</h1>
        <h2>Trang web đang trong giai đoạn phát triển</h2>
        <h3>Hẹn gặp bạn ở một ngày không xa</h3>
    </div>
  );
}

export default App;
