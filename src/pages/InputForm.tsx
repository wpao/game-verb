"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

//
const FormSchema = z.object({
  verb: z.string().min(2, {
    message: "verb must be at least 2 characters.",
  }),
});

export function InputForm() {
  const [wordColors, setWordColors] = useState<string[]>([
    "text-gray-500",
    "text-gray-500",
    "text-gray-500",
  ]);
  const [verbDate, setVerbDate] = useState<string[]>([]);
  //
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      verb: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // get data from local storage
    const verbDate = JSON.parse(localStorage.getItem("verb") || "[]");
    setVerbDate(verbDate);
    // console.log(verbDate); //['run', 'ran', 'ran']

    //
    const verbInput = data.verb.trim().toLowerCase().split(/\s+/);

    if (verbInput.length !== 3) {
      console.log("Input harus terdiri dari tiga kata!");
      setWordColors(["text-red-500", "text-red-500", "text-red-500"]);
      return;
    }

    const newColors = verbInput.map((word, index) =>
      word === verbDate[index] ? "text-green-500" : "text-red-500"
    );

    setWordColors(newColors);

    // //
    // const verbInput = data.verb;

    // //
    // if (verbInput.trim().split(/\s+/).length !== 3) {
    //   console.log("Input harus terdiri dari tiga kata!");
    // }

    // if (verbInput[0] === verbDate[0]) {
    //   // beri warna hijau
    // } else {
    //   // beri warna merah
    // }

    // if (verbInput[1] === verbDate[1]) {
    //   // beri warna hijau
    // } else {
    //   // beri warna merah
    // }
    // if (verbInput[2] === verbDate[2]) {
    //   // beri warna hijau
    // } else {
    //   // beri warna merah
    // }

    if (
      verbInput[0] === verbDate[0] &&
      verbInput[1] === verbDate[1] &&
      verbInput[2] === verbDate[2]
    ) {
      // alert("oke");
      // remove from local storage
      localStorage.removeItem("verb");
      form.reset();
    }
  }

  useEffect(() => {
    const storedVerb = JSON.parse(localStorage.getItem("verb") || "[]");
    if (Array.isArray(storedVerb) && storedVerb.length === 3) {
      setVerbDate(storedVerb);
    }
  }, []);

  // // useEffect yang dijalankan setiap kali wordColors diperbarui
  // useEffect(() => {
  //   console.log("Warna kata telah diperbarui:", wordColors);
  //   // Tambahkan efek tambahan di sini jika diperlukan
  // }, [wordColors]); // useEffect ini akan berjalan setiap kali wordColors berubah

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-10">
        <FormField
          control={form.control}
          name="verb"
          render={({ field }) => (
            <FormItem>
              <FormLabel>verb</FormLabel>
              <FormControl>
                <Input placeholder="v1 v2 v3" {...field} autoComplete="off" />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <p>
          <span className={wordColors[0]}>{verbDate[0] || "click"}</span>{" "}
          <span className={wordColors[1]}>{verbDate[1] || "button"}</span>{" "}
          <span className={wordColors[2]}>{verbDate[2] || "Acak"}</span>
        </p>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
