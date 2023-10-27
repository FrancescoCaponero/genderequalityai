import { useState } from 'react'
import { useSpring, animated } from 'react-spring';
import './Speakers.scss'

interface Speaker {
  id: number;
  name: string;
  description: string;
  img: string;
}

const Speakers = () => {
  const [isModal, setIsModal] = useState(false)
  const [selectedSpeaker, setSelectedSpeaker] =  useState<Speaker | null>(null);

   // Define an animation object using useSpring
   const modalAnimation = useSpring({
    opacity: isModal ? 1 : 0,
    transform: isModal ? 'translateY(0%)' : 'translateY(-100%)',
  });
  
  
  const handleModal = (speaker: Speaker | null) => {
    setSelectedSpeaker(speaker); 
    setIsModal(!isModal);
  }



  const speakers = [
    {
      id: 1,
      name: "Costanza Alfieri",
      description: "Costanza Alfieri is a national PhD student in Artificial Intelligence for society at University of L'Aquila and University of Pisa. She is part of the Exosoul project coordinated by Paola Inverardi. Her research interests are privacy, fairness and discrimination in AI systems.",
      img: "assets/speaker-costanza-alfieri.JPG"
    },
    {
      id: 2,
      name: "Francesca Caroccia",
      description: "Francesca Caroccia graduated in Law at La Sapienza University, Rome, where she also achieved a Master degree in Consumer and Tort law. Since 2008, she is Associate Professor of Private Law at the University of L'Aquila. Her research is focused on Contract Law (Interpretation; limits of private autonomy), Tort law, and legal approaches to the use of new technologies (AI).",
      img: "assets/speaker-carroccia.jpg"
    },
    {
      id: 3,
      name: "Francesca Colella",
      description: "Francesca Colella, PhD. in “Theory and social research” (Sapienza), is researcher at the Department of Human Sciences, University of L’Aquila. In 2019-2021 she coordinated the project “Global compact for safe, orderly and regular migration” (Sapienza University of Rome). She is currently the Principal Investigator of the project “Female Role Models” (University of L’Aquila). Her studies include: the phenomenon of migration, gender issues, innovation and social change, socialization and identity, the changing social situation of youth, the social representations of the migrant in the mass media and in the social imaginary. ",
      img: "assets/speaker-colella.jpg"
    },
    {
      id: 4,
      name: "Donata Columbro",
      description: "Donata Columbro is a journalist (La Stampa, Internazionale) and data communication expert focusing on tech, human rights and data feminism. She is a tenured teacher of data visualization at the Faculty of Communication at IULM University in Milan. She co-founded Viz & Chips, a team of journalists and data scientists with whom she won the journalism contest of La Stampa Academy and the Istat Census Data Challenge. From 2019 to 2022 she has been in charge of the Dataninja School, the first italian data literacy online platform, which she co-founded. She is the author of \"Ti spiego il dato\" (Quinto Quarto ed. 2021) and \"Dentro l'algoritmo\" (Effequ 2022).",
      img: "assets/spaker-columbro.jpg"
    },
    {
      id: 5,
      name: "Antinisca Di Marco",
      description: "Antinisca Di Marco is professor in Computer Science at University of L'Aquila. Her main research topics are Software Quality Engineering, Data Science, Quality in Machine Learning (such as fairness and privacy) and Bioinformatics. She is involved in several national and international projects on such topics. She is the responsible of the research infrastructure of Territori Aperti project, co-PI of SoBigData.it and the director of the INFOLIFE CINI Laboratory node in L'Aquila. Since 2018, she is involved in serveral actions and projects aiming at improving equal opportunities in STEM (Science, Technology, Engineering and Mathematics). In particular, she is member of the cost action EUGAIN (https://eugain.eu/), and co-ideator and co-coordinator of PinKamP (www.pinkamp.disim.univaq.it).",
      img: "assets/speaker-dimarco.jpg"
    },
    {
      id: 6,
      name: "Donatella Donati",
      description: "Donatella Donati is a research fellow in Logic and Philosophy of Science at the University of L'Aquila (Italy) and she earned her PhD in Philosophy from the University of Nottingham. She is interested in Metaphysics, Philosophy of Time and Artificial Intelligence. Donatella has recently started to work on ethical and epistemological issues regarding intelligent systems, with particular focus on the concept of trust. She is currently working on different projects along with computer scientists and is part of the Exosoul project coordinated by Paola Inverardi.",
      img: "assets/speaker-donati.png"
    },
    {
      id: 7,
      name: "Fosca Giannotti",
      description: "Fosca Giannotti is professor of Computer Science at Scuola Normale Superiore, Pisa and associate at the Information Science and Technology Institute “A. Faedo” of CNR., Pisa, Italy.  She co-leads the KDD Lab - Knowledge Discovery and Data Mining Laboratory, a joint research initiative of the University of Pisa and ISTI-CNR. Her research focuses on one side on the use of AI and Big Data Analytics for understanding complex social phenomena: human mobility, social behaviour and  on the other side on advancing AI methods with respect to trustworthiness and  human comprehension and collaboration.  She is the PI of the ERC project “XAI - Science and Technology for the Explanation of AI Decision Making”.",
      img: "assets/speaker-fosca.webp"
    },
    {
      id: 8,
      name: "Diletta Huyskes",
      description: "Diletta Huyskes graduated in Philosophy and is currently a PhD candidate in Sociology at the University of Milan. Her research focuses on the use of AI and automated decision-making processes in public services and their impact on society, with a theoretical background on STS and feminist technology studies.",
      img: "assets/speaker-Diletta-Huykes.jpg"
    },
    {
      id: 9,
      name: "Paola Inverardi",
      description: "Paola Inverardi is the Rector of Gran Sasso Science Institute. She was Professor of Computer Science at University of L’Aquila and, from October 2013 to September 2019, she was Rector of University of L’Aquila. Paola Inverardi's research area is in the application of rigorous methods to software production in order to improve software quality. In the last decade her research interests concentrated in the field of software architectures, mobile applications and adaptive and autonomous systems. Currently she leads the EXOSOUL project to develop software solutions to protect users' ethics in the interaction with autonomous technologies. Inverardi served in the editorial boards of IEEE, ACM, Springer and Elsevier Journals. She has been general chair or program chair of leading conferences in software technology (e.g. ASE, ICSE, ESEC/FSE) and chair of the ICSE and ESEC Steering Committees. She has been member of the ACM Europe Council and she is vice-chair of ACM EUTPC. She is member of Academia Europaea and IFIP Fellow. She was the Italian National Delegate for the European H2020-ICT Committee and she is the Italian representative in the Eurohpc Governing Board. She is 2021- G20 sherpa for the Italian Ministry of University and Research. She has received a Honorary Doctorate at Mälardalen University Sweden and a Honorary doctorate at Shibaura University, Tokyo Japan, she has received the 2013 IEEE TCSE Distinguished Service Award http://www.cs-tcse.org/awards.",
      img: "assets/speaker-inverardi.jpg"
    },
    {
      id: 10,
      name: "Michela Natilli",
      description: "Michela Natili is a researcher of the KDD Lab at ISTI-CNR. Her work focuses on applied data science with particular interests in the design and development of Big Data Analytics experiments for defining and monitoring statistical indicators for complex social phenomena also in a gender perspective. She is in the management team of SoBigData RI, the European Research Infrastructure for Big Data and Social Mining.",
      img: "assets/speaker-natilli.jpg"
    },
    {
      id: 11,
      name: "Teresa Numerico",
      description: "Teresa Numerico is Associate Professor of philosophy of Science at the University of Roma Tre, since 2014. Between 2005 and 2013 she was assistant professor at the University of Salerno (2005-2008) and at the University of Roma Tre (2008-2013). Before she was awarded Leverhulme Fellowship at South Bank University (2004-2005). She coauthored Web Dragons (2007 Morgan Kaufmann) and The Digital Humanist a critical inquiry (2015, Punctum Books); her last book is: Big Data e Algoritmi (Carocci, 2021). She wrote many papers on international scientific journals. Her work focuses on History and Philosophy of Technology and Artificial Intelligence. Her current research revolves around a critical perspective on Big Data ethics, fairness of algorithms, algorithmic governmentality, and critical digital humanities.",
      img: "assets/speaker-numerico.jpg"
    },
    {
      id: 12,
      name: "Andrea Piergentili",
      description: "Andrea Piergentili is a PhD student at the University of Trento, under the co-supervision of Fondazione Bruno Kessler, where he works within the Machine Translation Unit. He studied Linguistics, Literature and Translation and researched Gender-Inclusive Language as a new paradigm for human and automatic translation. His research focuses on the interactions of language and technology, and their social impact.",
      img: "assets/speaker-piergentili.jpeg"
    },
    {
      id: 13,
      name: "Camilla Quaresmini",
      description: "Camilla Quaresmini is a PhD student in Science, Technology and Policy for Sustainable Change at Politecnico of Milan. With a philosophical background, her research focuses on information quality dimensions for a fair and inclusive design of AI systems.",
      img: "assets/spaker-camilla-quaresmini.png"
    },
    {
      id: 14,
      name: "Beatrice Savoldi",
      description: "Beatrice Savoldi is a PhD candidate in Linguistics at the University of Trento under the co-supervision of the Machine Translation research unit at Fondazione Bruno Kessler (FBK). With a background in Language and Translation studies, Beatrice's main line of research now focuses on Gender Bias in automatic translation in both speech and text modalities. More broadly, her research interests encompass the social impact and ethical implications of AI and natural language processing technologies (NLP). She has recently become a member of the LITHME COST Action network (Language in the Human-Machine Era) investigating how language attitudes and ideology are incorporated and shaped in NLP.",
      img: "assets/speaker-savoldi.jpg"
    },
    {
      id: 15,
      name: "Giovanni Stilo",
      description: "Giovanni Stilo is a Computer Science and Data Science professor at the University of L'Aquila. His research interests are machine learning, data mining and artificial intelligence, with a special interest in (but not limited to) trustworthiness aspects such as Explainability, Bias and Fairness, and. He co-organized a long series (2020-2023) of top-tier International workshops, and Journal Special Issues specifically focused on Bias and Fairness in Search and Recommendation. He is responsible for New technologies for data collection, preparation and analysis of the Territori Aperti project, coordinator of the activities on \"Responsible Data Science and Training\" of SoBigData.it, Head of the Master's Degree course in Applied Data Science at the University of L'Aquila, and PI of the \"FAIR-EDU: Promote FAIRness in EDUcation Institutions\" project.",
      img: "assets/speaker-stilo.jpg"
    },
    {
      id: 16,
      name: "Lisandra Suárez Fernández",
      description: "Lisandra Suárez Fernández graduated in Law from Matanzas University, Cuba. Since 2008, she has worked at the University of Matanzas, where she has been a Full Professor of Private Law since 2020. In 2011 she achieved a Master's degree in Family Law at La Habana University, Cuba, where she also received her Ph.D. in Legal Science (in 2019). She has been a Public Notary of Cuba since 2012. Currently, she is a research fellow at the University of L'Aquila. ",
      img: "assets/speaker-lisandra.jpg"
    },
    {
      id: 17,
      name: "Laura Tarantino",
      description: "Laura Tarantino is Professor in Information Engineering at University of L'Aquila where she is the Head of the Computing Systems Engineering Study Program. Her main research topics are in Human-Computer Interaction and Information Systems, with particular interest in the social impact of Information and Communication Technologies (ICT), focusing in particular on fragile and vulnerable population groups, such as children with cognitive disabilities, elderly people, victims of natural disasters. She has been involved in several national and international projects on such topics. She is also very active in issues related to Gender & Technology and Women & STEM. In particular, she is the Equal Opportunity Representative of the Department of Information Engineer, Computer Science and Mathematics (DISIM) and the co-coordinator of Pinkamp, the DISIM summer camp for high school girls, to bring them closer to ICT/STEM topics and contribute to reduce the gender gap in such topics.",
      img: "assets/speaker-tarantino.jpg"
    },
  ];
  return (
    <section id='speakers' className="speakers-section">
      <div className='title-wrapper'>
        <h2>
          02<br/>
          Speakers
        </h2>
      </div>
      <div className='speakers-infos'>
          {speakers.map((speaker, i) => {
            return(
              <div key={speaker.id}>
                <div className={'speakerimg speaker' + i + ' ' + speaker.name}>
                  <img onClick={() => handleModal(speaker)} src={speaker.img}/>
                </div>
                {
                isModal && selectedSpeaker &&
                 <animated.div style={modalAnimation} className={`modalshow`}>
                    <div className='innermodal'>
                      <div className='closemodal' onClick={() => handleModal(null)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000" width="70px" height="70px" viewBox="0 0 256 256" id="Flat">
                          <path d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z"/>
                        </svg>
                      </div>
                        <h3>{selectedSpeaker.name}</h3> {/* Display the speaker's name */}
                        <p>{selectedSpeaker.description}</p>
                    </div>
                  </animated.div>
                }
              </div>
            );
          })}
      </div>
    </section>
  )
}

export default Speakers