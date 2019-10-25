import React from 'react';
import logo from './logo.svg';
import './tic.css';
import './tic_android.css'
var i=0,f=1;
class Tictactoe extends React.Component
{
  state={
    block1:{
      first:''
    },
    block2:{
      second:''
    },
    block3:{
      third:''
    },
    block4:{
      fourth:''
    },
    block5:{
      fifth:''
    },
    block6:{
      sixth:''
    },
    block7:{
      seventh:''
    },
    block8:{
      eigth:''
    },
    block9:{
      ninth:''
    },

    displayresult:{
      line1:"",
      line2:""
    },

    color1:"",
    color2:"",
    color3:"",
    color4:"",
    color5:"",
    color6:"",
    color7:"",
    color8:"",
    color9:""

  }


  reset=()=>
  {
    this.setState({block1:{first:''},block2:{second:''},block3:{third:''},block4:{fourth:''},block5:{fifth:''},block6:{sixth:''},block7:{seventh:''},block8:{eigth:''},block9:{ninth:''}});
    this.setState({displayresult:{line1:'',line2:''}});
    this.setState({color1:'',color2:'',color3:'',color4:'',color5:'',color6:'',color7:'',color8:'',color9:''});
    f=1;
  }

  
  
  func1=()=>
  {
    if(this.state.block1.first=="")
    {
      i++;
      if(i%2==0)
        this.setState({block1:{first:'X'}},()=>{this.victory();})
      else
        this.setState({block1:{first:'O'}},()=>{this.victory();})  
    }
  }

  func2=()=>
  {
    //alert(this.state.block.second);
    if(this.state.block2.second=="")
    {
      i++;
      if(i%2==0)
        this.setState({block2:{second:'X'}},()=>{this.victory();})
      else
        this.setState({block2:{second:'O'}},()=>{this.victory();})  
        
      }

  }

  func3=()=>
  {
    if(this.state.block3.third=="")
    {
      i++;
      if(i%2==0)
        this.setState({block3:{third:'X'}},()=>{this.victory();})
      else
        this.setState({block3:{third:'O'}},()=>{this.victory();})  
        
    }
    
    
  }

  func4=()=>
  {
    if(this.state.block4.fourth=="")
    {
      i++;
      if(i%2==0)
        this.setState({block4:{fourth:'X'}},()=>{this.victory();})
      else
        this.setState({block4:{fourth:'O'}},()=>{this.victory();})  
    }
  }

  func5=()=>
  {
    if(this.state.block5.fifth=="")
    {
      i++;
      if(i%2==0)
        this.setState({block5:{fifth:'X'}},()=>{this.victory();})
      else
        this.setState({block5:{fifth:'O'}},()=>{this.victory();})  
    }
  }

  func6=()=>
  {
    if(this.state.block6.sixth=="")
    {
      i++;
      if(i%2==0)
        this.setState({block6:{sixth:'X'}},()=>{this.victory();})
      else
        this.setState({block6:{sixth:'O'}},()=>{this.victory();})  
    }
  }

  func7=()=>
  {
    if(this.state.block7.seventh=="")
    {
      i++;
      if(i%2==0)
        this.setState({block7:{seventh:'X'}},()=>{this.victory();})
      else
        this.setState({block7:{seventh:'O'}},()=>{this.victory();})  
    }
  }

  func8=()=>
  {
    if(this.state.block8.eigth=="")
    {
      i++;
      if(i%2==0)
        this.setState({block8:{eigth:'X'}},()=>{this.victory();})
      else
        this.setState({block8:{eigth:'O'}},()=>{this.victory();})  
    }
  }

  func9=()=>
  {
    if(this.state.block9.ninth=="")
    {
      i++;
      if(i%2==0)
        this.setState({block9:{ninth:'X'}},()=>{this.victory();})
      else
        this.setState({block9:{ninth:'O'}},()=>{this.victory();})  
    }
  }

 victory=()=>
  {
    
    var ele=this.state;
    
    if(ele.block1.first==ele.block2.second&&ele.block2.second==ele.block3.third&&f)
    {
           
      if(ele.block1.first!='')
       {
         f=0;       
         this.setState({displayresult:{line1:"Game Over",line2:"Player '"+ele.block1.first+"' wins"}});
         this.setState({color1:'green',color2:'green',color3:'green'});
       } 
    }
   
    if(ele.block4.fourth==ele.block5.fifth&&ele.block5.fifth==ele.block6.sixth&&f)
    {      
      if(ele.block4.fourth!='')
       {     
         f=0;  
         this.setState({displayresult:{line1:"Game Over",line2:"Player '"+ele.block4.fourth+"' wins"}});
         this.setState({color4:'green',color5:'green',color6:'green'});
       } 
    }
    
    if(ele.block7.seventh==ele.block8.eigth&&ele.block8.eigth==ele.block9.ninth&&f)
    {      
      if(ele.block7.seventh!='')
       {       
         f=0;
         this.setState({displayresult:{line1:"Game Over",line2:"Player '"+ele.block7.seventh+"' wins"}});
         this.setState({color7:'green',color8:'green',color9:'green'});
       } 
    }
    
    if(ele.block1.first==ele.block4.fourth&&ele.block4.fourth==ele.block7.seventh&&f)
    {      
      if(ele.block1.first!='')
       {    
         f=0;   
         this.setState({displayresult:{line1:"Game Over",line2:"Player '"+ele.block1.first+"' wins"}});
         this.setState({color1:'green',color4:'green',color7:'green'});
       } 
    }
    
    if(ele.block2.second==ele.block5.fifth&&ele.block5.fifth==ele.block8.eigth&&f)
    {      
      if(ele.block2.second!='')
       {      
         f=0; 
         this.setState({displayresult:{line1:"Game Over",line2:"Player '"+ele.block2.second+"' wins"}});
         this.setState({color2:'green',color5:'green',color8:'green'});
       } 
    }
    
    if(ele.block3.third==ele.block6.sixth&&ele.block6.sixth==ele.block9.ninth&&f)
    {      
      if(ele.block3.third!='')
       {     
         f=0;  
         this.setState({displayresult:{line1:"Game Over",line2:"Player '"+ele.block3.third+"' wins"}});
         this.setState({color3:'green',color6:'green',color9:'green'});
       } 
    }
    
    if(ele.block1.first==ele.block5.fifth&&ele.block5.fifth==ele.block9.ninth&&f)
    {      
      if(ele.block1.first!='')
       {
         f=0;       
         this.setState({displayresult:{line1:"Game Over",line2:"Player '"+ele.block1.first+"' wins"}});
         this.setState({color1:'green',color5:'green',color9:'green'});
       } 
    }
    
    if(ele.block3.third==ele.block5.fifth&&ele.block5.fifth==ele.block7.seventh&&f)
    {      
      if(ele.block3.third!='')
       {
         f=0;       
         this.setState({displayresult:{line1:"Game Over",line2:"Player '"+ele.block3.third+"' wins"}});
         this.setState({color3:'green',color5:'green',color7:'green'});
       } 
    }

    
    if(f&&ele.block1.first!=""&&ele.block2.second!=""&&ele.block3.third!=""&&ele.block4.fourth!=""&&ele.block5.fifth!=""&&ele.block6.sixth!=""&&ele.block7.seventh!=""&&ele.block8.eigth!=""&&ele.block9.ninth!="")
    {
      this.setState({displayresult:{line1:"Game Over",line2:"Match Draw"}});
    }
    
  }
  
  render(){
    return(<div id="complete"><h3>Player 1 is 'O' & Player 2 is 'X'</h3><br></br><br></br> 
      <div id='tab'>  
        <table >
          <tr >
            <td onClick={()=>this.func1()} style={{backgroundColor:this.state.color1}}>{this.state.block1.first}</td>
            <td onClick={()=>this.func2()} style={{backgroundColor:this.state.color2}}>{this.state.block2.second}</td>
            <td onClick={()=>this.func3()} style={{backgroundColor:this.state.color3}}>{this.state.block3.third}</td>
          </tr>
          <tr>
            <td onClick={()=>this.func4()} style={{backgroundColor:this.state.color4}}>{this.state.block4.fourth}</td>
            <td onClick={()=>this.func5()} style={{backgroundColor:this.state.color5}}>{this.state.block5.fifth}</td>
            <td onClick={()=>this.func6()} style={{backgroundColor:this.state.color6}}>{this.state.block6.sixth}</td>
          </tr>
          <tr>
            <td onClick={()=>this.func7()} style={{backgroundColor:this.state.color7}}>{this.state.block7.seventh}</td>
            <td onClick={()=>this.func8()} style={{backgroundColor:this.state.color8}}>{this.state.block8.eigth}</td>
            <td onClick={()=>this.func9()} style={{backgroundColor:this.state.color9}}>{this.state.block9.ninth}</td>
          </tr>
        </table><br></br>
        
      </div><br></br>  
      <button id='but' onClick={()=>this.reset()}>reset</button> 
        <h3>{this.state.displayresult.line1}</h3><h3>{this.state.displayresult.line2}</h3>
        </div>);
        }
  
}


export default Tictactoe;