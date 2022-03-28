// 숫자만 추출

(() => {
    function solution(str) {
        let answer;
        str = str.replace(/[^0-9]/g, '');
        
        answer = Number(str);

        return answer;
    }

    function solution2(str) {
        let answer='';

        for(let i of str) {
            if(!isNaN(i)) answer += i;
        }
        answer = Number(answer);

        return answer;
    }

    let str="g0en2T0s8eSoft";
    console.log(solution(str));
    console.log(solution2(str));

    

})();