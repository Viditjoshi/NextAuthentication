"use client"

import { Car } from "lucide-react";
import { 
  Card,
  CardHeader,
  CardFooter,
  CardContent
 } from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "./BackButton";

interface CardWrapperProps {
  children: React.ReactNode
  headerLable: string;
  backButtonLable: string;
  backButtonHref: string;
  showSocial?: boolean;
} 

export const CardWrapper = ({ 
  children, 
  headerLable, 
  backButtonLable, 
  backButtonHref, 
  showSocial
} : CardWrapperProps) => {
  return (<Card className="w-[400px] shadow-md">
    <CardHeader>
        <Header lable={headerLable}/>
    </CardHeader>
    <CardContent>
      {children}
    </CardContent>
    {showSocial && <CardFooter>
        <Social/>
    </CardFooter>
    }
    <CardFooter>
      <BackButton href={backButtonHref} lable={backButtonLable}/>
    </CardFooter>
  </Card>)

}