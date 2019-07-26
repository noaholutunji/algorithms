# 3D Surface Area

 Madison, is a little girl who is fond of toys. Her friend Mason works in a toy manufacturing factory . Mason has a 2D board A of size H x W with H rows and W columns. The board is divided into cells of size 1 X 1 with each cell indicated by it's coordinate (i,j). The cell (i,j) has an integer Aij written on it. To create the toy Mason stacks Aij number of cubes of size 1 X 1 X 1 on the cell(i,j).

Given the description of the board showing the values of Aij and that the price of the toy is equal to the 3d surface area find the price of the toy.

[!fig](https://s3.amazonaws.com/hr-assets/0/1509009918-091bdd4cba-1502631298-5cd3275ce9-img2.png)

Input Format
The first line contains two space-separated integers H and W the height and the width of the board respectively.

The next H lines contains W space separated integers. The jth integer in ith line denotes Aij.

Constraints
1 =< H, W =< 100
1 =<Aij =< 100

Output Format
Print the required answer, i.e the price of the toy, in one line.

Sample Input 0
1 1
1

Sample Output 0
6

Explanation 0

[!fig](https://s3.amazonaws.com/hr-assets/0/1505569910-2f8fc5da13-3d.png)

The surface area of 1 X 1 X 1 cube is 6.

Sample Input 1
3 3
1 3 4
2 2 3
1 2 4

Sample Output 1
60

Explanation 1
The sample input corresponds to the figure described in problem statement.
