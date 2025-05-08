import random
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu",
        "wrong_answers": ["Yodito", "Gronk"]
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine",
        "wrong_answers": ["Hoth", "Dagobah"]
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977",
        "wrong_answers": ["1983", "1969"]
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker",
        "wrong_answers": ["Obi-Wan Kenobi", "Luke Skywalker"]
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader",
        "wrong_answers": ["Kylo Ren", "Mace Windu"]
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee",
        "wrong_answers": ["Ewok", "Twi'lek"]
    }
]
score=0
incor_answers=0

def quiz():
    global score, incor_answers
    print("Answer the quetion by chosing the number of answer ")
    for item in data:
        answers=[item["answer"]]+item["wrong_answers"]
        random.shuffle(answers)
        correct_answer=answers.index(item["answer"])
        print(f"\n- {item["question"]}")
        for index ,answer in enumerate(answers):
            print(f"{index+1}-{answer}")
        chose=int(input("Your answer : "))
        if(chose == correct_answer+1):
            print("Correct")
            score+=1
        else:
            print(f"wrong answers the correct answer is {answers[correct_answer]}")
            incor_answers+=1

        if incor_answers==3:
            play_again=int(input("you have 3 wrong answers do you want to play again: \n1-yes\n2-no \n"))
            if play_again==1:
                quiz()
    results_quiz()


def results_quiz():
    print(f"\nyou finished the quiz\nyou get {score} correct answers and {incor_answers} answers")

quiz()