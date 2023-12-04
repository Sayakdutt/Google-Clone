import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import { AppContext } from "./context/ImageSearchContext";
import Error from "./components/Error";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:query/:startIndex" element={<SearchResult />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
