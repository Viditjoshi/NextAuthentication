import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
}); 

interface HeaderProps {
  lable: string;
}

export const Header = ({ lable }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-2 text-center mb-8"> 
      <h1 className={cn("text-3xl font-semibold", font.className)}>Authentication</h1>
      <p className="text-muted-foreground text-md">
        {lable}
      </p>
    </div>
  );
};