import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Publish = ({ userToken }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState();

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData();

      formData.apprend("title", title);
      formData.apprend("description", description);
      formData.apprend("price", price);
      formData.apprend("condition", condition);
      formData.apprend("city", city);
      formData.append("brand", brand);
      formData.apprend("size", size);
      formData.apprend("color", color);
      formData.apprend("picture", picture);

      const response = await axios.post(
        " https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log(response.data);
      // Rediriger le user vers la page de l'offre
      if (response.data._id) {
        history.push(`/offer/${response.data._id}`);
      }
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
    }
  };

  return userToken ? (
    <div className="Publish--body">
      <div className="Publish--main">
        <div className="Publish--title">Vends ton article</div>
        <form className="Publish--container" onSubmit={handleSubmit}>
          <div>
            <div className="Publish--picture">
              <div className="Publish--border">
                <div>
                  <label className="Publish--file" htlmfor="file">
                    <FontAwesomeIcon className="Publish--icon" icon="plus" />
                    <div className="Publish--text">Ajoutez une photo</div>
                    <input
                      style={{ display: "none" }}
                      name=""
                      id=""
                      type="file"
                      onChange={(event) => {
                        setPicture(event.target.files[0]);
                      }}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="Publish--input-section1">
              <div className="Publish--text-input">
                <h1>Titre</h1>
                <input
                  className="Publish--input"
                  type="text"
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="ex: Chemise Sézane verte"
                />
              </div>
              <div className="Publish--text-input">
                <h1>Décris ton article</h1>
                <textarea
                  rows="5"
                  className="Publish--textarea"
                  type="text"
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="ex: porté quelquefois, taille correctement"
                />
              </div>
            </div>
            <div className="Publish--input-section2">
              <div className="Publish--text-input">
                <h1>Marque</h1>
                <input
                  className="Publish--input"
                  type="text"
                  onChange={(event) => setBrand(event.target.value)}
                  placeholder="ex: Zara"
                />
              </div>
              <div className="Publish--text-input">
                <h1>taille</h1>
                <input
                  className="Publish--input"
                  type="text"
                  onChange={(event) => setSize(event.target.value)}
                  placeholder="ex: L / 40 / 12"
                />
              </div>
              <div className="Publish--text-input">
                <h1>Couleur</h1>
                <input
                  className="Publish--input"
                  type="text"
                  onChange={(event) => setColor(event.target.value)}
                  placeholder="ex: Fushia"
                />
              </div>
              <div className="Publish--text-input">
                <h1>Etat</h1>
                <input
                  className="Publish--input"
                  type="text"
                  onChange={(event) => setCondition(event.target.value)}
                  placeholder="ex: Neuf avec étiquette"
                />
              </div>
              <div className="Publish--text-input">
                <h1>Lieu</h1>
                <input
                  className="Publish--input"
                  type="text"
                  onChange={(event) => setCity(event.target.value)}
                  placeholder="ex: Lyon"
                />
              </div>
            </div>
            <div className="Publish--input-section3">
              <div className="Publish--text-input">
                <h1>Prix</h1>
                <div className="Publish--checkbox-section">
                  <input
                    className="Publish--input2"
                    type="text"
                    onChange={(event) => setPrice(event.target.value)}
                    placeholder="0,00 €"
                  />
                  <div className="Publish--checkbox-input">
                    <input type="checkbox" />
                    <span>Je suis intéressé(e) par les échanges</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="Publish--button-content">
              <button className="Publish--button" type="submit">
                Ajouter
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default Publish;
