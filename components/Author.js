import { Avatar, Divider } from 'antd'
import '../public/style/components/author.css'

const Author = () => {
  return (
    <div className="author comm-box">
      <div>
        <Avatar size={100} src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
        <div className="author-introduction">
          前端开发，React粉丝
          <Divider>社交帐号</Divider>
          <Avatar size={28} icon="github" className="account" />
          <Avatar size={28} icon="qq" className="account" />
          <Avatar size={28} icon="wechat" className="account" />
        </div>
      </div>
    </div>
  )
}

export default Author