import React from "react";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <div className="p-4">
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3 m-4">
        {message}, <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>.
      </p>
    </div>
  );
};

export default GetInTouch;
