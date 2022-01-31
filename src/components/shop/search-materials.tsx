import { useRouter } from "next/router";
import React, { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { addFilterMaterial } from "../../redux/modules/filters/filter/filter";
import { getTypesItems } from "src/redux/modules/types-items/typesItems";
import { useAppSelector } from "src/redux/hooks/selectors";
import SearchBrandBox from "@components/common/search-brand-box";
import { getShowCaseProducts } from "src/redux/modules/show-case/showCase";
import { useAppDispatch } from "src/redux/store/store";
import { useMaterials } from "src/redux/hooks/materialHooks";

type TypeBrandsProps = {
  name: string;
  code: string;
};

type TypesMaterials = {
  materials?: any;
  showSearchBrand?: boolean;
};

export const SearchMaterials: FC<TypesMaterials> = ({
  materials,
  showSearchBrand,
}) => {
  const dispatch = useAppDispatch();
  const [filterMaterial, setFilterMaterial] = useState<string>("");
  const [textInputMaterial, setTextInputMaterial] = useState<string>("");
  const [filterMaterialFind, setFilterMaterialFind] =
    useState<TypeBrandsProps[]>();

  const { data: material }: any = useMaterials();

  useEffect(() => {
    dispatch(addFilterMaterial(filterMaterial));
  }, [filterMaterial]);

  useEffect(() => {}, [textInputMaterial, filterMaterialFind]);

  const handleOnClear = () => {
    setTextInputMaterial("");
    setFilterMaterial("");
    setFilterMaterialFind(undefined);
  };

  const handleAddFilterMaterial = (code: string, title: string) => {
    setFilterMaterial(code);
    setTextInputMaterial(title);
  };

  const handleChange = (value: any) => {
    if (value.target.value.length >= 2) {
      	const materialsFind = material.filter((item: any) =>
        item.code.includes(textInputMaterial)
    );
      setFilterMaterialFind(materialsFind);
    }

    setTextInputMaterial(value.target.value);

		if (value.target.value.length <= 2) {
			setFilterMaterialFind(undefined);
		}
  };

  useEffect(() => {
    dispatch(getTypesItems());
  }, []);

  return (
    <>
      {showSearchBrand && (
        <div className=" block shadow-searchs border-b border-gray-500 pb-7 mb-7  h-4/5">
          <div className=" flex justify-between">
            <h3 className="text-heading px-4 text-sm md:text-base font-semibold mb-7">
              Materiais
            </h3>
          </div>
          <div className="mt-2 flex flex-col items-center w-full">
            <div className="p-1 mb-8">
              <SearchBrandBox
                place="Pesquisar Materiais"
                onSubmit={() => {}}
                name={textInputMaterial}
                value={textInputMaterial}
                onClear={handleOnClear}
                onChange={handleChange}
              />
            </div>
            <div className="brands-box flex flex-col w-full overflow-scroll p-4">
              {filterMaterialFind === undefined
                ? materials?.map((item: TypeBrandsProps) => {
                    return (
                      <span
                        onClick={() =>
                          handleAddFilterMaterial(item.code, item.name)
                        }
                        className="w-full hover:bg-gray-300 cursor-pointer  p-2 rounded-md text-black"
                        key={item.code}
                      >
                        {item.name}
                      </span>
                    );
                  })
                : filterMaterialFind?.map((item: TypeBrandsProps) => {
                    return (
                      <span
                        onClick={() =>
                          handleAddFilterMaterial(item.code, item.name)
                        }
                        className="w-full hover:bg-gray-300 cursor-pointer  p-2 rounded-md text-black"
                        key={item.code}
                      >
                        {item.name}
                      </span>
                    );
                  })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};