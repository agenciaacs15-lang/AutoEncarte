// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './Layout'; // Seu componente de Layout

// Crie componentes de página de exemplo
const Dashboard = () => <div className="p-8"><h1>Página do Dashboard</h1></div>;
const NewProject = () => <div className="p-8"><h1>Página de Novo Projeto</h1></div>;
const ImageBank = () => <div className="p-8"><h1>Página do Banco de Imagens</h1></div>;
const UserManagement = () => <div className="p-8"><h1>Página de Gerenciamento de Usuários</h1></div>;
const Settings = () => <div className="p-8"><h1>Página de Configurações</h1></div>;

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/newproject" element={<NewProject />} />
            <Route path="/imagebank" element={<ImageBank />} />
            <Route path="/usermanagement" element={<UserManagement />} />
            <Route path="/settings" element={<Settings />} />
            {/* Redireciona a rota inicial para /dashboard */}
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;