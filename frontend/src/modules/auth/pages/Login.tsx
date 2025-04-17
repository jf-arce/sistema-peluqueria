"use client";

import { COLORS } from "@/constants/colors";
import Link from "next/link";
import { Button } from "quick-ui-components";
import { useState } from "react";
import { AuthService } from "../auth.service";

export const Login = () => {
    const [loading, setLoading] = useState(false);
    const [userLogged, setUserLogged] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget); 
        const formDataObj = Object.fromEntries(formData.entries());
        
        setError("");
        setLoading(true);
        await AuthService.login(formDataObj as { email: string; password: string })
            .then((res) => {
                console.log("Login response:", res);
                setUserLogged(res);
            })
            .catch(() => {
                setError("Error al iniciar sesión. Verifica tus credenciales.");
            })
            .finally(() => {
                setLoading(false);
                console.log(userLogged);
            });
    };

    return (

        <div className="bg-white text-black rounded-lg shadow-lg p-6">
            <h1 className="text-center mb-6 text-2xl font-bold text-gray-800">
                Iniciar sesión
            </h1>

            <form method="POST" onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@mail.com"
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="********"
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        required
                    />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <div className="text-sm">
                    <Link href="/forgot-password" className="text-primary hover:underline">
                        ¿Olvidaste tu contraseña?
                    </Link>
                </div>

                <Button
                    colorBg={COLORS.primary}
                    type="submit"
                    loading={loading}
                >
                    Iniciar sesión
                </Button>
            </form>

            <p className="mt-6 text-sm text-center text-gray-700">
                ¿No tenés cuenta?{" "}
                <Link href="/auth/register" className="text-primary font-medium hover:underline">
                    Regístrate
                </Link>
            </p>
        </div>

    );
};
