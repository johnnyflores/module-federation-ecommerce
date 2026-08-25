import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routesPaths } from "@/routes/common/routes";
import NotFoundPage from "@/pages/NotFound";
import AppLayout from "@/layout/app-layout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {routesPaths.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
