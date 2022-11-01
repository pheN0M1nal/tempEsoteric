import styled from "styled-components";

export const BlogPage = ({ blog }) => {
    const Wrapper = styled.div`
        border: 1px solid var(--custom-border-color);
        border-radius: 10px;
        padding: 1rem;
        h2 {
            font-size: 1.6rem;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            margin: 1rem 0;
        }
        .detail {
            font-size: 1rem;
            line-height: 1.2rem;
        }
    `;
 
    return (
        <div className="pageContentOuter">
            <Wrapper>
                <h2>{blog?.title}</h2>
                <img src={blog?.mainImage} alt="Blog" />
                <p>{blog?.desc}</p>
                <img src={blog?.mainImage2} alt="Blog" />
                <p>{blog?.desc2}</p>
                <img src={blog?.mainImage3} alt="Blog" />
            </Wrapper>
        </div>
    );
};
