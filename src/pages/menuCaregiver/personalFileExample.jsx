import React from "react";
import HeaderCaregiver from "../../components/header/headerCaregiver";

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
    <div className="objective">
      <div className="objective-title">Objective #{number}</div>
      <div className="objective-description">{title}</div>
      <div className="objective-button" />
    </div>
  );
}

function ProfileSection({ imageUrl, name }) {
  return (
    <div className="profile-section">
      <div className="profile-header">
        <img loading="lazy" src={imageUrl} alt={`${name}'s profile`} className="profile-image" />
        <div className="profile-name">{name}</div>
      </div>
      <button className="profile-button">Edit Personal Information</button>
      <button className="profile-button">Add Goal</button>
      <button className="profile-button">Send Message</button>
      <button className="profile-button">Add Note</button>
    </div>
  );
}

function NoteItem({ date, motive, content }) {
  return (
    <div className="note-item">
      <div className="note-header">
        <div className="note-info">Date: {date}</div>
        <div className="note-info">Motive: {motive}</div>
      </div>
      <div className="note-content">{content}</div>
    </div>
  );
}

function NotesSection({ notes }) {
  return (
    <div className="notes-section">
      <div className="notes-header">
        <div className="notes-title">Notes</div>
        <div className="notes-recent">Most recent</div>
      </div>
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
      description: "",
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
      <div className="container">
        <HeaderCaregiver />
        <main className="main-content">
          <div className="content-wrapper">
            <section className="overview-section">
              <div className="overview-container">
                <h1 className="overview-title">Intervention Plan Overview</h1>
                <PersonalInfo {...personalInfo} />
                {objectives.map((objective, index) => (
                  <Objective key={index} {...objective} />
                ))}
              </div>
            </section>
            <aside className="profile-notes-section">
              <ProfileSection imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/777bb5501297a3a3cc7407a59331e3f557d10bd4ea904e5de641db1dbcc1e12e?apiKey=78b3824f9340487c994130168bf8c43f&" name="Marie-Ange Laurent" />
              <NotesSection notes={notes} />
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
export default PersonalFileExample;