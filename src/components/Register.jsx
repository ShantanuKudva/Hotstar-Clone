// // Register.jsx
// import React from "react";
// import styled from "styled-components";
// import { auth, provider } from "../firebase";

// const Container = styled.section`
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   height: 100vh;
//   /* Add your existing styles here */
// `;

// const Content = styled.div`
//   margin-bottom: 10vw;
//   /* Add your existing styles here */
// `;

// const BgImg = styled.div`
//   /* Add your existing styles here */
// `;

// const CTA = styled.div`
//   /* Add your existing styles here */
// `;

// const CTALogoOne = styled.img`
//   /* Add your existing styles here */
// `;

// const SignUp = styled.a`
//   font-weight: bold;
//   color: #f9f9f9;
//   background-color: #0063e5;
//   margin-bottom: 12px;
//   width: 100%;
//   letter-spacing: 1.5px;
//   font-size: 18px;
//   padding: 16.5px 0;
//   border: 1px solid transparent;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0483ee;
//   }
// `;

// const Description = styled.p`
//   color: hsla(0, 0%, 95.3%, 1);
//   font-size: 11px;
//   margin: 5px 0 24px;
//   line-height: 1.5px;
//   letter-spacing: 1.5px;
//   /* Add your existing styles here */
// `;

// function Register() {
//   const handleRegister = () => {
//     // Use Firebase authentication methods for registration
//     // For example, you can use auth.createUserWithEmailAndPassword for email/password registration
//     // or auth.signInWithPopup(provider) for Google authentication
//   };

//   return (
//     <Container>
//       <Content>
//         <CTA>
//           <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
//           <SignUp onClick={handleRegister}>REGISTER</SignUp>
//           <Description>
//             Get Premium Access to exclusive content with a new account.
//           </Description>
//         </CTA>
//         <BgImg />
//       </Content>
//     </Container>
//   );
// }

// export default Register;
