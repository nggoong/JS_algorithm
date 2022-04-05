// 학급 회장

(()=> {
    function solution(arr) {
        let answer;
        let hashMap = new Map();
        let max = 0;

        for(let x of arr) {
            if(!hashMap.has(x)) {
                hashMap.set(x, 1);
            }
            else {
                let temp = hashMap.get(x);
                hashMap.set(x, temp + 1);
            }
        }

        for(let entry of hashMap) {
            let [key, value] = entry;
            if(value > max) {
                answer = key;
                max = value;
            }
        }



        return answer;
    }
    let str="BACBACCACCBDEDE";
    console.log(solution(str));
})();