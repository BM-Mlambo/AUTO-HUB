export default function Signup(){
    return(
        <div className="flex justify-center items-center min-h-screen">
            <div  className="w-full max-w-xl p-10 border rounded-lg shadow-sm">
                <h1 className="text-3xl font-bold text-green-700 text-center">Create account</h1>
                <form className="mt-6 flex flex-col gap-4">
                    <input
                    type="text"
                    placeholder="full name"
                    className="border p-3 rounded-md placeholder-grey-500"
                    />

                    <input
                    type="email"
                    placeholder="email adress"
                    className="border p-3 rounded-md placeholder-grey-500"
                    />

                    <input
                    type="Password"
                    placeholder="password"
                    className="border p-3 rounded-md placeholder-grey-500"
                    />

                    <button className="bg-green-600 text-white py-3 rounded-md">Signup</button>

                </form>
                <p className="text-center text-grey-600 mt-4">Already have an account?
                    <a href="/login" className="text-green-600 ml-1"> Login</a>
                </p>

            </div>

        </div>
    )
}