
import './App.css';
import Header from './Component/Header/Header';
import QuestionAnswer from './Component/Question-Answer/QuestionAnswer';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Shop></Shop>
       <QuestionAnswer></QuestionAnswer>
    </div>
  );
}

export default App;
