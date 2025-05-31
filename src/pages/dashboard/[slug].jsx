import PageBanner from '../../components/PageBanner'
import MyProfile from '../../components/MyProfile'

const Settings = () => {
  return (
      <div className="rac_main_wrapper">
        <PageBanner
          pageTitle={`Settings`}
          parents={{
            title: "Dashboard",
            link: "/dashboard",
          }}
        />
        <MyProfile />
      </div>
  )
}

export default Settings
