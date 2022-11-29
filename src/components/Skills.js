import { SkillData } from "./SkillData"
import './mg-top.css'
function Skills() {
       
    return (
        <div className="skills af-nav" id="myskills">
                <h2 className="skill-detail">I have experience with these technologies</h2>
            <div className="skillsGrid">
                <div className="skill">
                    {SkillData.map((item, index) => {
                        return(
                            <div key={index}>
                                <img className="skill-img" src={item.source} alt={item.alt} />
                            </div>
                        )
                    })}
                </div>
            </div>            
        </div>
    )
}
export default Skills