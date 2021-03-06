import { IonGrid, IonRow, IonCol } from "@ionic/react";
import "./ImageGrid.css";

import { Artwork } from "../models/artwork";

{
  /* Implementing Firebase business */
}
interface Props {
  data: Artwork[];
}

export const ImageGrid: React.FC<Props> = (props) => {
  const { data } = props;

  return (
    <IonGrid>
      <IonRow class="ion-no-margin">
        {data.map((item) => (
          <IonCol class="ion-no-padding" size="4">
            <div className="img-wrap">
              <a href={`/Art/${item.id}`}>
                <img className="imageGrid_image" src={item.image} alt="" />
                <div className="overlay">
                  <div className="overlayText">{item.title}</div>
                </div>
              </a>
            </div>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};

export default ImageGrid;
