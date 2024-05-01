"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerUser } from "@/services/authService";
import { redirect, useRouter } from "next/navigation";

const formSchema = z.object({
  username: z
    .string({ required_error: "username is required" })
    .min(2, "username should be longer than 2 characters")
    .max(20, "username shouldn't be longer than 20 characters"),
  email: z
    .string({ required_error: "email is required" })
    .min(6, "email should be longer then 6 characters")
    .email("Invalid Email"),
  password: z
    .string({ required_error: "password is required" })
    .min(6, "password should be longer than 6 characters")
    .max(20, "password shouldn't be longer than 20 characters")
    .refine((s) => !s.includes(" "), "Spaces are not allowed in the password"),
});

const Register = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const user = await registerUser({ ...values });
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-slate-100">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-card flex w-full max-w-96 flex-col gap-2 rounded-md px-6 py-4 shadow-sm"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" type="email" {...field} />
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-4">
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
};

export default Register;
