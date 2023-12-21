import MUIDataTable from "mui-datatables";
import users from './users.json'

const columns=[
    {
        name:"id",
        label:"ID",
        options:{filter:true,sort:true}
    },
    {
        name:"name",
        label:"Nombre"
    },
    {
        name:"email",
        label:"Correo"
    },
    {
        name:"gender",
        label:"Genero"
    },
    {
        name:"status",
        label:"Estado"
    }
    ]

const options ={ filterType:'checkbox'}

export const Tablejson =()=>{
    return(
        <MUIDataTable
        title={"Lista de usuarios"}
        columns={columns}
        data={users}
        options={options}
        />
    )
}