"use client";

import Trash from "@/components/icons/Trash";
import UserTabs from "@/components/layout/UserTabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function Categories() {
  

  return (
    <section className="py-8 relative bottom-0 mb-0 bg-white">
      <UserTabs />
      <form className="w-1/2 mx-auto">
        <div className="flex items-end">
          <div className="grow p-4">
            <Label htmlFor="name">New category name</Label>
            <div className="mt-1 flex flex-row gap-2 ">
              <Input
                type="text"
                placeholder="Name"
                id="name"
                
              />
              <Button type="submit" className="bg-[#f13a01] text-white">
                Create
              </Button>
              <Button
                type="button"
                className="bg-gray-500 text-white"
                
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </form>

      <div className="w-1/2 mx-auto p-4">
         <Label >Existing Categories</Label>
         <div className="bg-[#F3F4F6] flex flex-row justify-between items-center rounded-md p-2">
            <p className="p-4">No categories</p>
            <div className="flex justify-center items-center gap-2">
                <Button variant={"outline"} className="">Edit</Button>
                <Button variant={"outline"} className=""><Trash /></Button>
            </div>
         </div>
      </div>
    </section>
  );
}
