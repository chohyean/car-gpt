export default interface CsrmrInfoType {
  csmrMgmtNo: string; // 고객관리번호
  csmrNm: string; // 고객명
  csmrTymdNo: string; // SMS수신동의여부
  telNum: string; // 이메일수신동의여부
  tnUsblScnCd: string; // 전화수신동의여부
  inpEeno: string; // 입력자사원번호
  inpDtm: string; // 입력일시
  chgrEeno: string; // 변경자사원번호
  altrDtm: string; // 변경일시
}
