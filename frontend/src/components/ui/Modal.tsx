import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddTask from "../AddTask";
import EditTask from "../EditTask";

export function DialogDemo({ children,title,Adding,editing }: { children: React.ReactNode, title:string,Adding?:boolean,editing?:boolean }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      

      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
          {Adding && <AddTask />}
          {editing && <EditTask/>}
        
      </DialogContent>
    </Dialog>
  );
}
