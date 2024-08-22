import Image from "next/image";
import Button from "./Button";
import logo from "./logo.png";
import { Link } from "next/link";

const Navbar = () => {
  return (
    <>
      <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
          {/* <!-- Logo --> */}
          <div class="flex items-center">
            <Link href="../page" class="text-white text-2xl font-bold">
              <Image src={logo} height={42} width={42} />
            </Link>
          </div>
          {/* <!-- Buttons (Login and Sign Up) --> */}
          <Button />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
