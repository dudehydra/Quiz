import React from 'react';
import Question from '../Question/Question';
import QuestionRadio from '../QuestionRadio/QuestionRadio';
import classes from './QuestionsList.module.scss'

const QuestionsList = (props) => {
    let isDisabled = function () {
        let disabled;
        let radioBlocks = []
        props.questionList.map( (item) => {
            if (item.type === 'radioBlock') {
                radioBlocks.push(item.selected != null)
            } else  {
                let requiredQuestion = item.requiredQuestion;
                disabled = (item.questionOption.reduce((sum, currentItem) => {
                    return currentItem.checked === true ? sum + 1 : sum;
                },0) >= 3) ? false : true
            }
        });
        if (radioBlocks.length > 0) {
            disabled = !radioBlocks.every((item) => (item == true))
        }
        return disabled;
    }
    const Questions = props.questionList.map((option,index) => (
        option.type == 'checkboxBlock' ?
        <Question
            title={option.question}
            nextQuestion={option.nextQuestionHandler} prevQuestion={option.prevQuestionHandler}
            optionsList={option.questionOption}
            checkboxChange={props.checkboxChange}
            handleRadioChange={props.handleCheckboxChange}
            questionIndex={index}
            key={index}
        /> :  <QuestionRadio
                title={option.question}
                nextQuestion={option.nextQuestionHandler} prevQuestion={option.prevQuestionHandler}
                optionsList={option.questionOption}
                checkboxChange={props.checkboxChange}
                questionIndex={index}
                handleRadioChange={props.handleRadioChange}
                selected={option.selected}
                questionDescr={option.questionDescr}
                designType={option.designType}
                key={index}
            />

    ))
    return (
        <form className={classes.form}>
            <div className={'questions-wrapper'}>{Questions}</div>
            <div className={classes.btnContainer}>
                {props.questionNumber !== 0 ? <button className={[classes.btn, classes["btn--prev"]].join(' ')} onClick={props.prevQuestion}  > <span>Предыдущий шаг</span></button> : null}
                {props.totalQuestions === props.questionNumber ? <button className={classes.btn} onClick={()=> props.changePage('end')} disabled={isDisabled()}><span>Завершить опрос</span></button> : <button className={classes.btn} onClick={props.nextQuestion} disabled={isDisabled()}><span>Следующий шаг</span></button>}
            </div>
        </form>
    )
};

export default QuestionsList;
