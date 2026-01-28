import "./FeedpostCard.css";

const FeedPost = () => {
  return (
    <div className="feed-container">
      {/* Upper Post Card */}
      <div className="post-card">
        <div className="card-header-banner">
          <span>Your Submission</span>
        </div>

        <div className="post-content-wrapper">
          <div className="user-info">
            <img src="https://i.pravatar.cc/40" alt="User" className="avatar" />
            <div className="user-details">
              <span className="user-name">Ashraf Idrishi</span>
              <span className="post-time">1s</span>
            </div>
            <div className="more-options">...</div>
          </div>

          <p className="post-text">
            Today's challenge workout completed—feeling stronger already
          </p>

          <div className="video-placeholder-bg">
            <div className="play-button-overlay">
              <div className="play-circle">
                <div className="play-triangle"></div>
              </div>
            </div>
          </div>
          <div className="post-footer">
            <div className="reactions">
              <span className="reaction-icons">🙏 😍 18</span>
              <span className="footer-icon">😊</span>
              <span className="footer-icon">💬</span>
            </div>
            <span className="comment-count">10 Comments</span>
          </div>
        </div>
      </div>

      {/* Lower Community Card */}
      <div className="community-card">
        <h3>
          See what others <span className="avatar-group">👥</span> shared
        </h3>
        <p className="participant-count">
          <strong>85+</strong> participants already completed
        </p>

        <div className="pinned-post">
          <div className="pinned-label">📌 This is a pinned post</div>
          <div className="user-info">
            <img
              src="https://i.pravatar.cc/40"
              alt="Russell"
              className="avatar"
            />
            <div className="user-details">
              <span className="user-name">Russell Brunson</span>
              <span className="post-time">3 hrs ago</span>
            </div>
          </div>
          <p className="description">
            This 9-day fitness challenge is designed to help you build
            consistency...
          </p>
          <ul className="task-list">
            <li>
              <span>1</span> Minimum 20 minutes of sit-up
            </li>
            <li>
              <span>2</span> Mention Intensity
            </li>
            <li>
              <span>3</span> Upload Media (Optional)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeedPost;
