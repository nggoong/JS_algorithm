// 문자열 압축

(()=> {
    function solution(s){
        let answer="";
        let prev =s[0];
        let count = 1;

        for(let i = 1; i< s.length; i++) {
            if(prev === s[i]) {
                count++;
            }
            else if(prev !== s[i]) {
                if(count > 1) answer+=count;
                answer+=s[i];
                prev = s[i];
                count = 1;
            }
        }
        
        return answer;
    }
    
    let str="KKHSSSSSSSE";
    console.log(solution(str));

})();