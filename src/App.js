import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddComment from './Components/AddComment';
import ViewAllComments from './Components/ViewAllComments';
import CommentNavbar from './Components/CommentNavbar';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Add" element= {<AddComment />} />
      <Route path="/ViewAll" element= {<ViewAllComments />} />
      <Route path="/" element= {<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
