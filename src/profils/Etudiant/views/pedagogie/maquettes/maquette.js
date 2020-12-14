import React, { Component } from "react";

import {
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CRow,
  } from '@coreui/react';


import ElementMaquette from "./enteteMaquette";

// import UE from './ec';




class Maquette extends Component {
    render(){
        return(
            <CCard>
            <CCardBody>
            <CRow>
                <CCol sm="12">
                <table className="col-md-10 offset-md-1" border={2}>
                        <ElementMaquette />
                </table>    
                </CCol>
            </CRow>
            </CCardBody>
            </CCard>
        )
    }
}

export default Maquette;