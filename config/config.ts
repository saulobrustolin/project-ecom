export interface ContentLoading {
    content: string;
}
  
export interface MouseOverProps extends ContentLoading {
    onMouseContentEnter: () => void;
    onMouseContentLeave: () => void;
}