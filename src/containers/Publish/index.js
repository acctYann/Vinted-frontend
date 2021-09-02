// PUBLISH
import "../Publish/index.css";
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
  const [preview, setPreview] = useState("");
  const [acceptedExchange, setAcceptedExchange] = useState(false);

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);

      const response = await axios.post(
        " https://api--vinted.herokuapp.com/offer/publish",
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
      alert("Une erreur est survenue, veuillez réssayer");
    }
  };

  return userToken ? (
    <div className="Publish--body">
      <div className="Publish--container">
        <div className="Publish--title">Vends ton article</div>
        <form className="Publish--form" onSubmit={handleSubmit}>
          <div>
            {preview ? (
              <div className="Publish--preview-image">
                <div className="Publish--preview-image-border">
                  <img src={preview} alt="pré-visualisation" />
                  <div
                    className="Publish--remove-img-button"
                    onClick={() => {
                      setPreview("");
                    }}
                  >
                    <FontAwesomeIcon
                      className="Publish--icon-times"
                      icon="times"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="Publish--preview">
                <div className="Publish--border">
                  <label htmlFor="file" className="Publish--label-file">
                    <FontAwesomeIcon
                      className="Publish--icon-plus"
                      icon="plus"
                    />
                    <span className="Publish-title-input">
                      Ajoute une photo
                    </span>
                  </label>
                  <input
                    id="file"
                    type="file"
                    className="Publish--file"
                    onChange={(event) => {
                      setPicture(event.target.files[0]);
                      setPreview(URL.createObjectURL(event.target.files[0]));
                    }}
                  />
                </div>
              </div>
            )}
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
                    {acceptedExchange ? (
                      <label
                        htmlFor="exchange"
                        className="Publish--checkbox-design-checked"
                      >
                        <FontAwesomeIcon icon="check" size="xs" color="white" />
                      </label>
                    ) : (
                      <label
                        htmlFor="exchange"
                        className="Publish--checkbox-design"
                      ></label>
                    )}
                    <input
                      type="checkbox"
                      name="exchange"
                      id="exchange"
                      value="exchange"
                      onChange={() => setAcceptedExchange(!acceptedExchange)}
                    />
                    <span style={{ fontSize: 14 }}>
                      Je suis intéressé(e) par les échanges
                    </span>
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
    <Redirect to={{ pathname: "/login", state: { fromPublish: true } }} />
  );
};

export default Publish;
