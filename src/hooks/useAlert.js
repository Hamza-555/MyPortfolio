import React from 'react'

const useAlert = () => {

    const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

    const showAlert = ({text, type= 'danger'}) => {
        setAlert({ show: true, text, type });
    }

    const hideALert = () => setAlert({ 
        show: false, 
        text: '', 
        type: 'danger' 
    });
        
    
  return {alert, showAlert, hideALert}
}

export default useAlert
