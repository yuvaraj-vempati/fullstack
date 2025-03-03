#gcd(greatest common divisor)
# a=42
# b=18
# gcd=0
# for i in range(1,min(a,b)):
#     if a%i==0 and b%i==0:
#         gcd=i
# print(gcd)


# # sum of prime number 
# sum=0
# for i in range(2,21):
#   for j in range(2,i):
#     if i%j==0:
#       # print("its not a prime",i)
#       break
#   else:
#       sum=sum+i
# print(sum)

#sum of odd 
# sum=0
# for i in range(1,10):
#   if i%2!=0:
#     sum=sum+i
# print(sum)
#perfect number
sum=0
a=38
for i in range(1,28):
  if a%i==0:
    sum=sum+i
print(sum)
if a==sum:
  print("perfect number")
else:
  print("not a perfect number")