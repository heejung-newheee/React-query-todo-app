import { useState } from 'react';

export const useInput = () => {
    // state
    const [value, setValue] = useState('');

    // handler
    const onChangeHandler = (e) => {
        setValue(e.target.value);
    };

    return [value, onChangeHandler];
};
export default useInput;
