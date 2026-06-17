import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function Button({
  href,
  children,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className="
        inline-flex
        items-center
        justify-center
        rounded-lg
        bg-primary
        px-6
        py-3
        text-white
        font-medium
        transition
        hover:opacity-90
      "
    >
      {children}
    </Link>
  );
}
