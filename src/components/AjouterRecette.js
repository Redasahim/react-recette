import React, { Component } from 'react';

class AjouterRecette extends Component {
    state={
        nom:'',
        image:'',
        ingredients:'',
        instructions:''

    }

    handleChange= event =>{
        const {name,value} = event.target
        this.setState({[name]:value})
    }

    handleSubmit = event =>{
        event.preventDefault()
        const recette = { ...this.state }
        this.props.ajouterRecette(recette)
        //reset (le map est sencé retourné quelque chose )
        Object.keys(recette).forEach(item => {
            recette[item]=''
        })
        this.setState({...recette})
    }
    render() {
     
        return (
            <div className="card">
                <form className="admin-form ajouter-recette" onSubmit={this.handleSubmit}>
                    <input name="nom" type="text" placeholder="Nom de la recette" value={this.state.nom} onChange={this.handleChange}/>
                    <input name="image" type="text" placeholder="Nom de l'image" value={this.state.image} onChange={this.handleChange}/>
                    <textarea name="ingredients"   rows="4" placeholder="liste des ingrédients" value={this.state.ingredients} onChange={this.handleChange}>

                    </textarea>
                    <textarea name="instructions"   rows="15" placeholder="liste des insctructions" value={this.state.instructions} onChange={this.handleChange}>

                    </textarea>
                    <button type="submit">+ Ajouter une recette</button>
                </form>
            </div>
        );
    }
}

export default AjouterRecette;