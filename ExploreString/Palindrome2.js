// 알파벳 문자만 추출하여 회문 문자열인지 판별

(()=> {
    function solution(str) {
        let answer = 'YES';
        str = str.toLowerCase().replace(/[^a-z]/g, '');
        if(str.split('').reverse().join('') !== str) answer='NO';

        return answer;
    }

    let str="found7, time: study; Yduts; emit, 7Dnuof";
            console.log(solution(str));
})();