/*
회원목록 테이블
@author 조혜안
@since 2023.11.25
*/
import { useEffect, useState } from "react";
import { http } from "api/http";
import CsrmrInfoType from "types/CsmrInfoType";

//Table 라이브러리
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Mail } from "@mui/icons-material";
import { Chip, IconButton } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { atomIsCsmrModal } from "recoil/atomIsCsmrModal";
import { atomSelectedCsmr } from "recoil/atomSelectedCsmr";
import { atomIsMailModal } from "recoil/atomIsMailModal";

interface CsmrTableProps {
  csmrInfoList: CsrmrInfoType[];
}

const CsmrTable = ({ csmrInfoList }: CsmrTableProps) => {
  const setIsCsmrModal = useSetRecoilState(atomIsCsmrModal);
  const setIsMailModal = useSetRecoilState(atomIsMailModal);
  const setSelectedCsmr = useSetRecoilState(atomSelectedCsmr);

  const columns = [
    "고객관리번호",
    "고객명",
    "이메일수신여부",
    "입력일시",
    "추천메일 발송",
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {/*테이블 컬럼*/}
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell align="center">{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/*테이블 데이터*/}
        <TableBody>
          {csmrInfoList.map((csmrInfo) => (
            <TableRow
              key={csmrInfo.csmrMgmtNo}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                cursor: "pointer",
              }}
              hover={true}
              onClick={() => {
                setIsCsmrModal(true);
                setSelectedCsmr(csmrInfo.csmrMgmtNo);
              }}
            >
              <TableCell align="center">{csmrInfo.csmrMgmtNo}</TableCell>
              <TableCell align="center">{csmrInfo.csmrNm}</TableCell>
              <TableCell align="center">
                {csmrInfo.telNum ? (
                  <Chip label="수신 동의" />
                ) : (
                  <Chip label="수신 미동의" variant="outlined" />
                )}
              </TableCell>
              <TableCell align="center">{csmrInfo.inpDtm}</TableCell>
              <TableCell align="center">
                <IconButton
                  aria-label="mail"
                  onClick={(event) => {
                    event.stopPropagation(); // 현재 발생한 이벤트 이후의 이벤트 막기
                    setIsMailModal(true);
                    console.log("메일클릭");
                  }}
                >
                  <Mail />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CsmrTable;
