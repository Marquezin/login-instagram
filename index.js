const puppeteer = require('puppeteer'), delay = require('./utils/delay'), config = require('./config/user.json') // importando recursos

async function start(){
    try{
    const browser = await puppeteer.launch({headless: false}) // Criando um novo Browser
    const page = await browser.newPage() // Criando uma nova pagina
    await page.goto("https://www.instagram.com/accounts/login/") //Abrindo o Instagram
    console.log("Abrindo o Instagram...")
    await delay.delay(5000) // Intervalo para esperar o fim do carregamento da pagina
    console.log("Preenchendo dados...")
    await page.type("#loginForm > div > div:nth-child(1) > div > label > input", config.username); // Escrevendo o usuario / Utilizando o selector do input
    await page.type("#loginForm > div > div:nth-child(2) > div > label > input", config.password) // Escrevendo a senha / Utilizando o selector do input
    await page.click("#loginForm > div > div:nth-child(3) > button"); // Clicando no botão de login / Utilizando o Selector do botão
    console.log("Fazendo Login na sua conta!")
    await delay.delay(15000) // Intervalo para esperar o login ser feito
    console.log("Login feito com sucesso!");
    // Continuar seu codigo aqui //


    }catch(err) {return console.log("Ocorreu um Erro: "+err);}
}
start() // Dando inicio a função!