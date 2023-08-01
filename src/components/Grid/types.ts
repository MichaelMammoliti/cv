export interface GridProps {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  gap?: number;
  direction?: 'row' | 'column';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  grow?: boolean;
  item?: boolean;
  fullHeight?: boolean;
  fullWidth?: boolean;
  container?: boolean;
  size?: number;
  scrollable?: boolean;
  children: React.ReactNode;
}
