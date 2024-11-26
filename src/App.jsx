import { Suspense } from "react";
import { Route, Routes } from "react-router";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import RestrictedRoute from "./components/Routes/RestrictedRoute";
import { HomePage } from "./pages/HomePage/HomePage";
import { api } from "./api";

import "./App.css";
import MainRecipesPage from "./pages/MainRecipesPage/MainRecipesPage";

function App() {
  console.log(api.getBaseURL());
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
          <Route path="/recipes" element={<MainRecipesPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
