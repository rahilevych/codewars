function decodeBits(bits) {
  bits = bits.replace(/^0+|0+$/g, '');

  const minLength = Math.min(
    ...bits.match(/0+|1+/g).map((group) => group.length),
  );
  return bits
    .match(/0+|1+/g)
    .map((group) => {
      let length = group.length / minLength;
      if (group[0] === '1') return length === 1 ? '.' : '-';
      if (length === 3) return ' ';
      if (length === 7) return '   ';
      return '';
    })
    .join('');
}

function decodeMorse(morseCode) {
  return morseCode
    .split('   ')
    .map((word) =>
      word
        .split(' ')
        .map((sign) => MORSE_CODE[sign])
        .join(''),
    )
    .join(' ');
}
