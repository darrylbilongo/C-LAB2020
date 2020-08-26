/*import React from "react";
import { shallow } from "enzyme";*/
//import {verifierDonnees} from "../components/verifierDonnees";

function verifierDonnees(userEmail, userPassword) {
    if(userEmail === "" && userPassword === ""){
      return false;
    }
    else if((userEmail === "" || userEmail.indexOf('@') === -1)){
      return false;
    }
    else if(userEmail !== "" && userPassword === ""){
      return false;
    }
    return true;
}

describe('Test la validité des données entrées par l\'utilisateur', () => {
    const initialData = {
        email: 'darrylbilongo@gmail.com',
        password: 'sauce500'
    };

    test('Email et mot de passe manquants', () => {
        expect(verifierDonnees('', '')).toBeFalsy();
    });

    test('Email introduit mais mot de passe manquant', () => {
        expect(verifierDonnees(initialData.email, '')).toBeFalsy();
    });

    test('Email manquant et mot de passe introduit', () => {
        expect(verifierDonnees('', initialData.password)).toBeFalsy();
    });

    test('Email et mot de passe introduits correctement', () => {
        expect(verifierDonnees(initialData.email, initialData.password)).toBeTruthy();
    });

});