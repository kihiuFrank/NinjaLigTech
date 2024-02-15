"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { useRouter } from "next/navigation";

// User data type interface
interface UserType {
  email: string | null;
  uid: string | null;
  displayName: string | null;
  photoURL: string | null;
}

// Create auth context
const AuthContext = createContext({});

// Make auth context available across the app by exporting it
export const useAuth = () => useContext<any>(AuthContext);

// Create the auth context provider
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Define the constants for the user and loading state
  const [user, setUser] = useState<UserType>({
    email: null,
    uid: null,
    displayName: null,
    photoURL: null,
  });
  const [loading, setLoading] = useState<Boolean>(true);

  const router = useRouter();

  // Update the state depending on auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
        router.push("/");
      } else {
        setUser({ email: null, uid: null, displayName: null, photoURL: null });
        //router.push("/");
      }
    });

    setLoading(false);

    return () => unsubscribe();
  }, []);

  // Sign up the user
  const signUp = (email: string, password: string) => {
    try {
      return createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("Error registering user", error);
    }
  };

  // Login the user
  const logIn = (email: string, password: string) => {
    try {
      return signInWithEmailAndPassword(auth, email, password).then(
        (result) => {
          const user = result.user;
          console.log("User sign In is: ", user);

          if (result) {
            router.push("/");
          }
        }
      );
    } catch (error) {
      console.log("Error logging in", error);
    }
  };

  // ResetPassword
  const resetPassword = (email: string) => {
    try {
      return sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.log("Error Resetting Password", error);
    }
    router.push("/");
  };

  // sign in with google
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("User sign In is: ", user);

        if (result) {
          router.push("/");
        }

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        console.log("Error logging in user: ", error);
      });
  };

  // sign in with twitter
  const twitterSignIn = async () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("User sign In is: ", user);

        if (result) {
          router.push("/");
        }

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        console.log("Error logging in user: ", error);
      });
  };

  // Logout the user
  const logOut = async () => {
    try {
      setUser({ email: null, uid: null, displayName: null, photoURL: null });
      return await signOut(auth);
      console.log("Logged out successfully.");
    } catch (error) {
      console.error("Error logging out ", error);
    }
    router.push("/");
  };

  // Wrap the children with the context provider
  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        logIn,
        logOut,
        googleSignIn,
        twitterSignIn,
        resetPassword,
      }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
