import { useEffect } from "react";

interface AdminProps {
  setScreen: Function
}

const Admin = (props: AdminProps) => {

  useEffect(() => {
    props.setScreen("admin");
  });

  return (
    <div className="admin-container">
      <h1>Admin</h1>
    </div>
  );
}

export default Admin;