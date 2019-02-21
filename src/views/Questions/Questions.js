import React, { Component } from "react";
import { Card, CardHeader, CardBody, Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import questionsData from "./QuestionsData";

function QuestionRow(props) {
  const question = props.question;
  const questionLink = `/questions/${question.id}`;
  return (
    <Row>
      <Col lg={12}>
        <Card>
          <CardHeader>Câu hỏi thứ {question.id + 1}</CardHeader>
          <CardBody>
            <Link to={questionLink}>
              <Button color="primary">Go</Button>
            </Link>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

class Questions extends Component {
  render() {
    const questionList = questionsData;
    return (
      <div className="animated fadeIn">
        {questionList.map((question, index) => (
          <QuestionRow key={index} question={question} />
        ))}
      </div>
    );
  }
}

export default Questions;
