import { Fragment } from "react";
import Link from "next/link";

function Channel({ id, name, logoSrc }) {
  return (
    <Fragment>
      <Link href={`/channel?id=${id}`}>
        <a className="channel">
          <img src={logoSrc} alt="" />
          <h2>{name}</h2>
        </a>
      </Link>

      <style jsx>{`
        .channel {
          display: block;
          margin-bottom: 0.5em;
          color: #333;
          text-decoration: none;
        }
        .channel img {
          border-radius: 3px;
          box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
          width: 100%;
        }
        h2 {
          padding: 5px;
          font-size: 0.9em;
          font-weight: 600;
          margin: 0;
          text-align: center;
        }
      `}</style>
    </Fragment>
  );
}

export default Channel;
