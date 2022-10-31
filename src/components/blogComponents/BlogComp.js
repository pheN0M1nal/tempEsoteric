import styled from "styled-components";

const BlogComp = ({ blog }) => {
    const Wrapper = styled.div`
        .title {
            font-size: 1.6rem;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        .detail {
            font-size: 1rem;
            line-height: 1.2rem;
        }
    `;

    return (
        <Wrapper>
            <h2 className="title">{blog?.title}</h2>
            <img src={blog?.mainImage} alt="Blog" />
            <p>{blog?.body}</p>
        </Wrapper>
    );
};

export default BlogComp;
