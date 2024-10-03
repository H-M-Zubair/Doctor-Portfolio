import Dashboard from "@/components/Dashboard";
import { CarouselPlugin } from "@/components/Testimonials";
import About from "@/components/About";
import LayoutWrapper from "@/components/LayoutWrapper";
import Appointment from "@/components/Appointment";
import ClientRegistration from "@/components/toggle-auth-models/MainAuthModal";
// import ClientRegistration from "@/components/Registration";
export default function Home() {
  return (
    <main>
      <LayoutWrapper>
        <Dashboard />
        <About />
        <Appointment />
        <CarouselPlugin />
        {/* < ClientRegistration/> */}
      </LayoutWrapper>
    </main>
  );
}
