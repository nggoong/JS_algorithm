// A를 #으로 변경하기

(()=> {
    function solution(str) {
        let answer;
        answer = str.split("");
        let temp = answer.map((element)=> {
            if(element === 'A') element = '#';

            return element;
        })
        return temp.join('');
    }

    console.log(solution('BANANA'));
})();