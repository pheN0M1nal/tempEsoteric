import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showPdfModal } from "../../../../store/actions/modalActions";

const Records = (props) => {
    const dispatch = useDispatch();

    const openModal = (img) => {
        dispatch(showPdfModal(img));
    };

    const pdf = "dashboard-of-nash-rambler.pdf";

    useEffect(() => {
        //console.log(props)
    }, [props.data]);
    return (
        <div className="pageContentOuter">
            {props?.data?.map((item, i) => {
                return (
                    <div key={i} className="imageOuterList">
                        <img
                            onClick={() => openModal(item.url)}
                            src={item.image}
                            alt="image down"
                        />
                    </div>
                );
            })}

            {/* <Pagination
						className='pagination-bar'
						currentPage={currentPage}
						totalCount={bodyData?.length}
						pageSize={PageSize}
						onPageChange={onPageChange}
					/> */}
        </div>
    );
};

export default Records;
