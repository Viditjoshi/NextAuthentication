"use client"


import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

export const Social = () => { 
  return (<div className="flex items-center w-full gap-x-2">
    <Button
      size="lg"
      className="w-[50%]"
      onClick={() => {}}
      variant="outline"
    >
      <FcGoogle size={20} />
    </Button>
      <Button
      size="lg"
      className="w-[50%]"
      onClick={() => {}}
      variant="outline"
    >
      <FaGithub size={20} />
    </Button>
  </div>)
}
