// 필요한 연필 갯수

(()=> {

    function solution(number) {
        let answer;
        answer = (number % 12 === 0) ? number / 12 : parseInt(number / 12 + 1)
        return answer;
    }
    console.log(solution(12));
    console.log(solution(13));
    console.log(solution(25));


})();