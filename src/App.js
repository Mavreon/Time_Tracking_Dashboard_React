import React from "react";
import { Helmet } from "react-helmet";
import Profile from "./components/Profile";
import Container from "./UI/Container";


function App() {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Time Tracking Dashboard</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>

      <Profile/>
      
    </Container>
  );
}

export default App;
