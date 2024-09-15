import AddBook from './components/AddBook'
import Contact from './components/Contact'
import ListBooks from './components/ListBooks';
import { MyProvider } from './context/MyContext';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app/style/App.css"
import DataTime from './components/DataTime';
import Navigation from './components/Navigation';
import FakeApi from './components/FakeApi';

const App = () => {

  return (
    <div className='main'>
      <MyProvider>
        <Router>
          <Navigation />
          <DataTime />
          <Routes>
            <Route path='/ListBooks' exact Component={ListBooks} />
            <Route path='/' exact Component={FakeApi} />
            <Route path='/AddBook' exact Component={AddBook} />
            <Route path='/Contact' exact Component={Contact} />
          </Routes>
        </Router>
      </MyProvider>
    </div>
  )
}

export default App
