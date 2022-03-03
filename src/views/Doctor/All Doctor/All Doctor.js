import React, { useState, useEffect } from 'react';
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';

/*import "../../../asset/plugins/bootstrap/css/bootstrap.min.css";
import "../../../asset/css/main.css";*/


const All_Doctor=()=>{
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo();
  });
  
  return(
    <>
    <div>
   <section className="content">
  <div className="container-fluid">
    <div className="block-header">
      <h2>All Doctors</h2>
      <small className="text-muted">Welcome to All Doctors</small>
    </div>
    <div className="row clearfix">
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div className="card">
          <div className="body">
            <div className="member-card verified">                            
              <div className="thumb-xl member-thumb">
              
               <img src="http://via.placeholder.com/130x130" className="img-thumbnail rounded-circle" alt="profile-image" />                              
              </div>
              <div className>
                <h4 className="m-b-5 m-t-20">Dr. Aman dubey</h4>
                <p className="text-muted">Dentist</p>
              </div>
              {/*<p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p> */}                          
              <a href="profile.html" className="btn btn-raised btn-sm">View  Doctor Profile</a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div className="card">
          <div className="body">
            <div className="member-card">                            
              <div className="thumb-xl member-thumb">
                <img src="http://via.placeholder.com/130x130" className="img-thumbnail rounded-circle" alt="profile-image" />                               
              </div>
              <div className>
                <h4 className="m-b-5 m-t-20">Dr. Aman</h4>
                <p className="text-muted">ENT Specialist</p>
              </div>
              
              <a href="javascript:void(0);" className="btn btn-raised btn-sm">View Profile</a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div className="card">
          <div className="body">
            <div className="member-card verified">                           
              <div className="thumb-xl member-thumb">
                <img src="http://via.placeholder.com/130x130" className="img-thumbnail rounded-circle" alt="profile-image" />
              </div>
              <div className>
                <h4 className="m-b-5 m-t-20">Kendra V</h4>
                <p className="text-muted">Neurologist</p>
              </div>
              
              <a href="javascript:void(0);" className="btn btn-raised btn-sm">View Profile</a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div className="card">
          <div className="body">
            <div className="member-card verified">                           
              <div className="thumb-xl member-thumb">
                <img src="http://via.placeholder.com/130x130" className="img-thumbnail rounded-circle" alt="profile-image" />
              </div>
              <div className>
                <h4 className="m-b-5 m-t-20">Dr. Arun</h4>
                <p className="text-muted">Neurologist</p>
              </div>
            
              <a href="javascript:void(0);" className="btn btn-raised btn-sm">View Profile</a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div className="card">
          <div className="body">
            <div className="member-card verified">
              <div className="thumb-xl member-thumb">
                <img src="http://via.placeholder.com/130x130" className="img-thumbnail rounded-circle" alt="profile-image" />
              </div>
              <div className>
                <h4 className="m-b-5 m-t-20">Dr. Arun pandey</h4>
                <p className="text-muted">Dentist</p>
              </div>
              
              <a href="javascript:void(0);" className="btn btn-raised btn-sm">View Profile</a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div className="card">
          <div className="body">
            <div className="member-card">
              <div className="thumb-xl member-thumb">
                <img src="http://via.placeholder.com/130x130" className="img-thumbnail rounded-circle" alt="profile-image" />
              </div>
              <div className>
                <h4 className="m-b-5 m-t-20">Punam Pandey</h4>
                <p className="text-muted">ENT Specialist</p>
              </div>
              
              <a href="javascript:void(0);" className="btn btn-raised btn-sm">View Profile</a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div className="card">
          <div className="body">
            <div className="member-card verified">
              <div className="thumb-xl member-thumb">
                <img src="http://via.placeholder.com/130x130" className="img-thumbnail rounded-circle" alt="profile-image" />
              </div>
              <div className>
                <h4 className="m-b-5 m-t-20">Aman Pandey</h4>
                <p className="text-muted">Neurologist</p>
              </div>
              
              <a href="javascript:void(0);" className="btn btn-raised btn-sm">View Profile</a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div className="card">
          <div className="body">
            <div className="member-card verified">
              <div className="thumb-xl member-thumb">
                <img src="http://via.placeholder.com/130x130" className="img-thumbnail rounded-circle" alt="profile-image" />
              </div>
              <div className>
                <h4 className="m-b-5 m-t-20">Dr. pawan</h4>
                <p className="text-muted">Neurologist</p>
              </div>
              
              <a href="javascript:void(0);" className="btn btn-raised btn-sm">View Profile</a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div className="card">
          <div className="body">
            <div className="member-card verified">
              <div className="thumb-xl member-thumb">
                <img src="http://via.placeholder.com/130x130" className="img-thumbnail rounded-circle" alt="profile-image" />
              </div>
              <div className>
                <h4 className="m-b-5 m-t-20">Kendra</h4>
                <p className="text-muted">Neurologist</p>
              </div>
              
              <a href="javascript:void(0);" className="btn btn-raised btn-sm">View Profile</a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div className="card">
          <div className="body">
            <div className="member-card verified">
              <div className="thumb-xl member-thumb">
                <img src="http://via.placeholder.com/130x130" className="img-thumbnail rounded-circle" alt="profile-image" />
              </div>
              <div className>
                <h4 className="m-b-5 m-t-20">Dr. virendra</h4>
                <p className="text-muted">Neurologist</p>
              </div>
              
              <a href="javascript:void(0);" className="btn btn-raised btn-sm">View Profile</a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div className="card">
          <div className="body">
            <div className="member-card verified">
              <div className="thumb-xl member-thumb">
                <img src="http://via.placeholder.com/130x130" className="img-thumbnail rounded-circle" alt="profile-image" />
              </div>
              <div className>
                <h4 className="m-b-5 m-t-20">Dr Aman </h4>
                <p className="text-muted">Dentist</p>
              </div>
             
              <a href="javascript:void(0);" className="btn btn-raised btn-sm">View Profile</a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div className="card">
          <div className="body">
            <div className="member-card">
              <div className="thumb-xl member-thumb">
                <img src="http://via.placeholder.com/130x130" className="img-thumbnail rounded-circle" alt="profile-image" />
              </div>
              <div className>
                <h4 className="m-b-5 m-t-20">Kendra </h4>
                <p className="text-muted">ENT Specialist</p>
              </div>
              
              <a href="javascript:void(0);" className="btn btn-raised btn-sm">View Profile</a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row clearfix">
      <div className="col-sm-12 text-center">
        <Link to="Add Doctor">
      <a  className="btn btn-raised g-bg-cyan">Add Doctor</a>
      </Link>
      {/*<a 
      to='/'
      onClick={() => {
        window.location.href = '/Add_Doctor';
      }}
    className="btn btn-raised g-bg-cyan">Add Doctor</a>*/}
        {/*<a href="javascript:void(0);" className="btn btn-raised g-bg-cyan">Add Doctor</a>*/}
      </div>
    </div>
  </div>
</section>

    </div>
    </>
  )
}
export default All_Doctor;


/*import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Accordion = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsCallout name="Accordion" href="components/accordion" />
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Accordion</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Click the accordions below to expand/collapse the accordion content.
            </p>
            <DocsExample href="components/accordion">
              <CAccordion activeItemKey={2}>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Accordion Item #2</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Accordion Item #3</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Accordion</strong> <small>Flush</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add <code>flush</code> to remove the default <code>background-color</code>, some
              borders, and some rounded corners to render accordions edge-to-edge with their parent
              container.
            </p>
            <DocsExample href="components/accordion#flush">
              <CAccordion flush>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Accordion Item #2</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Accordion Item #3</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </DocsExample>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Accordion</strong> <small>Always open</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Add <code>alwaysOpen</code> property to make accordion items stay open when another
              item is opened.
            </p>
            <DocsExample href="components/accordion#flush">
              <CAccordion alwaysOpen>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Accordion Item #2</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>Accordion Item #3</CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Accordion*/
