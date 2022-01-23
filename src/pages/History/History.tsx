import './History.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/Table/Table';
import { COLUMNS, DATA } from './History.config';
import { Card } from '@mui/material';

const History: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  return (
    <Card className="history">
      <Table columns={COLUMNS} rows={DATA} />
    </Card>
  );
}

export default History;