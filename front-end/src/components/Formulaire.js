import React from "react"
class Formulaire extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      this.handlemdp();
      alert('Les informations ont été soumises  ');
      event.preventDefault();
    }
  handlemdp = () => {
    // eslint-disable-next-line
    {document.getElementById('mdp').value === document.getElementById('confmdp').value ? alert("bon") : alert("mauvais")}
  }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h2 className="inscription">Nouveau membre ? Inscris-toi.</h2> <br></br>
          <div className="formulaire">
          <label for="nom">Nom :</label>
          <input type="text" id="nom" placeholder="Nom" onChange={this.handleChange} required />
          <br></br>
          <label for="prenom">Prenom :</label>
          <input type="text" id ="prenom" placeholder="Prénom" onChange={this.handleChange} required></input>
          <br></br>
          <label for="age">Age :</label>
            <input id="age" type="number" step="1" min="1" placeholder="0" required />
          <br></br>
          <label for="adresseMail">Adresse mail :</label>
          <input type="text" id="adresseMail" placeholder="Adresse mail" onChange={this.handleChange} required></input>
          <br></br>
          <label for="mdp">Mot de passe :</label>
          <input type="password" id="mdp" placeholder="Mot de passe" onChange={this.handleChange} required></input>
          <br></br>
          <label for="confmdp">Confirmer mot de passe :</label>
          <input type="password" id="confmdp" placeholder="Confirmer mot de passe" onChange={this.handleChange} required></input>
          <br></br>
          <label for="pays">Pays :</label>
          <select id="pays">
            <option>Belgique</option>
            <option>France</option>
            <option>Suisse</option>
          </select><br></br>
          <label for="role">Rôle :</label>
          <select id="role">
            <option>Beatmaker</option>
            <option>Rappeur</option>
            <option>Chanteur</option>
            <option>Guitariste</option>
            <option>Batteur</option>
          </select>
          <br></br><br></br>
          
          <input type="submit" value="Envoyer" /><br></br>
          </div>
        </form>
      );
    }
  }

  export default Formulaire;