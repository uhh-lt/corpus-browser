import { Snippet, Highlight } from 'react-instantsearch';

function HitView(props: any) {
  return (
    <div onClick={() => props.onClick(props.hit)} style={{width: "100%"}}>
      <h2><Highlight attribute="title" hit={props.hit} /></h2>
      <p>{props.hit.tag} - {props.hit.url.split("/")[2]} - <a href={props.hit.url} target='_blank'>Link to original</a></p>
      <Snippet attribute="text" hit={props.hit} />
    </div>
  );
}

export default HitView;