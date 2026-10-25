// Servicios de la iglesia, del más reciente al más antiguo.
// Se genera solo cada domingo desde Fe-Diaria/servicios/*.json (sync_app_servicios.py).
// El primero se muestra como "Servicio de la semana"; los demás quedan en "Servicios anteriores".

const CHURCH_URL = "https://www.wwjdchurch.com/servicio";

const SERVICIOS = [
  {
    "video": "https://www.youtube.com/watch?v=kGdf6ilv4zY",
    "fecha": {
      "es": "Domingo 25 de octubre de 2026",
      "en": "Sunday, October 25, 2026"
    },
    "titulo": {
      "es": "La muerte no es el fin",
      "en": "Death Is Not the End"
    },
    "serie": {
      "es": "Serie: Juan · Pr. Mario Ferro y Pra. Nelly Moreno",
      "en": "Series: John · Pastors Mario Ferro & Nelly Moreno"
    },
    "pasaje": {
      "es": "Juan 11:1-4",
      "en": "John 11:1-4"
    },
    "idea": {
      "es": "Cuando Lázaro se enfermó, sus hermanas no le recordaron a Jesús lo que merecían. Solo le dijeron: \"el que amas está enfermo\". Jesús respondió que esa enfermedad era para la gloria de Dios. Aunque las cosas se vean mal, Dios se glorifica en medio de la prueba, y por la fe en Jesús podemos estar seguros de que la muerte no es el fin.",
      "en": "When Lazarus got sick, his sisters didn't remind Jesus of what they deserved. They simply said, \"the one you love is sick.\" Jesus answered that this sickness was for God's glory. Even when things look bad, God is glorified in the middle of the trial, and through faith in Jesus we can be sure that death is not the end."
    },
    "puntos": {
      "es": [
        "María, Marta y Lázaro eran muy cercanos a Jesús. Juan adelanta que María fue la que ungió a Jesús con un perfume carísimo (hoy costaría unos $65.000) y le secó los pies con su cabello. En una época en que a las mujeres no se las tomaba en cuenta, Jesús les dio dignidad y un lugar importante.",
        "Las hermanas no mencionaron sus méritos. Solo dijeron: \"Señor, el que amas está enfermo\", y dejaron la decisión en manos de Jesús. Nuestra naturaleza dice \"merecía mucho y recibí poco\", pero el evangelio enseña que merecíamos la muerte y recibimos perdón y gracia.",
        "Está bien sentirnos tristes o sentir lástima de nosotros mismos; esos sentimientos son humanos y válidos. Pero podemos pedirle al Espíritu Santo que nos ayude a dar un paso más: dejar de mirarnos solo a nosotros y llevar el amor de Dios a quienes sufren.",
        "\"Esta enfermedad no es para muerte, sino para la gloria de Dios\" (como con el ciego de Juan 9). Romanos 8:28 nos recuerda que a los que aman a Dios todo les ayuda a bien. No hay que avergonzarse de estar enfermos, deprimidos o sin trabajo: no es un castigo de Dios, y podemos descansar en Él. (Nota: esto es una enseñanza espiritual, no un consejo médico; ante problemas de salud física o emocional, busca también ayuda profesional).",
        "Nadie va al cielo por ser bueno o por haber sufrido. La salvación es por fe en Jesús (Romanos 10:9). El pastor contó la historia de un amigo actor que rechazó a Cristo y murió pocos días después. Cada persona elige entre la vida y la muerte, y hoy podemos elegir la vida eterna."
      ],
      "en": [
        "Mary, Martha and Lazarus were very close to Jesus. John jumps ahead to tell us that Mary was the one who anointed Jesus with a very expensive perfume (about $65,000 today) and wiped His feet with her hair. In a time when women were ignored, Jesus gave them dignity and an important place.",
        "The sisters didn't list their merits. They simply said, \"Lord, the one you love is sick,\" and left the decision with Jesus. Our nature says \"I deserved so much and got so little,\" but the gospel teaches that we deserved death and received forgiveness and grace.",
        "It's okay to feel sad or to feel sorry for ourselves; those feelings are human and valid. But we can ask the Holy Spirit to help us take one more step: stop looking only at ourselves and bring God's love to people who are hurting.",
        "\"This sickness will not end in death; it is for God's glory\" (just like the blind man in John 9). Romans 8:28 reminds us that all things work together for good for those who love God. We don't need to be ashamed of being sick, depressed or out of work: it is not God punishing us, and we can rest in Him. (Note: this is spiritual teaching, not medical advice; for physical or emotional health problems, please also seek professional help.)",
        "No one goes to heaven for being good or for having suffered. Salvation is through faith in Jesus (Romans 10:9). The pastor told the story of an actor friend who rejected Christ and died a few days later. Each person chooses between life and death, and today we can choose eternal life."
      ]
    },
    "versiculo": {
      "es": "\"Oyéndolo Jesús, dijo: Esta enfermedad no es para muerte, sino para la gloria de Dios, para que el Hijo de Dios sea glorificado por ella.\" — Juan 11:4 (RVR1960)",
      "en": "\"When he heard this, Jesus said, 'This sickness will not end in death. No, it is for God's glory so that God's Son may be glorified through it.'\" — John 11:4 (NIV)"
    },
    "pregunta": {
      "es": "Cuando pasamos por una prueba, ¿le hablamos a Dios desde lo que creemos merecer o desde su amor por nosotros? Y si hoy alguien nos preguntara a dónde vamos cuando muramos, ¿podríamos responder con seguridad?",
      "en": "When we go through a trial, do we come to God based on what we think we deserve, or based on His love for us? And if someone asked us today where we will go when we die, could we answer with confidence?"
    },
    "oracion": {
      "es": "Padre, gracias porque nos amas tanto que enviaste a Jesús a morir por nuestros pecados y lo levantaste de los muertos. Merecíamos la muerte y nos diste perdón y vida. Te entregamos nuestras enfermedades, tristezas y preocupaciones, y confiamos en que todo nos ayudará a bien. Glorifícate en nuestra familia, quita todo temor y úsanos para llevar tu amor a otros. En el nombre de Jesús, amén.",
      "en": "Father, thank You for loving us so much that You sent Jesus to die for our sins and raised Him from the dead. We deserved death, and You gave us forgiveness and life. We give You our sicknesses, sadness and worries, and we trust that all things will work together for our good. Be glorified in our family, take away all fear, and use us to bring Your love to others. In Jesus' name, amen."
    }
  },
  {
    "video": "https://www.youtube.com/watch?v=88BTeeJkBbc",
    "fecha": {
      "es": "18 de octubre de 2026",
      "en": "October 18, 2026"
    },
    "titulo": {
      "es": "Creer, en los desiertos",
      "en": "Believing, in the deserts"
    },
    "serie": {
      "es": "Serie: Juan · Pr. Mario Ferro y Nelly Moreno",
      "en": "Series: John · Pastors Mario Ferro & Nelly Moreno"
    },
    "pasaje": {
      "es": "Juan 10:31-42",
      "en": "John 10:31-42"
    },
    "idea": {
      "es": "Los cristianos llaman \"desierto\" a los tiempos de prueba: sequedad, soledad y falta. Rechazado en Jerusalén, Jesús se fue al otro lado del Jordán, a la zona desértica donde Juan bautizaba, \"y muchos creyeron en él allí\" (v. 42). Muchas veces la fe nace en el desierto, no en la abundancia.",
      "en": "Christians call times of trial a \"desert\": dryness, loneliness and need. Rejected in Jerusalem, Jesus went across the Jordan to the desert area where John had baptized, \"and many believed in him there\" (v. 42). Faith is often born in the desert, not in abundance."
    },
    "puntos": {
      "es": [
        "Las obras hablan: \"¿Por cuál buena obra me apedreáis?\" No lo rechazaron por sus obras, sino porque decía ser Dios. Juan muestra que Jesús es Dios: \"el Padre está en mí, y yo en el Padre\" (v. 38).",
        "Fe real, no religiosidad: religioso es quien sabe lo bueno pero no lo vive. Que nuestro \"estoy orando por ti\" sea verdad.",
        "En el desierto no hubo milagros, solo fe. En la prueba no necesitas frases bonitas: necesitas que Dios te hable por su Palabra. Búscalo hasta que te hable.",
        "El desierto no es un mal lugar: en la abundancia el ego crece y olvidamos a Dios; en la necesidad Él nos alcanza. (El pastor contó cómo un ayuno lo acercó a Dios, y aclaró que no es un consejo médico.)",
        "Cuando no tengas ganas, adora: el temor y la angustia no se vencen solo con la mente, sino espiritualmente, con la Palabra, la oración y la adoración."
      ],
      "en": [
        "Works speak: \"For which good work do you stone me?\" They rejected Him not for His works but because He claimed to be God. John shows that Jesus is God: \"the Father is in me, and I in the Father\" (v. 38).",
        "Real faith, not religiosity: a religious person knows what is right but doesn't live it. Let our \"I'm praying for you\" be true.",
        "In the desert there were no miracles, only faith. In a trial you don't need nice phrases: you need God to speak to you through His Word. Seek Him until He speaks.",
        "The desert is not a bad place: in abundance our ego grows and we forget God; in need He reaches us. (The pastor shared how a fast drew him close to God, and noted it is not medical advice.)",
        "When you don't feel like it, worship: fear and anguish aren't overcome by the mind alone but spiritually, through the Word, prayer and worship."
      ]
    },
    "versiculo": {
      "es": "\"Bendice, alma mía, a Jehová, y bendiga todo mi ser su santo nombre.\" — Salmo 103:1",
      "en": "\"Praise the Lord, my soul; all my inmost being, praise his holy name.\" — Psalm 103:1"
    },
    "pregunta": {
      "es": "¿Cuál es tu desierto hoy, y qué crees que Dios te quiere decir allí?",
      "en": "What is your desert today, and what do you think God wants to tell you there?"
    },
    "oracion": {
      "es": "Espíritu Santo, lléname. Sé que estoy en el desierto. Háblame, consuélame y dame de tu Palabra.",
      "en": "Holy Spirit, fill me. I know I'm in the desert. Speak to me, comfort me and give me your Word."
    }
  },
  {
    "video": "https://www.youtube.com/watch?v=SvftXoSa8Qs",
    "fecha": {
      "es": "10 de octubre de 2026",
      "en": "October 10, 2026"
    },
    "titulo": {
      "es": "Las fiestas",
      "en": "The Feasts"
    },
    "serie": {
      "es": "Serie: Juan · Pr. Mario Ferro y Nelly Moreno",
      "en": "Series: John · Pastors Mario Ferro & Nelly Moreno"
    },
    "pasaje": {
      "es": "Juan 10:22-30",
      "en": "John 10:22-30"
    },
    "idea": {
      "es": "Jesús fue al templo durante la fiesta de la Dedicación. Era invierno, y ese invierno también representaba el momento espiritual más bajo de Israel. Aunque pasemos por temporadas frías o sintamos que Dios guarda silencio, nada puede arrebatar a las ovejas de Cristo de la mano del Padre. Fuimos creados para adorarle en espíritu y en verdad.",
      "en": "Jesus went to the temple during the Feast of Dedication. It was winter, and that winter also pictured Israel's lowest spiritual moment. Even when we go through cold seasons or feel that God is silent, nothing can snatch Christ's sheep out of the Father's hand. We were created to worship Him in spirit and in truth."
    },
    "puntos": {
      "es": [
        "La fiesta de la Dedicación (Janucá) no está en la ley de Moisés. Recuerda cuando el templo, profanado con sangre de cerdos, fue consagrado otra vez a Dios. Que Jesús asistiera muestra que él participaba en todo lo que fuera adoración verdadera.",
        "Todos nacimos para adorar a algo o a alguien. El enemigo nos distrae con otras cosas para adorar: equipos, cantantes, dinero o la religión. Llegar temprano a la alabanza y unirnos a la iglesia muestra que entendimos para qué vinimos al mundo.",
        "Entre el Antiguo y el Nuevo Testamento hay una sola página, pero representa 400 años de 'silencio de Dios'. En ese tiempo surgieron los fariseos y los saduceos, y los Macabeos recuperaron el templo con fuerza humana. Aun en ese silencio, Dios seguía trabajando.",
        "'Era invierno': la vida cristiana es como una montaña rusa. A veces estamos llenos de fuego y otras veces abatidos, tristes o sintiendo a Dios lejos. Esas emociones van y vienen.",
        "Jesús dijo que sus ovejas oyen su voz, que les da vida eterna y que nadie las arrebatará de su mano, porque él y el Padre son uno. Si Dios te escogió, eres especial en Cristo. Camina seguro de quién eres en él."
      ],
      "en": [
        "The Feast of Dedication (Hanukkah) is not in the Law of Moses. It remembers when the temple, defiled with pigs' blood, was dedicated to God again. Jesus' attendance shows that He took part in everything that was true worship.",
        "We were all born to worship something or someone. The enemy distracts us with other things to worship: sports teams, singers, money or religion. Arriving early to praise and joining the church shows we understand why we came into the world.",
        "Between the Old and New Testaments there is just one page, but it stands for 400 years of 'God's silence.' During that time the Pharisees and Sadducees arose, and the Maccabees took back the temple by human strength. Even in that silence, God was still at work.",
        "'It was winter': the Christian life is like a roller coaster. Sometimes we are full of fire, and other times we are discouraged, sad or feel that God is far away. Those feelings come and go.",
        "Jesus said His sheep hear His voice, that He gives them eternal life, and that no one will snatch them out of His hand, because He and the Father are one. If God chose you, you are special in Christ. Walk confidently in who you are in Him."
      ]
    },
    "versiculo": {
      "es": "\"Mis ovejas oyen mi voz, y yo las conozco, y me siguen, y yo les doy vida eterna; y no perecerán jamás, ni nadie las arrebatará de mi mano.\" — Juan 10:27-28",
      "en": "\"My sheep listen to my voice; I know them, and they follow me. I give them eternal life, and they shall never perish; no one will snatch them out of my hand.\" — John 10:27-28"
    },
    "pregunta": {
      "es": "¿Hoy estás en una temporada de 'invierno' o llena de fuego con Dios? ¿Cómo te ayuda saber que nadie puede arrebatarte de su mano?",
      "en": "Are you in a 'winter' season or a season full of fire with God right now? How does it help you to know that no one can snatch you out of His hand?"
    },
    "oracion": {
      "es": "Padre, gracias por escogernos y llamarnos tus ovejas. Ayúdanos a oír tu voz y a adorarte en espíritu y en verdad, en los días de fuego y también en los de invierno. Gracias porque nada nos puede arrebatar de tu mano. Enséñanos a caminar seguros de quiénes somos en Cristo. En el nombre de Jesús, amén.",
      "en": "Father, thank You for choosing us and calling us Your sheep. Help us hear Your voice and worship You in spirit and in truth, on the days full of fire and also in winter. Thank You that nothing can snatch us out of Your hand. Teach us to walk confidently in who we are in Christ. In Jesus' name, amen."
    }
  }
];
