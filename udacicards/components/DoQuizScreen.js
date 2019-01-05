import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
  }
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
        <View>
          <Text>
            Your score is {correct} correct and {incorrect} incorrect
          </Text>
          <TouchableOpacity onPress={() => this.reset()}>
            <Text>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text>Go Home</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>
          {currentQuestion + 1} of {questions.length}
        </Text>
        {currentQuestion < questions.length - 1 && (
          <TouchableOpacity
            onPress={() =>
              this.setState({ currentQuestion: this.state.currentQuestion + 1 })
            }
          >
            <Text>Next Question</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => this.setState({ endQuiz: true })}>
          <Text>End Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (decks, ownProps) => {
  const { navigation } = ownProps;
  const title = navigation.getParam("title", 0);
  return {
    deck: decks[title]
  };
};
export default connect(mapStateToProps)(DoQuizScreen);
