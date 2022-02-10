import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Component/Login";
import Header from "./Component/Header";
import VideoConference from "./Component/VideoConference";

function Routing(){
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/video-conference" component={VideoConference} />
      </Switch>
    </Router>
  )
}

export default Routing;