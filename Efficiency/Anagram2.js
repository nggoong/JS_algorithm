// 아나그램 두 번째 문제

(()=> {
    function isAnagram(a, b) {
        let result = true;
        let mapStr1 = new Map();

        for(let i of a) {
            if(!mapStr1.has(i)) mapStr1.set(i, 1);
            else {
                mapStr1.set(i, mapStr1.get(i) + 1);
            }
        }

        for(let i of b) {
            if(!mapStr1.has(i) || mapStr1.get(i) === 0) {
                result = false;
                return;
            }
            mapStr1.set(i, mapStr1.get(i) - 1);
        }

        return result;
    }

    function solution(a, b) {
        let Alength = a.length;
        let Blength = b.length;
        let start = 0;
        let end = Blength;
        let answer = 0;

        while(end <= Alength) {
            let tempStr = a.slice(start, end);
            console.log(tempStr);
            if(isAnagram(tempStr, b)) {
                answer++;
            } 
            start++;
            end++;
        }

        return answer;
    }

    
    let a="bacaAacba";
    let b="abc";
    console.log(solution(a, b));
})();