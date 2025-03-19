import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
export default function AddProject() {

    return (
        <Dialog>
            
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add a project</DialogTitle>
                </DialogHeader>


                    <DialogFooter className="flex justify-end">
                        <Button>Add</Button>
                    </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}