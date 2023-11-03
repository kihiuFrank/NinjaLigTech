import Banner from "../../../components/Banner/index";
import Companies from "../../../components/Companies/Companies";
import Courses from "../../../components/Courses/index";
import Mentor from "../../../components/Mentor/index";
import Testimonials from "../../../components/Testimonials/index";
import Newsletter from "../../../components/Newsletter/Newsletter";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

export default function page() {
  return (
    <ProtectedRoute>
      <main>
        <Banner />
        <Companies />
        <Courses />
        <Mentor />
        <Testimonials />
        <Newsletter />
      </main>
    </ProtectedRoute>
  );
}
