import './History.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/Table/Table';
import { COLUMNS } from './History.config';
import { Card } from '@mui/material';
import { FavoriteLocationSelectors } from '../../store/favorite-locations/favorite-locations.selector';
import { FavoriteLocation } from '../../store/favorite-locations/favorite-locations.model';

const History: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favoriteLocations: FavoriteLocation[] = useSelector(FavoriteLocationSelectors.selectAll);

  return (
    <Card className="history">
      <Table columns={COLUMNS} rows={favoriteLocations} />
    </Card>
  );
}

export default History;