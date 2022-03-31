def compress_word(word, k)

    #iterate over every char of the word
    #if the char matches the last char: increment a consecutive lett var by one
    #keep track of the first index of the first consecutive letter
    #if consecutive letter var == k, slice the consecutive letters out of the word
   
    #continue to do so until there are no consecutive chars
        #keep track of a dup boolean: set to true as default
        #immediately set it to false when you enter the while loop
        #set it to true when consecutive lett var reaches k
        #keep looping until it is false
    
    repeats = 1
    startIdx = nil
    k_repeats = true
    
    while k_repeats 
        k_repeats = false
        
        (1...word.length).each do |i|
            if (word[i] == word[i-1])
                repeats += 1
                startIdx = startIdx || i - 1

                if ((repeats >= k) && (word[i] != word[i+1]))
                    word = word[0...startIdx] + word[i+1...word.length]
                    k_repeats = true
                    repeats = 1;
                    startIdx = nil;
                    break
                end

            else 
                startIdx = nil
                repeats = 1
            end
        end
    end
    word
end

# word = 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffvvvvvvvv'
# word = 'vvvvvvvv'
p compress_word(word, 10)