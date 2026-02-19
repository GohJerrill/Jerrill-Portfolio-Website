import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
    // Re-distributed skills for three distinct rings
    const outerSkills = ["react", "html5", "css3", "javascript", "tailwindcss", "vitejs"];
    const middleSkills = ["wordpress", "git", "auth0", "blazor", "cplusplus"];
    const innerSkills = ["csharp", "dotnet", "dotnetcore", "microsoft", "sqlite"];

    return (
        /* Kept the 600px height to ensure the 250px radius doesn't clip */
        <div className="relative flex h-[700px] w-full items-center justify-center">

            {/* 1. OUTER RING (Unchanged size) */}
            <OrbitingCircles iconSize={50} radius={260} duration={30}>
                {outerSkills.map((skill, index) => (
                    <Icon key={`outer-${index}`} src={`/logos/${skill}.svg`} alt={skill} />
                ))}
            </OrbitingCircles>

            <OrbitingCircles iconSize={42} radius={177} reverse duration={25}>
                {middleSkills.map((skill, index) => (
                    <Icon key={`middle-${index}`} src={`/logos/${skill}.svg`} alt={skill} />
                ))}
            </OrbitingCircles>

            {/* 3. INNER RING (Unchanged size) */}
            <OrbitingCircles iconSize={35} radius={100} duration={20}>
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