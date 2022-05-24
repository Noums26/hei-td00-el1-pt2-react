import React from 'react';

export const DataTableHeader = ({title}) => {
    return (
        <>
            <thead>
                <tr>
                    {title.map(item => {return <th key={item}>{item}</th>})}
                </tr>
            </thead>
            <tfoot>
                <tr>
                    {title.map(item => {return <th key={item}>{item}</th>})}
                </tr>
            </tfoot>
        </>
    )
}

export const DataTableBody = ({children}) => {
    return (
        <tbody>
            {children}
        </tbody>
    )
}

export const DataTableCell = ({item}) => {
    const title = Object.keys(item);
    return (
        <tr>
            {title.map((e) => {
                return <td>{item[`${e}`]}</td>
            })}
        </tr>
    )
}

const DataTable = ({children}) => {
    return (
        <table id="datatablesSimple" className="table table-bordered">
            {children}
        </table>
    );
};

export default DataTable;