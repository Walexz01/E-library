import { Providers } from "./ChakraProvider";
import MockUp from "./MockUp";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <div className="dash">
        <MockUp>{children}</MockUp>
      </div>
    </Providers>
  );
}
