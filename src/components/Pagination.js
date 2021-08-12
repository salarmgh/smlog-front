import React from "react";
import {Pagination} from "react-bootstrap";


export default function PaginationComponents(props) {
    function createItems(current) {
        let items = []
        const start = current - 3 < 1 ? 1 : current - 3;
        const end = current + 3 < props.count ? current + 3 : props.count;

        if (start > 1) {
            items.push(<Pagination.First href={"/?page=1"}/>);
            items.push(<Pagination.Prev href={`/?page=${props.current - 1}`} />);
            items.push(<Pagination.Ellipsis disabled /> );
        }

        for (let i = start; i <= end; i++) {
          items.push(<Pagination.Item key={i} active={current === i} href={`/?page=${i}`}>{i}</Pagination.Item>);
        }

        if (end !== props.count) {
            items.push(<Pagination.Ellipsis disabled /> );
            items.push(<Pagination.Next href={`/?page=${props.current + 1}`} />);
            items.push(<Pagination.Last href={`/?page=${props.count}`}/>);
        }

        return items;
    }

    return (
      <Pagination className="d-flex justify-content-center">
        {createItems(props.current)}
      </Pagination>
    );
}
