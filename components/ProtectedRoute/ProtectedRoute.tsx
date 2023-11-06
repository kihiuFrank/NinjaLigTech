"use client";
import { auth } from "@/config/firebase.config";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  //const { user } = useAuth();
  const [user, setUser] = useState<any>(null);

  // useEffect(() => {
  //   if (!user.uid) {
  //     router.push("/");
  //   }
  // }, [router, user]);

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setUser(auth.currentUser);
      } else {
        setUser(null);
        router.push("/login");
        console.error(
          "Access to protected route denied, redirecting to login..."
        );
      }
    });
  }, [router, user]);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user: any) => {
  //     if (user) {
  //       localStorage.setItem("user", JSON.stringify(user));
  //       console.error(
  //         "Access to protected route denied, redirecting to login..."
  //       );
  //       router.push("/home");
  //     } else {
  //       localStorage.removeItem("user");
  //       router.push("/login");
  //     }
  //   });
  // }, [router, user]);

  return <div>{user ? children : null}</div>;
};

export default ProtectedRoute;
