// Sample dummy data

export default function dummyCsmrInfoList() {
  const dummyData = [
    {
      csmrMgmtNo: "1001",
      csmrNm: "John Doe",
      csmrTymdNo: "Y",
      telNum: "john@example.com",
      tnUsblScnCd: "Y",
      inpEeno: "E001",
      inpDtm: "2023-01-01 10:00:00",
      chgrEeno: "E002",
      altrDtm: "2023-01-02 14:30:00",
    },
  ];
  for (let i = 1; i < 20; i++) {
    dummyData.push({
      csmrMgmtNo: `100${i + 1}`,
      csmrNm: `Customer ${i + 1}`,
      csmrTymdNo: i % 2 === 0 ? "Y" : "N",
      telNum: `customer${i + 1}@example.com`,
      tnUsblScnCd: i % 2 === 0 ? "Y" : "N",
      inpEeno: `E00${i + 1}`,
      inpDtm: `2023-01-01 12:${i < 10 ? "0" + i : i}:00`,
      chgrEeno: `E00${i + 2}`,
      altrDtm: `2023-01-02 16:${i < 10 ? "0" + i : i}:00`,
    });
  }

  return dummyData;
}
