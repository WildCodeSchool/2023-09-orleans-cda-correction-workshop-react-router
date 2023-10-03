import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import JsDef from "./pages/JsDef";
import CssDef from "./pages/CssDef";
import HtmlDef from "./pages/HtmlDef";
import Page404 from "./pages/404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />

        <div className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/js" element={<JsDef />} />
            <Route path="/css" element={<CssDef />} />
            <Route path="/html" element={<HtmlDef />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
