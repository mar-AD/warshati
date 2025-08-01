"use client";
import { toast } from "react-toastify";
import { useContext } from "react";
import { StepContext } from "../providers";
import { sendPostRequest } from "../actions";


const useSession = () => {
  const { goToStep } = useContext(StepContext);
  const baseurl =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

    console.log(baseurl)
  const createSession = async () => {
    try {
      const data = await sendPostRequest(`/session/`, {});
      if (data) {
        localStorage.removeItem("sessionHasData");
        localStorage.removeItem("isClassificationTrainingDone");
        localStorage.removeItem("accuracy");
        localStorage.setItem("sessionId", data.session_id);
      }
    } catch (error) {
      toast.error("Error creating session");
      console.error(error);
    }
  };

  const checkSession = async (sessionId: string) => {
    try {
      const response = await fetch(`${baseurl}/api/session/${sessionId}`);
      console.log('esrwtgeryhertjhr', response)
      if (!response.ok) {
        toast.info("Your session has expired");
        return false;
      }
      const data = await response.json();
      return !!data;
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
      return false;
    }
  };

  const manageSession = async () => {
    console.log("Checking session");

    const sessionId = localStorage.getItem("sessionId");
    if (sessionId) {
      const isValidSession = await checkSession(sessionId);
      if (isValidSession) {
        console.log("Session is valid");
        return;
      }
    }
    await createSession();
    goToStep(0);
  };

  return { manageSession, createSession, checkSession };
};

export default useSession;
