// "La Biblia en breve": datos básicos, preguntas frecuentes y los 66 libros.

const BIBLE = {
  stats: [
    { n: "66", es: "libros en total (Biblia cristiana evangélica)", en: "books in total (Protestant Bible)" },
    { n: "39", es: "en el Antiguo Testamento", en: "in the Old Testament" },
    { n: "27", es: "en el Nuevo Testamento", en: "in the New Testament" },
    { n: "≈40", es: "autores, durante unos 1,500 años", en: "authors, over about 1,500 years" },
    { n: "1,189", es: "capítulos", en: "chapters" },
    { n: "3", es: "idiomas originales: hebreo, arameo y griego", en: "original languages: Hebrew, Aramaic and Greek" }
  ],
  faq: [
    { q: { es: "¿Qué significa “Testamento”?", en: "What does “Testament” mean?" },
      a: { es: "Significa pacto o alianza. El Antiguo Testamento cuenta el pacto de Dios con Israel; el Nuevo Testamento, el nuevo pacto por medio de Jesús, abierto a todas las personas.", en: "It means covenant. The Old Testament tells of God's covenant with Israel; the New Testament, the new covenant through Jesus, open to everyone." } },
    { q: { es: "¿Qué cuenta el Antiguo Testamento?", en: "What does the Old Testament cover?" },
      a: { es: "Desde la creación hasta unos 400 años antes de Jesús: la historia del pueblo de Israel, sus leyes, sus poemas y oraciones (como los Salmos) y los profetas que anunciaron al Mesías. Se escribió casi todo en hebreo, con algunas partes en arameo.", en: "From creation to about 400 years before Jesus: the history of Israel, its laws, its poems and prayers (like the Psalms) and the prophets who announced the Messiah. Almost all of it was written in Hebrew, with some parts in Aramaic." } },
    { q: { es: "¿Qué cuenta el Nuevo Testamento?", en: "What does the New Testament cover?" },
      a: { es: "La vida, muerte y resurrección de Jesús (los Evangelios), el comienzo de la Iglesia (Hechos), las cartas a las primeras comunidades cristianas y el Apocalipsis. Se escribió en griego, en el siglo I, en unos 50 a 70 años.", en: "The life, death and resurrection of Jesus (the Gospels), the beginning of the Church (Acts), the letters to the first Christian communities, and Revelation. It was written in Greek, in the 1st century, over about 50 to 70 years." } },
    { q: { es: "¿Por qué 66 libros?", en: "Why 66 books?" },
      a: { es: "Los 39 del Antiguo Testamento son los libros que el pueblo judío reconocía como Escritura. Los 27 del Nuevo Testamento son los escritos de los apóstoles y sus cercanos que las iglesias usaban desde el principio; la lista completa aparece en el año 367 y la confirmaron concilios a finales del siglo IV.", en: "The 39 Old Testament books are the ones the Jewish people recognized as Scripture. The 27 New Testament books are the writings of the apostles and those close to them that the churches used from the start; the full list appears in the year 367 and church councils confirmed it in the late 4th century." } },
    { q: { es: "¿Por qué la Biblia católica tiene 73?", en: "Why does the Catholic Bible have 73?" },
      a: { es: "Incluye 7 libros más en el Antiguo Testamento (Tobías, Judit, 1 y 2 Macabeos, Sabiduría, Eclesiástico y Baruc), llamados deuterocanónicos. Las iglesias evangélicas siguen la lista de la Biblia hebrea, por eso tienen 66.", en: "It includes 7 more Old Testament books (Tobit, Judith, 1 and 2 Maccabees, Wisdom, Sirach and Baruch), called deuterocanonical. Protestant churches follow the list of the Hebrew Bible, which is why they have 66." } },
    { q: { es: "¿Quién puso los capítulos y versículos?", en: "Who added chapters and verses?" },
      a: { es: "Los autores no los escribieron así. Los capítulos los organizó Esteban Langton hacia el año 1227, y los versículos del Nuevo Testamento, Robert Estienne en 1551. Sirven para encontrar fácilmente un pasaje, por ejemplo Juan 3:16 (libro, capítulo 3, versículo 16).", en: "The authors didn't write them that way. Stephen Langton organized the chapters around 1227, and Robert Estienne added New Testament verses in 1551. They make passages easy to find, for example John 3:16 (book, chapter 3, verse 16)." } },
    { q: { es: "Algunos datos curiosos", en: "Some fun facts" },
      a: { es: "El libro más largo es Salmos (150 capítulos). El capítulo más largo es el Salmo 119 y el más corto, el Salmo 117. Las versiones en español más usadas en iglesias evangélicas son la Reina-Valera 1960 y la Nueva Versión Internacional.", en: "The longest book is Psalms (150 chapters). The longest chapter is Psalm 119 and the shortest, Psalm 117. Popular English versions include the NIV, ESV and KJV." } }
  ],
  groups: [
    { t: { es: "Antiguo Testamento · Ley (Pentateuco) · 5", en: "Old Testament · Law (Pentateuch) · 5" }, es: "Génesis, Éxodo, Levítico, Números, Deuteronomio", en: "Genesis, Exodus, Leviticus, Numbers, Deuteronomy" },
    { t: { es: "Antiguo Testamento · Historia · 12", en: "Old Testament · History · 12" }, es: "Josué, Jueces, Rut, 1 Samuel, 2 Samuel, 1 Reyes, 2 Reyes, 1 Crónicas, 2 Crónicas, Esdras, Nehemías, Ester", en: "Joshua, Judges, Ruth, 1 Samuel, 2 Samuel, 1 Kings, 2 Kings, 1 Chronicles, 2 Chronicles, Ezra, Nehemiah, Esther" },
    { t: { es: "Antiguo Testamento · Poesía y sabiduría · 5", en: "Old Testament · Poetry & wisdom · 5" }, es: "Job, Salmos, Proverbios, Eclesiastés, Cantares", en: "Job, Psalms, Proverbs, Ecclesiastes, Song of Songs" },
    { t: { es: "Antiguo Testamento · Profetas mayores · 5", en: "Old Testament · Major prophets · 5" }, es: "Isaías, Jeremías, Lamentaciones, Ezequiel, Daniel", en: "Isaiah, Jeremiah, Lamentations, Ezekiel, Daniel" },
    { t: { es: "Antiguo Testamento · Profetas menores · 12", en: "Old Testament · Minor prophets · 12" }, es: "Oseas, Joel, Amós, Abdías, Jonás, Miqueas, Nahúm, Habacuc, Sofonías, Hageo, Zacarías, Malaquías", en: "Hosea, Joel, Amos, Obadiah, Jonah, Micah, Nahum, Habakkuk, Zephaniah, Haggai, Zechariah, Malachi" },
    { t: { es: "Nuevo Testamento · Evangelios · 4", en: "New Testament · Gospels · 4" }, es: "Mateo, Marcos, Lucas, Juan", en: "Matthew, Mark, Luke, John" },
    { t: { es: "Nuevo Testamento · Historia · 1", en: "New Testament · History · 1" }, es: "Hechos de los Apóstoles", en: "Acts of the Apostles" },
    { t: { es: "Nuevo Testamento · Cartas de Pablo · 13", en: "New Testament · Paul's letters · 13" }, es: "Romanos, 1 Corintios, 2 Corintios, Gálatas, Efesios, Filipenses, Colosenses, 1 Tesalonicenses, 2 Tesalonicenses, 1 Timoteo, 2 Timoteo, Tito, Filemón", en: "Romans, 1 Corinthians, 2 Corinthians, Galatians, Ephesians, Philippians, Colossians, 1 Thessalonians, 2 Thessalonians, 1 Timothy, 2 Timothy, Titus, Philemon" },
    { t: { es: "Nuevo Testamento · Otras cartas · 8", en: "New Testament · Other letters · 8" }, es: "Hebreos, Santiago, 1 Pedro, 2 Pedro, 1 Juan, 2 Juan, 3 Juan, Judas", en: "Hebrews, James, 1 Peter, 2 Peter, 1 John, 2 John, 3 John, Jude" },
    { t: { es: "Nuevo Testamento · Profecía · 1", en: "New Testament · Prophecy · 1" }, es: "Apocalipsis", en: "Revelation" }
  ]
};
