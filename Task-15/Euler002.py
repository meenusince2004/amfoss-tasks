T = int(input())
for i in range(T):
    N = int(input())
    sum = 0
    a, b = 1, 2
    
    while a <= N:
        if a % 2 == 0:
            sum += a
        a, b = b, a + b
    print(sum)
