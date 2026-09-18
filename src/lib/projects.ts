export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  image: string;
  imageAlt: string;
  liveUrl: string;
  shortResult: string;
  intro: string;
  challenge: string;
  goal: string;
  solution: string;
  services: string[];
  decisions: { title: string; text: string }[];
  result: string;
  testimonial: {
    quote: string;
    name: string;
  };
};

export const projects: Project[] = [
  {
    slug: "face-and-more",
    title: "Face and More",
    category: "Hautanalyse & Premium-Hautpflege",
    location: "Wien",
    image: "/faceandmoremockup.png",
    imageAlt: "Website von Face and More auf Smartphone und Desktop",
    liveUrl: "https://faceandmore.at",
    shortResult: "Ein klarer Premium-Auftritt, der Kompetenz sichtbar macht und Vertrauen aufbaut.",
    intro:
      "Für Face and More entstand ein vollständiger Website-Relaunch, der die fachliche Kompetenz des Studios hochwertig, klar und mobil überzeugend präsentiert.",
    challenge:
      "Die bisherige Website entsprach nicht mehr der Qualität und Positionierung des Studios. Leistungen, Expertise und Atmosphäre sollten online schneller erfassbar werden.",
    goal:
      "Gesucht war ein moderner, hochwertiger Auftritt mit klarer Leistungsstruktur, verständlichen Kontaktwegen und einer starken mobilen Darstellung.",
    solution:
      "Ich habe die Website inhaltlich und visuell neu strukturiert, die Nutzerführung vereinfacht und den gesamten Auftritt auf eine ruhige Premium-Wirkung ausgerichtet.",
    services: [
      "Kompletter Website-Relaunch",
      "Migration von Wix",
      "Mobile Optimierung",
      "Leistungsseiten und FAQ-Bereich",
      "SEO-freundliche Seitenstruktur",
      "Domain-Migration",
    ],
    decisions: [
      {
        title: "Kompetenz vor Dekoration",
        text: "Die Gestaltung unterstützt die fachliche Positionierung, ohne die Inhalte mit unnötigen Effekten zu überlagern.",
      },
      {
        title: "Klare Orientierung",
        text: "Leistungen, Antworten auf häufige Fragen und Kontaktmöglichkeiten sind logisch gegliedert und schnell erreichbar.",
      },
      {
        title: "Einheitlicher Markenauftritt",
        text: "Website und ergänzende Social-Media-Vorlagen greifen dieselbe visuelle Sprache auf.",
      },
    ],
    result:
      "Das Ergebnis ist eine moderne Premium-Website, die das Studio authentisch widerspiegelt, Fachkompetenz sichtbar macht und Interessentinnen verlässlich durch das Angebot führt.",
    testimonial: {
      quote:
        "Du hast mich und mein Studio so schnell, ästhetisch, authentisch und professionell umgesetzt. Ich kann Javera nur wärmstens weiterempfehlen.",
      name: "Michaela Kornherr",
    },
  },
  {
    slug: "paula-venc",
    title: "Paula Venc",
    category: "Private Nailartist",
    location: "Wien",
    image: "/paulavencmockup.png",
    imageAlt: "Website von Paula Venc auf Smartphone und Desktop",
    liveUrl: "https://paulavenc.at",
    shortResult: "Ein eleganter One-Pager, der Ruhe, Persönlichkeit und einfache Buchung verbindet.",
    intro:
      "Für Paula Venc entstand eine kompakte Website, die zur privaten Studioatmosphäre passt und alle wichtigen Informationen an einem Ort bündelt.",
    challenge:
      "Paula hatte zuvor keine eigene Website. Der neue Auftritt sollte professionell wirken, ohne die persönliche und ruhige Atmosphäre ihres Studios zu verlieren.",
    goal:
      "Benötigt wurde eine unkomplizierte Website, auf der neue Kundinnen Angebot, Stil und Buchungsmöglichkeit schnell verstehen.",
    solution:
      "Ein individuell gestalteter One-Pager verbindet eine elegante Bildsprache mit einer klaren Inhaltsreihenfolge und direkter Treatwell-Anbindung.",
    services: [
      "Individuelles One-Page-Webdesign",
      "Mobile Optimierung",
      "Domain-Einrichtung",
      "Treatwell-Integration",
      "Technische Einrichtung",
      "Struktur und Textunterstützung",
    ],
    decisions: [
      {
        title: "Kompakter Umfang",
        text: "Der One-Pager hält alle relevanten Informationen zusammen und passt zum fokussierten Angebot der Nailartistin.",
      },
      {
        title: "Ruhige Premium-Wirkung",
        text: "Großzügige Flächen, elegante Typografie und zurückhaltende Details vermitteln die private Studioatmosphäre.",
      },
      {
        title: "Kurzer Weg zur Buchung",
        text: "Die bestehende Treatwell-Buchung ist so eingebunden, dass Interessentinnen ohne Umwege einen Termin wählen können.",
      },
    ],
    result:
      "Entstanden ist eine schlanke, eigenständige Website, die Paulas Stil klar transportiert und neue Kundinnen direkt zur Terminbuchung führt.",
    testimonial: {
      quote:
        "Professionell, schnell und zuverlässig! Sie hat mich super unterstützt und war bei jeder Frage sofort da.",
      name: "Paula Venc",
    },
  },
  {
    slug: "divine-beauty-nails",
    title: "Divine Beauty & Nails",
    category: "Beauty- und Nagelstudio",
    location: "Wien",
    image: "/divinenailsmockup.png",
    imageAlt: "Website von Divine Beauty & Nails auf Smartphone und Desktop",
    liveUrl: "https://divinenails.at",
    shortResult: "Website und digitale Studioorganisation als stimmiger, professioneller Gesamtauftritt.",
    intro:
      "Die Zusammenarbeit begann mit einer praktischen Lösung für den Studioalltag und entwickelte sich zu einem vollständigen neuen Online-Auftritt.",
    challenge:
      "Das wachsende Team brauchte zunächst eine übersichtliche digitale Terminorganisation. Gleichzeitig fehlte eine Website, die Angebot und Atmosphäre professionell zeigt.",
    goal:
      "Interne Abläufe sollten einfacher werden und Kundinnen online einen klaren, vertrauenswürdigen Überblick über das Studio erhalten.",
    solution:
      "Neben einem gemeinsamen Kalendersystem mit individueller Team-Anleitung entstand eine mobile, übersichtliche Website mit klarer Leistungsdarstellung.",
    services: [
      "Digitales Kalendersystem für das Team",
      "Individuelle Team-Anleitung",
      "Komplette Website-Entwicklung",
      "Mobile Optimierung",
      "Kontaktmöglichkeiten",
      "SEO-freundliche Struktur",
    ],
    decisions: [
      {
        title: "Praxisnahe Digitalisierung",
        text: "Das Kalendersystem wurde so aufgebaut und dokumentiert, dass das Team unmittelbar selbstständig damit arbeiten kann.",
      },
      {
        title: "Leistungen schnell erfassbar",
        text: "Das umfangreiche Angebot ist übersichtlich gegliedert und auf kleinen Bildschirmen ebenso gut nutzbar.",
      },
      {
        title: "Studio und Website aus einem Guss",
        text: "Der digitale Auftritt greift die Atmosphäre des Studios auf und wirkt persönlich statt austauschbar.",
      },
    ],
    result:
      "Das Studio verfügt heute über einen professionellen Webauftritt und eine alltagstaugliche digitale Organisation, die das Team langfristig selbst nutzen kann.",
    testimonial: {
      quote:
        "Sie hat nicht einfach nur eine Webseite erstellt, sondern meine Vision sichtbar gemacht und meinem Studio einen professionellen Online-Auftritt gegeben.",
      name: "Danijela Boskovic",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
