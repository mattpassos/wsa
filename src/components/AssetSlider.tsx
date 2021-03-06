import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./AssetSlider.css";
import SwiperCore, { Pagination } from "swiper/core";
import { Artwork } from "../models/artwork";
import { IonCard, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import { EmptyState } from "./empty-state/EmptyState";

SwiperCore.use([Pagination]);

interface Props {
  title: string;
  data: Artwork[];
}

export const AssetSlider: React.FC<Props> = (props) => {
  const { title, data } = props;

  if (data.length <= 0) {
    return (
      <div>
        <h4>{title}</h4>
        <EmptyState />
      </div>
    );
  }

  return (
    <div>
      <h4>{title}</h4>
      <div>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={0}
          loop={false}
          className="mySwiper1"
          observer={true}
          observeParents={true}
          watchSlidesVisibility={true}
          watchSlidesProgress={true}
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <IonCard className="card">
                  <div className="img-wrapper">
                    <a href={`/Art/${item.id}`}>
                      <img
                        className="imagesAssetSlider"
                        src={item.image}
                        alt=""
                      />
                    </a>
                  </div>
                  <IonCardTitle className="name-artwork">
                    {item.title}
                  </IonCardTitle>
                  <IonCardSubtitle className="name-artist">
                    {item.artist}
                  </IonCardSubtitle>
                </IonCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <br></br>
      </div>
    </div>
  );
};

export default AssetSlider;
