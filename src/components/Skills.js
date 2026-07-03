import React from "react";
import {
  MdCode,
  MdOutlineArticle,
  MdOutlineSecurity,
  MdStorage,
} from "react-icons/md";
import useScrollReveal from "../hooks/useScrollReveal";

const skillSections = [
  {
    title: "Security",
    description: "Analyse, hardening og praktisk sikkerhedsarbejde.",
    accent: "border-emerald-500",
    icon: MdOutlineSecurity,
    skills: [
      {
        title: "Security engineering",
        text: "Trusselsmodellering, sårbarhedsvurdering og tekniske sikkerhedsforanstaltninger.",
        tags: ["Threat modeling", "Risk", "Controls"],
      },
      {
        title: "SIEM og loganalyse",
        text: "Logindsamling, korrelation og analyse af sikkerhedshændelser.",
        tags: ["Suricata", "ELK", "Wireshark"],
      },
      {
        title: "RAT udvikling",
        text: "Praktisk indsigt i malware-teknikker, backdoors og skjulemekanismer fra studieprojekt.",
        tags: ["Python", "Sockets", "Steganografi"],
      },
    ],
  },
  {
    title: "Governance",
    description: "Struktur, dokumentation og informationssikkerhed.",
    accent: "border-sky-500",
    icon: MdOutlineArticle,
    skills: [
      {
        title: "ISO/IEC 27001, 27002 og 27701",
        text: "Arbejde med ISMS/PIMS, politikker, kontroller og audit-forberedelse.",
        tags: ["ISMS", "PIMS", "Audit"],
      },
      {
        title: "Automatisk dokumenthåndtering",
        text: "Automatisering af statusberegning, godkendelsesflow og dokumentprocesser.",
        tags: ["Python", "Power Automate", "Compliance"],
      },
    ],
  },
  {
    title: "Development",
    description: "Web, backend og mobile løsninger fra idé til fungerende produkt.",
    accent: "border-violet-500",
    icon: MdCode,
    skills: [
      {
        title: "C# og .NET",
        text: "Backend-udvikling med Clean Architecture og skalerbare systemdele.",
        tags: ["C#", ".NET", "Clean Architecture"],
      },
      {
        title: "Kotlin og Compose",
        text: "Android-udvikling med Google Maps, lokal data og rutevejledning.",
        tags: ["Kotlin", "Compose", "Maps"],
      },
      {
        title: "React og TypeScript",
        text: "Frontend-udvikling med komponentbaseret UI og moderne webteknologier.",
        tags: ["React", "TypeScript", "Tailwind"],
      },
    ],
  },
  {
    title: "Operations",
    description: "Systemforståelse, serverarbejde og automatisering i praksis.",
    accent: "border-amber-500",
    icon: MdStorage,
    skills: [
      {
        title: "Linux",
        text: "Installation, konfiguration, administration og scripting via kommandolinjen.",
        tags: ["Linux", "Bash", "Servere"],
      },
    ],
  },
];

function SkillSection({ section, index }) {
  const Icon = section.icon;
  const [cardRef, cardVisible] = useScrollReveal();
  const delayClass = ["", "reveal-delay-150", "reveal-delay-300", "reveal-delay-450"][index % 4];

  return (
    <article
      ref={cardRef}
      className={`h-full bg-white rounded-lg shadow-md border-t-4 ${section.accent} p-5 scroll-reveal reveal-up ${delayClass} ${cardVisible ? "is-visible" : ""}`}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700">
          <Icon size={22} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">{section.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            {section.description}
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        {section.skills.map((skill) => (
          <div key={skill.title} className="border-t border-slate-200 pt-4">
            <h4 className="font-semibold text-slate-900">{skill.title}</h4>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">
              {skill.text}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function Skills() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="mySkills" className="bg-transparent px-3 md:p-7">
      <div className="mx-auto max-w-6xl">
        <div
          ref={headerRef}
          className={`mb-8 text-center scroll-reveal reveal-up ${headerVisible ? "is-visible" : ""}`}
        >
          <h2 className="text-3xl font-bold text-white">Mine færdigheder</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/85">
            Et overblik over de områder jeg arbejder med, fra sikkerhed og
            governance til udvikling og drift.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {skillSections.map((section, index) => (
            <SkillSection key={section.title} section={section} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
