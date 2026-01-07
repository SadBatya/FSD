import { Outlet } from "react-router";
import { Footer } from "@/shared/ui";
import { useUserStore } from "@/entities";

export const Layout = () => {
  const { profile } = useUserStore();

  return (
    <div>
      <div>Шапка</div>
      {profile?.name}
      <Outlet />
      <Footer />
    </div>
  );
};
