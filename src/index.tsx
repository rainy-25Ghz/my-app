import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import Carousel from "./components/carousel";
const testSrcs = [
  "https://images.unsplash.com/photo-1615346340977-cf7f5a8f3059?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1615298681607-14ec66115339?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1615287715742-c9d52dedfb2a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://th.bing.com/th/id/OIP.EXjyhFqk5qloQMn-1X1PFQHaDX?w=329&h=159&c=7&o=5&pid=1.7",
];
ReactDOM.render(
  <React.StrictMode>
    <Carousel srcs={testSrcs} />
  </React.StrictMode>,
  document.getElementById("root")
);
