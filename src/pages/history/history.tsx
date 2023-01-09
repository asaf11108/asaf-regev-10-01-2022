import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/table/table';
import { COLUMNS } from './history.config';
import { Card } from '@mui/material';
import { FavoriteLocation } from '../../store-elf/favorite-locations/favorite-locations.model';
import { useManyTemperatureType } from '../../hooks/temprature-type.hook';
import * as S from "./history.style";
import { TableProps } from '../../components/table/table.model';
import { useObservable } from '@ngneat/react-rxjs';
import { favoriteLocationsStore, updateSetActiveId } from '../../store-elf/favorite-locations/favorite-locations.state';
import { selectAllEntities, setActiveId } from '@ngneat/elf-entities';
import { map } from "rxjs";

const History: FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const [favoriteLocations] = useObservable(favoriteLocationsStore.pipe(
    selectAllEntities(),
    map(favoriteLocations => useManyTemperatureType(favoriteLocations)),
    map(favoriteLocations => favoriteLocations.filter((favoriteLocation) => favoriteLocation.localizedName.toLowerCase().includes(query.toLowerCase())))
  ));

  const onRowClick: TableProps<FavoriteLocation>['rowClick'] = favoriteLocation => {
    updateSetActiveId(favoriteLocation.key);
    navigate('/');
  };

  return (
    <Card>

      <S.Search label="Search by city" variant="standard" onChange={event => setQuery(event.target.value)} />

      <Table<FavoriteLocation>
        columns={COLUMNS}
        rows={favoriteLocations}
        rowClick={onRowClick}
        idProp="key"/>

    </Card>
  );
}

export default History;