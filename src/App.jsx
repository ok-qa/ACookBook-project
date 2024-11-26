import { Suspense } from "react";
import { Route, Routes } from "react-router";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import RestrictedRoute from "./components/Routes/RestrictedRoute";
import { HomePage } from "./pages/HomePage/HomePage";

import "./App.css";
import SignInPage from "./pages/SignInPage/SignInPage";
import MainRecipesPage from "./pages/MainRecipesPage/MainRecipesPage";

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
            <Route
              path="/signin"
              element={<SignInPage />}
              // element={<RestrictedRoute component={<SignInPage />} />}
            />
            <Route path="/recipes" element={<MainRecipesPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
