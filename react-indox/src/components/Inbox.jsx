import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {MailBox,NotFound,LeftSection,RightSection} from './index.js'
function Inbox() {
  const currentMail = useSelector((state) => state.mails.mails);
  const [selectedMail, setSelectedMail] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${currentMail.threadId}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setSelectedMail(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetch();
  }, [currentMail]);

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
