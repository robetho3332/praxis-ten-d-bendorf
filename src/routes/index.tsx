import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import ernaehrungBg from "@/assets/ernaehrung-bg.jpg";
import massageBg from "@/assets/massage-bg.jpg";
import schroepfenBg from "@/assets/schroepfen-bg.jpg";
import pflanzenheilkundeBg from "@/assets/pflanzenheilkunde-bg.jpg";
import fussreflexzonenBg from "@/assets/fussreflexzonen-bg.jpg";
import dorntherapieBg from "@/assets/dorntherapie-bg.jpg";
import blutegeltherapieBg from "@/assets/blutegeltherapie-bg.jpg";
import entgiftungBg from "@/assets/entgiftung-bg.jpg";
import darmsanierungBg from "@/assets/darmsanierung-bg.jpg";
import hormonberatungBg from "@/assets/hormonberatung-bg.jpg";
import vitalstoffberatungBg from "@/assets/vitalstoffberatung-bg.jpg";
import ohrreflextherapieBg from "@/assets/ohrreflextherapie-bg.jpg";
import schmerztherapieBg from "@/assets/schmerztherapie-bg.jpg";
import baunscheidtierenBg from "@/assets/baunscheidtieren-bg.jpg";
import laboranalysenBg from "@/assets/laboranalysen-bg.jpg";
import ablaufImg from "@/assets/ablauf-bg.jpg";
import diagnostikImg from "@/assets/diagnostik.jpg";
import methodenImg from "@/assets/methoden.jpg";
import shopImg from "@/assets/shop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Praxis RBT — Naturheilkunde TEN & Manuelle Therapien in Dübendorf" },
      { name: "description", content: "Praxis für manuelle Therapien & Naturheilkunde TEN von Romina Bertoletti Thoma in Dübendorf. Massage, Schröpfen, Phytotherapie, Ernährungsberatung und mehr." },
      { property: "og:title", content: "Praxis RBT — Naturheilkunde TEN in Dübendorf" },
      { property: "og:description", content: "Ganzheitliche Naturheilkunde TEN & manuelle Therapien in Dübendorf." },
    ],
  }),
  component: HomePage,
});

const therapies = [
  {
    title: "Massage",
    description: "Die klassische Massage ist die traditionellste und am meisten angewandte Massageform. Sie geht hauptsächlich auf die Belastungen des Alltags ein. Sie wirkt wunderbar bei Muskelverspannungen und deren Auswirkungen auf den gesamten Bewegungsapparat. Durch die in der Regel als entspannend empfundene Massage, ist auch ein positiver Einfluss auf die Psyche zu beobachten.",
    icon: "🤲",
  },
  {
    title: "Ernährungsberatung",
    description: "Um funktionieren zu können, braucht unser Körper Nährstoffe – Makronährstoffe wie Fette, Eiweisse und Kohlenhydrate sowie Mikronährstoffe wie Vitamine, Mineralstoffe, Spurenelemente und sekundäre Pflanzenstoffe. In meiner Ernährungsberatung schauen wir uns deine Essgewohnheiten an und besprechen anhand deiner Ziele, was und wie du diese optimieren kannst.",
    icon: "🥗",
  },
  {
    title: "Pflanzenheilkunde",
    description: "«Gegen jede Krankheit ist ein Kraut gewachsen» – Seit Jahrhunderten ist die Pflanzenheilkunde Teil der Therapien auf der ganzen Welt. Tinkturen, Tees und pulverisierte Pflanzenteile sind oft Teil meines individuell auf dich abgestimmten Therapiekonzepts.",
    icon: "🌿",
  },
  {
    title: "Entgiftungsbegleitung",
    description: "Eine Entgiftungskur hilft dem Körper Giftstoffe wie Pestizide, Geschmacksverstärker, Farb- und Konservierungsstoffe, Umweltgifte, Schwermetalle, Medikamente und Genussmittel aus dem Körper auszuscheiden. Gerne begleite ich dich durch diesen Prozess mit meinem Entgiftungsprogramm.",
    icon: "✨",
  },
  {
    title: "Darmsanierung",
    description: "Für mich eine der effektivsten Methoden um gute Voraussetzungen zu schaffen für jegliche Therapien und Ernährungsumstellungen. Die Darmsanierung läuft in mehreren Phasen ab: Entgiftung, Bekämpfung von Pilzen und Parasiten, Unverträglichkeiten ausfindig machen und das Darmmikrobiom stärken.",
    icon: "🔄",
  },
  {
    title: "Hormonberatung",
    description: "Sind ein Ungleichgewicht der Hormone verantwortlich für deine Beschwerden? Anhand eines Fragebogens und bei Bedarf einem Speicheltest, welcher bequem zu Hause durchgeführt werden kann, wird ermittelt wie es um deinen Hormonhaushalt steht.",
    icon: "⚖️",
  },
  {
    title: "Vitalstoffberatung",
    description: "Ich empfehle Vitalstoffe wenn durch die Ernährung nicht alles abgedeckt wird, in speziellen Lebensphasen oder je nach Alter und Jahreszeit zur Unterstützung. Eine Ausnahme mache ich beim Vitamin D3 (Dauereinnahme) und Vitamin B12 bei vegetarischer/veganer Ernährung.",
    icon: "💊",
  },
  {
    title: "Ohrreflexzonentherapie",
    description: "Diverse Reflexpunkte am Ohr sind im Falle einer Störung im korrespondierenden Körpergebiet aktiv und nachweisbar. Mit einem Metallstäbchen werden diese Punkte gesucht und therapiert. Wunderbar unterstützend in Kombination mit anderen Therapien.",
    icon: "👂",
  },
  {
    title: "Fussreflexzonenmassage",
    description: "Über die Reflexzonen am Fuss werden die Organe angeregt oder beruhigt. Die Selbstheilungskräfte werden aktiviert, der Lymphfluss und die Durchblutung angeregt. Bei Schlafstörungen, Kopfschmerzen, Verdauungsproblemen, Menstruationsbeschwerden und mehr.",
    icon: "🦶",
  },
  {
    title: "Schröpfen",
    description: "Beim Schröpfen kann ich über die Reflexzonen des Rückens auf innere Organe Einfluss nehmen. Ausserdem kann direkt bei Schmerzen, Entzündungen und Durchblutungsstörungen Linderung verschafft werden. Die Schröpfkopfmassage lockert das Gewebe und regt den Stoffwechsel an.",
    icon: "⭕",
  },
  {
    title: "Baunscheidtieren",
    description: "Bei dieser alten Therapiemethode wird die Haut angeraut und ein reizendes Öl aufgetragen. Es entsteht ein Ausschlag, welcher die volle Energie in den Körperbereich bringt und die Selbstheilungskräfte mobilisiert. Sehr wirksam bei Arthrosen, Arthritiden und Lymphstauungen.",
    icon: "🌡️",
  },
  {
    title: "Blutegeltherapie",
    description: "Die Blutegeltherapie kann bei Erkrankungen des Venensystems, Hypertonie oder Gichtanfällen eingesetzt werden. Durch Studien belegte Indikationen sind Arthrosen der Knie und Daumensattelgelenke sowie Sehnenscheidenentzündungen.",
    icon: "💧",
  },
  {
    title: "Dorntherapie",
    description: "Mit dieser sanften Methode werden Nervenbahnen entlastet und die Meridiane positiv beeinflusst. Diese Therapieform gilt als Gesundheitsvorsorge und als Anleitung zur Selbsthilfe – die Selbsthilfeübungen sind das Kernstück dieser Methode.",
    icon: "🦴",
  },
  {
    title: "Haarmineralanalyse",
    description: "Anhand einer alternativen Austestung wird die Tendenz zu Unverträglichkeiten auf Nahrungsmittel und mögliche Mängel von Mineralstoffen und Vitaminen angezeigt. Vergleichbar mit der Bioresonanz.",
    icon: "🔬",
  },
];

const diagnosticMethods = [
  {
    title: "Zungendiagnostik",
    description: "Form, Farbe und Belag der Zunge geben Aufschluss über den Zustand der Verdauungsorgane, Stoffwechselprozesse und die allgemeine Vitalität.",
  },
  {
    title: "Pulsdiagnostik",
    description: "Der Puls verrät viel über den Zustand des Herz-Kreislauf-Systems und die energetische Situation des Körpers nach TEN-Prinzipien.",
  },
  {
    title: "Irisdiagnostik",
    description: "Die Iris zeigt die angeborene Konstitution und erworbene Belastungen. Diese Methode hilft, Schwachstellen im Organismus frühzeitig zu erkennen.",
  },
  {
    title: "Antlitzdiagnostik",
    description: "Das Gesicht spiegelt den inneren Zustand des Körpers. Durch gezielte Beobachtung lassen sich Hinweise auf Organbelastungen und Konstitutionstypen erkennen.",
  },
  {
    title: "Labordiagnostik",
    description: "Bei Bedarf kann eine externe Labordiagnostik durchgeführt werden, um ein noch umfassenderes Bild deines Gesundheitszustands zu erhalten.",
  },
];

const ablaufSteps = [
  {
    number: "01",
    title: "Erstgespräch",
    description: "Bei einem ausführlichen Erstgespräch schauen wir uns gemeinsam deine Krankheitsgeschichte an. Dabei geht es nicht nur um die aktuellen Beschwerden, sondern um eine ganzheitliche Erfassung von dir als Person. Wir besprechen deine Therapieziele und was in der aktuellen Situation umsetzbar ist.",
  },
  {
    number: "02",
    title: "Diagnostik",
    description: "Anhand einer Zungen-, Puls- und Irisdiagnose ermittle ich deine Konstitution, welche in den Therapieplan miteinbezogen wird. Bei Bedarf kann eine externe Labordiagnostik durchgeführt werden.",
  },
  {
    number: "03",
    title: "Therapieplan",
    description: "Nachdem ich deinen persönlichen Therapieplan erstellt habe, besprechen wir diesen gemeinsam und vereinbaren dementsprechende Termine.",
  },
  {
    number: "04",
    title: "Behandlung",
    description: "Die Therapie umfasst manuelle Behandlungen, pflanzliche Arzneimittel und ausleitende Verfahren – individuell auf dich abgestimmt. Stundenansatz: Fr. 147.00.",
  },
  {
    number: "05",
    title: "Begleitung",
    description: "Ich begleite dich während des gesamten Heilungsprozesses. Regelmässige Kontrollen stellen sicher, dass die Therapie optimal wirkt.",
  },
];

const shopCategories = [
  {
    title: "Kräutertees",
    description: "Hauseigene Teemischungen nach TEN-Rezepturen, individuell zusammengestellt für verschiedene Beschwerden und zur Vorbeugung.",
    price: "ab CHF 12.–",
  },
  {
    title: "Tinkturen",
    description: "Hochwertige Pflanzentinkturen aus sorgfältig ausgewählten Heilpflanzen. Konzentrierte Pflanzenkraft in Tropfenform.",
    price: "ab CHF 18.–",
  },
  {
    title: "Ätherische Öle",
    description: "Reine ätherische Öle für Aromatherapie, Massagen und Inhalationen. 100% naturrein und therapeutische Qualität.",
    price: "ab CHF 15.–",
  },
  {
    title: "Nahrungsergänzung",
    description: "Vitamine, Mineralstoffe und Spurenelemente in hochwertiger, bioverfügbarer Form zur Unterstützung Ihrer Gesundheit.",
    price: "ab CHF 25.–",
  },
  {
    title: "Körperpflege",
    description: "Naturkosmetik und Pflegeprodukte mit Heilpflanzen – sanft zur Haut und frei von synthetischen Zusatzstoffen.",
    price: "ab CHF 14.–",
  },
  {
    title: "Wickel-Sets",
    description: "Fertig zusammengestellte Sets für Wickel und Auflagen zum Selbstanwenden zuhause. Mit Anleitung.",
    price: "ab CHF 22.–",
  },
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section id="start" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36 lg:py-44">
          <div className="max-w-2xl">
            <h1 className="animate-fade-in-up-delay mt-4 font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Manuelle Therapien & Naturheilkunde
            </h1>
            <p className="animate-fade-in-up-delay-2 mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Schmerzen im Bewegungsapparat? Oder möchtest du einfach bei einer Massage entspannen? 
              Melde dich gerne für einen Termin.
            </p>
            <div className="animate-fade-in-up-delay-2 mt-8 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                Termin vereinbaren
              </a>
              <a
                href="#ablauf"
                className="inline-flex items-center rounded-lg border border-border bg-card/80 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-card"
              >
                So läuft es ab
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Über mich */}
      <section id="ueber-mich" className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
            Über mich
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Hier erfährst du mehr über mich und meinen Werdegang.
          </p>
          <div className="mt-4 mx-auto h-0.5 w-16 bg-primary" />
        </div>
      </section>

      {/* Ablauf */}
      <section id="ablauf" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={ablaufImg} alt="" className="h-full w-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">Ablauf</h2>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Schritt für Schritt zu deinem Wohlbefinden – so gestaltet sich der Weg in meiner Praxis.
          </p>
          <div className="mt-4 h-0.5 w-16 bg-primary" />
        </div>
      </section>
      <section className="section-padding">
        <div className="mx-auto max-w-3xl space-y-12">
          {ablaufSteps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-heading font-semibold text-accent-foreground">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section-padding bg-secondary/50">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="font-heading text-2xl font-semibold text-foreground">Wichtige Hinweise</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Bei Nichterscheinen oder Absage des Termins weniger als 24h vorher wird der Behandlungspreis in Rechnung gestellt.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ich bin beim EMR unter der ZSR Nr. M100663 registriert. Bitte erkundige dich im Voraus bei deinem 
            Krankenversicherer, ob die Behandlung von der Zusatzversicherung übernommen wird.
          </p>
          <a
            href="https://emr.ch/therapeut/romina.bertoletti.thoma"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
          >
            EMR-Profil ansehen →
          </a>
        </div>
      </section>

      {/* Diagnostik */}
      <section id="diagnostik" className="section-padding bg-secondary/50">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">Diagnostik</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Anhand einer Zungen-, Puls- und Irisdiagnose ermittle ich deine Konstitution, 
              welche in den Therapieplan miteinbezogen wird. Bei Bedarf kann eine externe 
              Labordiagnostik durchgeführt werden.
            </p>
            <div className="mt-4 h-0.5 w-16 bg-primary" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img src={diagnostikImg} alt="Diagnostik" className="w-full h-auto object-cover" loading="lazy" width={800} height={600} />
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h3 className="font-heading text-2xl font-semibold text-foreground text-center mb-12">
            Diagnostische Methoden
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {diagnosticMethods.map((m) => (
              <div key={m.title} className="rounded-xl bg-card p-6 shadow-sm border border-border">
                <h4 className="font-heading text-lg font-semibold text-foreground">{m.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Angebot / Methoden */}
      <section id="angebot" className="section-padding bg-secondary/50">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-md">
            <img src={methodenImg} alt="Therapiemethoden" className="w-full h-auto object-cover" loading="lazy" width={800} height={600} />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">Methoden</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Bei einer kurzen Anamnese erzählst du mir, was deine aktuellen Beschwerden sind. 
              Wir entscheiden dann gemeinsam, welche Therapiemethode die passende ist.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Stundenansatz: <strong className="text-foreground">Fr. 147.00</strong>
            </p>
            <div className="mt-4 h-0.5 w-16 bg-primary" />
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {therapies.map((t) => (
              <div key={t.title} className="rounded-xl bg-card p-6 shadow-sm border border-border">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{t.icon}</span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">{t.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="section-padding bg-secondary/50">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">Shop</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Ausgewählte Naturprodukte für Ihre Gesundheit. 
              Alle Produkte sind in der Praxis erhältlich oder können bestellt werden.
            </p>
            <div className="mt-4 h-0.5 w-16 bg-primary" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img src={shopImg} alt="Naturprodukte Shop" className="w-full h-auto object-cover" width={800} height={600} />
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="mx-auto max-w-5xl">
          <h3 className="font-heading text-2xl font-semibold text-foreground text-center mb-12">
            Unsere Produkte
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shopCategories.map((cat) => (
              <div key={cat.title} className="rounded-xl bg-card p-6 shadow-sm border border-border flex flex-col">
                <h4 className="font-heading text-lg font-semibold text-foreground">{cat.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{cat.description}</p>
                <p className="mt-4 text-sm font-medium text-primary">{cat.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Für Bestellungen und Beratung kontaktieren Sie mich gerne direkt.
            </p>
          </div>
        </div>
      </section>

      {/* Rabattcodes */}
      <section id="rabattcodes" className="section-padding bg-secondary/50">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">Rabattcodes</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Hier findest du aktuelle Rabattcodes und Aktionen.
          </p>
          <div className="mt-4 mx-auto h-0.5 w-16 bg-primary" />
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">Kontakt</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ich freue mich auf deine Nachricht. Vereinbare ein kostenloses Erstgespräch.
          </p>
          <div className="mt-4 h-0.5 w-16 bg-primary" />

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">Praxis</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Praxis für manuelle Therapien<br />
                  & Naturheilkunde TEN<br />
                  Romina Bertoletti Thoma
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">Adresse</h3>
                <p className="mt-2 text-muted-foreground">
                  Dübendorf, Schweiz
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">Öffnungszeiten</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Montag – Freitag: nach Vereinbarung<br />
                  Samstag: nach Vereinbarung
                </p>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Dein Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="deine@email.ch"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="079 123 45 67"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Nachricht</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Deine Nachricht..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Zusatzversicherung */}
      <section className="section-padding bg-accent/50">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
            Zusatzversicherung
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ich bin beim EMR unter der ZSR Nr. M100663 registriert. Bitte erkundige dich im Voraus 
            bei deinem Krankenversicherer, ob die Behandlung von der Zusatzversicherung übernommen wird. 
            Jeder Krankenversicherer vergütet ausschliesslich Behandlungen gemäss seinem Leistungskatalog.
          </p>
          <a
            href="https://emr.ch/therapeut/romina.bertoletti.thoma"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
          >
            EMR-Profil ansehen →
          </a>
        </div>
      </section>
    </div>
  );
}
