import Image from "next/image";
import { DialogDemo } from "@/components/ui/Modal";
import TodoTable from "@/components/TodoTable";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className=" max-w-5xl mx-auto mt-20">
      <section>
        <DialogDemo title="Add New Task" Adding={true}>
          <Button
            variant="default"
            className="w-full text-lg bg-teal-600 px-2 py-2 text-white uppercase"
          >
            Add Task
          </Button>
        </DialogDemo>
      </section>
      <section>
        <TodoTable />
      </section>
    </main>
  );
}
