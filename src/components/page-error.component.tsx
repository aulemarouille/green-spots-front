import Image from "next/image";

interface PageErrorProps {
  message: string;
}

export default function PageError({ message }: PageErrorProps) {
  return (
    <div className="flex flex-col items-center pt-8 gap-8">
      {message && <span>{message}</span>}
      <Image src="/images/server_down.webp" alt="server down" width={1000} height={1000} />
    </div>
  );
}
