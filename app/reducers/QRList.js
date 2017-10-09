import {changeCheckboxInQRList, changeAllCheckboxesInQRList} from '../helpers/reducerHelper';

const list = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CODE_POINT':
      let code = {...action.code, isChecked: false};
      return [...state, code];
    case 'CHANGE_ITEM_CHECKED':
      let result = changeCheckboxInQRList(state, action.itemCode);
      return result || state;
    case 'CHANGE_ALL_ITEMS_CHECKED':
      let resultAllCheckboxes = changeAllCheckboxesInQRList(state, action.checkAction);
      return resultAllCheckboxes || state;
    case 'CLEAR_QR_LIST':
      return [];
    default:
      return state;
  }
};
export default list;