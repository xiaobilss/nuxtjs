// 验证是否登录
export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.user) {
        return redirect('/login')
    }
}
