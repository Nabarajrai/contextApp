import React from "react";

const PageContent = ({ children }) => {
  const styles = {
    backgroundColor: "white",
    height: "100vh",
    width: "100vw",
  };
  return <div style={styles}>{children}</div>;
};

export default PageContent;
