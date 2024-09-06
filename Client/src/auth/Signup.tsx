import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import { Contact2, Loader, LockKeyhole, Mail, User2 } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  type SignupInputState = {
    fullname: string;
    email: string;
    password: string;
    contact: string;
  };

  const [input, setInput] = useState<SignupInputState>({
    fullname: "",
    email: "",
    password: "",
    contact: "",
  });

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(input);
  };

  const loading = false;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={loginSubmitHandler}
        className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4"
      >
        <div className="mb-4">
          <h1 className="font-bold text-2xl">Adarsh Ahaar</h1>
        </div>

        <div className="relative mb-4">
          <Input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={input.fullname}
            onChange={changeEventHandler}
            className="pl-10 focus-visible:ring-1"
          />
          <User2 className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
        </div>

        <div className="relative mb-4">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={input.email}
            onChange={changeEventHandler}
            className="pl-10 focus-visible:ring-1"
          />
          <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
        </div>

        <div className="relative mb-4">
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={input.password}
            onChange={changeEventHandler}
            className="pl-10 focus-visible:ring-1"
          />
          <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
        </div>

        <div className="relative mb-4">
          <Input
            type="text"
            name="contact"
            placeholder="Contact No."
            value={input.contact}
            onChange={changeEventHandler}
            className="pl-10 focus-visible:ring-1"
          />
          <Contact2 className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
        </div>

        <div className="mb-10">
          {loading ? (
            <Button disabled className="w-full bg-orange hover:bg-hoverOrange">
              <Loader className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-orange hover:bg-hoverOrange"
            >
              Signup
            </Button>
          )}
        </div>

        <Separator />

        <p className="mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
