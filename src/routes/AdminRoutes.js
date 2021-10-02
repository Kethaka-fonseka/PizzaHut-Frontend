import React from "react";
import { Route, Switch } from "react-router-dom";
import AddEmployee from "../components/Administration/Employee Management/AddEmployee";
import AdminPanel from "../components/Administration/AdminPanel";
import Delivery from "../components/Administration/Delivery Management/Delivery";
import Dashboard from "../components/Administration/Dashboard/Dashboard";
import ViewEmployee from "../components/Administration/Employee Management/ViewEmployee";
import UpdateEmployee from "../components/Administration/Employee Management/UpdateEmployee.";
import UpdateProduct from "../components/Administration/Product Management/UpdateProduct";
import AddProduct from "../components/Administration/Product Management/AddProduct";
import ViewProducts from "../components/Administration/Product Management/ViewProducts";
import Orders from "../components/Administration/Order Management/Orders";
import ViewOrder from "../components/Administration/Order Management/ViewOrder";
import AddPromotion from "../components/Administration/Promo  Management/AddPromotion";
import UpdatePromotion from "../components/Administration/Promo  Management/UpdatePromotion";
import ViewPromotions from "../components/Administration/Promo  Management/ViewPromotions";
import ViewUsers from "../components/Administration/User Management/ViewUsers";
import AddUser from "../components/Administration/User Management/AddUser";
import UpdateUser from "../components/Administration/User Management/UpdateUser";
import ViewMoreDetails from "../components/Administration/User Management/ViewRecords";
import ContactUsers from "../components/Administration/User Management/ContactUser";
import PaymentManagement from "../components/Administration/Payment Management/PaymentManagement";
import TransactionFilter from "../components/Administration/Payment Management/Filter";
import Refund from "../components/Administration/Payment Management/Refund";
import ContactBuyer from "../components/Administration/Payment Management/contactBuyer";
import EmployeeRecords from "../components/Administration/Employee Management/EmployeeRecords";
import RefundInvoice from "../components/Administration/Payment Management/RefundInvoice";
import ViewDelivery from "../components/Administration/Delivery Management/ViewDelivery";

function AdminRoutes(props) {
  return (
    <>
      <Route path="/admin/em/add-employee" component={AddEmployee} />
      <Route path="/admin/em/view-employees" component={ViewEmployee} />
      <Route path="/admin/em/update-employee/:id" component={UpdateEmployee} />

      <Route
        path="/admin/um/view-employee-details/:id"
        component={EmployeeRecords}
      />
      <Route
        path="/admin/payment/refund-invoice/:id"
        component={RefundInvoice}
      />

      <Route path="/admin/um/add-user" component={AddUser} />
      <Route path="/admin/um/view-users" component={ViewUsers} />

      <Route path="/admin/um/contact-user/:id" component={ContactUsers} />
      <Route
        path="/admin/um/view-user-details/:id"
        component={ViewMoreDetails}
      />
      <Route path="/admin/um/update-user/:id" component={UpdateUser} />

      <Route path="/admin/payment/management" component={PaymentManagement} />
      <Route path="/admin/payment/filter/:id" component={TransactionFilter} />
      <Route path="/admin/payment/refund/:id" component={Refund} />
      <Route path="/admin/payment/contact/:id" component={ContactBuyer} />

      <Route path="/admin/add-product" component={AddProduct} />
      <Route path="/admin/view-products" component={ViewProducts} />
      <Route path="/admin/update-product/:id" component={UpdateProduct} />

      <Route path="/admin/add-promo" component={AddPromotion} />
      <Route path="/admin/view-promos" component={ViewPromotions} />
      <Route path="/admin/update-promo" component={UpdatePromotion} />

      <Route path="/admin/delivery" component={Delivery} />
      <Route path="/admin/view-delivery" component={ViewDelivery} />
      <Route path="/admin/dashboard" component={Dashboard} />
      <Route path="/admin/view-order" component={ViewOrder} />
      <Route path="/admin/orders" component={Orders} />
    </>
  );
}

export default AdminRoutes;
