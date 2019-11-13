import React from "react";

export default () => (
  <div>
    <div css="height: 100vh">
      <div
        css={`
          color: white;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
          max-width: 860px;
          margin: 0 auto;
          padding-left: 0.3rem;
          display: flex;
          align-items: center;
          header,
          #phone {
            width: 50%;
          }
          h1 {
            font-size: 400%;
            font-weight: 600;
            margin: 1.6rem 0;
          }
          p {
            font-size: 150%;
          }

          @media (max-width: 800px) {
            flex-wrap: wrap;
            header,
            #phone {
              width: 100%;
            }
          }
        `}
      >
        <header>
          <h1>Kilomètre</h1>
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
          margin: 1.6rem auto;
        `}
      >
        Quoi 😲 ?
      </a>
    </div>
    <Pourquoi />
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

let Pourquoi = () => (
  <div
    id="quoi"
    css={`
      max-width: 50rem;
      background: white;
      padding: 0.3rem 1rem;
      border-radius: 1rem;
      margin: 0 auto;
      box-shadow: 0 1px 6px rgba(1, 11, 22, 0.77), 0 1px 2px rgba(0, 2, 5, 0.73);
      ul {
        list-style-type: none;
        padding-left: 1rem;
      }
    `}
  >
    <h2>Reconstruire le service public du transport</h2>
    <p>Nous sommes au beau milieu de plusieurs crises graves. </p>
    <ul>
      <li>
        📢 la dépendance à la voiture n’a jamais été aussi subie, et
        l’approvisionnement en essence si incertain.{" "}
      </li>
      <li> 🌍 la transition écologique est au point mort.</li>{" "}
      <li>💨 les villes sont polluées et stressantes.</li>
    </ul>
    <p>
      {" "}
      Une solution à tous ces problèmes ? Le réseau de transport public n'est
      pas au niveau et les infrastructures doivent faire leur révolution.
    </p>
    <p>
      {" "}
      Aidez les collectivités à mieux comprendre vos déplacements du quotidien,
      pour que les nouvelles pistes cyclables, lignes de bus, petites lignes de
      train, nouvelles routes, bornes de recharge électrique, places de
      stationnement, et l’aménagement urbain en général ne vous laissent plus de
      côté.
    </p>
    <h2>Comment ça marche ?</h2>
    <p>
      Installez l'application, et vivez votre vie... et rien de plus !
      Kilomèt.re enregistre et détecte vos déplacements à pied, en voiture, à
      vélo, en bus, jour après jour,
      <strong> mais ils ne seront pas partagés</strong>.
    </p>

    <p>
      Puis si vous le voulez, partagez de façon totalement anonyme vos données
      de déplacement.
    </p>
    <ul>
      <li>
        🚗 Marre de toujours faire le même trajet en voiture ? Demandez un bus
        ou un train.
      </li>
      <li>
        🚌 Vous prenez les transports en commun, mais ils sont lents,
        irréguliers et ne passent pas au bon endroit ? Aidez-nous à mieux
        comprendre vos déplacements d'un point A à un point B.
      </li>
      <li>
        🚲 Fier de sortir le vélo, mais pas satisfait par les infrastructures
        cyclables ? Signalez votre trajet !
      </li>
      <li>
        Interessé uniquement par vos 📊 statistiques de déplacement ? Pas de
        problème, rien ne quittera votre téléphone.
      </li>
    </ul>
    <h2>Privée par défaut</h2>
    <p>
      🕵️ Rien ne sort de votre téléphone sans votre accord. Un déplacement
      particulier vous embarasse ? Pas de souci, effacez-le. Vous êtes le seul à
      partager vos données dans votre quartier ? Elles resteront au chaud.
    </p>
    <p>
      Si je les partage, que ferez-vous de mes données ? Elles seront simplement
      publiées de façon anonyme.{" "}
    </p>
    <p>
      Pourquoi devrais-je vous faire confiance ? Le code de l'application est
      entièrement libre, tout le monde peut vérifier qu'elle ne collecte pas les
      données autorisation.
    </p>
    <h2>Autres questions</h2>
    <p>L'appli va-t-elle plomber ma batterie ?</p>
    <p>Données pas représentatives.</p>
  </div>
);
