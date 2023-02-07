import Header from "../../components/Header";
import Footer from "../../components/Footer";
function DefaultLayout({ children }: any) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
