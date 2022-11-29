import resumeImg from '../assets/real resume.jpg'

function Resume(){
    return(
            <div className='rs' id="resume">
                <h1 className='resume'>Resume</h1>
                <div className='resume-content'>
                <img className="rs-img" src={resumeImg} alt="resume" />
            </div>
        </div>
    )
}

export default Resume;