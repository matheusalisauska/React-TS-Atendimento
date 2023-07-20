import IProfissional from "./types/IProffisional";
import useFetch from "./useFetch";


const useDadosProfissional = () => {
    return useFetch<IProfissional[]>({url: 'profissionais'})

}

export default useDadosProfissional;