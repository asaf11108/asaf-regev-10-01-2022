import { FC, useState } from 'react';
import './history.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/table/table';
import { COLUMNS } from './history.config';
import { Card, TextField } from '@mui/material';
import { FavoriteLocationSelectors } from '../../store/favorite-locations/favorite-locations.selector';
import { FavoriteLocation } from '../../store/favorite-locations/favorite-locations.model';
import { favoriteLocationsActive } from '../../store/favorite-locations/favorite-locations.action';
import { useManyTemperatureType } from '../../hooks/temprature-type.hook';
import { flow } from 'lodash-es';
import { filter } from 'lodash/fp';

const History: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const favoriteLocations: FavoriteLocation[] = flow([
    useSelector,
    useManyTemperatureType,
    filter((favoriteLocation: FavoriteLocation) => favoriteLocation.localizedName.toLowerCase().includes(query.toLowerCase()))
  ])(FavoriteLocationSelectors.selectAll);

  const handleRowClick = (favoriteLocation: FavoriteLocation): void => {
    dispatch(favoriteLocationsActive(favoriteLocation.key));
    navigate('/');
  };

  return (
    <Card className="history">

      <TextField className="history__search" label="Search by city" variant="standard" onChange={event => setQuery(event.target.value)} />

      <Table
        columns={COLUMNS}
        rows={favoriteLocations}
        rowClick={handleRowClick}
        idProp="key"/>

    </Card>
  );
}

export default History;