import Image from "next/image";

type RainWorksMember = {
  name: string;
  pronouns: string;
  github_user: string;
};
const members: RainWorksMember[] = [
  {
    name: "Li",
    pronouns: "he/him",
    github_user: "rainwashed",
  },
  {
    name: "Joshua",
    pronouns: "he/him",
    github_user: "JJCgits",
  },
  {
    name: "xaft",
    pronouns: "he/him",
    github_user: "xt40",
  },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen min-h-screen space-y-2">
        <h1 className="text-5xl">rainworks.club</h1>
        <p className="text-center max-w-[80vw]">
          We are a self-governed team of programmers building the solutions for
          tomorrow&apos;s problems.
        </p>
        <span className="px-4 py-2 rounded-md border-foreground/20 border-1">
          <p>
            Check out our{" "}
            <a
              href="https://github.com/rainworks-software"
              target="_blank"
              className="underline"
            >
              GitHub
            </a>{" "}
            to see some projects.
          </p>
        </span>
      </div>
      <div className="flex items-center justify-center w-screen">
        <div className="flex flex-col p-4 space-y-2 border rounded-lg border-foreground/20">
          <span>Our members:</span>
          <span className="inline-grid grid-cols-3 md:grid-cols-5 gap-4 place-items-center">
            {members.map((member, i) => (
              <div key={i} className="inline-flex flex-col items-center">
                <a
                  href={`https://github.com/${member.github_user}`}
                  target="_blank"
                >
                  <Image
                    src={`https://github.com/${member.github_user}.png`}
                    alt={member.github_user}
                    width={64}
                    height={64}
                    className={`rounded-full ${i === 0
                        ? "border-2 p-0.5 border-yellow-400 outline-offset-8"
                        : ""
                      }`}
                  />
                </a>
                <span>
                  {member.name} • {member.pronouns}
                </span>
              </div>
            ))}
          </span>
        </div>
      </div>
      <div className="h-20" />
      <div className="flex flex-col items-center justify-center">
        <div className="p-4 max-w-[90vw] md:max-w-[50vw] space-y-2 flex flex-col border rounded-lg border-foreground/20">
          <span>Our beliefs:</span>
          <span className="inline-flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
            <p className="border border-foreground/20 p-2 rounded-sm">
              We believe that every individual has the ability to solve complex
              issues and that those issues can be solved with the ever-growing
              integration of technology and software into our lives.
            </p>
            <p className="border border-foreground/20 p-2 rounded-sm">
              We believe that problems should not be solved retroactively,
              rather, we can anticipate problems that can be inferred from
              current patterns and actively work to solve it today.
            </p>
            <p className="border border-foreground/20 p-2 rounded-sm">
              We believe that community forms the basis of advancement, and we
              actively engage in the global open-source community, collaborating
              to find better solutions to existing problems.
            </p>
          </span>
        </div>
      </div>
      <div className="h-20" />
      <footer className="w-fit mx-auto border border-foreground/20 rounded-lg p-2">
        <span className="text-foreground/80">
          rainworks.club is an initiative led by{" "}
          <a
            href={`https://github.com/${members[0].github_user}`}
            target="_blank"
            className="underline underline-offset-2"
          >
            rainwashed
          </a>
        </span>
      </footer>
      <div className="h-20" />
    </>
  );
}
