import "isomorphic-fetch";
import { Fragment } from "react";
import Link from "next/link";
/* Components */
import Header from "../components/Header";
import ChannelGrid from "../components/ChannelGrid";

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const idChannel = query.id;

    const [reqChannel, reqSeries, reqAudios] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
    ]);

    const dataChannel = await reqChannel.json();
    const channel = dataChannel.body.channel;

    const dataAudios = await reqAudios.json();
    const audioClips = dataAudios.body.audio_clips;

    const dataSeries = await reqSeries.json();
    const series = dataSeries.body.channels;

    return { channel, audioClips, series };
  }

  render() {
    const { channel, audioClips, series } = this.props;

    return (
      <Fragment>
        <Header title="Podcasts">
          <Link href="/">
            <a>&lt; Back </a>
          </Link>
        </Header>

        <div
          className="banner"
          style={{
            backgroundImage: `url(${channel.urls.banner_image.original})`
          }}
        />

        <h1>{channel.title}</h1>

        {series.length > 0 && (
          <div>
            <h2>Series</h2>
            <ChannelGrid channels={series} />
          </div>
        )}

        <h2>Last Podcasts</h2>
        {audioClips.map(clip => (
          <Link href={`/podcast?id=${clip.id}`} prefetch key={clip.id}>
            <a className="podcast">
              <h3>{clip.title}</h3>
              <div className="meta">
                {Math.ceil(clip.duration / 60)} minutes
              </div>
            </a>
          </Link>
        ))}

        <style jsx>{`
          .banner {
            width: 100%;
            padding-bottom: 25%;
            background-position: 50% 50%;
            background-size: cover;
            background-color: #aaa;
          }
          h1 {
            font-weight: 600;
            padding: 15px;
          }
          h2 {
            padding: 5px;
            font-size: 0.9em;
            font-weight: 600;
            margin: 0;
            text-align: center;
          }

          .podcast {
            display: block;
            text-decoration: none;
            color: #333;
            padding: 15px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            cursor: pointer;
          }
          .podcast:hover {
            color: #000;
          }
          .podcast h3 {
            margin: 0;
          }
          .podcast .meta {
            color: #666;
            margin-top: 0.5em;
            font-size: 0.8em;
          }
        `}</style>

        <style jsx global>{`
          body {
            margin: 0;
            font-family: system-ui;
            background: white;
          }
        `}</style>
      </Fragment>
    );
  }
}
