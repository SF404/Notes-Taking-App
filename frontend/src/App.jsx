import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import New from "./Pages/New";
import ListNotes from "./Pages/ListNotes";
import ViewNotes from "./Pages/ViewNotes";
import Edit from "./Pages/Edit";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ListNotes />}></Route>
            <Route path="new" element={<New />}></Route>
            <Route path="notes/:id/" element={<ViewNotes />}></Route>
            <Route path="notes/:id/edit/" element={<Edit />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
