import Login from "../../components/Account/Login";
import Register from "../../components/Account/Register";

const myAccount = () => {
  return (
    <>
      <div className="app__account mx-auto justify-items-start py-14 px-8 lg:max-w-screen-xl">
        <div className="flex flex-col lg:flex-row ">
          <Login />
          <Register />
        </div>
      </div>
    </>
  );
};

export default myAccount;
