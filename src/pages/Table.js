import React from 'react';
import SideNav, { SideNavContainer } from '../components/SideNav';
import {data} from '../components/data'
import DataTable, { DataTableBody, DataTableCell, DataTableHeader } from '../components/DataTable';
import CardMaster from '../components/CardMaster';
import BreadCrumb from '../components/BreadCrumb';

const Table = () => {
    return (
        <div>
            
        <div id="layoutSidenav">
        
        <SideNav />
            <SideNavContainer>
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Tables</h1>
                        <BreadCrumb />
                        <CardMaster addStyle='mb-4'>
                                DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
                                <a target="_blank" href="https://datatables.net/">official DataTables documentation</a>
                                .
                        </CardMaster>
                        <CardMaster addStyle='mb-4' title='DataTable Example' icon='bi-table'>
                            
                                <DataTable>
                                    
                                    <DataTableHeader title={Object.keys(data[0])} />

                                    <DataTableBody>
                                        {data.map(item => {
                                            return <DataTableCell item={item} />
                                        })}
                                    </DataTableBody>                                        
                                    
                                </DataTable>
                            
                        </CardMaster>
                    </div>
                </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2022</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </SideNavContainer>
        </div>
        </div>
    );
};

export default Table;