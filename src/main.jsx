import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import Homepage from "./pages/Homepage.jsx";
import CourseListPage from "./pages/CourseListPage.jsx";
import CoursePage from "./pages/CoursePage.jsx";
import WishListPage from "./pages/WishListPage.jsx";
import QuestionListPage from "./pages/QuestionListPage.jsx";
import QuestionPage from "./pages/QuestionPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />
        <Route path="courses">
          <Route index element={<CourseListPage />} />
          <Route path=":courseSlug" element={<CoursePage />} />
        </Route>
        <Route path="wishlist" element={<WishListPage />} />
        <Route path="questions">
          <Route index element={<QuestionListPage />} />
          <Route path=":questionSlug" element={<QuestionPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
