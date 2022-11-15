import resumeImg from '../assets/Resume 21 edit.png'

function Resume(){
    return(
        <div className='af-nav'>
            <div className='rs'>
                <img className="rs-img" src={resumeImg} alt="resume" />
            </div>
        </div>
    )
}

export default Resume;