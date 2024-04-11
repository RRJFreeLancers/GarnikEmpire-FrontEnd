import  Axios  from 'axios'

export const fetchCaraouselImage = async() => {
        try{
            const response = await Axios.get("https://650508ffef808d3c66efb88c.mockapi.io/EcommerceProduct/");
            // console.log(response);
            if(response.status===200)
            {
                return response.data;
            }
            else{
                console.error('Error fetching CaraouselData: Unexpected status code', response.status);
            }

        }
        catch(error)
        {
            console.error('Error fetching caraouselData:', error);

        }

};

export default fetchCaraouselImage