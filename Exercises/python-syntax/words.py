def print_upper_words(words, letters):
    '''
    '''
    for word in words:
        for letter in letters:
            if word.startswith(letter):
                print(word.upper())
