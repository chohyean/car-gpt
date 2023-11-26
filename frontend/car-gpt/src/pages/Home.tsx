/*
회원목록 페이지
@author 조혜안
@since 2023.11.13
*/
import { Stack } from "@mui/material";
// import dummyCsmrInfoList from "api/dummyCsmrInfoList";
import CsmrModal from "components/CsmrModal";
import CsmrTable from "components/CsmrTable";
import { useEffect, useState } from "react";
import CsmrInfoType from "types/CsmrInfoType";

import { http } from "api/http";
import MailModal from "components/MailModal";
import dummyCsmrInfoList from "api/dummyCsmrInfoList";

export default function Home() {
  const [csmrInfoList, setCsmrInfoList] = useState<CsmrInfoType[]>([]);

  // 전체 회원 목록 조회
  async function getCustomers() {
    //axios 요청
    /*const response = await http.get(`/customers`);
    console.log("회원목록 받아오기");
    console.log(response.data);
    setCsmrInfoList(response.data);*/
    //dummy 요청
    const data = dummyCsmrInfoList();
    setCsmrInfoList(data);
  }

  useEffect(() => {
    // const data = dummyCsmrInfoList();
    getCustomers();
  }, []);

  return (
    <div>
      <Stack>
        <CsmrTable csmrInfoList={csmrInfoList} />
      </Stack>
      <CsmrModal />
      <MailModal />
    </div>
  );
}
