// 공주 구하기

(()=> {
    function solution(n, m) {
        let answer;
        let arr = Array.from({length:8}, (value, index)=>index + 1);
        let count = 0;


        while(arr.length !==1) {
            count++;
            if(count !== 3) {
                let temp = arr.shift();
                arr.push(temp);
            }
            else if(count === 3) {
                arr.shift();
                count = 0;
            }
            
        }
        answer = arr[0];
        return answer;
    }


    console.log(solution(8, 3));
})();