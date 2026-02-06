import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>
        <h2>Header (заглушка)</h2>
      </header>
      <main>{children}</main>
    </div>
  );
}
