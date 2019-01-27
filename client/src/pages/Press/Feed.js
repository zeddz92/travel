import React from 'react';
import Pagination from "react-js-pagination";

import PostCard from "./PostCard";
import Loader from '../../components/Loader';


function Feed({data, fetchPosts, categoryPath}) {
    const {items, isFetching, currentPage, perPage, total} = data;
    if (isFetching) {
        return <Loader/>
    }
    return (
        <div>
            {items.map((post, index) => (
                <PostCard key={index} data={post}/>
            ))}

            {items.length > 0 && (
                <div className="text-center">
                    <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={perPage}
                        totalItemsCount={total}
                        pageRangeDisplayed={10}
                        onChange={(page) => fetchPosts(categoryPath, page)}
                    />
                </div>
            )}

        </div>
    )
}

export default Feed;