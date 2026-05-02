/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {BrowserRouter, Routes, Route, Navigate, useLocation} from 'react-router';
import {Header, Footer} from './components/Layout';
import {LandingPage} from './pages/LandingPage';
import {ProductPage} from './pages/ProductPage';
import {LaunchPage} from './pages/LaunchPage';
import {DashboardPage} from './pages/DashboardPage';
import {AdminPage} from './pages/AdminPage';
import {ManufacturerPage} from './pages/ManufacturerPage';
import {StorePage} from './pages/StorePage';
import {CartPage} from './pages/CartPage';
import {LoginPage} from './pages/LoginPage';
import {getStoredUser} from './auth';

function RequireAuth({children}: {children: React.ReactNode}) {
  const location = useLocation();
  const user = getStoredUser();

  if (!user) {
    const next = `${location.pathname}${location.search}${location.hash}`;
    return <Navigate to={`/login?mode=signin&next=${encodeURIComponent(next)}`} replace state={{from: next}} />;
  }

  return <>{children}</>;
}

function AppRoutes() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fb]">
      {!isLandingPage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/campaign" element={<Navigate to="/login?mode=signup&next=%2Flaunch" replace />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/launch" element={<RequireAuth><LaunchPage /></RequireAuth>} />
          <Route path="/dashboard" element={<RequireAuth><DashboardPage /></RequireAuth>} />
          <Route path="/admin" element={<RequireAuth><AdminPage /></RequireAuth>} />
          <Route path="/manufacturer" element={<RequireAuth><ManufacturerPage /></RequireAuth>} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isLandingPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

