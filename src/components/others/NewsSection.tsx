import Image from "next/image";
import Filter from "../shared/FIlter";
import { SelectComp } from "../shared/Select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";

const NewsSection = () => {
  const Events = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1663089174939-5870e2e8d62e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Hackethon 2025 (Season-1)",
      subTitle: "11th Chaitra and 12th Chaitra",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Hackethon 2025 (Season-1)",
      subTitle: "11th Chaitra and 12th Chaitra",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1681487469745-91d1d8a5836b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Hackethon 2025 (Season-1)",
      subTitle: "11th Chaitra and 12th Chaitra",
    },
  ];

  const notice = [
    {
      title: "1.(2081-12-10:BE /B.Arch.-I Sem)",
      btn: "Exam Center Notice",
    },
    {
      title: "1.(2081-12-10:BE /B.Arch.-I Sem)",
      btn: "Result Notice",
    },
    {
      title: "1.(2081-12-10:BE /B.Arch.-I Sem)",
      btn: "Exam Center Notice",
    },
    {
      title: "1.(2081-12-10:BE /B.Arch.-I Sem)",
      btn: "Exam Routine",
    },
  ];
  return (
    <div className="">
      <h1 className="text-blue-900 text-xl md:text-3xl font-bold text-center my-2 md:my-5">
        Events & Notices
      </h1>
      <div>
        <div className="flex justify-between gap-2 mx-5 md:mx-10">
          <div className="w-full">
            <div className="sm:hidden w-full px-4 my-6">
              <h1 className="text-blue-900 text-base md:text-lg text-center">
                Notices
              </h1>
              <SelectComp
                items={[
                  {
                    label: "All",
                    value: "products",
                  },
                  {
                    label: "Registration",
                    value: "registration",
                  },
                  {
                    label: "Exan Routine",
                    value: "examRoutine",
                  },
                  {
                    label: "Exam Center",
                    value: "examCenter",
                  },
                  {
                    label: "Results",
                    value: "result",
                  },
                ]}
                label="Category"
                placeholder="Select Category"
              />
            </div>
            <div className="hidden sm:block mx-10 my-5 text-gray-900">
              <h1 className="text-blue-900 text-base md:text-lg text-center">
                Notices
              </h1>
              <Filter
                filterField="category"
                options={[
                  {
                    label: "All",
                    value: "products",
                  },
                  {
                    label: "Registration",
                    value: "registration",
                  },
                  {
                    label: "Exan Routine",
                    value: "examRoutine",
                  },
                  {
                    label: "Exam Center",
                    value: "examCenter",
                  },
                  {
                    label: "Results",
                    value: "result",
                  },
                ]}
              />
            </div>
            <div className="px-5">
              <Table>
                <TableBody>
                  {notice.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-lg md:text-xl">
                        {item.title}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button className="rounded-3xl bg-blue-950">
                          {item.btn}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-blue-900 text-base md:text-lg text-center py-2 lg:py-6">
              Upcoming Events
            </h1>
            <div className="space-y-2 flex flex-col items-center w-full">
              {Events.map((event, index) => (
                <div key={index} className="w-96 shadow-xl ;g:shadow-2xl shadow-blue-100 hover:scale-105 transition-transform duration-300 ease-in cursor-pointer">
                 
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-40 object-cover rounded"
                    />
                    <div className="p-4 text-center">
                      <h1 className="text-lg font-semibold">{event.title}</h1>
                      <p className="text-sm text-gray-600">{event.subTitle}</p>
                    </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsSection;
