import resumeImg from '../assets/Resume 21 edit.png'

function Resume(){
    return(
            <div className='rs' id="resume">
                <h1>Resume</h1>
                <img className="rs-img" src={resumeImg} alt="resume" />
            </div>
    )
}

export default Resume;