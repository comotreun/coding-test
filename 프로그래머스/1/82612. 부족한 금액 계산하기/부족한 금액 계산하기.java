class Solution {
    public long solution(int price, int money, int count) {
        long answer = 0;
        long nun = 0;
        long tot = 0;
        
        do {
            nun = price * count;
            count -= 1;
            tot += nun;
        } while (count > 0);
        
        System.out.print(tot *-1);
        
        if (tot > money){
           answer = (money - tot) * -1;
        }
        else {
            answer = 0;
        }
        
        // System.out.print(price);
        // System.out.print(money);
        // System.out.print(count);

        return answer;
    }
}