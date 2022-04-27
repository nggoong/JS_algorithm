(()=> {
    function solution(arr) {
        let answer;
        let temp = 0;

        for(let i = 0; i< arr.length; i++) {
            for(let j = 1; j < arr.length - i; j++) {
                if(arr[j - 1] > 0 && arr[j] < 0) {
                    temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        answer = arr;

        return answer;
    }


    let arr = [1, 2, 3, -3, -2, 5, 6, -6];
    console.log(solution(arr));
})();