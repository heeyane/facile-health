import React from 'react';

const SymptomList = ({symptomList=[]}) => {
    return (
        <>
            {symptomList.map((data, index) => {
            if (data) {
            return (
                <div key={data.Name}>
                <h1>{data.Name}</h1>
                </div>
                )
            }
            return null
            })}
        </>
    );
}

export default SymptomList;