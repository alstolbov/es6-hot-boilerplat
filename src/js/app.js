import './main.css';
import BD from './lib/BuilDom';
import Options from './options';
import Store from './store';
import MainGameScreen from './game/mainGameScreen';

const rootNode = BD.$(Options.rootNode);
rootNode.style.width = Options.gameSize.w + 'px';
rootNode.style.height = Options.gameSize.h + 'px';

Store.level = 0;

const app = new MainGameScreen();
app.create();
