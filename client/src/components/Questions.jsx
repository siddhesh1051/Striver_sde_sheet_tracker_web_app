import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem, Card, CardBody, Progress } from "@nextui-org/react";
import axios from "axios";
import Title from "./Title";
import Links from "./Links";
import SelectButton from "./SelectButton";
import { HashLoader } from "react-spinners";
import ProgressBar from "./ProgressBar";

export default function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [doneCount, setDoneCount] = useState(parseInt(localStorage.getItem("doneCount")) || 0);
    const [revisitCount, setRevisitCount] = useState(parseInt(localStorage.getItem("revisitCount")) || 0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/topic/sde');
                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const updateDoneCount = (decrement = false) => {
        const updatedDoneCount = decrement ? doneCount - 1 : doneCount + 1;
        setDoneCount(updatedDoneCount);
        localStorage.setItem("doneCount", updatedDoneCount.toString());
    };

    const updateRevisitCount = (decrement = false) => {
        const updatedRevisitCount = decrement ? revisitCount - 1 : revisitCount + 1;
        setRevisitCount(updatedRevisitCount);
        localStorage.setItem("revisitCount", updatedRevisitCount.toString());
    };

    return (
        isLoading ?
            <div className="flex justify-center items-center h-screen">
                <HashLoader
                    color="#36d7b7"
                    cssOverride={{ display: 'block', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', zIndex: '9999', marginTop: '-100px' }}
                    size={120}
                />
            </div>
            :
            <>
          
                <ProgressBar doneCount={doneCount} revisitCount={revisitCount} />
                <Accordion>
                    {data?.length !== 0 &&
                        data.map((item) => (
                            <AccordionItem key={item._id} aria-label={item.sl_no} title={"Day " + item.sl_no + " : " + item.title}>
                                {item.topics.map((question) => (
                                    <Card className="my-1" key={question.id}>
                                        <CardBody style={{ display: "grid", gridTemplateColumns: "8% 68% 20%", alignItems: 'center', gap: '10px' }}>
                                            <SelectButton
                                                question={question}
                                                updateDoneCount={updateDoneCount}
                                                updateRevisitCount={updateRevisitCount}
                                            />
                                            <Title question={question} />
                                            <Links question={question} />
                                        </CardBody>
                                    </Card>
                                ))}
                            </AccordionItem>
                        ))}
                </Accordion>
            </>
    );
}
