import { useState } from "react";
import Card from "@components/common/card";
import Carousel from "@components/ui/carousel/carousel";
import CardLoader from "@components/ui/loaders/card-loader";
import CardRoundedLoader from "@components/ui/loaders/card-rounded-loader";
import { useCategoriesQuery } from "@framework/conceitosemalta/get-all-conceitos";
import Alert from "@components/ui/alert";
import { SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { useAppDispatch } from "src/redux/store/store";
import { getHotConcepts } from "src/redux/modules/hot-concepts/getHotConceptsSlice";
import { useAppSelector } from "src/redux/hooks/selectors";

const breakpoints = {
  1720: {
    slidesPerView: 5,
    spaceBetween: 28,
  },
  1400: {
    slidesPerView: 5,
    spaceBetween: 28,
  },
  1025: {
    slidesPerView: 5,
    spaceBetween: 28,
  },
  768: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  "500 ": {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  0: {
    slidesPerView: 3,
    spaceBetween: 12,
  },
};

const breakpointsCircle = {
  1720: {
    slidesPerView: 5,
    spaceBetween: 48,
  },
  1400: {
    slidesPerView: 5,
    spaceBetween: 32,
  },
  1025: {
    slidesPerView: 5,
    spaceBetween: 28,
  },
  768: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  "500 ": {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  0: {
    slidesPerView: 3,
    spaceBetween: 12,
  },
};

const Conceitos = ({ type = "circle" }) => {
  const dispatch = useAppDispatch();

  const [dataConceptState, setDataConceptState] = useState([]);
  const { data: dataConceptsRedux, isLoading } = useAppSelector(
    (state) => state.getConceptsData
  );

  useEffect(() => {
    dispatch(getHotConcepts());
  }, []);

  useEffect(() => {
    if (!isLoading && dataConceptsRedux.length > 0) {
      setDataConceptState(dataConceptsRedux);
    }
  }, [dataConceptsRedux]);
  if (!isLoading && dataConceptsRedux.length > 0) {
    console.log(dataConceptState);
  }

  return (
    <div className="bg-gray-300 w-full h-full flex flex-col px-8 pb-6 mb-16">
      <strong className="text-black my-4 text-lg mx-auto p-4">
        Conceitos em alta
      </strong>
      {!dataConceptState ? (
        <Alert message={`${error.message}Erro ao carregar as imagens`} />
      ) : (
        <Carousel
          breakpoints={type === "rounded" ? breakpoints : breakpointsCircle}
          buttonClassName="-mt-8 md:-mt-10"
        >
          {!dataConceptState
            ? Array.from({ length: 10 }).map((_, idx) => {
                if (type === "rounded") {
                  return (
                    <SwiperSlide>
                      <CardRoundedLoader
                        key={`card-rounded-ArrayFrom-${idx}--'asd-asda'`}
                      />
                    </SwiperSlide>
                  );
                }
                return (
                  <SwiperSlide>
                    <CardLoader uniqueKey={`card-circle-${idx}`} />
                  </SwiperSlide>
                );
              })
            : dataConceptState?.map((conceitos, index) => {
                return (
                  <SwiperSlide
                    key={`component-swiper-${conceitos.uid}-${conceitos.uid}`}
                  >
                    <Card
                      key={`category--dataConcepts-${conceitos.uid}`}
                      item={conceitos}
                      href={conceitos.thumbnail}
                      variant={type}
                      effectActive={true}
                      size={type === "rounded" ? "medium" : "small"}
                    />
                    <div className="bg-red-500 w-40"></div>
                  </SwiperSlide>
                );
              })}
        </Carousel>
      )}
    </div>
  );
};

export default Conceitos;
