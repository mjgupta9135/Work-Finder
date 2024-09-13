import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";
const array = [1, 2, 3, 4, 5];
const applicationTable = () => {
  return (
    <div className=" mt-6 border-2 bg-gray-400 rounded-xl mb-20">
      <Table>
        <TableHeader className="font-bold">
          <TableRow className="text-lg ">
            <TableHead className="font-bold text-center">Date</TableHead>
            <TableHead className="font-bold text-center">Job Role</TableHead>
            <TableHead className="font-bold text-center">Company</TableHead>
            <TableHead className="text-center font-bold ">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {array.map((item, index) => (
            <TableRow key={index} className="bg-white">
              <TableCell className="text-center">13/07/24</TableCell>
              <TableCell className="text-center">Front End Developer</TableCell>
              <TableCell className="text-center">Google</TableCell>
              <TableCell className="text-center ">
                <Badge className="text-xs bg-black text-white">Pending</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default applicationTable;
