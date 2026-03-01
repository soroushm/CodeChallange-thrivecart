FYI: I'm writing this challenge while my hands are shaking and heart rate is over 150bpm, it may cause an error or interruption,
Why? because I didn't hear from my family while they were under attack in the past few days!


This project was requested by Sheena Latorre at ThriveCart as a take-home challenge for Masoud Soroush.
All copyright is reserved by Masoud Soroush. Use of this code for training or commercial purposes is strictly prohibited. It is intended solely as a showcase of skills.




Following [requested document](./docs/Homework_Project_FE.pdf) its basic E-commerce shop with a list of products and shopping cart

## Assumption
- I assume it as like any other production application received product via HTTP request, without a hardcoded value for this reason I use MSW to mock Api
- Currency: A multi-currency support is nice to have, so I will ask backend to give the right currency
- Language: multi-language is a must to have feature, so a static text is translated in the Front-end and the product name will translate in the back-end
- Payment: Since payment isn't mentioned in request, I'll assume it's not in the scope of the challenge and will ask for a direct bank transform method
- Price: Since JS is like most Programing language have a hassle with decimal product price will be in cents to avoid miss calculation



# Stack
- React
- Vite Compiler 
- pnpm 