import Form from './components/Form/Form';
import List from './components/List/List';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
        <Form/>
        <List/>
    </div>
  );
}

export default App;
