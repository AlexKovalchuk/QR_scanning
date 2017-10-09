export const addQRCode = code => {
  return {
    type: 'ADD_CODE_POINT',
    code
  }
};

export const changeItemChecked = itemCode => {
  return {
    type: 'CHANGE_ITEM_CHECKED',
    itemCode
  }
};

export const changeAllItemsChecked = checkAction => {
  return {
    type: 'CHANGE_ALL_ITEMS_CHECKED',
    checkAction,
  }
};

export const clearQRList = () => {
  return {
    type: 'CLEAR_QR_LIST',
  }
};