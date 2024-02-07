import Banner from "../../../components/Banner/index";
import Companies from "../../../components/Companies/Companies";
import Games from "../../../components/Games/index";
import Mentor from "../../../components/Mentor/index";
import Testimonials from "../../../components/Testimonials/index";
import Newsletter from "../../../components/Newsletter/Newsletter";

export default function page() {
  return (
    <main>
      <Banner />
      <Companies />
      <Games />
      <Mentor />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
