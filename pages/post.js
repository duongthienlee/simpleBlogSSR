import { withRouter } from 'next/router'
import withLayout from '../components/MyLayout'

const Content = withRouter(props => (
    <div>
        <h1>{props.router.query.title}</h1>
        <p>This is the blog post content.</p>
    </div>
))

const Page = () =>
    <>
        < Content />
    </>

export default withLayout(Page)