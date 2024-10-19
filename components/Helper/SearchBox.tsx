import { SearchIcon } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger,DialogDescription } from "../ui/dialog"

const SearchBox = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <SearchIcon size={30} cursor={"pointer"}/>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>
            Search Here
          </DialogTitle>
          <DialogDescription>
            <input className="w-full p-2 bg-gray-200 text-black rounded-md" type="text" placeholder="Search Here.." />
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default SearchBox
