import React from 'react';
import SideNav from '../components/SideNav';
import {data} from '../components/data'
import DataTable, { DataTableBody, DataTableCell, DataTableHeader } from '../components/DataTable';

const Table = () => {
    return (
        <div>
            
        <div id="layoutSidenav">
        
        <SideNav />
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Tables</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li className="breadcrumb-item active">Tables</li>
                        </ol>
                        <div className="card mb-4">
                            <div className="card-body">
                                DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
                                <a target="_blank" href="https://datatables.net/">official DataTables documentation</a>
                                .
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-table me-1"></i>
                                DataTable Example
                            </div>
                            <div className="card-body">
                                <DataTable>
                                    
                                    <DataTableHeader title={Object.keys(data[0])} />

                                    <DataTableBody>
                                        {data.map(item => {
                                            return <DataTableCell item={item} />
                                        })}
                                    </DataTableBody>                                        
                                    
                                </DataTable>
                            </div>
                        </div>
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
            </div>
        </div>
        </div>
    );
};

export default Table;