import React from 'react';
// import { makeStyles, Theme, createStyles } 
//         from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
  
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       width: '100%',
//     },
//     button: {
//       marginTop: theme.spacing(1),
//       marginRight: theme.spacing(1),
//     },
//     actionsContainer: {
//       marginBottom: theme.spacing(2),
//     },
//     resetContainer: {
//       padding: theme.spacing(3),
//     },
      
//   }),
// );
  
function getSteps() {
  return [<b style={{color:'purple'}}>'Enter Personal Details'</b>, 
  <b style={{color:'purple'}}>'Enter Education Details'</b>, 
  <b style={{color:'purple'}}>'Enter Address'</b>];
}
  
function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <form class="form-group">
        <label>First Name</label>
        <input type="text" placeholder="First Name"></input>
        <br></br>
        <label>Last Name</label>
        <input type="text" placeholder="Last Name"></input>
        </form>
      );
    case 1:
      return (
        <form class="form-group">
        <label>High School Percentage</label>
        <input type="number" placeholder="High School Percentage"></input>
        <br></br>
        <label>Graduation percentage</label>
        <input type="number" placeholder="Graduation Percentage"></input>
        </form>
      );
    case 2:
      return (
        <form class="form-group">
        <label>Permanent Address</label>
        <input type="text" placeholder="Permanent Address"></input>
        <br></br>
        <label>Temporary Address</label>
        <input type="text" placeholder="Temporary Address"></input>
        </form>
      );
    default:
      return 'Unknown step';
  }
}
  
export default function StepperForms() {
  // const classes = useStyles();
  const classes = "";
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleReset = () => {
    setActiveStep(0);
  };
  
  return (
    <div className={classes.root}>
      <h1>GeeksforGeeks Stepper Form</h1>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Form is submitted</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Stepper from "@material-ui/core/Stepper";
// import Step from "@material-ui/core/Step";
// import StepLabel from "@material-ui/core/StepLabel";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import cutshort from "../../image/cutShort.jpg";
// import { TextField } from "@material-ui/core";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%"
//   },
//   button: {
//     marginRight: theme.spacing(1)
//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1)
//   }
// }));

// function getSteps() {
//   return ["", "", "", ""];
// }
// const [name,setName] = useState();
// function getStepContent(step) {
  
//   switch (step) {
//     case 0:
//       return (
//         <form class="form-group">
//           <TextField
//             type="text"
//             value={name}
//             onChange={(e)=>setName(e.target.value)}
//             variant="outlined"
//             placeholder="High School Percentage"
//           />

//           <br />
//           <label>Grade</label>
//           <br />

//           <TextField
//             type="number"
//             variant="outlined"
//             placeholder="Graduation Percentage"
//           />
//         </form>
//       );
//     case 1:
//       return (
//         <form class="form-group">
//           <label>Permanent Address</label>
//           <TextField
//             type="text"
//             variant="outlined"
//             placeholder="Permanent Address"
//           />
//           <br></br>
//           <label>Temporary Address</label>
//           <TextField
//             type="text"
//             variant="outlined"
//             placeholder="Temporary Address"
//           />
//         </form>
//       );
//     case 2:
//       return (
//         <form class="form-group">
//           <label>High School Percentage</label>
//           <br />
//           <TextField
//             type="number"
//             variant="outlined"
//             placeholder="High School Percentage"
//           />
//           <br />
//           <label>Graduation percentage</label>
//           <br />

//           <TextField
//             type="number"
//             variant="outlined"
//             placeholder="Graduation Percentage"
//           />
//         </form>
//       );
//     case 3:
//       return (
//         <>
//           <h1>Congrtulations, Eren! We'll streamline your setup experience.</h1>
//         </>
//       );
//     default:
//       return "Unknown step";
//   }
// }

// export default function Home() {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [skipped, setSkipped] = React.useState(new Set());
//   const steps = getSteps();

//   const isStepOptional = (step) => {
//     return step === 1;
//   };

//   const isStepSkipped = (step) => {
//     return skipped.has(step);
//   };

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       // You probably want to guard against something like this,
//       // it should never occur unless someone's actively trying to break something.
//       throw new Error("You can't skip a step that isn't optional.");
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };
//   return (
//     <div className={classes.root}>
//       <img
//         src={cutshort}
//         style={{ "margin-left": "190px", width: "200px" }}
//         alt="user"
//       />
//       <Stepper activeStep={activeStep}>
//         {steps.map((label, index) => {
//           const stepProps = {};
//           const labelProps = {};
//           if (isStepOptional(index)) {
//             labelProps.optional = <Typography></Typography>;
//           }
//           if (isStepSkipped(index)) {
//             stepProps.completed = false;
//           }
//           return (
//             <Step key={label} {...stepProps}>
//               <StepLabel {...labelProps}></StepLabel>
//             </Step>
//           );
//         })}
//       </Stepper>
//       <div>
//         {activeStep === steps.length ? (
//           <div style={{ "margin-left": "130px" }}>
//             <Typography className={classes.instructions}>
//               All steps completed - All finished
//             </Typography>
//             <Button onClick={handleReset} className={classes.button}>
//               Reset
//             </Button>
//           </div>
//         ) : (
//           <div style={{ "margin-left": "130px" }}>
//             <Typography className={classes.instructions}>
//               {getStepContent(activeStep)}
//             </Typography>
//             <div>
//               {/* <Button
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 className={classes.button}
//                 style={{ "margin-left": "90px" }}
//               >
//                 Back
//               </Button> */}
//               {/* {isStepOptional(activeStep) && (
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={handleSkip}
//                   className={classes.button}
//                   style={{ display: "absolute" }}
//                 >
//                   Skip
//                 </Button>
//               )} */}

//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleNext}
//                 className={classes.button}
//                 style={{ width: "400px" }}
//               >
//                 {activeStep === steps.length - 1 ? "Launch Eren" : "Next"}
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



















// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// // import user from '../../../public/logo512.png';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   button: {
//     marginRight: theme.spacing(1),
//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
// }));

// function getSteps() {
//   return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
// }

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return (
//         <form class="form-group">
//         <label>High School Percentage</label>
//         <input type="number" placeholder="High School Percentage"></input>
//         <br></br>
//         <label>Graduation percentage</label>
//         <input type="number" placeholder="Graduation Percentage"></input>
//         </form>
//       );
//     case 1:
//       return (
//         <form class="form-group">
//         <label>Permanent Address</label>
//         <input type="text" placeholder="Permanent Address"></input>
//         <br></br>
//         <label>Temporary Address</label>
//         <input type="text" placeholder="Temporary Address"></input>
//         </form>
//       );
//     case 2:
//       return  (
//         <form class="form-group">
//         <label>High School Percentage</label>
//         <input type="number" placeholder="High School Percentage"></input>
//         <br></br>
//         <label>Graduation percentage</label>
//         <input type="number" placeholder="Graduation Percentage"></input>
//         </form>
//       );
//     default:
//       return 'Unknown step';
//   }
// }

// export default function HorizontalLinearStepper() {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [skipped, setSkipped] = React.useState(new Set());
//   const steps = getSteps();

//   const isStepOptional = (step) => {
//     return step === 1;
//   };

//   const isStepSkipped = (step) => {
//     return skipped.has(step);
//   };

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       // You probably want to guard against something like this,
//       // it should never occur unless someone's actively trying to break something.
//       throw new Error("You can't skip a step that isn't optional.");
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <div className={classes.root}>
//       <Stepper activeStep={activeStep}>
//         {steps.map((label, index) => {
//           const stepProps = {};
//           const labelProps = {};
//           if (isStepOptional(index)) {
//             labelProps.optional = <Typography variant="caption">Optional</Typography>;
//           }
//           if (isStepSkipped(index)) {
//             stepProps.completed = false;
//           }
//           return (
//             <Step key={label} {...stepProps}>
//               <StepLabel {...labelProps}>{label}
//               {/* <img  src={user} alt="user" /> */}
//               </StepLabel>
//             </Step>
//           );
//         })}
//       </Stepper>
//       <div>
//         {activeStep === steps.length ? (
//           <div>
//             <Typography className={classes.instructions}>
//               All steps completed - All finished
//             </Typography>
//             <Button onClick={handleReset} className={classes.button}>
//               Reset
//             </Button>
//           </div>
//         ) : (
//           <div style={{"margin-left":"100px"}}>
//             <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
//             <div>
//               <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
//                 Back
//               </Button>
//               {isStepOptional(activeStep) && (
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={handleSkip}
//                   className={classes.button}
//                 >
//                   Skip
//                 </Button>
//               )}

//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleNext}
//                 className={classes.button}
//               >
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
