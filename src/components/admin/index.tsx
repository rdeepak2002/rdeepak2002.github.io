import { k_admin_link } from "components/navbar";
import { useEffect } from "react";

interface AdminProps {
  setScreen: Function
}

const Admin = (props: AdminProps) => {

  useEffect(() => {
    props.setScreen(k_admin_link);
  });

  return (
    <div>
      <h1>Admin</h1>
    </div>
  );
}

export default Admin;