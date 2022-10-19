import React, { useState } from "react";
import { useEffect } from "react";
import { Document, pdfjs } from "react-pdf";
import { Button } from "../Global/Button";
import { Page } from "./BlogPage";
import PdfBook from "./PdfBook";

// const Page = React.forwardRef(({ pageNumber }, ref) => {
//     return (
//         <div ref={ref} className="pdf_book_page">
//             <ReactPdfPage pageNumber={pageNumber} width={500} className="page_pdf" />
//             <p className={`pageNumber ${pageNumber % 2 !== 0 ? "oddPage" : "evenPage"}`}>
//                 <span>

//                 {pageNumber}
//                 </span>
//             </p>
//         </div>
//     );
// });

export const AllPages = (props, callbackCancel) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(6);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    console.log(props, "props");
    const { pdf } = props;

    useEffect(() => {
        console.log("showAllPages");
    });
    const handleOnClickClose = () => {
        callbackCancel(false);
    };
    return (
        <>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <PdfBook>
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page
                            // pageNumber={numPages}
                            className="pdf-page"
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                        />
                    ))}
                </PdfBook>
            </Document>
            <Button
                textTransform={"uppercase"}
                fontSize={16}
                maxWidth={200}
                height={41}
                BgColor={"transparent"}
                border={"border-color"}
                onClick={handleOnClickClose}
            >
                close Model
            </Button>
        </>
    );
};
