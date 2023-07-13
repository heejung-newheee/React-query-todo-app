import React, { useState } from 'react';

export const useOpen = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    return [isOpen, openModalHandler];
};

export default useOpen;
