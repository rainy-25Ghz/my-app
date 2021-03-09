import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Carousel from "./components/carousel"
const testSrcs = [
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  "https://docs.microsoft.com/zh-cn/microsoft-edge/devtools-guide-chromium/media/beginners-html-edit1.msft.png",
  "https://docs.microsoft.com/zh-cn/microsoft-edge/devtools-guide-chromium/media/bing-devtools-send-feedback.msft.png"
]
ReactDOM.render(
  <React.StrictMode>
    < Carousel srcs={testSrcs} />
  </React.StrictMode>,
  document.getElementById('root')
);


