export default (type) => {
  let result;
  switch (type) {
    case 'CHANGE_VIEW':
      result = 'changeView';
      break;
    default:
      result = 'No Constant';
  }
  return result;
};
