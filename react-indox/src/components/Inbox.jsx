import React from "react";
import { useSelector } from "react-redux";
import {MailBox,NotFound,LeftSection,RightSection} from './index.js'
function Inbox() {
  const currentMail = useSelector((state) => state.mails.mails);
  
  return (
    <div className="flex justify-between">
      <LeftSection></LeftSection>
      {currentMail.length !== 0 ? (
        <>
          <MailBox currentMail={currentMail}></MailBox>
          <RightSection currentMail={currentMail}></RightSection>
        </>
      ) : (
      <NotFound></NotFound>
      )}
    </div>
  );
}

export default Inbox;
