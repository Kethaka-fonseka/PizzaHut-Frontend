import AdminPanel from "./Administration/AdminPanel";
import Home from "./Customer/Main Pages/Home";
import Login from "./Authentications/Login";
import CustomerDashboard from "./Customer/CustomerDashboard";

function AllNav() {
  const role = localStorage.getItem("user");

  if (role === "Admin" || role === "BranchManager" || role === "DeliveryManager") {
    return <AdminPanel />;
  } else {
    return <AdminPanel />;
    //<CustomerDashboard />
  };
  
}

export default AllNav;
