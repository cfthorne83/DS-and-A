def weightCapacity(weights, max) 
    #find every combination of weights that do not exceed max
        #build a tree with each weight(if below max) as the root, 
        #explore every combo under max and return the maxWeight 
    #return the max amount of weight from the combos

    weights.each do |weight|
        if (weight <= max)
            buildTree(weight, weights, max)
        end
    end
end

def buildTree(weight, weights, max) 
    if (weight == 0) return weight
    if (weight < 0) return 0

    weights.each do |weight|
        buildTree(weight - weight, weights, max)
    end



end

weights = [7, 1, 5, 6, 2]
weightCapacity(weights, 7)#7