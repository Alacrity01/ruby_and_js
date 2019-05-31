# Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
# def print_numbers_divisible_by_three
#   index = 1
#   while index <= 1000
#     if index % 3 == 0
#       puts index
#     end
#     index += 1
#   end
# end
# print_numbers_divisible_by_three


# Write a method that accepts an array of strings and prints out every other string.
def print_every_other_item(strings)
  index = 0
  strings.each do |string|
    if index % 2 == 0
      puts string
    end
    index += 1
  end
end
# print_every_other_item(["a", "b", "c", "d", "e"])


# Write a method that accepts an array of numbers and returns the sum.
def compute_sum(numbers)
  sum = 0
  numbers.each do |number|
    sum += number
  end
  return sum
end
# puts compute_sum([2, 4, 5])


# Start with the hash: city_populations = {chi: 2700000}
# Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
# The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
city_populations = {chi: 2700000}
city_populations[:nyc] = 8400000
city_populations[:sf] = 800000
# p city_populations



# Write a method that prints out every number from 1 to 100. 
def numbers_to_100
  index = 1
  while index < 101
    puts index
    index += 1
  end
end
# numbers_to_100

# Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
def odds_to_100
  index = 1
  while index < 100
    puts index
    index += 2
  end
end
#odds_to_100

# Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
def fifty_fives_array(array_of_numbers)
  count = 0
  array.each do |number|
    if number == 55
      count += 1
    end
  end
  count
end
# puts fifty_fives_array([5,2,1,6,7,2,55,2,22,66,4,55,7,4,55])

# Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
# For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

def awesomesauce(array_of_strings)
  awesome_array = []
  index = 0

  (array_of_strings.length - 1).times do
    awesome_array << array_of_strings[index]
    awesome_array << "awesomesauce"
    index += 1
  end

  awesome_array << array_of_strings[-1]
  return awesome_array
end
# p awesomesauce(["a", "b", "c", "d", "e"])

# Start with the hash: item_amounts = {chair: 5, table: 2}
# Someone just bought two chairs. Change the hash such that the chair amount is 3.
# The final result should be: {chair: 3, table: 2}
item_amounts = {chair: 5, table: 2}
item_amounts[:chair] = 3
# p item_amounts



# Start with the hash: item_amounts = {chair: 5, table: 2}
# You received 7 desks to sell. Change the hash to include desks.
# The final result should be: {chair: 5, table: 2, desk: 7}
item_amounts = {chair: 5, table: 2}
item_amounts["desk"] = 7
# p item_amounts

# Write a method that accepts a number and returns its factorial.
# For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
def factorial(number)
  sum = number
  until number == 1
    number -= 1
    sum *= number
  end
  sum
end
# p factorial(5)

# Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
# For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
def array_sum_combinations(array_1, array_2)
  result_array = []
  index_1 = 0
  
  array_1.length.times do
    index_2 = 0
    array_1.length.times do
      result_array << (array_1[index_1] + array_2[index_2])
      index_2 += 1
    end
    index_1 += 1   
  end
  result_array
end
# p array_sum_combinations([1, 5, 10], [100, 500, 1000])