// 2021 KAKAO BLIND RECRUITMENT  신규 아이디 추천

function solution(new_id) {
    var answer = [];
//     1단계
    new_id = new_id.toLowerCase();
//     2단계
    new_id = new_id.split('');
    answer = new_id.filter(element => {
         if(element === '-' || element ==='_' || element==='.' || !isNaN(Number(element)) || (element.charCodeAt(0) >= 97 && element.charCodeAt(0) <= 122)) {
            return true;
        }
    })
    
//     3단계
    answer = answer.join('');
        
    answer = answer.replace('...', '.');
    answer = answer.replace('..', '.');
    
    


// 4단계
    if(answer.startsWith('.')) answer = answer.slice(1, -1);
    if(answer.endsWith('.')) answer = answer.slice(0, -1);
    console.log(answer);

    // 5단계
    if(answer.length === 0) answer = answer.concat('a');

// 6단계
    if(answer.length >= 16) answer = answer.slice(0, 15);
    if(answer.endsWith('.')) answer = answer.slice(0,-1);

    // 7단계

    if(answer.length <= 2) {
        let lastChar = answer.substr(-1);
        // let shouldAddLength = 3 - answer.length;

        while(answer.length !==3) {
            answer = answer.concat(lastChar);
        }
    }
    
    
    
    
    return answer;
}