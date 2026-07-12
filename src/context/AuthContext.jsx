import {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";

import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  // ================= Register =================

  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  // ================= Login =================

  const login = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  // ================= Google Login =================

  const googleLogin = () => {
    setLoading(true);

    return signInWithPopup(
      auth,
      googleProvider
    );
  };

  // ================= Logout =================

  const logout = () => {
    setLoading(true);

    return signOut(auth);
  };

  // ================= Reset Password =================

  const resetPassword = (email) => {
    return sendPasswordResetEmail(
      auth,
      email
    );
  };

  // ================= Email Verification =================

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // ================= Update Profile =================

  const updateUserProfile = (userInfo) => {
    return updateProfile(
      auth.currentUser,
      userInfo
    );
  };

  // ================= Auth Observer =================

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,

    createUser,

    login,

    logout,

    googleLogin,

    resetPassword,

    verifyEmail,

    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;