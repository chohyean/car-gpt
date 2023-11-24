import { Stack } from "@mui/material";
import SideBar from "components/SideBar";
import Home from "pages/Home";
import { Routes, Route } from "react-router-dom";

function HomeRouter() {
  return (
    <Stack>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Stack>
  );
}

export default HomeRouter;
