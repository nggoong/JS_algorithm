// 대문자 찾기

(()=> {
    function solution(str) {
        let answer = 0;

        for(let i of str) {
            if(i.charCodeAt(0) >= 65 && i.charCodeAt(0) <= 90) answer++;
        }
        

        return answer;
    }

    function solution2(str) {
        let answer = 0;

        for(let i of str) {
            if(i === i.toUpperCase()) answer++;
        }

        return answer;
    }

    console.log(solution('KOREATimeGoodZZZ'));
    console.log(solution2('KORTime'));
})();