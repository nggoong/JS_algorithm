// 문자 찾기

(()=> {
    function solution(str, letter) {
        let answer = 0;
        let temp = str.split('');
        temp.forEach(element => {
            if(element === letter) answer++;
        });

        return answer;
    }

    function solution2(str, letter) {
        let answer = 0;

        for(let i of str) {
            if(i === letter) answer++;
        }

        return answer;
    }

    console.log(solution('computerprogramming', 'm'));
    console.log(solution2('computerprogramming', 'm'));
})();