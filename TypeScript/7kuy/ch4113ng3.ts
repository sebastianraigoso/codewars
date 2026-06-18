// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and
// 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

export function nerdify(txt: string): string {
  let change = ''
  for(let i = 0; i < txt.length; i++) {
    if(txt[i] === 'a' || txt[i] === 'A') {
      change += '4'
    }else if(txt[i] === 'e' || txt[i] === 'E') {
      change += '3'
    }else if(txt[i] === 'l') {
      change += '1'
    }else {
      change += txt[i]
    }
  }
  return change
}