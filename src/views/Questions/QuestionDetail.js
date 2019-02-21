import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import rightAnswer from "./check.json";
import falseAnswer from "./error.json";
import star from "./star.json";
import stop from "./stopwatch.json";
import questionsData from "./QuestionsData";
import answersData from "./AnswersData";
import ReactCountdownClock from "react-countdown-clock";

function AnswerRow(props) {
  const answer = props.answer;
  const answered = props.answered;
  const result = props.result;
  return (
    <div>
      <Row>
        <Col lg={12}>
          <Button size="lg"
            color={answered === false ? "primary" : result === answer.name ? "success" : "danger"}
            block
            value={answer.name}
            onClick={props.onClick}
          >
            {answer.name}
          </Button>
        </Col>
      </Row>
      <Row>
        <Col lg={12}> </Col>
      </Row>
    </div>
  );
}

function Countdown(props) {
  return (
    <ReactCountdownClock
      seconds={15}
      color="#000"
      alpha={0.9}
      size={300}
      onComplete={props.onComplete}
    />
  );
}

class QuestionDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTrue: false,
      showFalse: false,
      showStar: false,
      showClock: false,
      showComplete: false,
      answered: false
    };
  }

  componentDidUpdate() {
    if (this.showTrue) {
      lottie.loadAnimation({
        container: this.showTrue,
        renderer: "svg",
        animationData: rightAnswer
      });
    }
    if (this.showFalse) {
      lottie.loadAnimation({
        container: this.showFalse,
        renderer: "svg",
        animationData: falseAnswer
      });
    }
    if (this.showStar) {
      lottie.loadAnimation({
        container: this.showStar,
        renderer: "svg",
        animationData: star
      });
    }
    if (this.showComplete) {
      lottie.loadAnimation({
        container: this.showComplete,
        renderer: "svg",
        animationData: stop
      });
    }
  }

  handleClick(e, answer) {
    e.preventDefault();
    if (e.target.value === answer) {
      this.setState({ showTrue: true, answered: true });

      setTimeout(() => this.setState({ showTrue: false }), 1500);
    } else {
      this.setState({ showFalse: true, answered: true });

      setTimeout(() => this.setState({ showFalse: false }), 1500);
    }
  }

  handleClickStar = () => {
    this.setState({ showStar: true });

    setTimeout(() => this.setState({ showStar: false }), 1500);
  };

  onComplete = () => {
    this.setState({
      showClock: false,
      showComplete: true
    });

    setTimeout(() => this.setState({ showComplete: false }), 3000);
  };

  render() {
    const question = questionsData.find(
      question => question.id.toString() === this.props.match.params.id
    );
    const questionLink = `/questions/${question.id + 1}`;
    const answerList = answersData;
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <Row>
              <Col lg={4}>
                <h2>Câu hỏi thứ {question.id + 1}</h2>
              </Col>
              <Col lg={8}>
                <i
                  onClick={this.handleClickStar}
                  className="fa fa-star float-right fa-3x text-warning"
                />
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <h1>{question.name}</h1>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            {answerList.map(
              (answer, index) =>
                answer.idQuestion === question.id && (
                  <AnswerRow
                    key={index}
                    answer={answer}
                    answered={this.state.answered}
                    result={question.rightAnswer}
                    onClick={e => this.handleClick(e, question.rightAnswer)}
                  />
                )
            )}
            <Row>
              <Col lg={5}>
                <Button
                  className="float-left"
                  color="primary"
                  onClick={() => this.setState({ showClock: true })}
                >
                  Tính giờ
                </Button>
              </Col>
              <Col lg={3}>
                {this.state.showClock && (
                  <Countdown onComplete={this.onComplete} />
                )}
              </Col>
              <Col lg={4}>
                <Link to={questionLink}>
                  <Button className="float-right" color="success" onClick ={() => this.setState({answered: false})}>
                    Câu tiếp theo
                  </Button>
                </Link>
              </Col>
            </Row>
          </CardBody>
        </Card>
        {this.state.showTrue && (
          <div
            ref={showTrue => (this.showTrue = showTrue)}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0
            }}
          />
        )}
        {this.state.showFalse && (
          <div
            ref={showFalse => (this.showFalse = showFalse)}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0
            }}
          />
        )}
        {this.state.showStar && (
          <div
            ref={showStar => (this.showStar = showStar)}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0
            }}
          />
        )}
        {this.state.showComplete && (
          <div
            ref={showComplete => (this.showComplete = showComplete)}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0
            }}
          />
        )}
      </div>
    );
  }
}

export default QuestionDetail;
