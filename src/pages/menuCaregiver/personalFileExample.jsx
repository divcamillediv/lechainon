import React from "react";
import HeaderCaregiver from "../../components/header/headerCaregiver";
import { Card, Button } from "react-bootstrap";
import "./personalFileExample.css";

function PersonalInfo({ firstName, lastName, age, housingStatus, startOfPlan, endOfPlan, immigrationStatus, issues }) {
  return (
    <div className="personal-info">
      <div className="name-age">
        <div className="info-item">First Name: {firstName}</div>
        <div className="info-item">Age: {age}</div>
      </div>
      <div className="info-item">Last Name: {lastName}</div>
      <div className="info-item">Housing status: {housingStatus}</div>
      <div className="info-item">Start of Plan: {startOfPlan}</div>
      <div className="info-item">End of Plan: {endOfPlan}</div>
      <div className="info-item">Immigration status: {immigrationStatus}</div>
      <div className="info-item">Issues: {issues}</div>
    </div>
  );
}

function Objective({ number, title, description }) {
  return (
    
<p class="addspace">

    <Card className="objective-card">
   
      <Card.Body>
        <div className="objective-title">Objective #{number}</div>
        <div className="objective-description">{title}</div>
      </Card.Body>
    </Card>

    </p>
  );
}

function ProfileSection({ imageUrl, name }) {
  return (
    <Card className="profile-section">
      <Card.Header>
        <Card.Img variant="top" src={imageUrl} alt={`${name}'s profile`} className="profile-image" />
        <Card.Title className="profile-name">{name}</Card.Title>
      </Card.Header>
      <Card.Body className="profile-button-group">
  <Button className="button profile-button">Edit Personal Information</Button>
  <p class="space"></p>
  <Button className="button profile-button">Add Goal</Button>
  <p class="space"></p>
  <Button className="button profile-button">Send Message</Button>
  <p class="space"></p>
  <Button className="button profile-button">Add Note</Button>
</Card.Body>

    </Card>
  );
}

function NoteItem({ date, motive, content }) {
  return (
    <Card className="note-item">
      <Card.Header>
        <div className="note-info">Date: {date}</div>
        <div className="note-info">Motive: {motive}</div>
      </Card.Header>
      <Card.Body>
        <div className="note-content">{content}</div>
      </Card.Body>
    </Card>
  );
}

function NotesSection({ notes }) {
  return (
    <div className="notes-section">
      <h3 className="notes-title">Notes</h3>
      <div className="notes-recent">Most recent</div>
      {notes.map((note, index) => (
        <NoteItem key={index} date={note.date} motive={note.motive} content={note.content} />
      ))}
    </div>
  );
}

function PersonalFileExample() {
  const personalInfo = {
    firstName: "Marie-Ange",
    lastName: "Laurent",
    age: 48,
    housingStatus: "House 5",
    startOfPlan: "2024-03-15",
    endOfPlan: "TBD",
    immigrationStatus: "Citizen",
    issues: "Substance Use / Physical abuse",
  };

  const objectives = [
    {
      number: 1,
      title: "Improving Consumption Habit",
      description: "Maintain a routine of consumption by using the appropriate services: transition to use only the prescribed medication (methadone, dilaudid)",
    },
    {
      number: 2,
      title: "Maintain medical follow-up with treating teams",
      description: "",
    },
  ];

  const notes = [
    {
      date: "2024/03/15",
      motive: "Crisis",
      content:
        "Tried to wake up Mrs. several times on Thursday, March 14, to offer her an appointment at the medical clinic. In the end, Mrs. refused. The coordinator also came to offer her this appointment, easy to access, to talk with a doctor about her symptoms, (as mentioned since the beginning of February) who has test or analysis results to communicate to her. Mrs. still refuses to get up. We are telling her that this is indeed her choice, but also that in this case, she will not be able to ask for someone to go with her and wait in the emergency room",
    },
  ];

  return (
    <>
      <HeaderCaregiver />
      <div className="container">
        <div className="row">
          <div className="left col-md-8">
            <section className="overview-section">
              <h1 className="overview-title">Intervention Plan Overview</h1>
              <PersonalInfo {...personalInfo} />
              <p class="addspace"></p>
              {objectives.map((objective, index) => (
               
                <Objective className="addspace" key={index} {...objective} />

              ))}
            </section>
          </div>
          
          <div className="right col-md-4">
            <aside className="profile-notes-section">
              <ProfileSection imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/777bb5501297a3a3cc7407a59331e3f557d10bd4ea904e5de641db1dbcc1e12e?apiKey=78b3824f9340487c994130168bf8c43f&" name="Marie-Ange Laurent" />
              <p className="addspace"></p>
              <NotesSection notes={notes} />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
export default PersonalFileExample;
