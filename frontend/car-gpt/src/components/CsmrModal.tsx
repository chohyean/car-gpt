/*
회원 상세정보 모달
@author 조혜안
@since 2023.11.25
*/

import { CssRounded } from "@mui/icons-material";
import { Box, Modal } from "@mui/material";
import dummyCsmrDetailInfo from "api/dummyCsmrDetailInfo";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { atomIsCsmrModal } from "recoil/atomIsCsmrModal";
import { atomSelectedCsmr } from "recoil/atomSelectedCsmr";
import CsmrDetailInfoType from "types/CsmrDetailInfoType";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #ffffff",
  borderRaius: 3,
  boxShadow: 24,
  p: 3,
};

export default function CsmrModal() {
  const csmrMgmtNo = useRecoilValue(atomSelectedCsmr);
  const [isCsmrModal, setIsCsmrModal] = useRecoilState(atomIsCsmrModal);
  console.log(csmrMgmtNo);

  const [csmrDetailInfo, setCsmrDetailInfo] = useState<CsmrDetailInfoType>();

  async function getCustomer() {
    const data = dummyCsmrDetailInfo();
    setCsmrDetailInfo(data);
    console.log("민아러");
    console.log(data);
  }

  useEffect(() => {
    csmrMgmtNo && getCustomer();
  }, [csmrMgmtNo]);

  return (
    <Modal
      open={isCsmrModal}
      onClose={() => setIsCsmrModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        {/* <div>{csmrDetailInfoList[0].csmrMgmtNo}</div> */}
        {/* <ListItemText
          sx={{ mb: 4 }}
          primary={csmrDetailInfoList[0].csmrMgmtNo}
          secondary={csmrDetailInfoList[0].emlAdr}
        />
        <Grid container spacing={2}>
          <Grid item xs={5}>
            성별
          </Grid>
          <Grid item xs={7}>
            {csmrDetailInfoList[0].sexCd}
          </Grid>
          <Grid item xs={5}>
            생년월일
          </Grid>
          <Grid item xs={7}>
            {csmrDetailInfoList[0].csmrTymdNo}
          </Grid>
          <Grid item xs={5}>
            휴대폰번호
          </Grid>
          <Grid item xs={7}>
            {csmrDetailInfoList[0].telNum}
          </Grid>
          <Grid item xs={5}>
            주소
          </Grid>
          <Grid item xs={7}>
            {csmrDetailInfoList[0].rdnmAdr}
          </Grid>
          <Grid item xs={5}>
            결혼여부
          </Grid>
          <Grid item xs={7}>
            {csmrDetailInfoList[0].mariYn}
          </Grid>
        </Grid>
        <Divider sx={{ mt: 3, mb: 3 }} />
        <Grid container spacing={2}>
          <Grid item xs={5}>
            이전차량코드
          </Grid>
          <Grid item xs={7}>
            {csmrDetailInfoList[0].csmrPreCarCd}
          </Grid>
          <Grid item xs={5}>
            차량보유대수
          </Grid>
          <Grid item xs={7}>
            {csmrDetailInfoList[0].carHldgCnt}
          </Grid>
          <Grid item xs={5}>
            차량교체주기(일)
          </Grid>
          <Grid item xs={7}>
            {csmrDetailInfoList[0].carChngPrd}
          </Grid>
        </Grid> */}
      </Box>
    </Modal>
  );
}
