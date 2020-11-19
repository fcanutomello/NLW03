import Orphanage from '../models/Orphanage';
import imagesView from './images_view';

export default{
    render(Orphanage:Orphanage) {
        return {
            id:Orphanage.id, 
            name:Orphanage.name, 
            latitude:Orphanage.latitude,
            longitude:Orphanage.longitude,
            about:Orphanage.about,
            instructions:Orphanage.instructions,
            opening_hours:Orphanage.opening_hours,
            open_on_weekends:Orphanage.open_on_weekends,
            images:imagesView.renderMany(Orphanage.images)
        };
    },

    renderMany(orphanages:Orphanage[]){
        return orphanages.map(orphanage => this.render(orphanage))
    }
};