import React from "react";

export default () => (
  <div>
    <div
      css={`
        color: white;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        width: 800px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        height: 80vh;
        header,
        #phone {
          width: 50%;
        }
        h1 {
          font-size: 400%;
          font-weight: 600;
        }
        p {
          font-size: 150%;
        }
      `}
    >
      <header>
        <h1>Mov</h1>
        <p>
          L'appli qui
          <br /> <strong>collecte vos données</strong> <br />
          de déplacement.
        </p>
      </header>
      <Phone />
    </div>
    <a
      href="#quoi"
      css={`
        display: block;
        background: #ffffff4f;
        border: 3px solid #333;
        border-radius: 0.3rem;
        width: 7rem;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
        padding: 0.2rem 0.6rem;
        font-size: 130%;
        color: black;
        text-transform: uppercase;
        font-weight: 600;
        margin: 0 auto;
      `}
    >
      Quoi 😲 ?
    </a>
  </div>
);

let Phone = () => (
  <div
    id="phone"
    css={`
      #container {
        position: relative;
        display: block;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(10, 10, 10, 1);
        width: 200px;
        height: 400px;
        border-radius: 20px;
        box-shadow: -2px 3px 7px rgba(0, 0, 0, 0.35);
        animation: zoomIn 2s ease;
      }

      @keyframes zoomIn {
        from {
          transform: scale(0.9);
          opacity: 0;
        }
        to {
          transform: scale(1);
          opacity: 1;
        }
      }

      #shadows {
        z-index: 10;
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 200px;
        height: 400px;
        border-radius: 20px;
        background: rgba(0, 0, 0, 0);
        box-shadow: inset 0px 1px 1px 1px rgba(50, 50, 50, 0.8),
          inset 0px -1px 1px 1px rgba(40, 40, 40, 0.75),
          inset 0px -2px 3px 1px rgba(200, 200, 200, 1),
          inset 0px -5px 3px 1px rgba(10, 10, 10, 0.95),
          inset 0px 2px 3px 1px rgba(255, 255, 255, 1),
          inset 3px 4px 3px 1px rgba(10, 10, 10, 1),
          inset 6px 0px 3px 1px rgba(175, 175, 175, 0.5),
          inset 10px 0px 10px 1px rgba(175, 175, 175, 0.5),
          inset -3px 4px 3px 1px rgba(10, 10, 10, 1),
          inset -6px 0px 3px 1px rgba(200, 200, 200, 0.7),
          inset -10px 0px 10px 1px rgba(200, 200, 200, 0.5);
      }

      #screen {
        opacity: 0;
        text-shadow: none;
        display: flex;
        color: white;
        justify-content: center;
        align-items: center;
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: -3px;
        bottom: 0;
        width: 196px;
        height: 375px;
        background: linear-gradient(to bottom right, #6c5ce7, #bcb5f1);
        border-radius: 17px;
        animation: turnOn 1s ease forwards;
        animation-delay: 1.5s;

        font-size: 200%;
        flex-wrap: wrap;
        > * {
          text-align: center;
          width: 100%;
        }
      }

      @keyframes turnOn {
        from {
          opacity: 0.6;
        }
        to {
          opacity: 1;
        }
      }

      #sidebutton {
        position: absolute;
        margin: auto;
        left: auto;
        right: -2px;
        top: 70px;
        bottom: auto;
        border-radius: 0px;
        box-shadow: inset -1px 0 2px rgba(255, 255, 255, 0.5),
          inset 0px 1px 2px rgba(150, 150, 150, 0.75),
          inset -1px -1px 2px 0 rgba(20, 20, 20, 0.75);
        background: rgba(25, 25, 25, 1);
        height: 30px;
        width: 3px;
      }

      #ltbutton {
        position: absolute;
        margin: auto;
        left: -2px;
        right: auto;
        top: 60px;
        bottom: auto;
        border-radius: 0px;
        box-shadow: inset -1px 0 2px rgba(255, 255, 255, 0.5),
          inset 0px 1px 2px rgba(150, 150, 150, 0.75),
          inset -1px -1px 2px 0 rgba(20, 20, 20, 0.75);
        background: rgba(25, 25, 25, 1);
        height: 50px;
        width: 3px;
      }

      #lbbutton {
        position: absolute;
        margin: auto;
        left: -2px;
        right: auto;
        top: 130px;
        bottom: auto;
        border-radius: 0px;
        box-shadow: inset -1px 0 2px rgba(255, 255, 255, 0.5),
          inset 0px 1px 2px rgba(150, 150, 150, 0.75),
          inset -1px -1px 2px 0 rgba(20, 20, 20, 0.75);
        background: rgba(25, 25, 25, 1);
        height: 30px;
        width: 3px;
      }
    `}
  >
    <div id="container">
      <div id="shadows"></div>
      <div id="screen">
        {/* 
          <h2>📌</h2>
            */}
        <small>
          🚶🏿‍♀️ 🚲
          <br />
          🚗 🚌
          <br />
          🚅
        </small>
      </div>
      <div id="camera">
        <div id="lens"></div>
      </div>
      <div id="sidebutton"></div>
      <div id="ltbutton"></div>
      <div id="lbbutton"></div>
    </div>
  </div>
);
