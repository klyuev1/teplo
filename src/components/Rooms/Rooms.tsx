import React from 'react';
import { useParams, Link } from 'react-router-dom';
import RoomTable from './RoomTable/RoomTable'
import { useAppDispatch } from '../../store/hooks/hooks';
import { openCreateRoomPopup, openUpdateProjectPopup } from '../../store/reducers/popupSlice';
import { setProjectID } from '../../store/reducers/projectIDSlice';
import { downloadRooms } from '../../utils/Api';


function Rooms() {
  
  const {projectID} = useParams();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (typeof projectID === 'string') {
      dispatch(setProjectID(projectID));
    }
  }, [projectID, dispatch]);

  const handleCreateRoomClick = () => {
    dispatch(openCreateRoomPopup());
  }

  const handleUpdateProjectClick = () => {
    dispatch(openUpdateProjectPopup());
  }

  const downloadCSV = () => {
    if (typeof projectID === 'string') {
      handleDownloadCSV(projectID);
    }
  }

  function handleDownloadCSV(projectID: string) {
    downloadRooms(projectID)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Ошибка загрузки: ${res.status} ${res.statusText}`);
        }
        return res.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'output.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => {
        console.error("Произошла ошибка:", error);
      });
  }
  
  return (
    <section className= 'rooms' >

      <div className='rooms__up-container'>

        <div className='rooms__title-box'>
          <Link to='/projects' className='rooms__title-logo' />
          <h2 className='rooms__title'>Проекты | Помещения</h2>
        </div>
        
        <div className='rooms__button-box'>
          <button className='rooms__button rooms__button_csv' type='button'onClick={downloadCSV}>Выгрузить в CSV</button>
          <button className='rooms__button' type='button' onClick={handleUpdateProjectClick}>Редактировать проект</button>
          <button className='rooms__button' type='button' onClick={handleCreateRoomClick}>Создать помещение</button>
        </div>
        
      
      </div>

      <RoomTable />

    </section>
    
  );
}

export default Rooms;