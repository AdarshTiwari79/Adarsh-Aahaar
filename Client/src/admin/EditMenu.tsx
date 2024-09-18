import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const EditMenu = ({
  selectedMenu,
  editOpen,
  setEditOpen,
}: {
  selectedMenu: any;
  editOpen: boolean;
  setEditOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [input, setInput] = useState<any>({
    name: "",
    description: "",
    price: 0,
    image: undefined,
  });

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {});

  return (
    <Dialog open={editOpen} onOpenChange={setEditOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Menu</DialogTitle>
          <DialogDescription>
            Update your menu to keep your offering fresh and exciting!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submitHandler} className="space-y-4">
          <div className="space-y-2">
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              value={input.name}
              placeholder="Enter menu name"
              onChange={changeEventHandler}
            />
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Input
              type="text"
              name="description"
              value={input.description}
              onChange={changeEventHandler}
              placeholder="Add menu description"
            />
          </div>

          <div className="space-y-2">
            <Label>Price in (Rupees)</Label>
            <Input
              type="text"
              name="price"
              value={input.price}
              onChange={changeEventHandler}
              placeholder="Enter menu price"
            />
          </div>

          <div className="space-y-2">
            <Label>Upload Menu Image</Label>
            <Input
              type="file"
              name="imageFile"
              onChange={(e) =>
                setInput({
                  ...input,
                  image: e.target.files?.[0] || undefined,
                })
              }
              placeholder="Enter menu image"
            />
          </div>

          <DialogFooter className="mt-5">
            {loading ? (
              <Button
                disabled
                className="w-full bg-orange hover:bg-hoverOrange"
              >
                {" "}
                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                Please Wait
              </Button>
            ) : (
              <Button className="w-full bg-orange hover:bg-hoverOrange">
                Submit
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditMenu;
