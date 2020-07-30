//variaveis

var tela = 1;
var largura  = 150;
var altura = 35;
var xMenu = 111;
var yMenu1 = 100;
var yMenu2 = 145;
var zMenu3 = 185;
var img;
var img2;
var img3;
var img4;
var imgfinalganhador;
var altx = 160;
var alty = 85;
var alty2 = 120;
var altz = 160;
var fasex = 20
var fasey = 30
var fasey2 = 40
var fasez = 50
var voltx = 20;
var volty = 85;
var volty2 =120;
var voltz  = 30;
var imgfase1;
var imgfase2;
var imgfase3;
var imgfase4;
var imgfase5;
var imggameover;

var entrada1;
var questao1 = true;

//imagens

function preload() {
  img  = loadImage('images.jpg');
  img2 = loadImage('images 4.jpg');
  img3 = loadImage('48.png');
  img4 = loadImage('download final.jpg');
 imgfase1 = loadImage('img alt.jpg');
 imgfase2 = loadImage('img alt.jpg');
 imgfase3 = loadImage('img alt.jpg');
 imgfase4 = loadImage('img alt.jpg');
 imgfase5 = loadImage('img alt.jpg');
 imggameover = loadImage('gameover3.png');
 imgfinalganhador = loadImage(' ganhador.jpg');
}

function setup() {
  createCanvas(665,480);
  
}
 
function draw() {
 textStyle(BOLD);
  
  
  //tela de menu
 
  if(tela == 1){
    background(70,20,80,80);
    image(img,6,5)
    
    textAlign(CENTER);
    textSize(22);
    
    text('+ HORA DE CONTAR -',140,70);
    
    //instruçoes
    
    textSize(23);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 +altura){
    
    stroke(20)
    fill(255,0,0);
    rect(xMenu,yMenu1,largura, altura,15)
      if(mouseIsPressed){
        tela = 2
      }
    }
    fill(20,0,0)
    noStroke();
    text('Instruções',185,125);
    
    //playgame
    
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 +altura){
   
    stroke(20)
    fill(255,0,0);
    rect(xMenu,yMenu2,largura,altura,15);
      if(mouseIsPressed){
        tela = 3
      }
    }
    fill(20,0,0);
    noStroke();
    text('Play Game',184,169);
    
    //créditos
    
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > zMenu3 && mouseY < zMenu3 +altura){
   
    stroke(20)
    fill(255,0,0);
    rect(xMenu,zMenu3,largura,altura,15);
      if(mouseIsPressed){
        tela = 4
              }
    }
    fill(20,0,0);
    noStroke();
    text('Créditos',184,210);
  }
  
  //fases do game
  
 if(tela == 3){
   background(70,20,80,80);
    image(imgfase1,0,0);
  
  //pergunta
   
    textAlign(CENTER);
    textSize(22);
   
    fill(20);
    noStroke();
    text('1ª FASE ADIÇÃO',340,30);
    
    textAlign(CENTER);
    textSize(30);
   
    fill(0,350,330);
    noStroke();
    text('5 + 3 = ?',350,80);
   
   //PRIMEIRA opção de resposta.
  
    textSize(23);
    if(mouseX > altx && mouseX < altx + largura && mouseY > alty && mouseY < alty +altura){
    
    stroke(20)
    fill(255,0,0);
    rect(altx,alty,largura, altura,15)
      if(mouseIsPressed){
        tela = 10
      }
    }
    fill(20,0,0)
    noStroke();
    text('10',235,110);
   
    
   //SEGUNDA opção de resposta.
   
    if(mouseX > altx && mouseX < altx + largura && mouseY > alty2 && mouseY < alty2 + altura){
   
    stroke(20)
    fill(255,0,0);
    rect(altx,alty2,largura,altura,15);
      if(mouseIsPressed){
        tela = 5
      }
    }
    fill(20,0,0);
    noStroke();
    text('8',232,145);
   
   //TERCEIRA opção de resposta.
    
    if(mouseX > altx && mouseX < altx + largura && mouseY > altz && mouseY < altz +altura){
   
    stroke(20)
    fill(255,0,0);
    rect(altx,altz,largura,altura,15);
      if(mouseIsPressed){
        tela = 10
              }
    }
    fill(20,0,0);
    noStroke();
    text('6',232,189);
  
  
  
  
  
  
  function validar1() {
  if(this.value()=="") {
  alert("Acertou!! VAMOS LÁ HORA DE CONTAR");
 
  }
  }
}
  else if(tela ==2){ 
     background(70,20,80,80);
     image(img2,90,90);
    fill(240);
    textSize(14);
    noStroke();
    textAlign(RIGHT);
    text("O jogo HORA DE CONTAR, foi criado para auxiliar as escolas nas aulas de matematica, dos alunos do 1º ano fundamental. Uma forma divertida e descontraida de aprender.    Na primeira fase o jogador  precisa demonstrar que conhece os números para poder avançar de fase. Fase 2,selecione os numeros que estaram disponiveis na tela, arrastando para suas respectivas posições, os dois numeros selecionados quando subtraidos ou somados, tera que ter o resultado compativel com o valor ja impresso na tela, localizado após o sinal de igualdade, Fase , repete o mesmo fomato da fase 2 porem com uma dificuldade maior.",370,50,260,350);
    
    
    
       if(mouseX > voltx && mouseX < voltx + largura && mouseY > voltz && mouseY < voltz +altura){
   
    stroke(20)
    fill(255,0,0);
    rect(voltx,voltz,largura,altura,15);
      if(mouseIsPressed){
        tela = 1
              }
    }
    fill(200,200,200);
    noStroke();
    text('voltar',105,55);
}
 else if(tela == 4){ 
     background(70,20,80,80);
    image(img3,5,6);
    fill(240);
    textSize(14);
    noStroke();
    textAlign(RIGHT);
    text("O game HORA DE CONTAR foi inspirado nas aulas online que acompanho  do meu filho BERNARDO (criador do nome do jogo)  e  percebi as dificuldades dele e dos colegas,nas aulas de matemática.  Com isso imaginei uma forma mais dinamica e divertida para eles treinarem e aprender o conteúdo.Quero agradecer a pedagoga DILENE REISAN, que me auxiliou, tirando duvidas como por exemplo, as habilidades pertinente para a faixa etaria das crianças. E também agradecer a minha mãe IRANETE, por acreditar nos meus projetos me dando todo o suporte nescessario.",370,70,260,350 )

    if(mouseX > voltx && mouseX < voltx + largura && mouseY > voltz && mouseY < voltz +altura){
   
    stroke(20)
    fill(255,0,0);
    rect(voltx,voltz,largura,altura,15);
      if(mouseIsPressed){
        tela = 1
              }
    }
    fill(200,200,200);
    noStroke();
    text('voltar',95,55);
 
 //tela do gameover
  }
   else if(tela == 10){ 
     background(70,20,80);
     image(imggameover,40,0);
    fill(240);
     

    if(mouseX > voltx && mouseX < voltx + largura && mouseY > voltz && mouseY < voltz +altura){
   
    stroke(20)
    fill(255,0,0);
    rect(voltx,voltz,largura,altura,15);
      if(mouseIsPressed){
        tela = 1
              }
    }
    fill(200,200,200);
    noStroke();
    text('voltar',95,55);
  

}
  //tela 5  fase2
  
  else if(tela === 5){ 
     background(70,20,80,80);
     image(imgfase2,0,0);
     fill(240);
     
    //pergunta2
   
    textAlign(CENTER);
    textSize(22);
   
    fill(20);
    noStroke();
    text('2ª FASE subtração',340,30);
    
    textAlign(CENTER);
    textSize(30);
   
    fill(0,350,330);
    noStroke();
    text('6 - 4 = ?',350,80);
    
    //PRIMEIRA opção de resposta fase2.
    
    textSize(23);
    if(mouseX > altx && mouseX < altx + largura && mouseY > alty && mouseY < alty +altura){
    
    stroke(20)
    fill(255,0,0);
    rect(altx,alty,largura, altura,15)
      if(mouseIsPressed){
        tela = 6;
      }
    }
    fill(20,0,0)
    noStroke();
    text('2',235,110);
    
     //SEGUNDA opção de resposta fase2.
   
    textSize(23);
    if(mouseX > altx && mouseX < altx + largura && mouseY > alty2 && mouseY < alty2 +altura){
     
      stroke(20)
    fill(255,0,0);
    rect(altx,alty2,largura, altura,15)
      if(mouseIsPressed){
        
      }
    }
    fill(20,0,0)
    noStroke();
    text('1',235,145);
    
    //TERCEIRA opção de resposta fase2.
    
      if(mouseX > altx && mouseX < altx + largura && mouseY > altz && mouseY < altz +altura){
     
    stroke(20)
    fill(255,0,0);
    rect(altx,altz,largura, altura,15)
      if(mouseIsPressed){
        
      }
    }
    fill(20,0,0)
    noStroke();
    text('3',235,185);
}
  
  //tela 6 fase3
  
  else if(tela === 6){ 
     background(70,20,80,80);
     image(imgfase3,0,0);
     fill(240);
  
  //pergunta3
    
    textAlign(CENTER);
    textSize(22);
   
    fill(20);
    noStroke();
    text('3ª FASE adição',340,30);
    
    textAlign(CENTER);
    textSize(30);
   
    fill(0,350,330);
    noStroke();
    text('4 + 9 = ?',350,80);
    
    textSize(23);
    if(mouseX > altx && mouseX < altx + largura && mouseY > alty && mouseY < alty +altura){
    
    stroke(20)
    fill(255,0,0);
    rect(altx,alty,largura, altura,15)
      if(mouseIsPressed){
       
      }
    }
    fill(20,0,0)
    noStroke();
    text('11',235,110);
    
     //SEGUNDA opção de resposta fase2.
   
    textSize(23);
    if(mouseX > altx && mouseX < altx + largura && mouseY > alty2 && mouseY < alty2 +altura){
     
      stroke(20)
    fill(255,0,0);
    rect(altx,alty2,largura, altura,15)
      if(mouseIsPressed){
        
      }
    }
    fill(20,0,0)
    noStroke();
    text('16',235,145);
    
    //TERCEIRA opção de resposta fase2.
    
      if(mouseX > altx && mouseX < altx + largura && mouseY > altz && mouseY < altz +altura){
     
    stroke(20)
    fill(255,0,0);
    rect(altx,altz,largura, altura,15)
      if(mouseIsPressed){
        tela = 7
      }
    }
    fill(20,0,0)
    noStroke();
    text('13',235,185);
  
  
 }  
  //tela7
  
  else if(tela === 7){ 
     background(70,20,80,80);
     image(imgfase4,0,0);
     fill(240);
  
  //pergunta3
    
    textAlign(CENTER);
    textSize(22);
   
    fill(20);
    noStroke();
    text('4ª FASE subtração',340,30);
    
    textAlign(CENTER);
    textSize(30);
   
    fill(0,350,330);
    noStroke();
    text('20 - 10 = ?',350,80);
    
    //primeira opção de resposta fase4
    
    textSize(23);
    if(mouseX > altx && mouseX < altx + largura && mouseY > alty && mouseY < alty +altura){
    
    stroke(20)
    fill(255,0,0);
    rect(altx,alty,largura, altura,15)
      if(mouseIsPressed){
        
      }
    }
    fill(20,0,0)
    noStroke();
    text('12',235,110);
    
     //SEGUNDA opção de resposta fase4.
   
    textSize(23);
    if(mouseX > altx && mouseX < altx + largura && mouseY > alty2 && mouseY < alty2 +altura){
     
      stroke(20)
    fill(255,0,0);
    rect(altx,alty2,largura, altura,15)
      if(mouseIsPressed){
        tela = 8
      }
    }
    fill(20,0,0)
    noStroke();
    text('10',235,145);
    
    //TERCEIRA opção de resposta fase2.
    
      if(mouseX > altx && mouseX < altx + largura && mouseY > altz && mouseY < altz +altura){
     
    stroke(20)
    fill(255,0,0);
    rect(altx,altz,largura, altura,15)
      if(mouseIsPressed){
        
      }
    }
    fill(20,0,0)
    noStroke();
    text('17',235,185);

}
  // tela 8 fase5
   else if(tela === 8){ 
     background(70,20,80,80);
     image(imgfase5,0,0);
     fill(240);
    
    textAlign(CENTER);
    textSize(22);
   
    fill(20);
    noStroke();
    text('5ª FASE adição e subtração',340,30);
    
    textAlign(CENTER);
    textSize(30);
   
    fill(0,350,330);
    noStroke();
    text('5 + 6 = ( ? ) - 7 = ?',350,80);
    
    //primeira opção de resposta fase4
    
    textSize(23);
    if(mouseX > altx && mouseX < altx + largura && mouseY > alty && mouseY < alty +altura){
    
    stroke(20)
    fill(255,0,0);
    rect(altx,alty,largura, altura,15)
      if(mouseIsPressed){
        
      }
    }
    fill(20,0,0)
    noStroke();
    text('11',235,110);
    
     //SEGUNDA opção de resposta fase4.
   
    textSize(23);
    if(mouseX > altx && mouseX < altx + largura && mouseY > alty2 && mouseY < alty2 +altura){
     
      stroke(20)
    fill(255,0,0);
    rect(altx,alty2,largura, altura,15)
      if(mouseIsPressed){
        
      }
    }
    fill(20,0,0)
    noStroke();
    text('7',235,145);
    
    //TERCEIRA opção de resposta fase2.
    
      if(mouseX > altx && mouseX < altx + largura && mouseY > altz && mouseY < altz +altura){
     
    stroke(20)
    fill(255,0,0);
    rect(altx,altz,largura, altura,15)
      if(mouseIsPressed){
        tela = 9;
      }
    }
    fill(20,0,0)
    noStroke();
    text('4',235,185);

   }
 
  //tela final ganhador 
 
  else if(tela == 9){ 
     background(70,20,80,80);
     image(imgfinalganhador,200,200);
     fill(240);
  
    textAlign(CENTER);
    textSize(40);
   
    fill(0,350,330);
    noStroke();
    text('PARABÉNS VOCÊ GANHOU',350,180);
  
  
   if(mouseX > voltx && mouseX < voltx + largura && mouseY > voltz && mouseY < voltz +altura){
   
    stroke(20)
    fill(255,0,0);
    rect(voltx,voltz,largura,altura,15);
      if(mouseIsPressed){
        tela = 1
              }
    }
    
    textSize(30)
    fill(200,200,200);
    noStroke();
    text('MENU',95,57);
  }
}
//link do video https://youtu.be/s09-DSbD9-s