import { Fragment } from "react";

function Header({ title, children }) {
  return (
    <Fragment>
      <nav>
        <div className="actions">{children}</div>
        <header>{title}</header>
      </nav>

      <style jsx>{`
        nav {
          color: #fff;
          background: #8756ca;
          padding: 15px;
        }

        header {
          text-align: center;
        }

        .actions {
          height: 100%;
          left: 15px;
          position: absolute;
          top: 15px;
        }

        :global(.actions a) {
          display: inline-block;
          color: white;
          cursor: pointer;
          text-decoration: none;
        }
      `}</style>
    </Fragment>
  );
}

export default Header;
