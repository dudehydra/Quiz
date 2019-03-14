import React, {Component} from 'react';

import Question from '../../components/Question/Question'

class Quiz extends Component {
    state = {
        QuestionList: [
            {question: 'Какого Вы пола:',
             questionOption: [
                 {text: "Мужчина", checked: false,type: 'checkbox'},
                 {text: "Женщина", checked: false,type: 'checkbox'},
                 {text: "Другое", checked: false, type: 'checkbox', value: '0'},
             ],
             help: []
            },
            {question: 'Какие основные проблемы в сфере жкх:',
                questionOption: [
                    {text: "Мужчина", checked: false,type: 'checkbox'},
                    {text: "Женщина", checked: false,type: 'checkbox'},
                    {text: "Другое", checked: false, type: 'text', value: '0'},
                ],
                help: ['- Выберите <span>3</span> варианта:']
            }
            ,
            {question: 'Какие основные проблемы в сфере жкх:',
                questionOption: [
                    {text: "Мужчина", checked: false,type: 'checkbox'},
                    {text: "Женщина", checked: false,type: 'checkbox'},
                    {text: "Другое", checked: false, type: 'checkbox', value: '0'},
                ],
                help: ['<span>5</span> баллов - абсолютно согласе.','<span>1</span> балл - аблослюно не согласен.']
            }
        ],
        ActiveQuestion: 0
    };
    nextQuestionHandler = () => {
        this.setState( ( prevState ) => {
            return { ActiveQuestion: prevState.ActiveQuestion + 1 };
        } );
    }
    prevQuestionHandler = () => {
        if (this.state.ActiveQuestion > 0) {
            this.setState( ( prevState ) => {
                return { ActiveQuestion: prevState.ActiveQuestion - 1 };
            } );
        }
    }
    handleCheckboxChange = (index) => {
        let QuestionList = Object.assign({}, this.state.QuestionList);
        QuestionList[this.state.ActiveQuestion].questionOption[index].checked = !QuestionList[this.state.ActiveQuestion].questionOption[index].checked
        this.setState(prevState => ({
            QuestionList
        }));
    };
    render() {
        return (
            <div>
                <Question
                    title={this.state.QuestionList[this.state.ActiveQuestion].question}
                    nextQuestion={this.nextQuestionHandler} prevQuestion={this.prevQuestionHandler}
                    helpText={this.state.QuestionList[this.state.ActiveQuestion].help}
                    optionsList={this.state.QuestionList[this.state.ActiveQuestion].questionOption}
                    checkboxChange={this.handleCheckboxChange}
                />
            </div>
        )
    }
}

export default Quiz;
