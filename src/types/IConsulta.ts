import IProfissional from "./IProffisional";

export default interface IConsulta extends IProfissional {
    id: number,
    data: string,
    horario: string,
    profissional: Array<IProfissional>,
    especialidade: string,
    paciente: string,
    modalidade: string
}