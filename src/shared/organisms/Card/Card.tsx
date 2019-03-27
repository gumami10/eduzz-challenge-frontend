import './Card.css';

import React, { useEffect, useState } from 'react';

import Form from '../../molecules/Form/Form';

interface IProps {
    getData: any;
    getAction: any;
}

const Card = (props: IProps) => {
    return (
        <Form getData={props.getData} getAction={props.getAction}>
            {/*Component === true ? "<FilmsContent />" : ""*/}
        </Form>
    );
};

export default Card;
