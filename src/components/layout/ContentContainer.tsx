import classes from './ContentContainer.module.scss';

const ContentContainer : React.FC<{height: string, infiniteScroll?: (e:React.UIEvent<HTMLDivElement>) => void }> = (props) => {
  return <div className={`${classes['content-container']}`}
          onScroll={props.infiniteScroll}
          style={{height: props.height}}>
            {props.children}
         </div>
}

export default ContentContainer;