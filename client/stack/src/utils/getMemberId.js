export const getMemberId = () => {
  const memberId = localStorage.getItem('memberId')
    ? +JSON.parse(localStorage.getItem('memberId'))
    : null;
  return memberId;
};
