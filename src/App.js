import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddComment from './Components/AddComment';
import ViewAllComments from './Components/ViewAllComments';
import CommentNavbar from './Components/CommentNavbar';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<AddComment />} />
      <Route path="/ViewAll" element= {<ViewAllComments />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
