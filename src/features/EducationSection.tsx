type ExperienceElem = {
  place: string
  title: string
  link: string
  contract: string
  startDate: string
  endDate: string
  description: string
  type: string
}

function ExperienceSection() {
  const experienceElems: ExperienceElem[] = [
    {
      place: 'Zucchetti Software Giuridico',
      title: 'Front-End Developer',
      link: 'https://www.zucchettisoftwaregiuridico.it/',
      contract: 'Full-time',
      startDate: 'October 2023',
      endDate: 'Current',
      description: '',
      type: 'work',
    },
    {
      place: 'Idealize',
      title: 'Full-Stack Developer',
      link: 'https://www.idealize.srl/',
      contract: 'Internship',
      startDate: 'May 2023',
      endDate: 'October 2023',
      description: '',
      type: 'work',
    },
    {
      place: 'University of Padua',
      title: "Bachelor's Degree in Computer Science",
      link: 'https://www.unipd.it/en/',
      contract: 'Student',
      startDate: 'October 2018',
      endDate: 'December 2023',
      description:
        'dsadnsaodsnadoasnodsadnsaodsnadoasnodsa dnsaodsnadoasnodsadnsaodsnadoasnodsadnsao dsnadoasnodsadnsaodsnadoasnodsadnsaodsnadoa snodsadnsaodsnadoasnodsadnsaodsnadoasnodsa dnsaodsnadoasnodsadnsaodsnadoasnodsadnsaodsn adoasnodsadnsaodsnadoasnodsadnsaodsnadoasnods adnsaodsnadoasnodsadnsaodsnadoasnodsadnsaods nadoasnodsadnsaodsnadoasnodsadnsaodsnadoasnod sadnsaodsnadoasnodsadnsaodsnadoasnod sadnsaodsnadoasno',
      type: 'school',
    },
  ]

  return (
    <div className="flex p-6 text-black max-w-[1000px]">
      <div className="w-10 mr-10 border-r-4 border-dashed border-black/50"></div>
      <div className="flex-1">
        {experienceElems.map((exp, index) => (
          <a href={exp.link} target="blank">
            <div
              className="border border-gray-600 rounded-md my-3 cursor-pointer hover:shadow-md hover:bg-white transition duration-75"
              key={index}
            >
              <div className="p-3">
                <p className="text-sm text-gray-700">
                  {exp.startDate} - {exp.endDate}
                </p>
                <p className="text-sm text-gray-700">{exp.contract}</p>
                <h2 className="font-semibold">
                  {exp.title}{' '}
                  <span className="text-gray-700 font-normal">at</span>{' '}
                  {exp.place}
                </h2>
                <hr className="my-3 border-gray-400" />
                <p className="text-ellipsis">{exp.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default ExperienceSection
