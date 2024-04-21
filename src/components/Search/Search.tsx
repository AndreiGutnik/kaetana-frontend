import { useState } from 'react';

import iconsSprite from '../../assets/iconsSprite.svg';

import { Button, Form, Icon, Input } from './Search.styled';

export const Search = () => {
  const [search, setSearch] = useState<string>('');

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
      <Button type="submit">
        <Icon>
          <use href={iconsSprite + '#search'}></use>
        </Icon>
      </Button>
      <Input
        type="text"
        name="search"
        placeholder="Поиск"
        value={search}
        onChange={onChangeInput}
      />
    </Form>
  );
};
