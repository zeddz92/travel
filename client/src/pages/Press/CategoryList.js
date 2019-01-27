import React from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";

import Loader from '../../components/Loader';

export default function CategoryList({items, isFetching, currentPath}) {

    if (isFetching) {
        return <Loader width={50} height={50}/>
    }

    return (
        <ListGroup>
            {items.map((category, index) => (
                <ListGroupItem
                    active={category.path === currentPath}
                    key={index}
                    href={`/press/${category.path}`}>
                    {category.name}
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}