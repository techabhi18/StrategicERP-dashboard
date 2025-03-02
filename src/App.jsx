import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DynamicForm from "./pages/modules/submodules/page";
import NotFound from './pages/NotFound/page';
import ModuleDashboard from './pages/ModuleDashboard/page';
import Header from "./components/layout/Header";
import DynamicModule from "./pages/modules/page";
import ModuleLayout from "./components/layout/ModuleLayout";
import Dashboard from "./pages/Dashboard/page";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<ModuleDashboard />} />
        <Route path=":module" element={<ModuleLayout />}>
          <Route index element={<DynamicModule />} />
          <Route path=":form" element={<DynamicForm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
