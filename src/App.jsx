import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import RestrictedRoute from "./components/Routes/RestrictedRoute";

function App() {
  console.log("well, hello");

  return (
    <div className="App">
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            {/* <Route index element={<HomePage />} /> */}
            <Route
              path="/signup"
              index
              element={<RestrictedRoute component={<SignUpPage />} />}
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
