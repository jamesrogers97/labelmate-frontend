import React from 'react';
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import Analytics from "./pages/analytics/Analytics";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Accounting from './pages/accounting/Accounting';
import Reports from './pages/reports/Reports';
import Mail from './pages/mail/Mail';
import Feedback from './pages/feedback/Feedback';
import Messages from './pages/messages/Messages';
import Manage from './pages/manage/Manage';
import AdAnalytics from './pages/adanalytics/AdAnalytics';
import AdReports from './pages/adreports/AdReports';
import Heatmap from './pages/heatmap/Heatmap';
import Planner from './pages/planner/Planner';
import History from './pages/history/History';
import Files from './pages/files/Files';
import People from './pages/people/People';
import Backups from './pages/backups/Backups';
import dataParser from './utils/dataparser'

function App() {
  const [band, setBand] = React.useState('nashvillians');

  const [data, setData] = React.useState(dataParser(band));


  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar band={band} setBand={setBand} setData={setData}/>
        <Switch>
          <Route exact path="/">
            <Home data={data}/>
          </Route>
          <Route exact path="/analytics">
            <Analytics data={data}/>
          </Route>
          <Route path="/users">
            <UserList data={data}/>
          </Route>
          <Route path="/user/:userId">
            <User data={data}/>
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList data={data}/>
          </Route>
          <Route path="/product/:productId">
            <Product data={data}/>
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/accounting">
            <Accounting data={data}/>
          </Route>
          <Route path="/reports">
            <Reports data={data}/>
          </Route>
          <Route path="/mail">
            <Mail data={data}/>
          </Route>
          <Route path="/feedback">
            <Feedback data={data}/>
          </Route>
          <Route path="/messages">
            <Messages data={data}/>
          </Route>
          <Route path="/manage">
            <Manage data={data}/>
          </Route>
          <Route path="/adanalytics">
            <AdAnalytics data={data}/>
          </Route>
          <Route path="/adreports">
            <AdReports data={data}/>
          </Route>
          <Route path="/heatmap">
            <Heatmap data={data}/>
          </Route>
          <Route path="/planner">
            <Planner data={data}/>
          </Route>
          <Route path="/history">
            <History data={data}/>
          </Route>
          <Route path="/files">
            <Files data={data}/>
          </Route>
          <Route path="/people">
            <People data={data}/>
          </Route>
          <Route path="/backups">
            <Backups data={data}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
