// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

// For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// Solution 1
function domainName(url) {
    return String(url.replace('https://www.', ' ')
                    .replace('https://www', ' ')
                    .replace('http://www.', ' ')
                    .replace('http://www', ' ')
                    .replace('https://', ' ')
                    .replace('http://', ' ')
                    .replace('www.', ' ')
                    .split(' ')
                    .filter(e => e !== ''))
                    .split('.')[0]
}

// Solution 2
function domainName(url) {
    return new URL( // requires a protocol, parse the URL
        url.startsWith('http') ? url : 'http://' + url) // if missing add 'http://'
            .hostname.replace(/^www\./, '')
            .split('.')[0]
}

console.log(domainName("http://google.com")) // "google"
console.log(domainName("http://google.co.jp")) // "google"
console.log(domainName("www.xakep.ru")) // "xakep"
console.log(domainName("https://youtube.com")) // "youtube"

console.log(domainName("wlr9x4vbrolvyv5n456chlt1x8uny.pro/index.php")) // wlr9x4vbrolvyv5n456chlt1x8uny
console.log(domainName("https://www.pnk2x1jea2s2boi0siflklc.tv/archive/")) // pnk2x1jea2s2boi0siflklc
console.log(domainName("https://www.umn46-msyh05qke7nnr.tv/users")) // umn46-msyh05qke7nnr
console.log(domainName("https://www.85qyjdu0jsb-908u8.jp/default.html")) // 85qyjdu0jsb-908u8