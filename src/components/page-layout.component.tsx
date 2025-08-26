import { Navbar } from "./navbar.component";

interface PageLayoutProps {
  title: string;
  accentWord?: string;
  children: React.ReactNode;
}

export default function PageLayout({
  title,
  accentWord,
  children,
}: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center my-8">
          {title}
          <span className="caveat text-5xl"> {accentWord}</span>
        </h1>
        {children}
      </div>
    </>
  );
}
