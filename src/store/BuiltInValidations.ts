export const required = (str: string) => {
  if (str.length === 0 || str === '') {
    return 'Dette felt må ikke være blankt.';
  }
  return '';
};

