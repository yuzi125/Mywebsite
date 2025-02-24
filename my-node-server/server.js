// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 3001;

// // 使用 CORS 來解決跨域問題
// app.use(cors());

// // 設定 API 路由
// app.get('/api', (req, res) => {
//   res.json({ message: 'Hello from Node.js API!' });
// });

// // 啟動伺服器
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());  // 啟用跨域請求
app.use(express.static(path.join(__dirname, 'build')));  // 提供 React 編譯後的靜態文件

// API 端點，返回簡單的資料
app.get('/api/about', (req, res) => {
  res.json({
    name: '吳 宥謙',
    email: 'yuzi1257@gmail.com',
    bio: '我專注於網頁前端技術的開發，擅長使用 HTML、CSS、JavaScript，並且對 UI/UX 設計充滿熱情。',
  });
});

// 回傳 React 頁面
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
