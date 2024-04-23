import { useState } from 'react';

import iconsSprite from '../../assets/iconsSprite.svg';

import { Form, Icon, Input } from './Search.styled';
import useDevice from '@/hooks/useDevice';

export const Search = () => {
  const [search, setSearch] = useState<string>('');
  const { isMobile } = useDevice();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    reset();
  };

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearch(value);
  };

  const reset = () => {
    setSearch('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <button type="submit">
        <Icon>
          <use href={iconsSprite + '#search'}></use>
        </Icon>
      </button>
      {!isMobile && (
        <Input
          type="text"
          name="search"
          placeholder="Поиск"
          value={search}
          onChange={onChangeInput}
        />
      )}
    </Form>
  );
};
