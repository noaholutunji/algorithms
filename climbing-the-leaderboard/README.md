# Climbing the Leaderboard

Alice is playing an arcade game and wants to climb to the top of the leaderboard and wants to track her ranking. The game uses Dense Ranking, so its leaderboard works like this:

The player with the highest score is ranked number 1 on the leaderboard.
Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
For example, the four players on the leaderboard have high scores of 100, 90, 90, and 80. Those players will have ranks 1, 2, 2, and 3, respectively. If Alice's scores are 70, 80 and 105, her rankings after each game are 4th, 3rd and 1st.

Function Description
Complete the climbingLeaderboard function in the editor below. It should return an integer array where each element res[j] represents Alice's rank after the jth game.

climbingLeaderboard has the following parameter(s):
1. scores: an array of integers that represent leaderboard scores
2. alice: an array of integers that represent Alice's scores

Input Format
The first line contains an integer n, the number of players on the leaderboard. 
The next line contains n space-separated integers scores[i], the leaderboard scores in decreasing order. 
The next line contains an integer, m, denoting the number games Alice plays. 
The last line contains m space-separated integers alice[j], the game scores.

Output Format
Print m integers. The jth integer should indicate Alice's rank after playing the jth game.

7
100 100 50 40 40 20 10

4
5 25 50 120

Sample Output 1
6
4
2
1

Explanation 1

Alice starts playing with 7 players already on the leaderboard, which looks like this:

https://s3.amazonaws.com/hr-challenge-images/0/1481263702-9b5e9abd56-climbingrank.png

After Alice finishes game 0, her score is 5 and her ranking is 6:

https://s3.amazonaws.com/hr-challenge-images/0/1481263847-2443e11cea-climbingrank1.png

After Alice finishes game 1, her score is 25 and her ranking is 4:

https://s3.amazonaws.com/hr-challenge-images/0/1481264155-cb76495070-climbingrank3.png

After Alice finishes game 2, her score is 50 and her ranking is tied with Caroline at 2:

https://s3.amazonaws.com/hr-challenge-images/0/1481264229-a216b3a974-climbingrank4.png

After Alice finishes game 3, her score is 120 and her ranking is 1:

https://s3.amazonaws.com/hr-challenge-images/0/1481264323-30f93fa8de-climbingrank5.png

Sample Input 2
6
100 90 90 80 75 60

5
50 65 77 90 102

Sample Output 2
6
5
4
2
1