"use client"

import { useEffect, useState } from "react";


const PredictedClass = ({
  predictedClass: predictedClass
}: {
  predictedClass: string
}) => {

  let colorVariations = [
    'bg-blue-700', 'bg-green-700', 'bg-red-700', 'bg-yellow-600', 'bg-purple-600',
    'bg-pink-600', 'bg-indigo-600', 'bg-teal-600', 'bg-orange-600', 'bg-cyan-600',
    'bg-lime-600', 'bg-amber-600', 'bg-violet-600', 'bg-fuchsia-600', 'bg-rose-600'
  ];

  const [listItems, setListItems] = useState([]);

  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
  const sessionId = localStorage.getItem('sessionId');


  const shuffleList = (shuffledList: Array<string>) => {
    for (let i = shuffledList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
    }
    return shuffledList;
  };

  useEffect(() => {
    const getClasses = async () => {
      try {
        const res = await fetch(`${baseURL}/api/session/${sessionId}`, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        });

        const data = await res.json();
        if (data?.classes) {

          colorVariations = shuffleList(colorVariations)

          setListItems(data.classes.map((cls: string, index: number) => ({
            text: cls,
            activeColor: colorVariations[index % colorVariations.length] + ' text-white'
          })));
        }
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    getClasses();
  }, [baseURL, sessionId]);



  return (
    <ul className='list-none flex flex-col bg-gray-50 dark:bg-gray-900 p-2 rounded-xl dark:border-white border'>
      {listItems.map((item: { text: string, activeColor: string }, index: number) => (
        <li
          key={index}
          className={`py-2 px-10 my-1 rounded-md capitalize ${predictedClass.toLocaleLowerCase() === item.text.toLocaleLowerCase() ? item.activeColor : 'text-gray-900 dark:text-gray-200'}`}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
};


export default PredictedClass;