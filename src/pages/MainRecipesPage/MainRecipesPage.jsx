import { api } from "../../api";

const MainRecipesPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p> {`Welcome. Your token is: ${api.getAuthHeader()}`}</p>
    </div>
  );
};

export default MainRecipesPage;
