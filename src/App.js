import { AppThemeProvider } from "./ui/theme/AppThemeProvider";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./conts/routes";
import { createContext, useState } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const ScrollContext = createContext();

function App() {
  const [position, setPosition] = useState(0);

  return (
    <ScrollContext.Provider value={{ position, setPosition }}>
      <AppThemeProvider>
        <Router>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            ))}
          </Routes>
        </Router>
      </AppThemeProvider>
      <ToastContainer />
    </ScrollContext.Provider>
  );
}

export default App;
