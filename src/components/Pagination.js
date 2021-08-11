import React from "react";
import {Pagination} from "react-bootstrap";


export default function PaginationComponents(props) {
    return (
      <Pagination className="d-flex justify-content-center">
        {
          props.current !== 1 ??
            <React.Fragment>
              <Pagination.First />
              <Pagination.Prev />
            </React.Fragment>
        }
        {
            [...Array(props.current).keys()].map((index) => {
              return (
                <Pagination.Item key={index + 1} active={index + 1 === props.current}>{index + 1}</Pagination.Item>
              )
          })
        }
      
        {
            [...Array(3).keys()].map((index) => {
              return (
                <Pagination.Item key={props.current + index + 1}>{ props.current + index + 1}</Pagination.Item>
              )
          })
        }

        <Pagination.Ellipsis />

        <Pagination.Item>{props.count}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    );
}
