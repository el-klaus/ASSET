import { auth, signIn } from "@/auth"
import Link from "next/link";
import { redirect } from "next/navigation"
import { FaGoogle } from "react-icons/fa";



const SignInPage = async () => {
    const session = await auth()

    if (session) {
        redirect("/profile")
    }

    return (
        <main className="flex items-center justify-center h-screen bg-cyan-600">
            <div className="text-center p-6 max-w-sm w-full bg-transparent shadow-2xl rounded-lg">
                <h1 className="text-3xl font-bold mb-4">Sign Up / Sign in</h1>
                <div className="space-y-4">

                    {/* <form className="space-y-4"
                    id="signin"
                    > 
                        <input type="email" placeholder="enter your email" className="text-center text-lg outline-gray-600 bg-transparent p-2" />
                        <input type="password" placeholder="enter password" className="text-center text-lg outline-gray-600 bg-transparent p-2" ></input><br />
                        <button className="text-gray-200 border-y-2 shadow-lg px-3 py-1 text-lg rounded-md hover:bg-cyan-600 duration-100">sign in</button>
                    </form> */}

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
                    <div className="">
                    <Link href={"/auth/signin"} className="text-blue-400 hover:underline hover:underline-offset-1" >Sign-Up ?</Link>
                    </div>

                    
                </div>

                <p className="mt-4 text-gray-500 text-sm">
                    By signing in, you agree to our <Link href={"#"} className="text-blue-400 hover:underline hover:underline-offset-1">Terms of Service</Link>, and <Link href={"#"} className="text-blue-400 hover:underline hover:underline-offset-1">Privacy Policy</Link>
                </p>
            </div>
        </main>
    );
};

export default SignInPage;