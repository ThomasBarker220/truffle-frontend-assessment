import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <header>
        <div className="header-center">
          <h3>UploadMD</h3>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
