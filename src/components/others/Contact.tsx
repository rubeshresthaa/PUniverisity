"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import FormInputDemo from "../shared/FormInput";

const ContactUs = () => {
  const contactFormSchema = z.object({
    firstName: z
      .string()
      .min(3, "First name must be at least 3 characters")
      .max(50),
    lastName: z.string().min(1, "Last name is requried").max(50),
    contact: z
      .string()
      .length(10, "Contact must be exactly 10 digits")
      .regex(/^\d+$/, "Contact must contain only numbers"),
    email: z
      .string()
      .min(2, { message: "Email is required" })
      .email({ message: "Invalid email address" })
      .trim(),
    contents: z
      .string()
      .min(1, { message: "Message is required" })
      .max(500, { message: "Message should not exceed 500 characters." }),
  });
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      contents: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="py-5 w-full px-4 lg:px-20">
      <h1 className="text-2xl lg:text-3xl font-bold text-center text-blue-900 sm:mb-4">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row justify-center  gap-10 lg:gap-10 px-0 lg:px-5  lg:py-4 rounded shadow-2xl">
        {/* First Section */}
        <div className="flex-1 space-y-5 px-2 sm:px-10 py-5 lg:py-10">
          <div className="py-5 mx-auto h-fit  rounded">
            <iframe
              className="w-full h-96 rounded"
              title="Map showing our location"
              aria-label="Map of our location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509603.6070537909!2d86.79739917657997!3d26.465342106044844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6f771a15150f%3A0xdd99dc050bf75e92!2sPurbanchal%20University%20Central%20Office!5e1!3m2!1sen!2snp!4v1742805626572!5m2!1sen!2snp"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Second Section */}
        <div className="flex-1 w-full lg:w-1/2 md:px-0 py-4 px-4 sm:px-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 space-y-4 sm:space-y-8 text-gray-900"
            >
              <FormInputDemo
                name="firstName"
                control={form.control}
                label="First Name"
                placeholder="first name"
              />
              <FormInputDemo
                name="lastName"
                control={form.control}
                label="Last Name"
                placeholder="last name"
              />
              <FormInputDemo
                name="contact"
                control={form.control}
                label="Contact Number"
                placeholder="contact"
              />
              <FormInputDemo
                name="email"
                control={form.control}
                label="Email"
                placeholder="email"
              />
              <FormField
                control={form.control}
                name="contents"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2 space-y-2">
                    <FormLabel className="sm:text-lg">
                      Message or Enquiry
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here."
                        {...field}
                        className="w-full min-h-[200px]"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-blue-800 hover:bg-blue-700 font-bold cursor-pointer"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
