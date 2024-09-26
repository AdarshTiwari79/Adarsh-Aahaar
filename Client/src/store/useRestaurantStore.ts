import axios from "axios";
import { toast } from "sonner";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const API_END_POINT = "http://localhost:8000/api/v1/restaurant";

axios.defaults.withCredentials = true;

// type RestaurantState = {
//   loading:boolean,
//   restaurant:null,
//   restaurantResult:null,

// }

export const useRestaurantStore = create()(
  persist(
    (set) => ({
      loading: false,
      createRestaurant: async (formData: FormData) => {
        try {
          set({ loading: true });
          const response = await axios.post(`${API_END_POINT}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          if (response.data.success) {
            toast.success(response.data.message);
            set({ loading: false });
          }
        } catch (error: any) {
          toast.error(error.response.data.message);
          set({ loading: false });
        }
      },
    }),
    {
      name: "restaurant-name",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
