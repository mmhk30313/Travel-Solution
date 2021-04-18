import React from 'react';

const WithStyles = ({image,idx}) => {
    // const {description, headline, image} = props;
    console.log(image)
    return (
        <div className="">
                <div className="card mx-1 text-center p-2">
                <img src={image} alt=""/>
                <h1>Heading-{idx}</h1>
            </div>
            <br/><br/>
        </div>
    );
};

export default WithStyles;