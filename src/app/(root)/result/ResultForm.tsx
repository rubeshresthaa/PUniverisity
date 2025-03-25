"use client";
import { Button } from "@/components/ui/button";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormInputDemo from "@/components/shared/FormInput";
const ResultForm = ({
  showResult,
}: {
  showResult: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const contactFormSchema = z.object({
    symbol: z.string().min(5, "symbol must be at least 8 characters"),
    dob: z.string(),
    semester: z.string(),
  });
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      symbol: "",
      semester: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    if (values) {
      showResult(true);
    }
    form.reset();
  }
  return (
    <div>
      {/* Second Section */}
      <div className="flex-1 w-full md:max-w-lg py-6 px-4 shadow rounded-md shadow-black mx-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormInputDemo
              name="symbol"
              control={form.control}
              label="Symbol Number"
              type="number"
              placeholder="057800542"
            />
            <FormInputDemo
              name="dob"
              control={form.control}
              label="Date of Birth"
              type="date"
              placeholder="Select date"
            />
            <FormField
              control={form.control}
              name="semester"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Semester</FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="1" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4">8</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold cursor-pointer  w-full text-base"
            >
              Post
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ResultForm;
