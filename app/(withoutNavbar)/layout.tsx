import "../globals.css";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/Footer";
import { AuthContextProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

export const metadata = {
  title: "NinjaLig Technologies",
  description: "Providing technological solutions for all your business needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContextProvider>
      <>{children}</>
    </AuthContextProvider>
  );
}
