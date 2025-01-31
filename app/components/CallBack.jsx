"use client";

import { useEffect, useState } from "react";
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

const AuthCallback = () => {
    const router = useRouter();
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (isSignInWithEmailLink(auth, window.location.href)) {
            let email = window.localStorage.getItem("emailForSignIn");
            if (!email) {
                email = window.prompt("Please provide your email for confirmation");
            }

            if (email) {
                signInWithEmailLink(auth, email, window.location.href)
                    .then(() => {
                        window.localStorage.removeItem("emailForSignIn");
                        router.push("/dashboard"); // Redirect after successful sign-in
                    })
                    .catch((error) => {
                        console.error(error);
                        setMessage("Error signing in. Try again.");
                    });
            }
        }
    }, [router]);

    return (
        <div className="flex items-center justify-center h-screen">
            <p>{message || "Signing you in..."}</p>
        </div>
    );
};

export default AuthCallback;
