import React, {useEffect} from 'react';
// Assets
import bg from './assets/png/Background.png'
import logo from './assets/svg/LogoHarryPotter.svg'

// Components
import ActionButton from './components/actionButton'
import Card from './components/card'

// Redux
import { Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="bg">
          <img src={bg} alt="bg" />
        </div>
        <div className="f-action-buttons">
          <ActionButton actionName="Favoritos" />
          <ActionButton actionName="Agregar" />
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="filter-section">
          <div className="title">
            <span>Selecciona tu filtro</span>
          </div>
        </div>

        <div className="container-cards">
          <Card />
        </div>
      </div>
    </Provider>
  );
}

export default App;
