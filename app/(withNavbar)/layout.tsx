import "../globals.css";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/Footer";
import { AuthContextProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

export const metadata = {
  title: "NinjaLig Technologies",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContextProvider>
      <ProtectedRoute>
        <Navbar />
        {children}
        <Footer />
      </ProtectedRoute>
    </AuthContextProvider>
  );
}
