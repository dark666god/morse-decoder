const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' '    :  ' ',
};

function decode(expr) {
    let left = [];
    let output = '';
    let fin = [];
    let arr = []
    arr = (expr.split(/(.{10})/).filter(O => O));
      for(let k of arr){
           left.push(k.split(/(.{2})/).filter(O => O));
        }
      for(let i = 0; i < left.length; i++){
          for(let k of left[i]){
             if( k === '10'){
               fin[i] += ('.')
             }else if( k === '11'){
               fin[i] += ('-')
             }else if( k === '**'){
               fin[i] += (' ')
               break;
             }
          }

      }
  //  return fin[0].substr(9);
      for( let u = 0; u < fin.length; u++){
           for(let key in MORSE_TABLE){
                if(fin[u].substr(9) === key){
                  output += MORSE_TABLE[key];
                 }

                }
             }

           return output;


}


module.exports = {
    decode
}
