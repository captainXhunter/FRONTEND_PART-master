import React, { Component } from "react";

import axios from 'axios';
import {
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CRow,
  } from '@coreui/react'


  function EnteteMaquette(){


    return(
        <thead className="table-primary">
            <tr id="entete">
                <th colSpan={23} ><center>Maquette DiC1</center></th>
            </tr>
            <tr>
                <th colSpan={4} rowSpan="2">UE</th>
                <th colSpan={3} rowSpan="2">Code</th>
                <th colSpan={8} rowSpan="2">EC</th>
                <th colSpan={4}> Charge horaire</th>
                <th rowSpan={2}>ECTS</th>
                <th rowSpan={2}>Total ECTS</th>
                <th rowSpan={2}>Coef</th>
                <th rowSpan={2}>Coef UE</th>
            </tr>
            <tr>
                <th>CM</th>
                <th>TD & TP</th>
                <th>Total</th>
                <th>TPE</th>
            </tr>
        </thead>
        
    )
  }

  export default EnteteMaquette;