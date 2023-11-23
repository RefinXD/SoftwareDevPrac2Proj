'use client'

import userRegister from "@/libs/userRegister";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import router, { useRouter } from "next/navigation";
import { useState } from "react";



export default function SignupPage() {
    const [userData, setUserData] = useState({
        userName: "",
        userEmail: "",
        userTel: "",
        userPassword: "",
    });
    const router = useRouter();

    const handleInputChange = (field: string, value: string) => {
        setUserData((prevUserData) => ({
            ...prevUserData,
            [field]: value,
        }));
    };

    const handleSignUp = () => {
        console.log(userData);
        try{
        userRegister(
            userData.userName,
            userData.userEmail,
            userData.userTel,
            "user",
            userData.userPassword
        );
        router.push("/api/auth/signin")
        }
        catch(error){
            alert("Failed to register!")
        }
    };

    return (
        <div className="bg-blue-100 min-h-screen flex flex-col">
            <div className="bg-gray-800 text-white py-4 text-center">
                <h1 className="text-4xl font-bold">Create an Account</h1>
                <p className="mt-2">Join our community and select your own space!</p>
            </div>
            <div className="container mx-auto flex items-center justify-center px-4">
                <div className="bg-white px-8 py-10 rounded-md shadow-md text-black w-full max-w-xl mt-8">
                    <div className="grid grid-cols-2 gap-5">
                    <input
                        type="text"
                        className="block border border-blue-200 w-full p-3 rounded mb-4"
                        name="fullname"
                        onChange={(data) => handleInputChange("userName", data.target.value)}
                        placeholder="Full Name"
                    />
                    <input
                        type="tel"
                        className="block border border-blue-200 w-full p-3 rounded mb-4"
                        name="tel"
                        onChange={(data) => handleInputChange("userTel", data.target.value)}
                        placeholder="Telephone Number"
                    />
                    <input
                        type="text"
                        className="block border border-blue-200 w-full p-3 rounded mb-4"
                        name="email"
                        onChange={(data) => handleInputChange("userEmail", data.target.value)}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        className="block border border-blue-200 w-full p-3 rounded mb-4"
                        name="password"
                        onChange={(data) => handleInputChange("userPassword", data.target.value)}
                        placeholder="Password"
                    />
                    </div>
                    <button
                        onClick={handleSignUp}
                        type="submit"
                        className=" w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none my-2"
                    >
                        Create Account
                    </button>
                </div>
            </div>
            <div className="text-gray-700 mt-6 text-center">
                Already have an account?
                <a className="no-underline text-blue-700" href="/api/auth/signin">
                    {' '}
                    Log in
                </a>
                .
            </div>
        </div>
    );
}
