import React, { useState } from "react";
import { useEffect } from "react";
import { Document, Page as ReactPdfPage, pdfjs } from "react-pdf";
import PdfBook from "../book/PdfBook";

const Page = React.forwardRef(({ pageNumber }, ref) => {
    return (
        <div ref={ref}>
            <ReactPdfPage pageNumber={pageNumber} width={500} />
        </div>
    );
});

export const AllPages = (props) => {
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

    return (
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            <PdfBook>
                {Array.from(new Array(numPages), (el, index) => (
                    <Page
                        pageNumber={numPages}
                        className="pdf-page"
                        key={`page_${index + 1}`}
                        //   pageNumber={index + 1}
                    />
                ))}
            </PdfBook>
        </Document>
    );
};
