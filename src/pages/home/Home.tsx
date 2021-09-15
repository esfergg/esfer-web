import React, { useContext } from "react";

import AuthContext from "../../providers/AuthContextProvider";

import Header from "../../components/MainNavBar";
import Featured from "../../containers/Featured";
import RecentAdded from "../../containers/RecentAdded";
import ComingSoon from "../../containers/ComingSoon";

const Home = (props: any) => {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <Header />
      <Featured />
      <RecentAdded />
      <ComingSoon />
    </React.Fragment>
  );
};

export default Home;
