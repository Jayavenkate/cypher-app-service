
// import { useState } from 'react'
// import './App.css'
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import FormControl from '@mui/material/FormControl';
// import NativeSelect from '@mui/material/NativeSelect';
// import { Card } from '@mui/material';
// import Status from './components/Status';
// function App() {
//   const [show, setShow] = useState(false);
//   const [open, setOpen] = useState(false)
//   const handleClick = () => {
//     setShow(!show);
//     setOpen(!open)
//   }

//   const [selectedValue, setSelectedValue] = useState(30);

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };
//   return (
//     <>
//       <h3>CYPHER APP SERVICE </h3>
//       <button onClick={handleClick} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Display {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</button>
//       {open &&
//         <Card sx={{ width: "350px", padding: "0px 15px" }}>
//           <h4>Grouping <FormControl fullWidth>

//             <NativeSelect
//               value={selectedValue}
//               onChange={handleChange}
//               inputProps={{
//                 name: 'age',
//                 id: 'uncontrolled-native',
//               }}
//             >
//               <option value={10}>Status </option>
//               <option value={20}>User</option>
//               <option value={30}>Priority</option>
//             </NativeSelect>
//           </FormControl></h4>

//           {/* <h4>Ordering <FormControl fullWidth>

//             <NativeSelect
//               defaultValue={20}
//               inputProps={{
//                 name: 'age',
//                 id: 'uncontrolled-native',
//               }}
//             >
//               <option value={10}>Priority </option>
//               <option value={20}>Title</option>
//             </NativeSelect>
//           </FormControl></h4> */}

//           {selectedValue === 10 && <Status />}
//         </Card>}
//     </>
//   )
// }

// export default App



import { useState } from 'react'
import './App.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Card } from '@mui/material';
import Status from './components/Status';
import User from './components/User';
import Priority from './components/Priority';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';

function App() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showPriority, setShowPriority] = useState(false);
  const handleClick = () => {
    setShow(!show);
    setOpen(!open)
  }
  const handleProfileClick = () => {
    // Set the state to show the Status component when Profile is clicked
    setShowStatus(true);
    setShowUser(false);
    setShowPriority(false);
    handleClose();
  };
  const handleMyAccountClick = () => {
    setShowUser(true);
    setShowStatus(false);
    setShowPriority(false);// Reset showStatus when My account is clicked
    handleClose();
  };
  const handlePriorityClick = () => {
    setShowPriority(true);
    setShowUser(false);
    setShowStatus(false);
    handleClose();
  };



  const [anchorEl, setAnchorEl] = useState(null);
  const openn = Boolean(anchorEl);
  const handleclick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl("")
  };




  return (
    <>
      <h3>CYPHER APP SERVICE </h3>
      <button onClick={handleClick} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", color: "GrayText" }}><FormatAlignCenterIcon /> <span style={{ color: "black" }}>Display</span> {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</button>
      {open &&
        <Card sx={{ width: "250px", padding: "0px 15px", margin: "15px 0px 0px 0px" }}>
          <h4 style={{ color: "GrayText" }}>Grouping  <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleclick}
          >
            Option
          </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openn}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleProfileClick}>Status</MenuItem>
              <MenuItem onClick={handleMyAccountClick}>User</MenuItem>
              <MenuItem onClick={handlePriorityClick}>Priority</MenuItem>
            </Menu></h4>




        </Card>}
      {showStatus && <Status />}
      {showUser && <User />}
      {showPriority && <Priority />}
    </>
  )
}

export default App
