import React, {Component} from 'react';

import QuestionList from '../../components/QuestionsList/QuestionsList';
import quizQuestions from '../../questionList/questionList';
import Header from '../../components/Header/Header';
import Helper from '../../components/Helper/Helper';
import classes from './Quiz.module.scss'
import axios from '../../axios'


class Quiz extends Component {
    state = {
        QuestionList: [],
        QuestionTitle: ' ',
        totalQuestions: '',
        help: null,
        ActiveQuestion: 0,
        buttonNextActive: "false",
        helperText: null,
        helperImg: null,
        classes: '',
    };
    componentWillMount() {
        this.setState({
            QuestionList: quizQuestions[this.state.ActiveQuestion].questions,
            QuestionTitle: quizQuestions[this.state.ActiveQuestion].questionsTitle,
            help: quizQuestions[this.state.ActiveQuestion].help,
            totalQuestions: quizQuestions.length - 1,
            helperText: quizQuestions[this.state.ActiveQuestion].helperText,
            helperImg: quizQuestions[this.state.ActiveQuestion].helperImg,
            classes: quizQuestions[this.state.ActiveQuestion].classes,
        });
    }
    nextQuestionHandler = (prevState) => {
        const answers = {
            answers: this.state.QuestionList
        }
        axios.post('/answers.json', answers)
            .then(response => console.log())
            .catch(error => console.log())

        const ActiveQuestion = this.state.ActiveQuestion + 1;
        this.setState({
            QuestionList: quizQuestions[ActiveQuestion].questions,
            QuestionTitle: quizQuestions[ActiveQuestion].questionsTitle,
            help: quizQuestions[ActiveQuestion].help,
            ActiveQuestion: ActiveQuestion,
            helperText: quizQuestions[ActiveQuestion].helperText,
            helperImg: quizQuestions[ActiveQuestion].helperImg,
            classes: quizQuestions[ActiveQuestion].classes
        });
    }
    prevQuestionHandler = () => {
        if (this.state.ActiveQuestion > 0) {
            const ActiveQuestion = this.state.ActiveQuestion - 1;
            this.setState({
                QuestionList: quizQuestions[ActiveQuestion].questions,
                QuestionTitle: quizQuestions[ActiveQuestion].questionsTitle,
                help: quizQuestions[ActiveQuestion].help,
                ActiveQuestion: ActiveQuestion,
                helperText: quizQuestions[ActiveQuestion].helperText,
                helperImg: quizQuestions[ActiveQuestion].helperImg,
                classes: quizQuestions[ActiveQuestion].classes,
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
                <div className={classes.quizMain}>
                    <div className={this.state.classes}>
                        <div className={'quiz-header'}>
                            <h1 className={classes.title}>{this.state.QuestionTitle}</h1>
                            <div className={classes.help}>
                                { this.state.help != 0 ? this.createMarkup() : null}
                            </div>
                        </div>

                        <QuestionList questionList={this.state.QuestionList}
                                      nextQuestion={this.nextQuestionHandler} prevQuestion={this.prevQuestionHandler}
                                      requiredQuestion={this.state.requiredQuestion}
                                      questionNumber={this.state.ActiveQuestion}
                                      handleRadioChange={this.handleRadioChange}
                                      handleCheckboxChange={this.handleCheckboxChange}
                                      totalQuestions={this.state.totalQuestions}
                                      changePage={this.props.changePage}
                        />
                    </div>
                    <Helper text={this.state.helperText}
                            img={this.state.helperImg}/>
                </div>
            </div>
        )
    }
}

export default Quiz;
