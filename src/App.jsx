import { ToastContainer, toast } from "react-toastify";

import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import AvailablePlayers from "./components/Available Players/AvailablePlayers";
import NewsLetter from "./components/Newsletter/NewsLetter";
import Footer from "./components/Footer/Footer";

function App() {
  const [coinAdd, setCoinAdd] = useState(0);
  const handelCoinButton = (coin) => {
    const newCoin = coinAdd + coin;
    setCoinAdd(newCoin);

    toast.success(`Credit Added to your Account`, {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <NavBar coinAdd={coinAdd}></NavBar>
        <Banner handelCoinButton={handelCoinButton}></Banner>
        <AvailablePlayers
          coinAdd={coinAdd}
          setCoinAdd={setCoinAdd}
        ></AvailablePlayers>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <NewsLetter></NewsLetter>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
