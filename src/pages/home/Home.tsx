import React, { useContext } from "react";

import AuthContext from "../../providers/AuthContextProvider";

import NavBar from "../../components/MainNavBar";
import Featured from "../../containers/Featured";
import RecentAdded from "../../containers/RecentAdded";
import ComingSoon from "../../containers/ComingSoon";
import Footer from "../../components/Footer";

const Home = (props: any) => {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <NavBar />
      <Featured />
      <RecentAdded />
      <ComingSoon />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
