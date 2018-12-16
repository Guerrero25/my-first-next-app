import { Fragment } from "react";

function Header({ title }) {
  return (
    <Fragment>
      <header>{title}</header>

      <style jsx>{`
        header {
          color: #fff;
          background: #8756ca;
          padding: 15px;
          text-align: center;
        }
      `}</style>
    </Fragment>
  );
}

export default Header;
