"use client";
import React, { useState } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/lib/utils";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [testimony, setTestimony] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, phone, testimony });
    // Add form submission logic (e.g., send data to backend)
  };

  return (
    <div className="w-full max-w-md p-4 mx-auto bg-white rounded-none md:max-w-lg lg:max-w-xl md:rounded-2xl md:p-8 shadow-input dark:bg-black">
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="your.email@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              placeholder="Your mobile number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="testimony">Description</Label>
            <textarea
              id="testimony"
              rows="4"
              placeholder="Write your testimony here..."
              value={testimony}
              onChange={(e) => setTestimony(e.target.value)}
              className="w-full p-3 mt-2 border rounded-md shadow-input"
            />
          </LabelInputContainer>
        </div>

        <button
          type="submit"
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        >
          Submit Request &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
};

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 block w-full h-px transition duration-500 opacity-0 group-hover/btn:opacity-100 -bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="absolute block w-1/2 h-px mx-auto transition duration-500 opacity-0 group-hover/btn:opacity-100 blur-sm -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);

const LabelInputContainer = ({ children, className }) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>
);

export default RegisterForm;
