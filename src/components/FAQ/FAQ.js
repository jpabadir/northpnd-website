import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './FAQ.css';

function FAQ() {
  const [expanded, setExpanded] = useState(null);

  const handleQuestionClick = (index) => {
    const element = document.querySelectorAll('.faq-answer')[index];
    element.classList.toggle('expanded');
    setExpanded(expanded === index ? null : index);
  };

  const questions = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces."
    },
    {
      question: "What are the benefits of using React?",
      answer: "React provides a declarative syntax, reusable components, and improved performance through virtual DOM."
    },
    {
      question: "How do you create a React component?",
      answer: "You can create a React component by defining a function or a class that returns JSX."
    },
  ];

  return (
    <div className="MainElementPadding">
      <Container fluid>
        <div className="Subtitle">FAQ</div>
        <div style={{ fontSize: '23px', color: '#939393' }}>Here you will find answers to a lot of questions. <br />Your question not listed?</div>
        <br />
        {questions.map((q, index) => (
          <div key={index}>
            <div className="faq-question" onClick={() => handleQuestionClick(index)}>
              <div>
                <span className={expanded === index ? 'minus' : 'plus'}>{expanded === index ? '-' : '+'}</span>
                <span>{q.question}</span>
              </div>
            </div>
            <div className={`faq-answer${expanded === index ? ' expanded' : ''}`}>
              {expanded === index && <div>{q.answer}</div>}
            </div>
            <hr className="my-2" />
          </div>
        ))}
      </Container>
    </div>
  );
}

export default FAQ;
