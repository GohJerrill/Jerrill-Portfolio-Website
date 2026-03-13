import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
    const outerSkills = ["react", "html5", "css3", "MongoDB", "tailwindcss", "vitejs", "kubernetes", "node", "github-wheel", "Docker", "AWS", "Figma"];
    const middleSkills = ["javascript", "git", "azure", "MiniKube", "mysql", "Flutter", "Firebase", "CYPRESS-NEW-2", "Jest", "Playwrite", "DynamoDB"];
    const innerSkills = ["Dart", "Lambda", "Python", "Postman", "MaterialUI", "Jenkins-NEW"];

    return (
        <div className="relative flex h-[600px] w-[620px] min-w-[620px] items-center justify-center">

            {/* 1. OUTER RING - Radius 260 */}
            <OrbitingCircles iconSize={50} radius={260} duration={35}>
                {outerSkills.map((skill, index) => (
                    <Icon key={`outer-${index}`} src={`/logos/${skill}.svg`} alt={skill} />
                ))}
            </OrbitingCircles>

            {/* 2. MIDDLE RING - Radius 180 (New Middle Column) */}
            <OrbitingCircles iconSize={40} radius={180} reverse duration={25}>
                {middleSkills.map((skill, index) => (
                    <Icon key={`middle-${index}`} src={`/logos/${skill}.svg`} alt={skill} />
                ))}
            </OrbitingCircles>

            {/* 3. INNER RING - Radius 100 */}
            <OrbitingCircles iconSize={30} radius={100} duration={20}>
                {innerSkills.map((skill, index) => (
                    <Icon key={`inner-${index}`} src={`/logos/${skill}.svg`} alt={skill} />
                ))}
            </OrbitingCircles>
        </div>
    );
}

const Icon = ({ src, alt }) => (
    <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-sm object-contain hover:scale-125 transition-transform duration-200"
        draggable="false"
    />
);