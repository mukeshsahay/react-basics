import './App.css';
import Footer from './Footer';
import Header from './Header';
import LearnReact from './LearnReact';
import ReactTutorial from './ReactTutorial';
import Profile from './profile';

function App() {
  return (
    <div className="App-header">
      <Header name={'Mukesh'} />
      <Profile />
      <LearnReact />
      <ReactTutorial />
      <Footer year={2023} />
    </div>
  );
}

export default App;
