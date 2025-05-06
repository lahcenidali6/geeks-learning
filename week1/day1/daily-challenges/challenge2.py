word = input ("enter a word : ")
remove_rep_lett=""
for letter in word:
    if letter not in remove_rep_lett:
        remove_rep_lett +=letter
print(remove_rep_lett)