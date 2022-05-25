import React from 'react';
import SideNav, { SideNavCollapseContainer, SideNavCollapseControler, SideNavContainer, SideNavLink, SideNavMenuHeading, SideNavNav } from '../components/SideNav';
import {data} from '../components/data'
import DataTable, { DataTableBody, DataTableCell, DataTableHeader } from '../components/DataTable';
import CardMaster from '../components/CardMaster';
import BreadCrumb from '../components/BreadCrumb';
import LogedIn from '../components/LogedIn';

const Table = () => {
    return (
        <SideNav>
            <SideNavNav>
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <SideNavMenuHeading title='Core' />
                            <SideNavLink target="index.html" label="Dashboard" icon="bi-speedometer"/>
                            
                            <SideNavMenuHeading title='Interface' />
                            
                            <SideNavCollapseControler cible="collapseLayouts" icon="bi-layout-split" label="Layouts" />
                            <SideNavCollapseContainer id="collapseLayouts">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="layout-static.html">Static Navigation</a>
                                    <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </SideNavCollapseContainer>
                            
                            <SideNavCollapseControler cible="collapsePages" icon="bi-book-fill" label="Pages" />
                            
                            <SideNavCollapseContainer id="collapsePages">
                                <nav className="sb-sidenav-menu-nested nav accordion">
                                <SideNavCollapseControler cible="pagesCollapseAuth" icon="" label="Authentication" />
                                    
                                <SideNavCollapseContainer id="pagesCollapseAuth">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <a className="nav-link" href="login.html">Login</a>
                                        <a className="nav-link" href="register.html">Register</a>
                                        <a className="nav-link" href="password.html">Forgot Password</a>
                                    </nav>
                                </SideNavCollapseContainer>
                                <SideNavCollapseControler cible="pagesCollapseError" icon="" label="Error" />
                                    
                                <SideNavCollapseContainer id="pagesCollapseError">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <a className="nav-link" href="401.html">401 Page</a>
                                        <a className="nav-link" href="404.html">404 Page</a>
                                        <a className="nav-link" href="500.html">500 Page</a>
                                    </nav>
                                </SideNavCollapseContainer>
                                </nav>
                            </SideNavCollapseContainer>
                            <SideNavMenuHeading title='Addons' />
                            
                            <SideNavLink target="charts.html" label="Charts" icon="bi-graph-up" />
                            <SideNavLink target="tables.html" label="Tables" icon="bi-table" />
                        </div>
                    </div>
                    <LogedIn identifiant="Start React" />
                </nav>
            </SideNavNav>
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
        </SideNav>
    );
};

export default Table;