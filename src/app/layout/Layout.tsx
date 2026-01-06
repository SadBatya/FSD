import { Outlet } from "react-router";
import { Footer } from "@/shared/ui";

export const Layout = () => {
  return (
    <div>
      <div>Шапка</div>
      <Outlet />
      <Footer />
    </div>
  );
};
