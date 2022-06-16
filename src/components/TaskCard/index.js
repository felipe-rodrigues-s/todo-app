import React from 'react';
import * as S from './styles';

import typeIcons from '../../utils/typeIcons';

export function TaskCard({type, title, when, done}) {

  return (
    <S.Container done={done}>
      <S.TopCard>
        <img src={typeIcons[type]} alt="Icone da Tarefa"/>
        <h3>{title}</h3>
      </S.TopCard>
      <S.BottomCard>
        <strong>{when}</strong>
      </S.BottomCard>
    </S.Container>
  )
}