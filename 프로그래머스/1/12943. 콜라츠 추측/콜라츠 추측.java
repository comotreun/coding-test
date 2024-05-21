class Solution {
    public int solution(int num) {
        int nun = 0;
        int answer = 0;
        
        do {
            if (answer == 0){
                if (num % 2 == 0){
                    nun = num / 2;
                    answer += 1;
                    System.out.print(nun);
                }

                else {
                    nun = (num * 3) + 1;
                    answer += 1;
                    System.out.print(nun);
                }
            }
            else if (num == 1){
                answer = 0;
                break;
            }
            else if (answer >= 1 && answer < 450){
                if (nun % 2 == 0){
                    nun = nun / 2;
                    answer += 1;
                    System.out.print(nun);
            }
                else {
                    nun = (nun * 3) + 1;
                    answer += 1;
                    System.out.print(nun);
                }
            }
            else {
                answer =-1;
                break;
            }
        }while((nun != 1 && answer < 500) || answer == -1 || answer == 0);
        
        return answer;
    }
}