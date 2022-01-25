import './History.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/Table/Table';
import { COLUMNS } from './History.config';
import { Card } from '@mui/material';
import { FavoriteLocationSelectors } from '../../store/favorite-locations/favorite-locations.selector';
import { FavoriteLocation } from '../../store/favorite-locations/favorite-locations.model';
import { favoriteLocationsActive } from '../../store/favorite-locations/favorite-locations.action';
import { useManyTemperatureType } from '../../hooks/temprature-type.hook';

const History: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favoriteLocations: FavoriteLocation[] = useManyTemperatureType(useSelector(FavoriteLocationSelectors.selectAll));

  const handleRowClick = (favoriteLocation: FavoriteLocation): void => {
    dispatch(favoriteLocationsActive(favoriteLocation.key));
    navigate('/');
  };

  return (
    <Card className="history">
      <Table
        columns={COLUMNS}
        rows={favoriteLocations}
        rowClick={handleRowClick}
        idProp="key"/>
    </Card>
  );
}

export default History;