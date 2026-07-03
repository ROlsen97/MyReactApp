import React from "react";
import {
  MdCode,
  MdOutlineArticle,
  MdOutlinePhoneAndroid,
  MdOutlineSecurity,
  MdStorage,
  MdTimeline,
  MdVpnKey,
  MdWifiTethering,
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
        tags: ["DFD", "Threat modeling", "Burp Suite"],
      },
      {
        title: "SIEM og loganalyse",
        text: "Logindsamling, korrelation og analyse af sikkerhedshændelser.",
        tags: ["Suricata", "ELK", "Splunk"],
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
        tags: ["ISMS", "PIMS", "Internal audit"],
      },
      {
        title: "GAP analyse og kontroller",
        text: "Kortlægning af mangler, krav og implementeringsområder i sikkerheds- og privacy-dokumentation.",
        tags: ["ISO 27001:2022", "ISO 27701", "SANS/CIS"],
      },
      {
        title: "Automatisk dokumenthåndtering",
        text: "Automatisering af statusberegning, godkendelsesflow og dokumentprocesser.",
        tags: ["Python", "Power Automate", "Compliance"],
      },
    ],
  },
  {
    title: "Incident Response",
    description: "Overblik, analyse og respons på sikkerhedshændelser.",
    accent: "border-rose-500",
    icon: MdTimeline,
    skills: [
      {
        title: "Detection og analyse",
        text: "Arbejde med logs, events og mønstre for at identificere mistænkelig aktivitet.",
        tags: ["Splunk", "SPL", "Log analysis"],
      },
      {
        title: "Response planning",
        text: "Struktureret tilgang til hændelseshåndtering med kendte frameworks og taktikker.",
        tags: ["NIST", "MITRE ATT&CK", "Playbooks"],
      },
    ],
  },
  {
    title: "Mobile Security",
    description: "Analyse og test af Android-apps og mobile angrebsflader.",
    accent: "border-lime-500",
    icon: MdOutlinePhoneAndroid,
    skills: [
      {
        title: "Android analyse",
        text: "Praktisk erfaring med app-analyse, rooting og undersøgelse af APK'er.",
        tags: ["Root", "APK", "App analysis"],
      },
      {
        title: "Mobile development",
        text: "Udvikling af Android-funktionalitet med Compose, Kotlin, maps og navigation.",
        tags: ["Kotlin", "Compose", "Google Maps"],
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
        title: "React og TypeScript",
        text: "Frontend-udvikling med komponentbaseret UI og moderne webteknologier.",
        tags: ["React", "TypeScript", "Tailwind"],
      },
      {
        title: "Fullstack udvikling",
        text: "Udvikling af platforme, endpoints og demoer med moderne frontend og Python-backend.",
        tags: ["Flask", "Svelte", "SQL"],
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
        tags: ["Ubuntu", "Kali", "Bash"],
      },
      {
        title: "Access og endpoint hardening",
        text: "Arbejde med brugerrettigheder, MFA, mobile device management og virtualiserede testmiljøer.",
        tags: ["ACL", "MFA", "MDM"],
      },
    ],
  },
  {
    title: "Network Security",
    description: "Trafikanalyse, segmentering og sikker netværksarkitektur.",
    accent: "border-cyan-500",
    icon: MdWifiTethering,
    skills: [
      {
        title: "Trafikanalyse",
        text: "Analyse af netværkstrafik og protokoller til fejlfinding og sikkerhedsarbejde.",
        tags: ["Wireshark", "TCP", "UDP"],
      },
      {
        title: "Sikkert netværksdesign",
        text: "Forståelse for segmentering, least privilege og reducering af angrebsflader.",
        tags: ["Segmentation", "Least privilege", "MiTM"],
      },
    ],
  },
  {
    title: "Applied Cryptography",
    description: "Grundlæggende kryptografi og praktisk anvendelse i sikre systemer.",
    accent: "border-fuchsia-500",
    icon: MdVpnKey,
    skills: [
      {
        title: "Krypteringsprincipper",
        text: "Forståelse for symmetrisk og asymmetrisk kryptering samt nøgleudveksling.",
        tags: ["RSA", "Diffie-Hellman", "3DES"],
      },
      {
        title: "Sikker softwareforståelse",
        text: "Kobling mellem kryptografi, adgangskontrol og sikker systemudvikling.",
        tags: ["Secure design", "Controls", "Risk"],
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
      <div className="mx-auto max-w-7xl">
        <div
          ref={headerRef}
          className={`mb-8 text-center scroll-reveal reveal-up ${headerVisible ? "is-visible" : ""}`}
        >
          <h2 className="text-3xl font-bold text-white">Mine færdigheder</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/85">
            Et overblik over de områder jeg arbejder med, fra governance og
            sikkerhedsanalyse til udvikling, netværk og drift.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillSections.map((section, index) => (
            <SkillSection key={section.title} section={section} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
