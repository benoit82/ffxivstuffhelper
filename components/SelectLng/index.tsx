import { FC, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserLang, UserState } from '@/src/redux';

const language = {
  en: 'en',
  fr: 'fr',
};


const SelectLng: FC = () => {
  const user: UserState = useSelector(store => store.user);
  console.log(user);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation('common');

  const handleChange = (event: SelectChangeEvent) => {
    const { target: { value }} = event;
    i18n.changeLanguage(value);
    dispatch(updateUserLang(value));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          {t('topbar.lang')}
        </InputLabel>
        <Select
          value={user.favLng}
          onChange={handleChange}
          autoWidth
          label={t('topbar.lang')}
        >
          {Object.entries(language).map(([key, value]) => (
            <MenuItem value={key} key={key}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectLng;
