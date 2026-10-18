// Servicios de la iglesia, del más reciente al más antiguo.
// Se genera solo cada domingo desde Fe-Diaria/servicios/*.json (sync_app_servicios.py).
// El primero se muestra como "Servicio de la semana"; los demás quedan en "Servicios anteriores".

const CHURCH_URL = "https://www.wwjdchurch.com/servicio";

const SERVICIOS = [
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
