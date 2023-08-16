import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Result from "../Common/Result";
import SliderSelect from "../Common/SliderSelect";
import TenureSelect from "../Common/TenureSelect";

function calculator() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
    monthlyPayment: 0,
  });


  return (
    <div className="mt-16 h-auto pb-10 lg:pt-6 overflow-hidden flex justify-center items-center">
      <Container maxWidth="xl" sx={{marginTop:4}}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default calculator;
