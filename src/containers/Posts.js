import PostOverview from "../components/PostOverview";

export default function Posts(props) {
    return (
      <div>
          <PostOverview posts={props.posts}/>
      </div>
    )
}
