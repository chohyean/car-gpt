import { BrowserRouter } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { atomIsLogin } from "recoil/atomIsLogin";
import LoginRouter from "./LoginRouter";
import HomeRouter from "./HomeRouter";

function Router() {
  const isLogin = useRecoilValue(atomIsLogin);

  return (
    <BrowserRouter>{!isLogin ? <LoginRouter /> : <HomeRouter />}</BrowserRouter>
  );
}

export default Router;
