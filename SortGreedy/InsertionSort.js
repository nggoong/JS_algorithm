// 삽입정렬

(()=> {
    function solution(arr) {
        let answer;
        let temp;
        let j;

        for(let i = 1; i < arr.length; i++) {
            temp = arr[i];
            for(j = i - 1; j >= 0; j--) {
                if(temp < arr[j]) {
                    arr[j + 1] = arr[j];
                }
                else break;
            }
            arr[j + 1] = temp;
        }

        answer = arr;
        return answer;
    }

    let arr = [11, 7, 5, 6, 10, 9];
    console.log(solution(arr));
})();