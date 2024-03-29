# Organizing Containers of Balls

David has several containers, each with a number of balls in it. He has just enough containers to sort each type of ball he has into its own container. David wants to sort the balls using his sort method.

As an example, David has n = 2 containers and 2 different types of balls, both of which are numbered from 0 to n-1 = 1 . The distribution of ball types per container are described by an  n X n matrix of integers, M[container][type]. For example, consider the following diagram for M = [[1,4], [2,3]]:

![Fig](https://s3.amazonaws.com/hr-challenge-images/0/1485811368-9e78c98652-swapping-balls.png)

In a single operation, David can swap two balls located in different containers.

The diagram below depicts a single swap operation:

![Fig](https://s3.amazonaws.com/hr-challenge-images/0/1485811849-e97b84e218-swapping-balls-ps-1.png)

David wants to perform some number of swap operations such that:
1. Each container contains only balls of the same type.
2. No two balls of the same type are located in different containers.

You must perform q queries where each query is in the form of a matrix, M . For each query, print Possible on a new line if David can satisfy the conditions above for the given matrix. Otherwise, print Impossible.

Function Description
Complete the organizingContainers function in the editor below. It should return a string, either Possible or Impossible.

organizingContainers has the following parameter(s):
1. ontainter: a two dimensional array of integers that represent the number of balls of each color in each container

Input Format
The first line contains an integer q, the number of queries.

Each of the next q sets of lines is as follows:
1. The first line contains an integer n, the number of containers (rows) and ball types (columns).
2. Each of the next n lines contains n space-separated integers describing row M[i].

Output Format

For each query, print Possible on a new line if David can satisfy the conditions above for the given matrix. Otherwise, print Impossible.

Sample Input 0
2
2
1 1
1 1
2
0 2
1 1

Sample Output 0
Possible
Impossible

Explanation 0
We perform the following q = 2 queries:
1. The diagram below depicts one possible way to satisfy David's requirements for the first query: 

![Fig](https://s3.amazonaws.com/hr-challenge-images/0/1485813936-37f8a37dad-swapping-balls-sample-0-0.png)

Thus, we print Possible on a new line.

2. The diagram below depicts the matrix for the second query: 

![Fig](https://s3.amazonaws.com/hr-challenge-images/0/1485814141-d283776840-swapping-balls-sample-0-2.png)
No matter how many times we swap balls of type t0 and t1 between the two containers, we'll never end up with one container only containing type t0  and the other container only containing type t1. Thus, we print Impossible on a new line.

Sample Input 1
2
3
1 3 1
2 1 2
3 3 3
3
0 2 1
1 1 1
2 0 0

Sample Output 1
Impossible
Possible


