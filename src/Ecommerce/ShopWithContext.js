import React from "react";
import ShopContext from "./ShopContext";

const ShopWithContext = WrappedComponent => {
  const WithHOC = props => {
    return (
      <ShopContext.Consumer>
        {context => <WrappedComponent {...props} context={context} />}
      </ShopContext.Consumer>
    );
  };

  return WithHOC;
};

export default ShopWithContext;
