import React from "react";
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";
/*import "../../../asset/plugins/bootstrap/css/bootstrap.min.css";
import "../../../asset/css/main.css";*/


const Dashboard =()=>{
    return(
        <>
        <div>
                <section className="content home">
                    <div className="container-fluid">
                        <div className="block-header">
                            <h2>Dashboard</h2>
                            {/*<small className="text-muted">Welcome to Swift application</small>*/}
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <div className="info-box-4 hover-zoom-effect">
                                    <div className="icon"> <i className="zmdi zmdi-account col-blue" /> </div>
                                    <div className="content">
                                        <div className="text">New Patient</div>
                                        <div className="number">27</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <div className="info-box-3 hover-zoom-effect">
                                    {/*<div className="icon"> <i className="zmdi zmdi-account col-green" /> </div>*/}
                                    <div className="content">
                                        <div className="text">OPD Patient</div>
                                        <div className="number">12</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <div className="info-box-2 hover-zoom-effect">
                                    {/*<div className="icon"> <i className="zmdi zmdi-bug col-blush" /> </div>*/}
                                    <div className="content">
                                        <div className="text">Today's Operations</div>
                                        <div className="number">20</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <div className="info-box-1 hover-zoom-effect">
                                    {/*<div className="icon"> <i className="zmdi zmdi-balance col-cyan" /> </div>*/}
                                    <div className="content">
                                        <div className="text">Hospital Earning</div>
                                        <div className="number">$3,540</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       {/* <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="header">
                                        <h2>Hospital Survey</h2>
                                        <ul className="header-dropdown">
                                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="zmdi zmdi-more-vert" /></a>
                                                <ul className="dropdown-menu float-right">
                                                    <li><a href="javascript:void(0);">Action</a></li>
                                                    <li><a href="javascript:void(0);">Another action</a></li>
                                                    <li><a href="javascript:void(0);">Something else here</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <canvas id="line_chart" height={70} />
                                    </div>
                                </div>
                            </div>
                           </div>*/}
                        <div className="row clearfix">
                            <div className=" col-sm-12 col-md-4 col-lg-4">
                                <div className="card">
                                    <div className="header">
                                        <h2>New Patient <small>18% High then last month</small></h2>
                                        <ul className="header-dropdown">
                                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="zmdi zmdi-more-vert" /></a>
                                                <ul className="dropdown-menu float-right">
                                                    <li><a href="javascript:void(0);">Action</a></li>
                                                    <li><a href="javascript:void(0);">Another action</a></li>
                                                    <li><a href="javascript:void(0);">Something else here</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="stats-report">
                                            <div className="stat-item">
                                                <h5>Overall</h5>
                                                <b className="col-green">84.60%</b></div>
                                            <div className="stat-item">
                                                <h5>Montly</h5>
                                                <b className="col-green">15.40%</b></div>
                                            <div className="stat-item">
                                                <h5>Day</h5>
                                                <b className="col-green">5.10%</b></div>
                                        </div>
                                       
                                    </div>
                                    
                                </div>
                            </div>
                            <div className=" col-sm-12 col-md-4 col-lg-4">
                                <div className="card">
                                    <div className="header">
                                        <h2>Heart Surgeries <small>18% High then last month</small></h2>
                                        <ul className="header-dropdown">
                                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="zmdi zmdi-more-vert" /></a>
                                                <ul className="dropdown-menu float-right">
                                                    <li><a href="javascript:void(0);">Action</a></li>
                                                    <li><a href="javascript:void(0);">Another action</a></li>
                                                    <li><a href="javascript:void(0);">Something else here</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="stats-report">
                                            <div className="stat-item">
                                                <h5>Overall</h5>
                                                <b className="col-blue-grey">80.40%</b></div>
                                            <div className="stat-item">
                                                <h5>Montly</h5>
                                                <b className="col-blue-grey">13.00%</b></div>
                                            <div className="stat-item">
                                                <h5>Day</h5>
                                                <b className="col-blue-grey">9.50%</b></div>
                                        </div>
                                       
                                    </div>
                                   
                                </div>
                            </div>
                            <div className=" col-sm-12 col-md-4 col-lg-4">
                                <div className="card">
                                    <div className="header">
                                        <h2>Medical Treatment <small>18% High then last month</small></h2>
                                        <ul className="header-dropdown">
                                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="zmdi zmdi-more-vert" /></a>
                                                <ul className="dropdown-menu float-right">
                                                    <li><a href="javascript:void(0);">Action</a></li>
                                                    <li><a href="javascript:void(0);">Another action</a></li>
                                                    <li><a href="javascript:void(0);">Something else here</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="stats-report">
                                            <div className="stat-item">
                                                <h5>Overall</h5>
                                                <b className="col-green">84.60%</b></div>
                                            <div className="stat-item">
                                                <h5>Montly</h5>
                                                <b className="col-green">15.40%</b></div>
                                            <div className="stat-item">
                                                <h5>Day</h5>
                                                <b className="col-green">5.10%</b></div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="header">
                                        <h2> New Patient List  </h2>
                                        <ul className="header-dropdown">
                                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="zmdi zmdi-more-vert" /></a>
                                                <ul className="dropdown-menu float-right">
                                                    <li><a href="javascript:void(0);" className=" waves-effect waves-block">Action</a></li>
                                                    <li><a href="javascript:void(0);" className=" waves-effect waves-block">Another action</a></li>
                                                    <li><a href="javascript:void(0);" className=" waves-effect waves-block">Something else here</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Username</th>
                                                        <th>Diseases</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>depanshu </td>
                                                        <td>kumar</td>
                                                        <td>@Depanshu</td>
                                                        <td><span className="label label-danger">Fever</span> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Aman </td>
                                                        <td>kumar</td>
                                                        <td>@Aman </td>
                                                        <td><span className="label label-info">Cancer</span> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>deepa </td>
                                                        <td>kumar</td>
                                                        <td>@deepa</td>
                                                        <td><span className="label label-warning">Lakva</span> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Rohan </td>
                                                        <td>kumar</td>
                                                        <td>@Rohan </td>
                                                        <td><span className="label label-success">Dental</span> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Margaret </td>
                                                        <td>Griffin</td>
                                                        <td>@Margaret </td>
                                                        <td><span className="label label-info">Cancer</span> </td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card">
                                    <div className="header">
                                        <h2>PATIENT prograss</h2>
                                        <ul className="header-dropdown">
                                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="zmdi zmdi-more-vert" /></a>
                                                <ul className="dropdown-menu float-right">
                                                    <li><a href="javascript:void(0);" className=" waves-effect waves-block">Action</a></li>
                                                    <li><a href="javascript:void(0);" className=" waves-effect waves-block">Another action</a></li>
                                                    <li><a href="javascript:void(0);" className=" waves-effect waves-block">Something else here</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <ul className="basic-list">
                                            <li>Depanshu <span className="label-danger label">21%</span></li>
                                            <li>rajiv <span className="label-purple label">21%</span></li>
                                            <li>Aman<span className="label-success label">90%</span></li>
                                            <li>Mr. Aman Dubey <span className="label-info label">75%</span></li>
                                            <li>shiva <span className="label-warning label">60%</span></li>
                                            <li>Anand <span className="label-success label">91%</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card">
                                    <div className="header">
                                        <h2>PATIENT Reports</h2>
                                        <ul className="header-dropdown">
                                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="zmdi zmdi-more-vert" /></a>
                                                <ul className="dropdown-menu float-right">
                                                    <li><a href="javascript:void(0);">Action</a></li>
                                                    <li><a href="javascript:void(0);">Another action</a></li>
                                                    <li><a href="javascript:void(0);">Something else here</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>First Name</th>
                                                        <th>Charts</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Deepanshu</td>
                                                        <td>
                                                            <span className="sparkbar">5,8,6,3,5,9,2</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Aman Dubey</td>
                                                        <td>
                                                            <span className="sparkbar">10,8,9,3,5,8,5</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Arun</td>
                                                        <td>
                                                            <span className="sparkbar">7,5,9,3,5,2,5</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Anand</td>
                                                        <td>
                                                            <span className="sparkbar">1,8,2,3,9,8,5</span>
                                                        </td>
                                                    </tr>
                                                   
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="header">
                                        <h2>Visits from countries</h2>
                                        <ul className="header-dropdown">
                                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="zmdi zmdi-more-vert" /></a>
                                                <ul className="dropdown-menu float-right">
                                                    <li><a href="javascript:void(0);" className=" waves-effect waves-block">Action</a></li>
                                                    <li><a href="javascript:void(0);" className=" waves-effect waves-block">Another action</a></li>
                                                    <li><a href="javascript:void(0);" className=" waves-effect waves-block">Something else here</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <ul className="country-state">
                                            <li className="m-b-20">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <h5 className="mb-0">6350</h5>
                                                    <small>From India 58%</small>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '58%' }}> <span className="sr-only">58% Complete</span></div>
                                                </div>
                                            </li>
                                            <li className="m-b-20">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <h5 className="mb-0">3250</h5>
                                                    <small>From UAE 90%</small>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-inverse" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}> <span className="sr-only">90% Complete</span></div>
                                                </div>
                                            </li>
                                            <li className="m-b-20">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <h5 className="mb-0">1250</h5>
                                                    <small>From Australia 70%</small>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '70%' }}> <span className="sr-only">70% Complete</span></div>
                                                </div>
                                            </li>
                                            <li className="m-b-20">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <h5 className="mb-0">1350</h5>
                                                    <small>From USA 70%</small>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-info" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '70%' }}> <span className="sr-only">70% Complete</span></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <h5 className="mb-0">1250</h5>
                                                    <small>From UK 65%</small>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '65%' }}> <span className="sr-only">65% Complete</span></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

        </div>


        </>
    );
};
export default Dashboard;