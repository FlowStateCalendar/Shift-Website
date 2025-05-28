import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { XCircle } from "lucide-react";

export default function Failure() {
  return (     
    <div>
      <Alert variant="destructive" className="border-l-4 pl-4 shadow-sm">
        <XCircle className="h-4 w-4" />
        <AlertTitle>Destructive Alert</AlertTitle>
        <AlertDescription>
          This alert has an accent border on the left side.
        </AlertDescription>
      </Alert>
    </div> 
  )
}