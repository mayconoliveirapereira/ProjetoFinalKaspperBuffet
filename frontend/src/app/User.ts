import { DatePipe } from "@angular/common"

export interface User{

    id: number
    name: string
    email: string
    pNo: string
    address: string
    tipoEvento: string
    dataEvento: Date
    qtdConvidados: number
}