import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Fragment } from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import { publicRoutes } from "./routes";
import { PageNotFound } from "./pages";
import "../src/styles/App.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveProduct } from "./features/cart/cartSlice";
function App() {
  const storeData = localStorage.getItem("data");
  const data = storeData ? JSON.parse(storeData) : [];
  const dispatch = useDispatch();
  useEffect(() => {
    const newData = saveProduct(data);
    dispatch(newData);
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page: any = route.page ? route.page : PageNotFound;
            const path: string = route.path ? route.path : "*";
            let Layout: any = route.layout === null ? Fragment : DefaultLayout;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            );
          })}
          {/** redirect to /women when user goes to / */}
          <Route path="/" element={<Navigate to="/women" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
