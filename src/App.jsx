import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import DynamicForm from "./pages/DynamicForm/page";
import DynamicModule from "./pages/DynamicModule/page";
import Dashboard from "./pages/Dashboard/page";
import { LocaleProvider } from "./i18n";
import Layout from "./components/layout";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="/:module" element={<DynamicModule />} />
              <Route path="/:module/:formType" element={<DynamicForm />} />
            </Route>
          </Routes>
        </Router>
      </LocaleProvider>
    </QueryClientProvider>
  );
};

export default App;
