
import { useState } from "react"
export const useForm = ( initialForm = {} ) => {
    
    const [form, setform] = useState(initialForm);
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setform({
            ...form,
            [name]: value
        })
    }

    // const onResetForm = () => {
    //     let deafaultForm = {};
    //     Object.keys(form).forEach( (value)  => {
    //         deafaultForm[value] = ''
    //     });
    //     setform(
    //         deafaultForm
    //     )
    // }

    const onResetForm = () => {
       setform( initialForm )
    }

    return {
        ...form,
        form,
        onInputChange,
        onResetForm
    }
}
