import { Link } from "react-router";
import { Icon } from "@/shared/ui";

export const MainPage = () => {
  return (
    <div>
      Main Page
      <Link to="/profile">Profile</Link>
      <Icon.CheckIcon />
    </div>
  );
};
