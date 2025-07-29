import Image from "next/image";

type RainWorksMember = {
  name: string;
  pronouns: string;
  github_user: string;
}
const members: RainWorksMember[] = [{
  name: "Li",
  pronouns: "he/him",
  github_user: "rainwashed"
}, {
  name: "Joshua",
  pronouns: "he/him",
  github_user: "JJCgits"
}, {
  name: "xaft",
  pronouns: "he/him",
  github_user: "xt40"
}]

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen min-h-screen space-y-2">
        <h1 className="text-5xl">rainworks.club</h1>
        <p>
          We are a self-governed team of programmers building the solutions for tomorrow&apos;s problems.
        </p>
        <span className="px-4 py-2 rounded-md border-foreground/20 border-1">
          <p>Check out our <a href="https://github.com/rainworks-software" target="_blank" className="underline">GitHub</a> to see some projects.</p>
        </span>
      </div>
      <div className="flex items-center justify-center w-screen">
        <div className="flex flex-col p-4 space-y-2 border rounded-lg border-foreground/20">
          <span>Our members:</span>
          <span className="inline-flex space-x-4">
            {members.map((member, i) => <div key={i} className="inline-flex flex-col items-center">
              <a href={`https://github.com/${member.github_user}`} target="_blank">
                <Image src={`https://github.com/${member.github_user}.png`} alt={member.github_user} width={64} height={64} className={`rounded-full ${i === 0 ? 'border-2 p-0.5 border-yellow-400 outline-offset-8' : ''}`} />
              </a>
              <span>{member.name} • {member.pronouns}</span>
            </div>)}
          </span>
        </div>
      </div>
      <div className="h-20" />
    </>
  );
}
