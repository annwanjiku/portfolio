
function Boxb(){
    return(
        <div className="boxb">
        <div>
        <h3 className="h3About"><span>About</span></h3>
        </div>
        <div>
        <p className="Text">
        Wanjiku is a STEM educator.
        She is passionate in teaching programming languages.
        Her top skills are in data analysis and data science. 
        She aims to advance herself in STEM and use the skills gained to empower others and especially her community.
        She is keen to learn and open to work.
        </p>
        <button className="resume" onClick={() => window.open("https://eu.docworkspace.com/d/sILyywOj1AY_d4LcG", "_blank")}>Resume</button>
        </div>

        </div>
    )
};

export default Boxb;