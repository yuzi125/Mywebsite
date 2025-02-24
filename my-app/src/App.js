// import logo from './logo.svg';
// import './App.css';
// import React, { useEffect, useState } from 'react';

// function App() {
//   // 記錄伺服器回傳的訊息
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     // 發送 GET 請求到 Node.js 伺服器的 /api 端點
//     fetch('http://localhost:3001/api')
//       .then((response) => response.json()) // 解析回應為 JSON
//       .then((data) => {
//         // 更新 message 狀態
//         setMessage(data.message);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []); // 空陣列表示只在組件加載時執行一次

//   return (
//     <div className="App">
//       <h1>{message}</h1> {/* 顯示伺服器回應的訊息 */}
//     </div>
//   );
// }

// export default App;
// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    // 發送 GET 請求到 Node.js API
    fetch('http://localhost:3001/api/about')
      .then(response => response.json())
      .then(data => setAboutData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{aboutData.name}</h1>
        <p>Email: {aboutData.email}</p>
        <p>Bio: {aboutData.bio}</p>
      </header>
    </div>
  );
}

export default App;
