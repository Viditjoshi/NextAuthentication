"use server"

import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { defaultRedirectPath } from "@/routes";
import { AuthError } from "next-auth";

type LoginFormData = z.infer<typeof LoginSchema>;

export const login = async (values: LoginFormData) => {
    const validatedFields = LoginSchema.safeParse(values);
    
    if(!validatedFields.success){
        return { error : "Inavlid Fields!"};
    }

    const { email, password } = validatedFields.data;

    try { 

        await signIn(("credentials"), {
            email,
            password,
            redirectTo: defaultRedirectPath,
        });
        
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin": 
                    return { error: "Invalid credentials!" };

                default:
                    return { error: "Something went wrong!" };
            }
        }
        throw error;
    }
}