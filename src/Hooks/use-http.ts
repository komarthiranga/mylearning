import React from 'react';

interface IRequest {
    name: string;
    technology: string;
    description: string;
}

interface IResponse {
   data ?: any;
   error: boolean;
   save(reqData: IRequest): Promise<string>;
   get: () => {}
}

export const useHttp = ({url}: {url: string}) :IResponse  => {

    const [data, setData] = React.useState<object | null>(null); 
    const [error, setError] = React.useState<boolean>(false);
    
    const save = (reqData: IRequest): Promise<string>  => {
      return new Promise( async(reslove, reject) => {
        const rawResponse = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(reqData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
  
        if(!rawResponse.ok) {
           setError(true); 
           reject('error');
           throw new Error('There some issue');
        }
        const content = await rawResponse.json();
        setData(content);
        setError(false);
        reslove('success');
      });  
     
    }

    const get = async() => {
       const rawResponse = await fetch(url);
       if(!rawResponse.ok) {
        setError(true); 
        throw new Error('There some issue');
     }
     const content = await rawResponse.json();
     setData(content);
     setError(false);
    }

    return {
       data,
       error,
       save,
       get
    }


}