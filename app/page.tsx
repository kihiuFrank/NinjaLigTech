import Banner from "@/components/Banner";
import Companies from "@/components/Companies/Companies";
import Games from "@/components/Games/index";
import Mentor from "@/components/Mentor/index";
import Testimonials from "@/components/Testimonials/index";
import Newsletter from "@/components/Newsletter/Newsletter";

export default function Home() {
  return (
    <main>
      <Banner />
      {/* <Companies /> */}
      <Games />
      <Mentor />
      {/* <Testimonials />
    <Newsletter /> */}
    </main>
  );
}
