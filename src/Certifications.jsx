import { useState } from "react";
import python_cert from "./python_cert.jpg";
import web_cert from "./web_cert.jpg";

const CertificateCarousel = () => {
    const certificates = [python_cert, web_cert];
    const certificateNames = ["Python & Apps Certificate", "Web Development Certificate"];

    const [currentCertificate, setCurrentCertificate] = useState(0);

    const nextCertificate = () => {
        setCurrentCertificate((prev) => (prev + 1) % certificates.length);
    };

    const prevCertificate = () => {
        setCurrentCertificate((prev) => (prev - 1 + certificates.length) % certificates.length);
    };

    return (
        <div className="cert">
            <h3 className="certifications-title"><span>Certifications</span></h3>
            <img className="certificate-image" src={certificates[currentCertificate]} alt={certificateNames[currentCertificate]} />

       
                <div className="section1">
                <button className="button" onClick={prevCertificate}>Previous ←</button>
                <button className="button" onClick={nextCertificate}> Next →</button>
                </div>
            

            <div className="section2">
                <p>{certificateNames[currentCertificate]}</p>
            </div>

           
            
        </div>
    );
};

export default CertificateCarousel;
