#create a hash with numbers as keys and num of closed paths as vals
#iterate through the input num and keep track of a count var
#increment the count with the val from the hash and return count

def closed_path(num)
    closed_paths = {0=> 1, 4=> 1, 6=> 1, 9=> 1, 8=> 2}
    count = 0;

    num.to_s.chars.each do |char|
        int = char.to_i
        # p int
        if (closed_paths[int])
            count += closed_paths[int]
            # p closed_paths[int]
        end
    end
    count
end

number = 1288
p closed_path(number)