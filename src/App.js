import React from 'react';
// remove import below 
// import logo from './logo.svg';

// we import "Yourappname.js" with this below
// import Yourappname from './Components/Yourappname';

// we import "Personcard.js" with this below
// import Personcard from './Components/Personcard';

// we import "BigInversion.js" with this below, we are still stating "Personcard" because that is the function "const" name in the file.
// import Personcard from './Components/BigInversion';

// we import "Puttingittogether.js" with this below
// import Puttingittogether from './Components/Puttingittogether';

// we import "form.js" with this below, we are stating "RegisterForm" because that is the function "const" name in the file.
// import RegisterForm from './Components/form';

// we import "form_message.js" with this below, we are stating "RegisterForm" because that is the function "const" name in the file.
// import RegisterForm from './Components/form_message';

// we import "form_validation.js" with this below, we are stating "RegisterForm" because that is the function "const" name in the file.
import RegisterForm from './Components/form_validation';


// this below is for the CSS of the react app.
import './App.css';


// FUNCTION BELOW FOR "Yourappname.js"

// function App() {
//   return (

//     // <> below this is an opening fragment tag to begin writting raw html
//     <> 

//     <h1>React App Template</h1>
//     <p>This p tag shows because of the Closing tags</p>
//     <table>
//         {/* <tbody> must be used to create tables when writing raw html in react */}
//         <tbody>
//           <tr>
//             <th>TableHeader1</th>
//             <th>TableHeader2</th>
//             <th>TableHeader3</th>
//           </tr>
//           <tr>
//             <td>TableContent</td>
//             <td>TableContent</td>
//             <td>TableContent</td>
//           </tr>
//         </tbody>
//     </table>
//     <Yourappname tableheader1="TableContent here" tableheader2="TableContent here" tableheader3="TableContent here"/>

//     <Yourappname tableheader1="Pokemon for example" tableheader2="1995 for example" tableheader3="Created by an asian guy for example"/>

//     <Yourappname tableheader1="Medal of Honor for example" tableheader2="2007 for example" tableheader3="Created by Activision for example"/>

//     </>
    // </> above this is an closing fragment tag to end writting raw html

    // also create a folder "Components" inside the src folder and also create the "Yourappname.js" inside the "Components" folder. import the "React" above this default "App.js" file also
//   );
// }
// export default App;



// FUNCTION BELOW FOR "Personcard.js"

// function App() {
//   return (
//     <> 
//     <h1> Person Card Template</h1>
//     <br></br>
//     <Personcard firstName= {'Ben'} lastName= {'Oyewo'} age= {'29'} haircolor= {'Brown'}/>
//     <Personcard firstName= {'Naa'} lastName= {'Mcgruder'} age= {'26'} haircolor= {'Black'}/>
//     <Personcard firstName= {'Ava'} lastName= {'Tobi'} age= {'5'} haircolor= {'Brown'}/>
//     <Personcard firstName= {'Toyin'} lastName= {'Amu'} age= {'50'} haircolor= {'Brown'}/>
//     </>
//   );
// }
// export default App;



// FUNCTION BELOW FOR "Puttingittogether.js"

// function App() {
//   return (
//     <> 
//     <h1> Putting it Together Template</h1>
//     <br></br>
//     <Puttingittogether firstName= {'Ben'} lastName= {'Oyewo'} age= {'29'} haircolor= {'Brown'}/>
//     <Puttingittogether firstName= {'Naa'} lastName= {'Mcgruder'} age= {'26'} haircolor= {'Black'}/>
//     <Puttingittogether firstName= {'Ava'} lastName= {'Tobi'} age= {'5'} haircolor= {'Brown'}/>
//     <Puttingittogether firstName= {'Toyin'} lastName= {'Amu'} age= {'50'} haircolor= {'Brown'}/>
//     </>
//   );
// }
// export default App;



// FUNCTION BELOW FOR "BigInversion.js"

// function App() {
//   return (
//     <> 
//     <h1> Big Inversion Template</h1>
//     <br></br>
//     <Personcard firstName= {'Ben'} lastName= {'Oyewo'} age= {'29'} haircolor= {'Brown'}/>
//     <Personcard firstName= {'Naa'} lastName= {'Mcgruder'} age= {'26'} haircolor= {'Black'}/>
//     <Personcard firstName= {'Ava'} lastName= {'Tobi'} age= {'5'} haircolor= {'Brown'}/>
//     <Personcard firstName= {'Toyin'} lastName= {'Amu'} age= {'50'} haircolor= {'Brown'}/>
//     </>
//   );
// }
// export default App;


// FUNCTION BELOW FOR "form.js"

// function App() {
//   return (
//     <> 

//     <h1> Form Template</h1>
//     <br></br>
//     {/* this below ensures that this "function App" above for the file "form_message.js has all the components created in the "const RegisterForm" to dispaly here, including the form in form_message.js  */}
//     <RegisterForm/>

//     </>
//   );
// }
// export default App;


// FUNCTION BELOW FOR "form_message.js"

// function App() {
//   return (
//     <> 
//     <h1> Form Template</h1>
//     <br></br>
//     <RegisterForm/>
//     </>
//   );
// }
// export default App;



// FUNCTION BELOW FOR "form_validation.js"

function App() {
  return (
    <> 
    <h1> Form Template</h1>
    <br></br>
    <RegisterForm/>
    </>
  );
}
export default App;

