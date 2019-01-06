import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import { connect } from "react-redux";

export class DoQuizScreen extends React.Component {
  static navigationOptions = {
    title: "Quiz"
  };
  state = {
    endQuiz: false,
    correct: 0,
    incorrect: 0,
    currentQuestion: 0
  };
  constructor(props) {
    super(props);
    this.reset = this.reset.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.incrementCorrect = this.incrementCorrect.bind(this);
    this.incrementInCorrect = this.incrementInCorrect.bind(this);
  }
  nextQuestion = () => {
    const currentQuestion = this.state.currentQuestion + 1;
    const { questions } = this.props.deck;
    if (currentQuestion < questions.length) {
      this.setState(() => ({ currentQuestion, showAnswer: false }));
    } else {
      this.setState(() => ({ endQuiz: true }));
    }
  };
  incrementCorrect = () => {
    this.setState(() => ({ correct: this.state.correct + 1 }));
    this.nextQuestion();
  };
  incrementInCorrect = () => {
    this.setState(() => ({ incorrect: this.state.incorrect + 1 }));
    this.nextQuestion();
  };
  reset() {
    console.log("reset called");
    this.setState({
      endQuiz: false,
      correct: 0,
      incorrect: 0,
      currentQuestion: 0,
      showAnswer: false
    });
  }
  render() {
    const {
      endQuiz,
      correct,
      incorrect,
      currentQuestion,
      showAnswer
    } = this.state;
    const { deck } = this.props;
    const { title, questions } = deck;
    if (endQuiz) {
      return (
        <View style={styles.header}>
          <Text style={styles.txtBlack}>
            Your score is {correct} correct and {incorrect} incorrect
          </Text>
          <TouchableOpacity
            onPress={() => this.reset()}
            style={styles.btnCorrect}
          >
            <Text style={styles.txtWhite}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnCorrect}
            onPress={() =>
              this.props.navigation.navigate("DeckDetails", { id: title })
            }
          >
            <Text style={styles.txtWhite}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          {currentQuestion + 1} of {questions.length}
        </Text>
        {showAnswer && (
          <View>
            <Text style={styles.answer}>
              {questions[currentQuestion].answer}
            </Text>
            <TouchableOpacity
              style={styles.btnSmall}
              onPress={() =>
                this.setState({ showAnswer: !this.state.showAnswer })
              }
            >
              <Text style={styles.txtRedSmall}>Show Question</Text>
            </TouchableOpacity>
          </View>
        )}
        {!showAnswer && (
          <View>
            <Text style={styles.question}>
              {questions[currentQuestion].question}
            </Text>
            <TouchableOpacity
              style={styles.btnSmall}
              onPress={() =>
                this.setState({ showAnswer: !this.state.showAnswer })
              }
            >
              <Text style={styles.txtRedSmall}>Show Answer</Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          style={styles.btnCorrect}
          onPress={() => this.incrementCorrect()}
        >
          <Text style={styles.txtWhite}>Correct</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnIncorrect}
          onPress={() => this.incrementInCorrect()}
        >
          <Text style={styles.txtWhite}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  header: {
    fontSize: 20,
    color: "blue"
  },
  question: {
    fontSize: 18,
    color: "blue"
  },
  answer: {
    fontSize: 18,
    color: "green"
  },
  btnSmall: {
    flexDirection: "row",
    padding: 4,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 4,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Platform.OS === "ios" ? 16 : 10,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0,0,0,0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  btnCorrect: {
    backgroundColor: "green",
    flexDirection: "row",
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Platform.OS === "ios" ? 16 : 10,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0,0,0,0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  btnIncorrect: {
    backgroundColor: "red",
    flexDirection: "row",
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Platform.OS === "ios" ? 16 : 10,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0,0,0,0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  txtWhite: {
    padding: 4,
    color: "white",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  txtBlack: {
    padding: 4,
    color: "black",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  txtRedSmall: {
    padding: 4,
    color: "red",
    fontSize: 14,
    justifyContent: "center",
    alignItems: "center"
  }
});
const mapStateToProps = (decks, ownProps) => {
  const { navigation } = ownProps;
  const title = navigation.getParam("title", 0);
  return {
    deck: decks[title]
  };
};
export default connect(mapStateToProps)(DoQuizScreen);
