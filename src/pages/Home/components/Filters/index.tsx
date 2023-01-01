import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Radio, RadioChangeEvent } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { enumToArray } from "helpers";
import { Currencies } from "types";
import { TicketsSelectors, useTicketsActions } from "@redux";
import { getCurrency } from "requests";
import { stops } from "constants/stops";
import {
  AllCheckbox,
  CheckboxGroup,
  FilterBlock,
  FiltersWrapper,
  FilterTitle,
} from "./styles";

function Filters() {
  const { setRate, setCurrency, setFilters } = useTicketsActions();
  const currency = useSelector(TicketsSelectors.getCurrency);
  const checkedList = useSelector(TicketsSelectors.getFilters);
  const currencies = enumToArray(Currencies);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  useEffect(() => {
    if (currency !== Currencies.RUB) {
      (async () => {
        try {
          // api key will work 250 request per month
          const { result } = await getCurrency({ to: currency });
          setRate(result);
        } catch (e) {
          setRate(1);
        }
      })();
    } else {
      setRate(1);
    }
  }, [currency]);

  const handleCurrencyChange = async ({
    target: { value },
  }: RadioChangeEvent) => {
    setCurrency(value);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setFilters(e.target.checked ? stops.map(({ value }) => value) : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const handleStopsChange = (checkedValues: CheckboxValueType[]) => {
    setFilters(checkedValues as number[]);
  };

  return (
    <FiltersWrapper>
      <div>
        <FilterTitle strong>Валюта</FilterTitle>
        <div>
          <Radio.Group
            optionType="button"
            options={currencies}
            onChange={handleCurrencyChange}
            value={currency}
            buttonStyle="solid"
          />
        </div>
      </div>
      <FilterBlock>
        <FilterTitle strong>Каличество пересадок</FilterTitle>
        <AllCheckbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Все
        </AllCheckbox>
        <CheckboxGroup
          options={stops}
          value={checkedList}
          onChange={handleStopsChange}
        />
      </FilterBlock>
    </FiltersWrapper>
  );
}

export default Filters;
