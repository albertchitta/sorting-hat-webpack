import 'bootstrap'; // import bootstrap elements and js
import initialScreen from './components/initialScreen';
import '../styles/main.scss';
import domEvents from './helpers/domEvents';

const init = () => {
  initialScreen();
  domEvents();
};

init();
