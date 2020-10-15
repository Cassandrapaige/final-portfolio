import React, {useState} from 'react'

const useForm = ({initialValues, onSubmit, validate}) => {

    const [values, setValues] = useState(initialValues || {});
    const [touchedValues, setTouchedValues] = useState({});
    const [errors, setErrors] = useState({});


    const handleChange = event => {
        const target= event.target;
        const value = target.type === "checkbox" ? target.checkbox : target.value;
        const name = target.name;
        setValues({
            [name]: value
        });
    }

    const handleBlur = event => {
        const target = event.target;
        const name = target.name;
        setTouchedValues({
            ...touchedValues,
            [name]: true
        });

        const validation = validate(values);
        setErrors({
            ...errors,
            ...validation
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const validation = validate(values);
        setErrors({
            ...errors,
            ...validation
        });

        onSubmit({
            values, 
            validation
        })
    }
    return {
        values,
        touchedValues,
        errors,
        handleChange,
        handleSubmit,
        handleBlur
    }
}

export default useForm;