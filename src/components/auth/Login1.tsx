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
import Link from "next/link";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { passwordSchema } from "@/lib/utils";
import { useLoginMutation } from "@/store/apiSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const loginFormSchema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, { message: "This field can not be empty" })
      .email(),
    password: passwordSchema,
  })
  .required();

const Login1 = () => {
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);

  //define form
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //submit handler
  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    const response = await login({
      email: values.email,
      password: values.password,
    });

    response && response.data
      ? toast.success("Login successfull")
      : response.error
      ? toast.error("Failed to login, please try again")
      : "";
    if (response && response.data?.access) {
      form.reset();
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      router.push("/community");
    }

    form.reset();
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl ">Welcome Back</h1>
        <p className="text-sm ">Login to your account</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Password</FormLabel>
                <FormControl>
                  <div className="flex items-center justify-between relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      {...field}
                      className=""
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

          <div className="flex justify-between items-center">
            <button
              disabled={isLoading}
              type="submit"
              className="rounded-full px-4 py-1 min-w-32 bg-black text-white"
            >
              {isLoading ? "Loggin in.." : "Login"}
            </button>
            <Link href="#" className="text-sm font-semibold">
              Forget Passoword?
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Login1;
