import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="m-20">
      <h1 className="my-4 text-lg font-bold">Logged in user: {loggedInUser}</h1>
      <h2 className="my-4 font-medium">
        Our grocery online store having lots of child components inside this web
        page.
      </h2>
    </div>
  );
};

export default Grocery;
