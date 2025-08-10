import { useEffect, useState } from "react"
import { SkillsProps } from "./skills.types"

const Skills = (props: SkillsProps) => {
    const [isLoggedIn, setIsloggedIn] = useState(false);
    const { skills } = props;

    useEffect(() => {
        setTimeout(() => {
            setIsloggedIn(true)
        }, 1001)
    })
    return (
        <div>
            <ul>
                {skills.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            {isLoggedIn ? (
                <button>Learning</button>
            ) : (
                <button onClick={() => setIsloggedIn(true)}>Login</button>
            )}
        </div>
    )
}

export default Skills