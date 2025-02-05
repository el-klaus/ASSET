import { auth, signIn } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaGoogle } from "react-icons/fa";


const SignInPage = async () => {
    const session = await auth();

    if (session) {
        redirect("/dashboard");
    }

    return (
        <main className="flex items-center justify-center h-screen">
            <div className="text-center p-6 max-w-sm w-full bg-transparent shadow-2xl rounded-lg">
                <h1 className="text-xl font-semibold mb-4">Sign Up / Sign in</h1>
                <div className="space-y-4">
                    {/* Google Sign-In */}
                    <form
                        className="w-full py-3 px-6 border-y-2 shadow-lg text-red-700 rounded-md flex items-center justify-center space-x-3 hover:bg-cyan-600 transition-all"
                        action={async () => {
                            "use server";
                            await signIn("google");
                        }}
                    >
                        <FaGoogle className="text-2xl" />
                        <button type="submit">Sign in with Google</button>
                    </form>
                    
                    {/* Magic Link Sign-In */}
                    <form
                        className="w-full py-3 px-6 border shadow-lg text-gray-700 rounded-md flex flex-col items-center space-y-3"
                        action={async () => {
                            "use server";
                            const email = get("email");
                            if (email) {
                                await signIn("email", { email });
                            }
                        }}
                    >
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
                        >
                            Sign in with Magic Link
                        </button>
                    </form>
                </div>

                <p className="mt-4 text-gray-500 text-sm">
                    By signing in, you agree to our <Link href={"/terms"} className="text-blue-400 hover:underline hover:underline-offset-1">Terms of Service</Link> and <Link href={"/privacy"} className="text-blue-400 hover:underline hover:underline-offset-1">Privacy Policy</Link>
                </p>
            </div>
        </main>
    );
};

export default SignInPage;
