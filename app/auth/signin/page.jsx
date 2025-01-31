import { auth, signIn } from "@/auth"
import Link from "next/link";
import { redirect } from "next/navigation"
import { FaGoogle } from "react-icons/fa";



const SignInPage = async () => {
    const session = await auth()

    if (session) {
        redirect("/dashboard")
    }

    return (
        <main className="flex items-center justify-center h-screen ">
            <div className="text-center p-6 max-w-sm w-full bg-transparent shadow-2xl rounded-lg">
                <h1 className="text-2xl font-bold mb-4">Sign Up / Sign in</h1>
                <div className="space-y-4">
                    <form
                        className="w-full py-3 px-6 border-y-2 shadow-lg text-red-700 rounded-md flex items-center justify-center space-x-3 hover:bg-cyan-600 transition-all"
                        action={async () => {
                            "use server"
                            await signIn("google")
                        }}
                    >
                        <FaGoogle className="text-2xl" />
                        <button className="" type="submit">Sign in with Google</button>

                    </form>
                        
                </div>

                <p className="mt-4 text-gray-500 text-sm">
                    By signing in, you agree to our <Link href={"/terms"} className="text-blue-400 hover:underline hover:underline-offset-1">Terms of Service</Link>, and <Link href={"/ter"} className="text-blue-400 hover:underline hover:underline-offset-1">Privacy Policy</Link>
                </p>
            </div>
        </main>
    );
};

export default SignInPage;