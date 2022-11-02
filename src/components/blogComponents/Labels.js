import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBlogFromLabel, fetchLabels } from "../../store/actions/blogsActions";

const Labels = ({blogListId}) => {
    const dispatch = useDispatch();
    console.log(blogListId,"blogListId")
    const labels = useSelector((state) => state.blogLabels);
    const { blogLabels } = labels;
    console.log(blogLabels, "blogLabels");
    useEffect(() => {
        dispatch(fetchLabels());
    }, []);

    const loadBlogInfo = (blogListId) => {
        dispatch(fetchBlogFromLabel(blogListId,1));
    };

    return (
        <ul>
            {blogLabels.map((item,i) => (
                <li key={i} className={`${blogListId === item.blogListId ? "active" : ""}`}>
                    <Link to="" onClick={() => loadBlogInfo(item.blogListId)}>
                        {item.blogListName} &nbsp;<span className="badge">{item.count}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Labels;
