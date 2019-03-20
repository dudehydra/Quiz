import React, {Component} from 'react';

import QuestionList from '../../components/QuestionsList/QuestionsList'
import quizQuestions from '../../questionList/questionList'
import Header from '../../components/Header/Header'
import classes from './Quiz.module.scss'

class Quiz extends Component {
    state = {
        QuestionList: [],
        QuestionTitle: ' ',
        totalQuestions: '',
        help: null,
        ActiveQuestion: 0,
        buttonNextActive: "false"
    };
    componentWillMount() {
        this.setState({
            QuestionList: quizQuestions[this.state.ActiveQuestion].questions,
            QuestionTitle: quizQuestions[this.state.ActiveQuestion].questionsTitle,
            help: quizQuestions[this.state.ActiveQuestion].help,
            totalQuestions: quizQuestions.length - 1
        });
    }
    nextQuestionHandler = (prevState) => {
        const ActiveQuestion = this.state.ActiveQuestion + 1;
        this.setState({
            QuestionList: quizQuestions[ActiveQuestion].questions,
            QuestionTitle: quizQuestions[ActiveQuestion].questionsTitle,
            help: quizQuestions[ActiveQuestion].help,
            ActiveQuestion: ActiveQuestion
        });
    }
    prevQuestionHandler = () => {
        if (this.state.ActiveQuestion > 0) {
            const ActiveQuestion = this.state.ActiveQuestion - 1;
            this.setState({
                QuestionList: quizQuestions[ActiveQuestion].questions,
                QuestionTitle: quizQuestions[ActiveQuestion].questionsTitle,
                help: quizQuestions[ActiveQuestion].help,
                ActiveQuestion: ActiveQuestion
            });
        }
    }
    handleCheckboxChange = (questionIndex, index) => {
        let QuestionList = [...this.state.QuestionList];
        let test = QuestionList[questionIndex].questionOption[index].checked;
        QuestionList[questionIndex].questionOption[index].checked = !QuestionList[questionIndex].questionOption[index].checked;
        this.setState(prevState => ({
            QuestionList
        }));
    };
    handleRadioChange = (questionIndex, value) => {
        let QuestionList = [...this.state.QuestionList];
        QuestionList[questionIndex].selected = value;
        this.setState(prevState => ({
            QuestionList
        }));
    };
    createMarkup = () => {
        return (
            this.state.help.map((help, index) => (
                <div key={index} dangerouslySetInnerHTML={{__html: help }}>

                </div>
            ))
        )
    };
    render() {
        return (
            <div className={classes.quiz}>
                <Header
                    questionNumber={this.state.ActiveQuestion}
                    totalQuestions={this.state.totalQuestions}
                    />
                <div className={classes.quizWrapper}>
                    <h1 className={classes.title}>{this.state.QuestionTitle}</h1>
                    <div className={classes.help}>
                        { this.state.help != 0 ? this.createMarkup() : null}
                    </div>

                    <QuestionList questionList={this.state.QuestionList}
                                  nextQuestion={this.nextQuestionHandler} prevQuestion={this.prevQuestionHandler}
                                  requiredQuestion={this.state.requiredQuestion}
                                  questionNumber={this.state.ActiveQuestion}
                                  handleRadioChange={this.handleRadioChange}
                                  handleCheckboxChange={this.handleCheckboxChange}
                                  totalQuestions={this.state.totalQuestions}
                    />
                </div>

            </div>
        )
    }
}

export default Quiz;
