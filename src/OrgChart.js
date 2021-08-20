import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import { MediaCard } from './Card'
import { minsters, Senior, PMD } from './data'
import Grid from '@material-ui/core/Grid';

export const OrgChartComponent = () => (
  <Grid container item justifyContent="center" spacing={1} xs={12}>
    <Grid xs key={154} item>
      <MediaCard
        role="Prime Minister"
      />
    </Grid>
    {
      Senior.map((value, index) => (
        <Grid xs key={value + index} item>
          <MediaCard
            role={"(Senior) " + value}
          />
        </Grid>
      ))
    }
    {
      PMD.map((value, index) => (
        <Grid xs key={value + index} item>
          <MediaCard
            role={"(PM Department) " + value}
          />
        </Grid>
      ))
    }

    {minsters.map((value, index) => (
      <Grid xs key={value + index} item>
        <MediaCard
          role={value}
        />
      </Grid>
    ))}
  </Grid>
  // <div
  //   id="TREE"
  //   style={{
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center"
  //   }}
  // >

  /* { <Tree
     label={

       <MediaCard
         role="Prime Minister"
       />
     }
     lineWidth={'5px'}
     lineColor={'white'}
     lineHeight={'10px'}

     nodePadding={'5px'}
   >
     <TreeNode
     label={
       <MediaCard
         role="Deputy Prime Minister"
       />}
   >
     <TreeNode
       label={
         <MediaCard
           noImage={true}
           role="Senior Ministers"
         />}
     >
       {
         Senior.map((element, index) => {
           return <TreeNode
             key={index}
             label={
               <MediaCard
                 role={element}
               />} />
         })
       }
     </TreeNode>

     <TreeNode
       label={
         <Grid container justifyContent="center" spacing={1}>
           {minsters.map((value, index) => (
             <Grid xs key={value + index} item>
               <MediaCard
                 role={value}
               />
             </Grid>
           ))}
         </Grid>
       }>



     </TreeNode>

     <TreeNode
       label={
         <MediaCard
           noImage={true}
           role="PM Department"
         />}
     >
       {
         PMD.map((element, index) => {
           return <TreeNode
             key={index}
             label={
               <MediaCard
                 role={element}
               />} />
         })
       }
     </TreeNode>




     </TreeNode>
   </Tree> }*/
  // </div>
);