import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import NewFeaturedPage from "./pages/NewFeaturedPage";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import KidsPage from "./pages/KidsPage";
import SalePage from "./pages/SalePage";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path="/newandfeatured" element={<NewFeaturedPage />} />
    <Route path="/men" element={<MenPage />} />
    <Route path="/women" element={<WomenPage />} />
    <Route path="/kids" element={<KidsPage />} />
    <Route path="/sale" element={<SalePage />} />
  </Route>)
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
