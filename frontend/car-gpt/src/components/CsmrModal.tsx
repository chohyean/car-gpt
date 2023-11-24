import { Box, Modal, Typography } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { atomIsModal } from "recoil/atomIsModal";
import { atomSelectedCsmr } from "recoil/atomSelectedCsmr";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CsmrModal() {
  const csmrMgmtNo = useRecoilValue(atomSelectedCsmr);
  const [isModal, setIsModal] = useRecoilState(atomIsModal);

  return (
    <Modal
      open={isModal}
      onClose={() => setIsModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {csmrMgmtNo}
        </Typography>
      </Box>
    </Modal>
  );
}
