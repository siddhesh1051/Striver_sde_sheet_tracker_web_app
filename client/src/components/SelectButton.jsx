import React, { useState, useEffect } from 'react';
import { Select, SelectItem } from '@nextui-org/react';

const SelectButton = ({ question, updateDoneCount, updateRevisitCount }) => {
    const questionId = question.id;
    const localStorageKey = `question_${questionId}_status`;

    const [selectedStatus, setSelectedStatus] = useState("not done");
    const [previousStatus, setPreviousStatus] = useState("not done");

    useEffect(() => {
        // Load status from localStorage after the component has mounted
        const storedStatus = localStorage.getItem(localStorageKey);
        if (storedStatus) {
            setSelectedStatus(storedStatus.toLowerCase());
            setPreviousStatus(storedStatus.toLowerCase());
        }
    }, []);

    const handleStatusSelect = (value) => {
        const lowerCaseKey = value?.currentKey.toLowerCase();
        setSelectedStatus(lowerCaseKey);
        localStorage.setItem(localStorageKey, lowerCaseKey);

        // Decrement the previous count based on the previously selected status
        if (previousStatus === 'done') {
            updateDoneCount(true); // true indicates decrement
        } else if (previousStatus === 'revisit') {
            updateRevisitCount(true); // true indicates decrement
        }

        // Update the previous status
        setPreviousStatus(lowerCaseKey);

        // Increment the count for the newly selected status
        if (lowerCaseKey === 'done') {
            updateDoneCount();
        } else if (lowerCaseKey === 'revisit') {
            updateRevisitCount();
        }
    };

    

    const statuses = [
        {
            label: "Done",
            value: "done",
            color: "success",
        },
        {
            label: "Revisit",
            value: "revisit",
            color: "warning",
        },
        {
            label: "Not Done",
            value: "not done",
            color: "danger",
        },
    ];

    return (
        <Select
            key={questionId}
            value={selectedStatus}
            color={statuses.find((status) => status.value === selectedStatus)?.color || "success"}
            onSelectionChange={handleStatusSelect}
            label="Status"
            style={{ width: "100%", gridColumn: "1", marginRight: "2rem" }}
            size="sm"
        >
            {statuses.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                    {status.label}
                </SelectItem>
            ))}
        </Select>
    );
};

export default SelectButton;
