import GeneralContext from '../store/GeneralContext';
import { convertYearToCSV } from '../helpers';
import { FaDownload } from 'react-icons/fa';
import * as c from '@chakra-ui/react';
import { useContext } from 'react';

const DownloadYearCSVButton = () => {
 const generalContext = useContext(GeneralContext);

 const clickButtonHandler = () => {
  const data = convertYearToCSV(generalContext.year, generalContext.tags);
  const blob = new Blob([data], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${new Date().getFullYear()}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
 };

 return (
  <c.Button colorScheme="whatsapp" onClick={clickButtonHandler}>
   <FaDownload />
   <c.Box ml="2">Download Year Data as CSV</c.Box>
  </c.Button>
 );
};

export default DownloadYearCSVButton;
