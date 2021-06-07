import { useEffect } from "react";

const Admin = ({ stateChanger, ...rest }: any) => {

    useEffect(() => {
        stateChanger("admin");
    });

    return (
        <div className="admin-container">
            <h1>Admin</h1>
        </div>
    );
}

export default Admin;