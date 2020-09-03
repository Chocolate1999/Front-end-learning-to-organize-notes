function showCase(value) {
  switch(value) {
  case 'A':
      console.log('Case A');
      break;
  case 'B':
      console.log('Case B');
      break;
  case undefined:
      console.log('undefined');
      break;
  default:
      console.log('Do not know!');
  }
}
showCase(new String('A'));
