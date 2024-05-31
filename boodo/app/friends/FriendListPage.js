import './FriendListPage.css'

export default function FriendListPage() {

  const handleGoBack = () => {
    // go back to profile page
    navigate('/profile'); 
  };

  return (
    <div className="friend-list-page">
      <div className="friend-list-page">
        <span className="friends-label">
          Friends
        </span>
        <div className="go-back-button">
          <button className="go-back" onClick={handleGoBack}>
            Go back
          </button>
        </div>
      </div>
      <div className="Friend-list-container">
        <div className="Friend-list-container">
        </div>
        <div className="Friend-component">
          <div className="Friend-username-label">
            <div className="Friend-username-label">
              Friend_1
            </div>
            <div className="Friend-status-container">
              <div className="Friend-status-container">
                <div className="Friend-status-color">
                </div>
                <div className="Friend-status">
                  Online
                </div>
              </div>
              <div className="Message-button-container">
                <span className="Message-button">
                  Message
                </span>
              </div>
            </div>
          </div>
          <div className="Friend-pfp">
          </div>
        </div>
      </div>
      <div className="add-friend-component">
        <span className="add-friend">
          Add friend
        </span>
      </div>
    </div>
  )
}