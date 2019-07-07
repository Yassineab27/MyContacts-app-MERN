import React from "react";
import "../index.css";

const notFound = () => {
  return (
    <div>
      <h2>Error 404: Page not found</h2>
      <p className="text-center">
        *or you are not authorized to access it. If you are not logged in please
        log in!
      </p>
    </div>
  );
};

export default notFound;
