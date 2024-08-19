import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteMail } from "../app/mailSlice";
import PropTypes from 'prop-types'

DeleteMail.propTypes = {
  modalIsOpen:PropTypes.boolean,
  closeModal:PropTypes.boolean,
  currentMail:PropTypes.object,
}
function DeleteMail({ modalIsOpen, closeModal, currentMail }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleDeleteMail = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${currentMail.threadId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      dispatch(deleteMail());
      closeModal(false);
    } catch (error) {
      console.error("Error deleting mail:", error);
    }
    setLoading(false);
  };
  return (
    <>
      {!loading ? (
        <div
          className={`absolute bottom-0 p-2 flex justify-center items-end left-0  h-full w-full bg-gray-400/50 z-50 ${
            modalIsOpen ? `` : `hidden`
          }`}
        >
          <div
            className={`w-[450px] h-[250px] p-[24px] absolute top-[30%] left-[40%] border-[1.5px] border-[#25262B] rounded-md flex flex-col gap-[25px]   bg-black`}
          >
            {/* <button onClick={closeModal} className=''>close</button></div> */}
            <div className="text-center font-bold p-[8px] text-[24px]">
              Are you sure ?
            </div>
            <div className="text-center pb-[8px] text-[14px]">
              Your selected email will be deleted
            </div>

            <div className="flex justify-center gap-[25px]">
              <button
                onClick={() => closeModal()}
                className="w-[150px] h-[50px] hover:bg-gray-800 bg-[#25262b] rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteMail()}
                className="w-[150px] h-[50px] hover:bg-gray-800 bg-red-500 hover:bg-red-800 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-400/50 absolute w-full bottom-0 flex h-full  justify-center z-50 p-2 left-0 items-center">
          <div
            className="inline-block h-[30px] w-[30px] text-blue-500 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        </div>
      )}
    </>
  );
}

export default DeleteMail;
