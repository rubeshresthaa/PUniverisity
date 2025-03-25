"use client";

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
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { passwordSchema } from "@/lib/utils";
import { useRegisterMutation } from "@/store/apiSlice";
import toast from "react-hot-toast";

const signupFormSchema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, { message: "This field can not be empty" })
      .email(),
    password: passwordSchema,
    first_name: z.string().trim().min(2),
    last_name: z.string().trim().min(2),
    phone: z.string().trim().min(10).max(10),
    cpassword: z
      .string()
      .trim()
      .min(1, { message: "This field can not be empty" }),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Passwords did not match",
    path: ["cpassword"],
  });

const Signup1 = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const [showPassword, setShowPassword] = useState(false);

  //define form
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: "",
      first_name: "",
      last_name: "",
      phone: "",
      password: "",
      cpassword: "",
    },
  });

  //submit handler
  const onSubmit = async (values: z.infer<typeof signupFormSchema>) => {
    const response = await register({
      email: values.email,
      first_name: values.first_name,
      last_name: values.last_name,
      phone: values.phone,
      password: values.password,
    });

    if (response && response.data) {
      toast.success("Successfully Register user");
    }
    if (response && response.error) {
      toast.error("Failed to register, please try again");
    }
    if (response.data) {
      form.reset();
    }
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl ">Create Your account</h1>
        {/* <p className="text-sm ">Login to your account</p> */}
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel className="font-semibold">First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel className="font-semibold">Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel className="font-semibold">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="tom@holland.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel className="font-semibold">Phone</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="9865410868" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-left">
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="flex items-center justify-between relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        {...field}
                      />
                      <span
                        className="absolute right-5 cursor-pointer"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {!showPassword ? (
                          <FaRegEye color="gray" />
                        ) : (
                          <FaRegEyeSlash />
                        )}
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cpassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <div className="flex items-center justify-between relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        {...field}
                      />
                      <span
                        className="absolute right-5 cursor-pointer"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {!showPassword ? (
                          <FaRegEye color="gray" />
                        ) : (
                          <FaRegEyeSlash />
                        )}
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="rounded-full px-2 sm:px-4 py-1 w-24 sm:min-w-32 bg-black text-white cursor-pointer"
          >
            {isLoading ? "Signing in.." : "Sign Up"}
          </button>
        </form>
      </Form>
    </div>
  );
};

export default Signup1;
