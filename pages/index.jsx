import "isomorphic-fetch";
/* Components */
import Header from "../components/Header";
import ChannelGrid from "../components/ChannelGrid";

export default class extends React.Component {
  static async getInitialProps() {
    const req = await fetch("https://api.audioboom.com/channels/recommended");
    const { body: channels } = await req.json();

    return { channels };
  }

  render() {
    const { channels } = this.props;

    return (
      <div>
        <Header title="Podcasts" />
        <ChannelGrid channels={channels} />

        <style jsx global>{`
          body {
            font-family: system-ui;
            margin: 0;
          }
        `}</style>
      </div>
    );
  }
}
