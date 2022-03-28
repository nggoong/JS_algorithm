// 회문 문자열 판별

(()=> {
    function solution(str) {
        let answer;
        let flag = 1;
        let length = str.length;

        str = str.toLowerCase();


        for(let i = 0; i<Math.floor(length/2); i++) {
            if(str[i] !== str[length - 1 - i]) {
                flag = 0;
                break;
            } 
        }
        if(flag) answer = 'YES';
        else answer="NO";
        
        



        return answer;
    }

    function solution2(str) {
        let answer;
        let tempStr;
        str = str.toLowerCase();
        tempStr = str.split('').reverse().join('');
        if(str !== tempStr) answer ='No';
        else answer='YES';

        return answer;
    }

    console.log(solution2('Goog'));
})();