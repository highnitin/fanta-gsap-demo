/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-pink': 'linear-gradient(to right bottom, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))',
      },
      width:{
        "w10":"10%",
        "w1vw":"1.5vw",
        "w2vw":"4vw",
        "w15":"15%",
        "w20":"20%",
        "w25":"25%",
        "w30":"30%",
        "w35":"35%",
        "w40":"40%",
        "w45":"45%",
        "w50":"50%",
        "w55":"55%",
        "w60":"60%",
        "w65":"65%",
        "w70":"70%",
        "w75":"75%",
        "w76":"76%",
        "w78":"78%",
        "w80":"80%",
        "w85":"85%",
        "w90":"90%",
        "w95":"95%",
        "w125":"237%",
        "w150":"20vw",
      },
      height:{
        'h70':'70vh'
      },
      fontFamily: {
        'product-sans': ['Product Sans'],
        'roboto': ['Roboto', 'sans-serif']
      },
      fontSize: {
        "f0.5vw":"1.3vw",
        "f1vw":"1.5vw",
        "f3vw":"3vw",
        "f5vw":"5vw",
        "f25vw":"25vw",
        "f10":"1.3vw",
        "f15":"15%",
        "f20":"20%",
        "f25":"25%",
        "f30":"30%",
        "f35":"35%",
        "f40":"40%",
        "f45":"45%",
        "f50":"50%",
        "f55":"55%",
        "f60":"60%",
        "f65":"65%",
        "f70":"70%",
        "f75":"75%",
        "f80":"80%",
        "f85":"85%",
        "f90":"90%",
        "f95":"95%",
        "f20rem":"20rem"
      },
      flexGap:{
        "g-10vw":"10vw",
      },
      padding:{
        "1.5vw":"1.5vw",
        "5vw":"3%",
        "10vw":"10%",
      },
      borderRadius:{
        "1.5vw":"5%",
        "10vw":"10%",
        "15vw":"15%",
      },
      colors:{
        'yellow-custom':'#ffff00',
        'black-custom':'#1d1d1d',
      }
    },
  },
  plugins: [],
}
