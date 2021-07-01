import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import './App.css'

firebase.initializeApp({
  apiKey: "AIzaSyBcoH-R6QQ-ViB7doWG91pTp9Kpcv1tZT8",
    authDomain: "quizzzzzz-6cdbe.firebaseapp.com"
})

class Cabinet extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
       firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
     
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="cabinet">
        
        {this.state.isSignedIn ? (
          <div className="cabinet_items">
            <img className="cabinet_image"
              src={firebase.auth().currentUser.photoURL}
            />
            <p>ДОБРО ПОЖАЛОВАТЬ В ЛИЧНЫЙ КАБИНЕТ,<span className="cabinet_span">{firebase.auth().currentUser.displayName}</span>!  В СКОРОМ ВРЕМЕНИ ЗДЕСЬ ПОЯВИТСЯ СТАТИСТИКА ПРОЙДЕННЫХ ВАМИ ТЕСТОВ</p>
            <button className="signout_btn" onClick={() => firebase.auth().signOut()}>ВЫЙТИ!</button>
          </div>
        ) : (<div>
          <div className="cabinet_text">Войдите в систему чтобы иметь доступ к статистике</div>
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          /></div>
        )}
      </div>
    )
  }
}

export default Cabinet

