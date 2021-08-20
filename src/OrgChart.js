import React from 'react';
import { MediaCard } from './Card'
import { minsters, Senior, PMD } from './data'
import Grid from '@material-ui/core/Grid';

export const OrgChartComponent = () => (
  <Grid id="TREE"  container item justifyContent="center" spacing={1} xs={12}>
    <Grid xs={12} md xl={2} key={154} item>
      <MediaCard 
        role="Prime Minister"
      />
    </Grid>
    <Grid xs={12} md={6} xl={1} key={12} item>
      <MediaCard 
        role="Deputy Prime Minister"
      />
    </Grid>
    {
      Senior.map((value, index) => (
        <Grid  xs={12} md={6} xl={1} key={value + index} item>
          <MediaCard
            role={"(Senior) " + value}
          />
        </Grid>
      ))
    }
    {
      PMD.map((value, index) => (
        <Grid xs={12} md={6} xl={1} key={value + index} item>
          <MediaCard
            role={"(PM Department) " + value}
          />
        </Grid>
      ))
    }

    {minsters.map((value, index) => (
      <Grid xs={12} md={6} xl={1} key={value + index} item>
        <MediaCard
          role={value}
        />
      </Grid>
    ))}
  </Grid>
);