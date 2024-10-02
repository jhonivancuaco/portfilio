import useProjecData from "../data/projectData";

function Projects() {

    const { projects } = useProjecData(state => state);

    return (
        <section className="min-h-screen pt-10 pb-20">
            <h2 className="text-lg md:text-3xl text-center font-bold mb-10">
                <span className="text-orange-500">Projects</span> and <span className="text-orange-500">Works</span>
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">

                {
                    projects.map((project, index) => {
                        return (
                            <div key={index} className="project relative bg-orange-500 hover:bg-orange-600 flex flex-col items-center justify-center rounded p-2 min-h-[150px]">
                                <a href={project.url} rel="nofollow noopener" target="_blank">
                                    <img className="mb-4 w-[200px] md:w-[200px] h-[100px] object-contain" src={project.image} alt={project.name} />
                                </a>

                                <p className="text-center text-sm">{project.description}</p>

                                <div className="bg-slate-800 absolute build-by flex flex-col items-center justify-center w-full h-full">
                                    <a href={project.url} rel="nofollow noopener" target="_blank">
                                        <h4 className="text-orange-500 hover:text-orange-600 text-xl text-center underline font-bold mb-4">{project.name}</h4>
                                    </a>

                                    <div className="text-center flex flex-wrap items-center justify-center">
                                        {
                                            project.skills.map((skill, index) => {
                                                return (
                                                    <p key={index} className="text-nowrap">
                                                        <span className="skill">{skill}</span> ,&nbsp;
                                                    </p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Projects