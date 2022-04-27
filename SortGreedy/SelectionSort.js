// 선택정렬

(()=> {
    function solution(arr) {
        let answer;
        let temp = 0;

        for(let i = 0; i < arr.length; i++) {
            let minIndex = i;
            for(let j = i + 1; j < arr.length; j++) {
                if(arr[minIndex] > arr[j]) {
                    minIndex = j;
                }
            }
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

        answer = arr;

        return answer;
    }

    let arr = [5, 7, 11, 13, 15, 23, 16, 33];
    console.log(solution(arr))
})();