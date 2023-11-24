import CsrmrInfoType from "types/CsmrInfoType";

//Table 라이브러리
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSetRecoilState } from "recoil";
import { atomIsModal } from "recoil/atomIsModal";
import { atomSelectedCsmr } from "recoil/atomSelectedCsmr";

interface CsmrTableProps {
  csmrInfoList: CsrmrInfoType[];
}

const CsmrTable = ({ csmrInfoList }: CsmrTableProps) => {
  const setSelectedCsmr = useSetRecoilState(atomSelectedCsmr);
  const setIsModal = useSetRecoilState(atomIsModal);

  const columns = [
    "고객관리번호",
    "고객명",
    "입력자사원번호",
    "입력일시",
    "발송",
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
                setIsModal(true);
                setSelectedCsmr(csmrInfo.csmrMgmtNo);
              }}
            >
              <TableCell align="center">{csmrInfo.csmrMgmtNo}</TableCell>
              <TableCell align="center">{csmrInfo.csmrNm}</TableCell>
              <TableCell align="center">{csmrInfo.inpEeno}</TableCell>
              <TableCell align="center">{csmrInfo.inpDtm}</TableCell>
              <TableCell align="center">asdf</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CsmrTable;
