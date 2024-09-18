import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

const Restaurant = () => {
  const loading = false;

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div>
        <div>
          <h1 className="font-extrabold text-2xl mb-5">Add Restaurant</h1>
          <form>
            <div className="md:grid grid-cols-2 gap-6 space-y-2 md:space-y-0">
              {/* Restaurant Name */}
              <div>
                <Label>Restaurant Name</Label>
                <Input
                  type="text"
                  value={}
                  name="restaurantName"
                  placeholder="Enter your restaurant name"
                />
              </div>

              <div>
                <Label>City</Label>
                <Input
                  type="text"
                  value={}
                  name="city"
                  placeholder="Enter your city name"
                />
              </div>

              <div>
                <Label>Country</Label>
                <Input
                  type="text"
                  value={}
                  name="country"
                  placeholder="Enter your country name"
                />
              </div>

              <div>
                <Label>Delivery Time</Label>
                <Input
                  type="text"
                  value={}
                  name="deliveryTime"
                  placeholder="Enter your delivery time"
                />
              </div>

              <div>
                <Label>Cuisines</Label>
                <Input
                  type="text"
                  value={}
                  name="cuisines"
                  placeholder="Enter your cusines"
                />
              </div>

              <div>
                <Label>Upload Restaurant Banner</Label>
                <Input type="file" value={} name="image" accept="image/*" />
              </div>
            </div>

            <div>
              {loading ? (
                <Button disabled className="bg-orange hover:bg-hoverOrange">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please Wait
                </Button>
              ) : (
                <Button className="bg-orange hover:bg-hoverOrange">
                  Add Your Restaurant
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
