import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function ToolTip({tool_tip_conent,children}:{tool_tip_conent:string,children:React.ReactNode}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{tool_tip_conent}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
