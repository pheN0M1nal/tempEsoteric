import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBlogFromLabel, fetchLabels } from "../../store/actions/blogsActions";

const Labels = () => {
    const dispatch = useDispatch();

    const labels = useSelector((state) => state.blogLabels);
    const { blogLabels } = labels;

    useEffect(() => {
        dispatch(fetchLabels());
    }, []);

    const loadBlogInfo = (label) => {
        dispatch(fetchBlogFromLabel(label));
    };

    return (
        <ul>
            {blogLabels.map((label) => (
                <li>
                    <Link to="" onClick={() => loadBlogInfo(label.search_value)}>
                        {label.name} &nbsp;<span className="badge">{label.quantity}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Labels;
