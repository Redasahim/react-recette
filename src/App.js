import React, { Component } from 'react'
import Header from './components/header'
// CSS
import './App.css'
import recettes from './recettes'
import Admin from './components/Admin'
import Card from './components/Card'
import base from './base'
//import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  state = {
    recettes:{},
    pseudo: this.props.match.params.pseudo
  }

  componentDidMount(){
   this.ref =  base.syncState(`/${this.state.pseudo}/recettes`,{
      context:this,
      state:'recettes'
    })
  }

  componentWillUnmount(){
    base.removeBinding(this.ref)//quand on change de personne on est sur que la sync est terminé entre firebase et notre state
  }


  ajouterRecette = recette =>{
    const recettes = {...this.state.recettes}
    recettes[`recette-${Date.now()}`] = recette
    this.setState({recettes})
  }

  majRecette = (key,newrecette) =>{
    const recettes = {...this.state.recettes}
    recettes[key] = newrecette
    this.setState({recettes})
  }

  supprimerRecette = key =>{
    const recettes = {...this.state.recettes}
    recettes[key] = null
    this.setState({recettes})
  }

  chargerExemple = () =>this.setState({recettes})

  render () {
    const cards = Object.keys(this.state.recettes)
     .map(key=><Card key={key} details={this.state.recettes[key]}></Card>)
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}/>
        
        <div className='cards'>
         {cards}
        </div>
        <Admin
        pseudo={this.state.pseudo}
        recettes = {this.state.recettes}
        chargerExemple={this.chargerExemple}
        ajouterRecette={this.ajouterRecette}
        majRecette={this.majRecette}
        supprimerRecette={this.supprimerRecette}
        >
          
        </Admin>
      </div>
    )
  }
}

export default App
