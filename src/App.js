import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import AdminPage from './components/AdminPage';
import ViewBooks from './components/ViewBooks';
import BookDetails from './components/BookDetails';
import Checkout from './components/Checkout';
// import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/adminpage" element={<AdminPage/>}/>
          <Route path="/viewbooks" element={<ViewBooks/>}/>
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
        {/* <Footer />  */}
      </div>
    </Router>
  );
};

export default App;
