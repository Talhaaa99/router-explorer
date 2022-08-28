import Link from "next/link";

const Header = () => {
  return (
    <div className="flex space-x-1 w-full items-center text-gray-300">
      <img
        src="https://explorer.routerprotocol.com/logo.svg"
        className="h-14 w-14 text-center"
      ></img>
      <Link href="/" to="/">
        <h1 className=" text-4xl tracking-[10px] font-semibold flex align-center hover:cursor-pointer">
          router
        </h1>
      </Link>
      <div className="w-full text-4xl tracking-wider  absolute flex justify-center align-center left-2">
        <h1 className="bg-clip-text font-bold ">Bridge Explorer</h1>
      </div>
    </div>
  );
};
export default Header;
