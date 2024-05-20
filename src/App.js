import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';
import HomePage from './pages/HomePage/HomePage';
import FeaturesPage from './pages/FeaturesPage/FeaturesPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import PrivacyPage from './pages/PrivacyPage/PrivacyPage';
import DisclaimerPage from './pages/DisclaimerPage/DisclaimerPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegistrationPage/RegistrationPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ChatPage from './pages/ChatPage/ChatPage';
import ShareFilePage from './pages/ShareFilePage/ShareFilePage';
import SharedFilesPage from './pages/SharedFilesPage/SharedFilesPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/share-file" element={<ShareFilePage />} />
          <Route path="/shared-files" element={<SharedFilesPage />} />
          {/* Future routes can be added here */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
