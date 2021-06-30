/* eslint-disable import/no-anonymous-default-export */
// import React, { useState } from "react";

// import axios from "axios";

// export default ({ user, setUser }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios
//       .post("/api/users/login", { email: email, password: password })
//       .then((response) => setUser(response.data))
//       .catch((error) => console.log(error));
//   };
//   return (
//     <div>
//       <div>
//         <h2>Sign in to your account</h2>
//       </div>
//       <form onSubmit={handleSubmit}>
//         Email:{" "}
//         <input
//           type="email"
//           required
//           placeholder="email"
//           onChange={(event) => setEmail(event.target.value)}
//         />
//         {" "}Password:{" "}
//         <input
//           type="password"
//           required
//           placeholder="contraseña"
//           onChange={(event) => setPassword(event.target.value)}
//         />
//         <br />
//         <br />
//         <button type="submit" onSubmit={handleSubmit}>
//           Log in
//         </button>
//       </form>
//     </div>
//   );
// };
