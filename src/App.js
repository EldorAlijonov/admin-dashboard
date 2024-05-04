import { Route, Routes } from "react-router-dom";
import { Home, List, Login, New, Single } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="user">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
