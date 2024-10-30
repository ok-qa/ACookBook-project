import { Suspense } from "react";
import { Route, Routes } from "react-router";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import RestrictedRoute from "./components/Routes/RestrictedRoute";
import { HomePage } from "./pages/HomePage/HomePage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/signup"
              element={<SignUpPage />}
              // element={<RestrictedRoute component={<SignUpPage />} />}
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
