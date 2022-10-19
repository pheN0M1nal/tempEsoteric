import { forwardRef } from "react";

import { Page as ReactPdfPage } from "react-pdf";

export const Page = forwardRef(({ pageNumber }, ref) => {
    return (
        <div ref={ref} className="pdf_book_page">
            <ReactPdfPage pageNumber={pageNumber} width={500} className="page_pdf" />
            <p className={`pageNumber ${pageNumber % 2 !== 0 ? "oddPage" : "evenPage"}`}>
                <span>{pageNumber}</span>
            </p>
        </div>
    );
});
