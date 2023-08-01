import clsx from 'clsx';
import styles from './Grid.scss';
import { GridProps } from './types';

export const Grid = ({
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  gap = 0,
  direction = 'row',
  wrap = 'nowrap',
  grow = false,
  item = false,
  fullHeight = false,
  container = false,
  size = 0,
  scrollable = false,
  children,
}: GridProps) => (
  <div
    style={
      container
        ? {
            gap: `${gap}rem`,
          }
        : {}
    }
    className={clsx('grid', {
      [styles.container]: container,
      [styles[`justify-content-${justifyContent}`]]:
        container && justifyContent,
      [styles[`align-items-${alignItems}`]]: container && alignItems,
      [styles[`gap-${gap}`]]: container && gap,
      [styles[`direction-${direction}`]]: container && direction,
      [styles[`wrap-${wrap}`]]: container && wrap,
      [styles.grow]: item && grow,
      [styles.item]: item,
      [styles['full-height']]: fullHeight,
      [styles.scrollable]: scrollable,
    })}
  >
    {children}
  </div>
);
