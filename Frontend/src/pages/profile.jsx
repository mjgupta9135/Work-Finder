import Navbar from "@/components/navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Contact, Edit2, Mail } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import ApplicationTable from "@/components/applicationTable";
import { Label } from "@/components/ui/label";
import UpdateProfileDialogue from "@/components/updateProfileDialogue";
import { useSelector } from "react-redux";
import useGetAllAppliedJobs from "@/hooks/useGetAllAppliedJobs";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { DialogContent } from "@/components/ui/dialog";

const Profile = () => {
  useGetAllAppliedJobs();
  const isResume = true;
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const skills = user?.profile?.skills || [];

  // Split skills if they are in a string format
  const skillsArray =
    Array.isArray(skills) && typeof skills[0] === "string"
      ? skills[0]?.split(",")?.map((skill) => skill?.trim())
      : [];

  return (
    <div>
      <div className="max-w-5xl mx-auto bg-white border-gray-200 border-2 rounded-2xl my-5 p-8">
        <div className="flex justify-between pb-5">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user?.profile?.profilePhoto} />
            </Avatar>
            <div>
              <h1 className="font-semibold text-xl">{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>

          {/* Dialog Trigger for Update Profile */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Edit2 />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <UpdateProfileDialogue open={open} setOpen={setOpen} />
            </DialogContent>
          </Dialog>
        </div>

        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail /> <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact /> <span>{user?.phone}</span>
          </div>
        </div>

        <div>
          <h1>Skills</h1>
          <div className="flex items-center gap-2 my-4">
            {skillsArray.length > 0 ? (
              skillsArray.map((skill, index) => (
                <Badge
                  className="bg-black text-white px-2 py-1 rounded-md"
                  key={index}
                >
                  {skill?.trim()}
                </Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>

        <div className="flex w-full max-w-sm items-center gap-4 my-6">
          <Label className="font-bold text-lg">Resume:</Label>
          {isResume ? (
            <a
              href={user?.profile?.resume}
              className="border-2 py-1 rounded-full px-6 hover:bg-blue-700 hover:border-white hover:text-white ease-in duration-200"
              target="_blank"
              rel="noopener noreferrer" // Add rel for security
            >
              {user?.profile?.resumeOriginalName}
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
    </div>
  );
};

export default Profile;
