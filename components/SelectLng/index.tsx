import { FC, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

const language = {
  en: 'en',
  fr: 'fr',
};

interface SelectLngProps {
  lang?: string;
}

const SelectLng: FC<SelectLngProps> = ({ lang = language.en }) => {
  const [lng, setLng] = useState(lang);
  const { t, i18n } = useTranslation('common');

  const handleChange = (event: SelectChangeEvent) => {
    const { target } = event;
    [setLng, i18n.changeLanguage].forEach((fn) => fn(target.value));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          {t('topbar.lang')}
        </InputLabel>
        <Select
          defaultValue={lang}
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
