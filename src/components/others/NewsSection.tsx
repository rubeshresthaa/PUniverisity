import Image from "next/image";
import Filter from "../shared/FIlter";
import { SelectComp } from "../shared/Select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Events, notice } from "@/constants";

const NewsSection = () => {
  return (
    <div id="news" className="">
      <h1 className="text-blue-900 text-xl md:text-3xl font-bold text-center mt-4 md:my-5">
        Events & Notices
      </h1>
      <div>
        <div className="flex flex-col lg:flex-row justify-between gap-5  md:gap-2 mx-5 md:mx-10">
          <div className="w-full">
            <div className="sm:hidden w-full sm:my-6">
              <h1 className="text-blue-900 text-base text-center md:text-lg font-bold py-2">
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
            <div className="hidden sm:block mx-10 my-5 text-gray-900 space-y-4">
              <h1 className="text-blue-900 text-base text-center md:text-lg font-bold">
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
            <div className="px-0 lg:px-8">
              <Table>
                <TableBody>
                  {notice.map((item, index) => (
                    <TableRow
                      key={index}
                      className="flex flex-row  items-center justify-between lg:justify-between gap-0 md:gap-5 py-0 lg:py-2"
                    >
                      <TableCell className="text-sm md:text-lg font-semibold">
                        {item.title}
                      </TableCell>
                      <TableCell className="text-right">
                        <Dialog>
                          <DialogTrigger className="w-fit sm:w-40 text-sm md:text-base px-2 md:px-0 rounded py-1 bg-blue-950 text-white font-medium">
                            View More
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader className="space-y-1">
                              <DialogTitle className="text-xl">
                                {item.title}
                              </DialogTitle>
                              <DialogDescription className="text-gray-600">
                                {item.description}
                              </DialogDescription>
                              <h1 className="text-sm text-gray-500">
                                Published at : {item.publishedDate}
                              </h1>
                            </DialogHeader>
                            {item.image && (
                              <div className="w-full max-h-80">
                                <Image
                                  src={item.image}
                                  alt="notice image"
                                  width={0}
                                  height={0}
                                  sizes="100vw"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-blue-900 text-base md:text-lg font-bold py-4 lg:py-6">
              Upcoming Events
            </h1>
            <div className="space-y-2 lg:space-y-4 flex flex-col items-center gap-4 w-full px-2 sm:px-0">
              {Events.map((event, index) => (
                <div
                  key={index}
                  className="w-full sm:w-96 shadow-xl lg:shadow-2xl shadow-blue-100 hover:scale-105 transition-transform duration-300 ease-in cursor-pointer px-2 md:px-0"
                >
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
