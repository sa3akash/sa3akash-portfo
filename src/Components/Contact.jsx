import React from "react";

import styled from "styled-components";
import firebase from "../firebaseConfig";

const Contact = () => {
  const contactForm = firebase.database().ref("contactMessage");

  let buttonSubmit = () => {
    let name = document.getElementById("nameFiled").value;
    let email = document.getElementById("emailFiled").value;
    let massege = document.getElementById("textArea").value;




      saveMassege(name, email, massege);
      resetFrom('contact_form')
  
    
    // alert message 
    document.getElementById('alert').classList.add('moveIn')
    document.getElementById('alert').style.display= 'flex'

    setTimeout(()=>{
      document.getElementById('alert').style.display= 'none'
    }, 4000)
  };
  let saveMassege = (name, email, massege) => {
    let newContactSet = contactForm.push();
    newContactSet.set({
      name: name,
      email: email,
      massege: massege,
    });
  };
let resetFrom = (id)=>{
  document.getElementById(id).reset()
}
  return (
    <div className="section" id="contact">
      <Circle1 className="circle"></Circle1>
      <Circle2 className="circle"></Circle2>

      <h2 className="section_title">Contact Me</h2>
      <ProjectsContainer className="bd_grid">
        <ContactForm id="contact_form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name=""
            id="nameFiled"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name=""
            id="emailFiled"
            placeholder="Email"
            required
          />
          <textarea
            name=""
            id="textArea"
            cols="0"
            rows="10"
            placeholder="Message"
          ></textarea>
          <div>
            <button type="submit" value="Send" onClick={buttonSubmit}>
              Send
            </button>
          </div>
        </ContactForm>
      </ProjectsContainer>
    </div>
  );
};

export default Contact;

const Circle1 = styled.div`
  width: 250px;
  height: 250px;
  background: var(--circle-one);
  top: 0;
  right: 0;
`;
const Circle2 = styled.div`
  width: 200px;
  height: 200px;
  background: var(--circle-two);
  left: 0;
  bottom: 0;
`;

const ProjectsContainer = styled.div`
  margin: auto;
`;
const ContactForm = styled.form`
  margin-top: 1rem;

  input,
  textarea {
    width: 100%;
    font-size: var(--normal-font-size);
    font-weight: var(--font-semi);
    padding: 1rem;
    border-radius: 0.5rem;
    outline: none;
    border: 1px solid var(--second-color);
    margin-bottom: var(--margin-4);
  }
  div {
    display: flex;
    justify-content: flex-end;
    button {
      color: #fff;
      background: var(--fast-color);
      padding: 0.75rem 2.5rem;
      font-weight: var(--font-semi);
      border-radius: 2rem;
      font-size: 1.2rem;
      filter: drop-shadow(0 5px 20px var(--fast-color));
      border: none;
      outline: none;
      transition: 0.2s;
      cursor: pointer;
      &:hover {
        transform: scaleX(1.2);
      }
    }
  }
  @media (min-width: 768px) {
    width: 460px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
  }
  @media (min-width: 1080px) {
    width: 660px;
  }
`;