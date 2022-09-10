import './home.scss';
import Input from '../../shared/input';
import { Component, ReactNode } from 'react';
import { toast } from 'react-toastify';

const ERROR_CATCH = {
     1: () => toast('Permissão se geolocalização negada!', {
          hideProgressBar: false,
          draggable: true,
          progress: undefined
     }),
     2: () => toast('Não foi possível obter sua localização atual', {
          hideProgressBar: false,
          draggable: true,
          progress: undefined
     })
}

export default class Home extends Component {
     private city = 'São Paulo'
     private mounted: boolean;

     constructor(public props: any) {
          super(props);
     }

     public componentDidMount(): void {
          if (this.mounted) {
               return undefined;
          }
          this.mounted = true;
          if ('geolocation' in navigator) {
               navigator.geolocation.getCurrentPosition((position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    // var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
               }, (error: GeolocationPositionError) => {
                    ERROR_CATCH[error.code]();
               })
          }
     }

     public render(): ReactNode {
          return (
               <div className="home-page">
                    <div className="first-page">
                         <h1 className="title" dangerouslySetInnerHTML={{ __html: this.city }}>
                         </h1>
                         <div className="input-container">
                              <Input />
                         </div>
                    </div>
                    <div className="second-page">
                    </div>
               </div>
          )
     }
}