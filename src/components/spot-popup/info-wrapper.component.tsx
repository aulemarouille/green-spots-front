interface InfoWrapperProps {
  children: React.ReactNode;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export default function SpotInfoItem({ children, icon: Icon }: InfoWrapperProps) {
  return (
    <span className="text-sm flex gap-2 items-center">
      <Icon className="text-(--primary-color) shrink-0" size={20} />
      {children}
    </span>
  );
}
