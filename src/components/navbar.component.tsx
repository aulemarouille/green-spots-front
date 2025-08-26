import Image from "next/image";

export function Navbar() {
  return (
    <nav className="h-[60px] flex items-center ps-4">
      <Image src="/images/logo.png" alt="logo" width={150} height={50} />
    </nav>
  );
}
