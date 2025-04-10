import { lazy, Suspense } from "react"
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  const Contacts = lazy(() => import('./pages/Contacts'));
  const Gallery = lazy(() => import('./pages/Gallery'));

  return <>
    <Header />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path={"/"} element={<Contacts />} />
        <Route path={"/gallery"} element={<Gallery />} />
        <Route path={"*"} element={<h1>Not Found 404</h1>} />
      </Routes>
    </Suspense>
  </>
}

export default App
