// import React from "react";
// import Header from "./components/Header/header";
// import "./App.css";
// import Movies from "./components/Movies/movies";
// import { route } from "react-router-dom";
// import Footer from "./components/footer/footer";
// import Filter from "./components/Filter/filter";
// import { MovieProvider } from "./context/movieContext";

// function App() {
//   return (
//     <MovieProvider>
//       <div className="App">
//         <Header />
//         <Filter />
//         <Movies />
//         <Footer />
//       </div>
//     </MovieProvider>
//   );
// }

// export default App;

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./learnRedux/Main";
import Login from "./learnRedux/Login";

function App() {
  return (
    <React.Fragment>
      <div className="content">
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
        <Switch>
          <Route path="/main" component={Main} />
        </Switch>
        <Redirect from="/" exact to="/login" />
      </div>
    </React.Fragment>
  );
}

export default App;
