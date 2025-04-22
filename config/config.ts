export interface ContentLoading {
    content: string;
}
  
export interface MouseOverProps extends ContentLoading {
    onMouseContentLeave: () => void;
    setMouseEnter: any;
    setMouseEnterContent: any;
}

export interface ImagesContent {
    images: {
        res_768: string;
        res_1280: string;
        res_1664: string;
      };
    content: string;
}