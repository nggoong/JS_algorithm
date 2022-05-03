// 이분검색

(()=> {
    function solution(num, arr) {
        let answer;
        let lt = 0;
        let rt = arr.length - 1;
        let index = -1;

        arr.sort((a, b) => a - b);

        while(lt <= rt) {
            index = parseInt((lt + rt)/2)
            if(arr[index] === num) {
                answer = index + 1;
                break;
            }
            else if(arr[index] > num) {
                rt = index - 1;
            }
            else if(arr[index] < num) {
                lt = index + 1;
            }
        }
        
        return answer;
    }


    let arr=[23, 87, 65, 12, 57, 32, 99, 81];
    console.log(solution(32, arr));

})();