"use server";
import { v4 as uuidv4 } from "uuid";

export const sendFingersLabels = async (
  prevState: {
    success: boolean;
    data: {
      uuid: string;
      dict_name: FormDataEntryValue | null;
      fingers: FormDataEntryValue[];
    };
  },
  formData: FormData
) => {
  const uuid = uuidv4();

  const rawData = {
    dict_name: formData.get("dict_name"),
    fingers: formData.getAll("finger"),
  };

  return {
    success: true,
    data: {
      uuid: uuid,
      dict_name: rawData.dict_name,
      fingers: rawData.fingers,
    },
  };

  // USE Backend

  // const rawData = {
  //   dict_name: formData.get("dict_name"),
  //   fingers: formData.getAll("finger"),
  // };

  // try {

  //   const response = await axios.post(
  //     `${API_BASE_URL}/hand-detection/finger-labeling/`,
  //     rawData,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );

  //   return {
  //     success: true,
  //     uuid: response.data.uuid,
  //     dict_name: response.data.dict_name,
  //   };

  // } catch (error: any) {
  //   console.error("Error:", error.message);
  //   return { success: false, error: error.message };
  // }
};
