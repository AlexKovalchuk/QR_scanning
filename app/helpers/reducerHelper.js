export const changeCheckboxInQRList = (QRList, itemCode) => {
  let result = QRList.map(item => {
    if(item.code === itemCode) return {...item, isChecked: !item.isChecked};
    return item;
  });
  return result;
};

export const changeAllCheckboxesInQRList = (QRList, checkAction) => {
  let result = QRList.map(item => {
    return {...item, isChecked: checkAction};
  });
  return result;
};