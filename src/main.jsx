import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import Homepage from "./pages/Homepage.jsx";
import CourseListPage from "./pages/CourseListPage.jsx";
import CoursePage from "./pages/CoursePage.jsx";
import WishListPage from "./pages/WishListPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<CourseListPage />} />
        <Route
          path="/courses/react-frontend-development"
          element={<CoursePage />}
        />
        <Route path="/wishlist" element={<WishListPage />} />
      </Routes>
    </App>
  </BrowserRouter>
);
