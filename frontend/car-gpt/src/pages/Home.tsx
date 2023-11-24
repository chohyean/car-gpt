import { Stack } from "@mui/material";
import dummyCsmrInfoList from "api/dummyCsmrInfoList";
import CsmrTable from "components/CsmrTable";
import { useEffect, useState } from "react";
import CsrmrInfoType from "types/CsmrInfoType";

export default function Home() {
  const [csmrInfoList, setCsmrInfoList] = useState<CsrmrInfoType[]>([]);

  useEffect(() => {
    const data = dummyCsmrInfoList();
    setCsmrInfoList(data);
  }, []);

  return (
    <Stack>
      <CsmrTable csmrInfoList={csmrInfoList} />
    </Stack>
  );
}
