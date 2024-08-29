import { useEffect, useState } from "react"

const locaCache = {}

export const useFetch = (url) => {
    
    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })

    useEffect(() => 
        {
            getFecth()
        }, [url])

    const setLoadingState = () => {
        setstate({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });
    }
        
     const getFecth = async() => {

        if ( locaCache[url] ){
            setstate({
                data: locaCache[url],
                isLoading: false,
                hasError: false,
                error: null
            })
            return;
        }

        setLoadingState()
        const response = await fetch(url)
        
        if( !response.ok ){
            setstate({
                data: null,
                isLoading: false,
                hasError: true,
                error: 'No se pudo cargar la información'
            })
            return;
        }
        
        const data = await response.json()
        setstate({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })

        locaCache[url] = data;
    }

    return{
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}
