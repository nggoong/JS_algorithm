// 가장 짧은 문자거리

(()=> {
    function solution(s, t) {
        let length = s.length;
        let answer = Array(length).fill(0);
        let count = 0;
        let nextCount = 0;
        let lessNum = 0;
        
        
        for(let i = 0; i < length; i++) {
            if(s[i] !== t) {
                count++;
                if(lessNum) {
                    nextCount++;
                    answer[i] = nextCount;
                }
            } 
            else if(s[i] === t) {
                for(let j = lessNum; j < i; j++) {
                    if(!lessNum || lessNum && answer[j] > count) {
                        answer[j] = count;
                    }
                    count--;
                }
                answer[i] = 0;
                lessNum = i + 1;
                nextCount = 0;
            }
        }
        return answer;
    }
    
    let str="department";
    console.log(solution(str, 't'));
})();