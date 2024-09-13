import Navbar from "@/components/navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import ApplicationTable from "@/components/applicationTable";
import { Label } from "@/components/ui/label";
import UpdateProfileDialogue from "@/components/updateProfileDialogue";
const skills = ["HTML", "CSS", "JAVASCRIPT", "REACT.JS", "NODE.JS"];
const profile = () => {
  const isResume = true;
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto bg-white border-gray-200 border-2 rounded-2xl my-5 p-8">
        <div className="flex justify-between pb-5">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://imgs.search.brave.com/IrjckpSv0CZsbpLfnrNzwh401w4BcZjUvJYL3U9I8cI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NzE1Mjg1NS92ZWN0/b3IvbG9nby13aXRo/LXRoZS1sZXR0ZXIt/Yy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9XzZuSE9ReTNn/VjE2ZENIeGpUUUhM/b25JZWdWQU9YSm43/a012ZXJHdEZ3OD0" />
            </Avatar>
            <div>
              <h1 className="font-semibold text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis sapiente eligendi{" "}
              </p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>

        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            {" "}
            <Mail /> <span>Mjguptacse@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact /> <span>9135407413</span>
          </div>
        </div>

        <div>
          <h1>Skills</h1>
          <div className="flex items-center gap-2 my-4">
            {skills.length !== 0 ? (
              skills.map((item, index) => (
                <Badge className="bg-black text-white " key={index}>
                  {item}
                </Badge>
              ))
            ) : (
              <span>NA</span>
            )}{" "}
          </div>
        </div>
        <div className=" flex w-full max-w-sm items-center gap-4 my-6">
          <Label className="font-bold text-lg">Resume:-</Label>
          {isResume ? (
            <a
              className="border-2 py-1 rounded-full px-6 hover:bg-blue-700 hover:border-white hover:text-white ease-in duration-200"
              target="blank"
              href="https://www.youtube.com"
            >
              Mrityunjay_Resume.pdf
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-5xl mx-auto application bg-white rounded-xl mt-8">
        <h1 className="text-center font-bold text-2xl">Applied Jobs</h1>
        <ApplicationTable />
      </div>
      <UpdateProfileDialogue open={open} setOpen={setOpen} />
    </div>
  );
};

export default profile;
