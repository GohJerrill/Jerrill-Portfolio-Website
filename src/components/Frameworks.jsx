import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
    const skills = [
        "auth0",
        "blazor",
        "cplusplus",
        "csharp",
        "css3",
        "dotnet",
        "dotnetcore",
        "git",
        "html5",
        "javascript",
        "microsoft",
        "react",
        "sqlite",
        "tailwindcss",
        "vitejs",
        "wordpress",
    ];

    return (
        <div className="relative flex h-[15rem] w-full flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles iconSize={40}>
                {skills.map((skill, index) => (
                    <Icon key={`outer-${index}`} src={`/logos/${skill}.svg`} alt={skill} />
                ))}
            </OrbitingCircles>

            <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
                {skills.map((skill, index) => (
                    <Icon key={`inner-${index}`} src={`/logos/${skill}.svg`} alt={skill} />
                ))}
            </OrbitingCircles>
        </div>
    );
}

const Icon = ({ src, alt }) => {
    return (
        <img
            src={src}
            alt={alt}
            className="h-full w-full rounded-sm object-contain hover:scale-110 duration-200"
            draggable="false"
        />
    );
};
