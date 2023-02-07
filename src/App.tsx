import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Fragment } from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import { publicRoutes } from "./routes";
import { PageNotFound } from "./pages";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page: any = route.page ? route.page : PageNotFound;
            const path = route.path ? route.path : "*";
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
          /** redirect to /women when user goes to / */
          <Route path="/" element={<Navigate to="/women" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
