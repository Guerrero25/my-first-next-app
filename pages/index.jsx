import Header from "../components/Header";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header title="Hello Next.js" />

        <style jsx global>{`
          body {
            margin: 0;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
