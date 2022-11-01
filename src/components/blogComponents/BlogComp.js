import styled from "styled-components";
import prev from "../../static/images/Auth/4980083@0.png";
import next from "../../static/images/Auth/4980081@0.png";
const BlogComp = ({ blog }) => {
    const ListCaptions = styled.div`

     ul {
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: flex-end;
            list-style: none;
            li {
                .page-item {
                    a.page-link {
                        color: #000;
                    }
                }
                a.page-link.next,
                a.page-link.prev {
                    border: 0px;
                    margin: 0rem;
                    &:hover{
                        background-color: transparent;
                        transform: scale(1.2);
                    }
                    &:focus{
                        background-color: transparent;
                        outline: none;
                        border: none;
                        box-shadow: none;
                    }
                }
                img {
                    width: 45px;
                    height: 30px;
                    object-fit: cover;
                }
            }
        }
    `;
    const Wrapper = styled.div`
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
    console.log(blog);

    const nextPage = () => {
        // if (currentPage !== nPages) setCurrentPage(currentPage + 1);
    };
    const prevPage = () => {
        // if (currentPage !== 1) setCurrentPage(currentPage - 1);
    };
    return (
        <div className="pageContentOuter">
            <ListCaptions>
                <ul className="captions">
                    <li className="page-item">
                        <a className="page-link prev" onClick={prevPage} href="#">
                            <img src={prev} alt="prev" />
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link next" onClick={nextPage} href="#">
                            <img src={next} alt="next" />
                        </a>
                    </li>
                </ul>
            </ListCaptions>
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

export default BlogComp;
