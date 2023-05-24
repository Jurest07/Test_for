import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './pages/start_page/StartPage';
import NonExistentPage from './pages/non_existent_page/NonExistentPage';
import PersonalPage from './pages/personal_page/PersonalPage';
import AuthorizationPage from './pages/authorization_page/AuthorizationPage';
import TestDB from './pages/test_db/TestDB';
import { useState } from 'react'

function App() {

  const selectLang = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<StartPage selectLang={selectLang}/>} />
        <Route path="*" element={<NonExistentPage />} />
        <Route path="personal_account" element={<PersonalPage />} />
        <Route path="authorization" element={<AuthorizationPage />} />
        <Route path="test_db" element={<TestDB />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

