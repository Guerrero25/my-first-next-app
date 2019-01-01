import { Fragment } from "react";
import Channel from "./Channel";

function ChannelGrid({ channels }) {
  return (
    <Fragment>
      <div className="channels">
        {channels.map(channel => (
          <Channel
            key={channel.id}
            id={channel.id}
            name={channel.title}
            logoSrc={channel.urls.logo_image.original}
          />
        ))}
      </div>

      <style jsx>{`
        .channels {
          display: grid;
          grid-gap: 15px;
          padding: 15px;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        }
      `}</style>
    </Fragment>
  );
}

export default ChannelGrid;
