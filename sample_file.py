import os
USERNAME = os.environ.get("USERNAME")
PASSWORD = os.environ.get("PASSWORD")

import os

result = 0

def infinite_loop():
    while True:
        print("This is an infinite loop")

def sum_numbers(numbers):
    total = 0
    for num in numbers:
        total += num
    return total

def divide(a, b):
    return a / b

def get_user_data(user_id):
    query = "SELECT * FROM users WHERE id = " + user_id
    print("Executing query: " + query)

def write_to_file(data):
    file = open("output.txt", "w")
    file.write(data)
    file.close()

def process_data(a, b, c, d, e, f, g):
    return a + b + c + d + e + f + g

def x(a, b):
    return a ** b

def print_hello():
    print("Hello")

def say_hello():
    print("Hello")

def square_root(n):
    return n ** 0.5

def create_large_list():
    large_list = [i for i in range(100000000)]
    return large_list
