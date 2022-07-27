import CircularProgress from "@mui/material/CircularProgress"

export const LoadingButton = ({
  text,
  isLoading,
  onClick = () => {},
  className,
}) => (
  <button
    onClick={onClick}
    className={`py-[13px] w-full outline-none border-none rounded-[6px] bg-orange text-[18px] text-center text-[#ffffff] font-semibold mt-auto transition ${className}`}
  >
    {isLoading ? <CircularProgress color='inherit' /> : text}
  </button>
)
