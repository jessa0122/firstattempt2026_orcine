<script setup>
import { ref } from 'vue'

const currentScreen = ref('signup')

function goTo(screen) {
  currentScreen.value = screen
}
</script>

<template>
  <div class="app-shell">
    <div class="phone">
      <!-- SIGN UP -->
      <template v-if="currentScreen === 'signup'">
        <div class="auth-screen light-bg">
          <div class="logo-wrap">
            <img src="/AdDU%20Seal.png" alt="AdDU Seal" class="school-logo" />
          </div>

          <h1 class="auth-title">Welcome, Blue Knight</h1>
          <p class="auth-sub">AdDU Alumni Portal</p>

          <label class="field-label">Alumni ID or Email</label>
          <input class="input" placeholder="Enter your ID or email" />

          <label class="field-label">Password</label>
          <input class="input" type="password" placeholder="Enter your password" />

          <label class="field-label">Confirm Password</label>
          <input class="input" type="password" placeholder="Enter your password" />

          <button class="primary-btn" @click="goTo('forgot')">Sign up</button>

          <p class="tiny-note">
            Already have an account?
            <span class="linkish" @click="goTo('login')"> Log in</span>
          </p>

          <p class="support-text">Can't access your email or don't know your ID?</p>
          <p class="support-link">Contact Support</p>

          <p class="tiny-footer">
            By logging in, you agree to the AdDU Alumni Data Privacy Policy and Terms of Service.
          </p>
        </div>
      </template>

      <!-- FORGOT PASSWORD -->
      <template v-else-if="currentScreen === 'forgot'">
        <div class="auth-screen plain-white">
          <button class="back-link" @click="goTo('signup')">← Back to Login</button>

          <div class="mini-icon">🔐</div>
          <h2 class="center-title">Forgot Password?</h2>
          <p class="center-sub">
            Select a method to verify your identity and recover your account access.
          </p>

          <div class="pill-row">
            <button class="pill active-pill">Email Address</button>
            <button class="pill">Student ID</button>
          </div>

          <label class="field-label">School Email Address</label>
          <input class="input" placeholder="e.g. alumni@addu.edu.ph" />

          <button class="primary-btn" @click="goTo('login')">Continue</button>

          <p class="support-text">Can't access your email or don't know your ID?</p>
          <p class="support-link">Contact Support</p>

          <p class="tiny-footer">© 2026 AdDU Alumni. All rights reserved.</p>
        </div>
      </template>

      <!-- LOGIN -->
      <template v-else-if="currentScreen === 'login'">
        <div class="auth-screen light-bg">
          <div class="logo-wrap">
            <img src="/AdDU%20Seal.png" alt="AdDU Seal" class="school-logo" />
          </div>

          <h1 class="auth-title">Welcome, Blue Knight</h1>
          <p class="auth-sub">AdDU Alumni Portal</p>

          <label class="field-label">Alumni ID or Email</label>
          <input class="input" placeholder="Enter your ID or email" />

          <label class="field-label">Password</label>
          <input class="input" type="password" placeholder="Enter your password" />

          <p class="forgot-inline" @click="goTo('forgot')">Forgot Password?</p>

          <button class="primary-btn" @click="goTo('role')">Login →</button>

          <p class="tiny-note">
            Don't have an account?
            <span class="linkish" @click="goTo('signup')"> Sign Up</span>
          </p>

          <p class="tiny-footer">
            By logging in, you agree to the AdDU Alumni Data Privacy Policy and Terms of Service.
          </p>
        </div>
      </template>

      <!-- ROLE SELECTION -->
      <template v-else-if="currentScreen === 'role'">
        <div class="auth-screen soft-bg">
          <div class="logo-wrap">
            <img src="/AdDU%20Seal.png" alt="AdDU Seal" class="school-logo" />
          </div>

          <h1 class="auth-title dark">Access Your Portal</h1>
          <p class="auth-sub dark-sub">Select your role to continue</p>

          <div class="role-card" @click="goTo('admin-home')">
            <div class="role-icon">🎓</div>
            <div>
              <strong>Alumni</strong>
              <p>Add your donations and explore network</p>
            </div>
            <span>›</span>
          </div>

          <div class="role-card selected" @click="goTo('admin-home')">
            <div class="role-icon">🛡️</div>
            <div>
              <strong>Administrator</strong>
              <p>Access portal management tools</p>
            </div>
            <span>›</span>
          </div>

          <p class="help-link">Need help or support?</p>
          <p class="tiny-footer">
            ATENEO DE DAVAO UNIVERSITY<br />
            Data Privacy · Terms of Service
          </p>
        </div>
      </template>

      <!-- ADMIN HOME -->
      <template v-else-if="currentScreen === 'admin-home'">
        <div class="admin-hero">
          <div class="avatar"></div>
          <div>
            <p class="welcome-admin">WELCOME, ADMIN!</p>
            <h2>Manon Bannerman</h2>
            <p class="small-admin">(applicator)</p>
          </div>
        </div>

        <button class="primary-btn purple-btn create-spacing" @click="goTo('campaigns')">
          Create Donation
        </button>

        <div class="stats-grid">
          <div class="stat-box">
            <p>₱12,500.00</p>
            <span>TOTAL FUNDS RAISED</span>
          </div>
          <div class="stat-box">
            <p>300 Students</p>
            <span>SCHOLAR SUPPORTED</span>
          </div>
          <div class="stat-box">
            <p>75%</p>
            <span>ACTIVE CAMPAIGNS</span>
          </div>
          <div class="stat-box">
            <p>#3 Top Class</p>
            <span>BATCH RANKING</span>
          </div>
        </div>

        <div class="section-head">
          <h3>Latest News</h3>
          <span>See all</span>
        </div>

        <div class="news-grid">
          <div class="news-card news-left">
            <div class="news-overlay">
              <strong>Grand Alumni Homecoming 2024</strong>
              <p>OCT 24, 2024</p>
            </div>
          </div>
          <div class="news-card news-right">
            <div class="news-overlay">
              <strong>Scholarship Goal</strong>
              <p>OCT 13, 2024</p>
            </div>
          </div>
        </div>
      </template>

      <!-- CAMPAIGNS -->
      <template v-else-if="currentScreen === 'campaigns'">
        <div class="admin-hero compact">
          <div class="avatar"></div>
          <div>
            <p class="welcome-admin">WELCOME, ADMIN!</p>
            <h2>Manon Bannerman</h2>
          </div>
          <div class="search-dot">⌕</div>
        </div>

        <button class="primary-btn purple-btn create-spacing" @click="goTo('create-campaign')">
          ＋ Create Donation
        </button>

        <div class="section-head">
          <h3>Current Donation Campaigns</h3>
          <span>See all</span>
        </div>

        <div class="campaign-list-item">
          <div class="thumb green"></div>
          <div class="campaign-info">
            <span class="status active-status">ACTIVE</span>
            <strong>Scholarship Fund 2024</strong>
            <p>₱95,000 / ₱120,000</p>
            <div class="mini-progress"><div class="mini-fill w79"></div></div>
          </div>
          <span class="percent">79%</span>
        </div>

        <div class="campaign-list-item">
          <div class="thumb brown"></div>
          <div class="campaign-info">
            <span class="status ending-status">ENDING SOON</span>
            <strong>Library Renovation Project</strong>
            <p>₱92,000 / ₱100,000</p>
            <div class="mini-progress"><div class="mini-fill w92"></div></div>
          </div>
          <span class="percent">92%</span>
        </div>

        <div class="campaign-list-item">
          <div class="thumb green2"></div>
          <div class="campaign-info">
            <span class="status active-status">ACTIVE</span>
            <strong>Grand Alumni Homecoming</strong>
            <p>₱78,000 / ₱95,000</p>
            <div class="mini-progress"><div class="mini-fill w82"></div></div>
          </div>
          <span class="percent">82%</span>
        </div>

        <div class="campaign-list-item">
          <div class="thumb blue"></div>
          <div class="campaign-info">
            <span class="status paused-status">PAUSED</span>
            <strong>Annual Health &amp; Medical Mission</strong>
            <p>₱18,000 / ₱40,000</p>
            <div class="mini-progress"><div class="mini-fill w45"></div></div>
          </div>
          <span class="percent">45%</span>
        </div>
      </template>

      <!-- CREATE CAMPAIGN -->
      <template v-else-if="currentScreen === 'create-campaign'">
        <div class="topbar white-text">
          <button class="circle-btn white-btn" @click="goTo('campaigns')">←</button>
          <h2>Create Campaign/Donation</h2>
          <div></div>
        </div>

        <div class="purple-form">
          <label class="form-label">Campaign Title</label>
          <input class="form-input" value="Scholarship Fund for Batch 2024" />

          <label class="form-label">Select a category</label>
          <div class="select-box">Education</div>

          <label class="form-label">Full Story / Details</label>
          <textarea class="form-area">Support deserving students by funding tuition and school needs.</textarea>

          <label class="form-label">Campaign Image / Banner</label>
          <div class="upload-box">
            <div class="upload-icon">☁</div>
            <p>Upload Header Image</p>
            <span>JPG, PNG or Document format, 1200×630</span>
          </div>

          <button class="primary-btn purple-btn" @click="goTo('review')">Next Step →</button>
        </div>
      </template>

      <!-- REVIEW -->
      <template v-else-if="currentScreen === 'review'">
        <div class="topbar white-text">
          <button class="circle-btn white-btn" @click="goTo('create-campaign')">←</button>
          <h2>Donation Options &amp; Review</h2>
          <div></div>
        </div>

        <div class="purple-form">
          <label class="form-label">Suggested Donation Amounts</label>
          <div class="suggested-row">
            <button class="suggest-btn">₱500</button>
            <button class="suggest-btn">₱1,000</button>
            <button class="suggest-btn">₱5,000</button>
          </div>

          <label class="form-label">Custom Amount</label>
          <input class="form-input" value="0.00" />

          <div class="toggle-row">
            <div>
              <strong>Enable monthly donations</strong>
              <p>Donate each month to give automatically every month</p>
            </div>
            <div class="toggle on">
              <div class="toggle-ball"></div>
            </div>
          </div>

          <label class="form-label">Campaign Preview</label>
          <div class="preview-card">
            <div class="preview-top">
              <span class="tiny-tag">SCHOLARSHIP</span>
            </div>
            <div class="preview-note"></div>
            <h3>Scholarship Fund for Batch 2024</h3>
            <p>Providing educational support for deserving students from Davao City.</p>
          </div>

          <button class="primary-btn purple-btn" @click="goTo('leaderboard')">Publish Campaign ⤴</button>
          <button class="outline-btn" @click="goTo('create-campaign')">Edit / Back</button>
        </div>
      </template>

      <!-- LEADERBOARD -->
      <template v-else-if="currentScreen === 'leaderboard'">
        <div class="topbar dark-top">
          <button class="circle-btn" @click="goTo('review')">←</button>
          <h2>Batch Leaderboard</h2>
          <span>ⓘ</span>
        </div>

        <div class="leader-tabs">
          <span class="leader-tab active-leader">Global Rank</span>
          <span class="leader-tab">Your Batch</span>
          <span class="leader-tab">Recent Activity</span>
        </div>

        <div class="ring-area">
          <div class="year-small">2023</div>
          <div class="ring-big">
            <span>2012</span>
          </div>
          <div class="year-small">2024</div>
        </div>

        <div class="podium-row">
          <div class="podium-card small-podium">
            <strong>2</strong>
            <span>BATCH RANK</span>
            <p>₱40,000</p>
          </div>
          <div class="podium-card main-podium">
            <strong>1</strong>
            <span>BATCH RANK</span>
            <p>₱80,000</p>
          </div>
          <div class="podium-card small-podium">
            <strong>3</strong>
            <span>BATCH RANK</span>
            <p>₱25,000</p>
          </div>
        </div>

        <div class="section-head dark-head">
          <h3>All Batch Rankings</h3>
          <span>Filter by Year ▼</span>
        </div>

        <div class="rank-item">
          <div class="rank-left">
            <strong>4</strong>
            <div>
              <p>Class of 2005</p>
              <span>₱80,000</span>
            </div>
          </div>
          <div class="rank-right">
            <button class="share-btn">⇪ Share</button>
          </div>
        </div>

        <div class="rank-item">
          <div class="rank-left">
            <strong>5</strong>
            <div>
              <p>Class of 1998</p>
              <span>₱74,500</span>
            </div>
          </div>
          <div class="rank-right">
            <button class="share-btn">⇪ Share</button>
          </div>
        </div>

        <div class="rank-item">
          <div class="rank-left">
            <strong>6</strong>
            <div>
              <p>Class of 2018</p>
              <span>₱68,000</span>
            </div>
          </div>
          <div class="rank-right">
            <span class="your-batch">YOUR BATCH</span>
            <button class="share-btn">⇪ Share</button>
          </div>
        </div>

        <div class="rank-item">
          <div class="rank-left">
            <strong>7</strong>
            <div>
              <p>Class of 2021</p>
              <span>₱52,300</span>
            </div>
          </div>
          <div class="rank-right">
            <button class="share-btn">⇪ Share</button>
          </div>
        </div>

        <div class="leader-summary">
          <div>
            <p>TOTAL AMOUNT RAISED</p>
            <strong>$1.2M+</strong>
          </div>
          <div>
            <p>ACTIVE BATCHES</p>
            <strong>42 Classes</strong>
          </div>
        </div>
      </template>

      <!-- NOTIFICATIONS -->
      <template v-else-if="currentScreen === 'notifications'">
        <div class="notif-head">
          <div>
            <h2>Notifications</h2>
          </div>
          <button class="mark-btn">Mark all as read</button>
        </div>

        <div class="notif-tabs">
          <span class="notif-tab active-pill">All</span>
          <span class="notif-tab">Campaigns</span>
          <span class="notif-tab">User Reports</span>
        </div>

        <div class="notif-card">
          <div class="notif-line danger"></div>
          <div class="notif-content">
            <div class="notif-top">
              <strong>System Alert</strong>
              <span>2 min ago</span>
            </div>
            <p>Maintenance is scheduled for midnight tomorrow.</p>
          </div>
        </div>

        <div class="notif-card">
          <div class="notif-line info"></div>
          <div class="notif-content">
            <div class="notif-top">
              <strong>New Campaign Request</strong>
              <span>1 hr ago</span>
            </div>
            <p>Scholarship campaign needs final review before publishing.</p>
          </div>
        </div>

        <div class="notif-card">
          <div class="notif-line warning"></div>
          <div class="notif-content">
            <div class="notif-top">
              <strong>Verification Pending</strong>
              <span>2 hr ago</span>
            </div>
            <p>Four new donation receipts are waiting for manual verification.</p>
          </div>
        </div>

        <div class="notif-card">
          <div class="notif-line success"></div>
          <div class="notif-content">
            <div class="notif-top">
              <strong>Goal Reached</strong>
              <span>Yesterday</span>
            </div>
            <p>Typhoon relief fund has reached its target of ₱50,000.</p>
          </div>
        </div>
      </template>

      <!-- BOTTOM NAV -->
      <div
        v-if="['admin-home', 'campaigns', 'create-campaign', 'review', 'leaderboard', 'notifications'].includes(currentScreen)"
        class="bottom-nav"
      >
        <button class="nav-item" :class="{ activeNav: currentScreen === 'admin-home' }" @click="goTo('admin-home')">
          <span>⌂</span>
          <small>Home</small>
        </button>
        <button class="nav-item" :class="{ activeNav: currentScreen === 'campaigns' || currentScreen === 'create-campaign' || currentScreen === 'review' }" @click="goTo('campaigns')">
          <span>♡</span>
          <small>Donation</small>
        </button>
        <button class="nav-item" :class="{ activeNav: currentScreen === 'leaderboard' }" @click="goTo('leaderboard')">
          <span>◷</span>
          <small>Leaderboard</small>
        </button>
        <button class="nav-item" :class="{ activeNav: currentScreen === 'notifications' }" @click="goTo('notifications')">
          <span>🔔</span>
          <small>Notifications</small>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.app-shell {
  min-height: 100vh;
  background: #eef2f8;
  padding: 24px;
  font-family: Inter, Arial, sans-serif;
  color: #1f2c44;
}

.phone {
  width: 390px;
  max-width: 100%;
  min-height: 844px;
  margin: 0 auto;
  background: linear-gradient(180deg, #edf2f8 0%, #f9fbff 100%);
  border-radius: 28px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 14px 32px rgba(31, 44, 68, 0.14);
  padding: 18px 18px 84px;
}

.light-bg {
  background: linear-gradient(180deg, #eef3fa 0%, #f8fbff 100%);
}

.soft-bg {
  background: linear-gradient(180deg, #eef4f8 0%, #f8fbff 100%);
}

.plain-white {
  background: #ffffff;
}

.auth-screen {
  min-height: 744px;
  border-radius: 24px;
  padding: 22px 20px;
}

.logo-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 14px;
}

.school-logo {
  width: 96px;
  height: 96px;
  object-fit: contain;
}

.auth-title {
  text-align: center;
  font-size: 26px;
  margin: 0;
  color: #1b2a4b;
}

.dark {
  color: #27344e;
}

.auth-sub,
.dark-sub {
  text-align: center;
  font-size: 13px;
  color: #6d7b93;
  margin: 8px 0 22px;
}

.field-label {
  display: block;
  font-size: 12px;
  margin-bottom: 6px;
  color: #56657f;
}

.input {
  width: 100%;
  margin-bottom: 14px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #dbe4f0;
  background: white;
  font-size: 14px;
}

.primary-btn {
  width: 100%;
  border: none;
  border-radius: 12px;
  padding: 13px 16px;
  font-weight: 700;
  color: white;
  background: linear-gradient(90deg, #0e5ed7, #0a72ee);
  cursor: pointer;
  margin-top: 8px;
}

.purple-btn {
  background: linear-gradient(90deg, #4732c9, #5b41d9);
}

.tiny-note {
  text-align: center;
  font-size: 12px;
  color: #6b7890;
  margin-top: 16px;
}

.support-text {
  text-align: center;
  font-size: 12px;
  color: #6b7890;
  margin-top: 12px;
}

.support-link {
  text-align: center;
  color: #2563eb;
  font-weight: 700;
  font-size: 13px;
  margin-top: 4px;
}

.tiny-footer {
  text-align: center;
  font-size: 10px;
  color: #8b96ab;
  margin-top: 18px;
  line-height: 1.5;
}

.linkish,
.help-link {
  color: #235dd8;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  width: 100%;
  display: block;
  margin: 18px auto 0;
}

.forgot-inline {
  text-align: right;
  font-size: 12px;
  margin: -4px 0 10px;
}

.back-link {
  background: none;
  border: none;
  color: #4b5872;
  font-size: 13px;
  margin-bottom: 24px;
  cursor: pointer;
}

.mini-icon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #edf3ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
}

.center-title {
  text-align: center;
  margin: 0;
  color: #23324d;
}

.center-sub {
  text-align: center;
  font-size: 12px;
  color: #71809b;
  margin: 8px 0 18px;
}

.pill-row {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.pill,
.notif-tab {
  border: none;
  background: #edf2fa;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 12px;
  cursor: pointer;
}

.active-pill {
  background: #dce9ff;
  color: #2459d1;
  font-weight: 700;
}

.role-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 14px;
  border: 1px solid #e2e8f1;
  cursor: pointer;
}

.role-card p {
  margin: 4px 0 0;
  font-size: 12px;
  color: #6f7c93;
}

.selected {
  box-shadow: 0 0 0 2px #ece7ff inset;
}

.role-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: #edf2fa;
  display: flex;
  align-items: center;
  justify-content: center;
}

.admin-hero {
  background: linear-gradient(90deg, #4732c9, #6281f0);
  border-radius: 0 0 22px 22px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  margin: -18px -18px 16px;
}

.compact {
  border-radius: 0 0 18px 18px;
}

.avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f7d4d4, #d0d8f8);
  border: 2px solid rgba(255,255,255,0.4);
}

.welcome-admin {
  font-size: 10px;
  margin: 0;
  opacity: 0.8;
}

.admin-hero h2 {
  margin: 2px 0;
  font-size: 18px;
}

.small-admin {
  margin: 0;
  font-size: 10px;
  opacity: 0.8;
}

.create-spacing {
  margin: 10px 0 16px;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 16px;
}

.stat-box {
  background: white;
  border-radius: 16px;
  padding: 14px;
  border: 1px solid #e7ebf5;
}

.stat-box p {
  margin: 0 0 6px;
  font-weight: 700;
  color: #e34b71;
}

.stat-box span {
  font-size: 10px;
  color: #6f7d93;
}

.section-head,
.dark-head,
.topbar,
.notif-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.section-head h3,
.dark-head h3 {
  margin: 0;
}

.section-head span,
.dark-head span {
  font-size: 12px;
  color: #6b7890;
}

.news-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.news-card {
  height: 142px;
  border-radius: 18px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, #73bfd6, #4e7699);
}

.news-right {
  background: linear-gradient(135deg, #36527b, #1f2c44);
}

.news-overlay {
  position: absolute;
  inset: auto 0 0 0;
  padding: 12px;
  color: white;
  background: linear-gradient(to top, rgba(0,0,0,0.55), transparent);
}

.news-overlay strong {
  font-size: 13px;
}

.news-overlay p {
  font-size: 10px;
  margin: 6px 0 0;
}

.search-dot {
  margin-left: auto;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255,255,255,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
}

.campaign-list-item {
  display: flex;
  gap: 12px;
  align-items: center;
  background: white;
  border-radius: 16px;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid #e6ebf5;
}

.thumb {
  width: 54px;
  height: 54px;
  border-radius: 12px;
  flex-shrink: 0;
}

.green { background: linear-gradient(135deg, #0f4d52, #13373a); }
.brown { background: linear-gradient(135deg, #8f6849, #60452f); }
.green2 { background: linear-gradient(135deg, #3e6b41, #294b2c); }
.blue { background: linear-gradient(135deg, #738bc8, #4f64aa); }

.campaign-info {
  flex: 1;
}

.campaign-info strong {
  display: block;
  font-size: 13px;
  margin: 3px 0;
}

.campaign-info p {
  margin: 0 0 6px;
  font-size: 11px;
  color: #72809a;
}

.status {
  display: inline-block;
  font-size: 9px;
  font-weight: 700;
  padding: 3px 7px;
  border-radius: 999px;
  margin-bottom: 4px;
}

.active-status {
  background: #dff6e8;
  color: #21734b;
}

.ending-status {
  background: #fff1d8;
  color: #996d1f;
}

.paused-status {
  background: #ebeef5;
  color: #546178;
}

.percent {
  font-size: 11px;
  color: #6e7d94;
  font-weight: 700;
}

.mini-progress {
  height: 6px;
  border-radius: 999px;
  background: #e4e9f2;
  overflow: hidden;
}

.mini-fill {
  height: 100%;
  background: linear-gradient(90deg, #4a35ca, #5f87f0);
}

.w79 { width: 79%; }
.w92 { width: 92%; }
.w82 { width: 82%; }
.w45 { width: 45%; }

.white-text {
  color: white;
  margin-bottom: 12px;
}

.dark-top {
  margin-bottom: 12px;
}

.topbar h2,
.notif-head h2 {
  margin: 0;
  font-size: 20px;
}

.circle-btn {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: #eef2fa;
  cursor: pointer;
}

.white-btn {
  background: rgba(255,255,255,0.16);
  color: white;
}

.purple-form {
  background: linear-gradient(180deg, #6a55df 0%, #4c39cb 100%);
  border-radius: 22px;
  padding: 16px;
  color: white;
}

.form-label {
  display: block;
  font-size: 12px;
  margin: 10px 0 6px;
  opacity: 0.92;
}

.form-input,
.form-area,
.select-box {
  width: 100%;
  border: none;
  border-radius: 12px;
  padding: 12px;
  font: inherit;
  background: rgba(255,255,255,0.95);
  color: #2a3350;
}

.form-area {
  min-height: 90px;
  resize: none;
}

.select-box {
  color: #55627c;
}

.upload-box {
  border: 2px dashed rgba(255,255,255,0.35);
  border-radius: 16px;
  padding: 22px 12px;
  text-align: center;
  background: rgba(255,255,255,0.08);
}

.upload-icon {
  font-size: 24px;
  margin-bottom: 6px;
}

.upload-box p {
  margin: 0;
  font-weight: 700;
}

.upload-box span {
  font-size: 10px;
  opacity: 0.8;
}

.suggested-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.suggest-btn,
.outline-btn {
  border: none;
  border-radius: 10px;
  padding: 11px 10px;
  cursor: pointer;
}

.suggest-btn {
  background: rgba(255,255,255,0.95);
  color: #4732c9;
  font-weight: 700;
}

.outline-btn {
  width: 100%;
  margin-top: 10px;
  background: transparent;
  color: white;
  border: 1px solid rgba(255,255,255,0.4);
}

.toggle-row {
  background: rgba(255,255,255,0.11);
  border-radius: 14px;
  padding: 14px;
  margin: 14px 0;
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.toggle-row p {
  margin: 4px 0 0;
  font-size: 11px;
  opacity: 0.88;
}

.toggle {
  width: 48px;
  height: 26px;
  border-radius: 999px;
  background: #89f0b2;
  position: relative;
  flex-shrink: 0;
}

.toggle-ball {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 3px;
  left: 25px;
}

.preview-card {
  background: linear-gradient(180deg, #f2bf83, #ecb06d);
  color: #37291d;
  border-radius: 16px;
  padding: 12px;
}

.preview-top {
  margin-bottom: 8px;
}

.tiny-tag {
  background: #4c59d8;
  color: white;
  font-size: 9px;
  padding: 3px 6px;
  border-radius: 999px;
}

.preview-note {
  height: 48px;
  background: white;
  border-radius: 8px;
  margin-bottom: 10px;
  opacity: 0.75;
}

.preview-card h3 {
  margin: 0 0 6px;
  font-size: 16px;
}

.preview-card p {
  margin: 0;
  font-size: 11px;
}

.leader-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.leader-tab {
  padding: 8px 10px;
  border-radius: 999px;
  background: #eef2fa;
  font-size: 12px;
}

.active-leader {
  background: #e1e7ff;
  color: #3f4fd6;
  font-weight: 700;
}

.ring-area {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-bottom: 14px;
}

.ring-big {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid #5a46db;
  background: #f5f7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.year-small {
  font-size: 12px;
  color: #6e7c94;
}

.podium-row {
  display: grid;
  grid-template-columns: 1fr 1.1fr 1fr;
  gap: 8px;
  margin-bottom: 16px;
}

.podium-card {
  background: linear-gradient(180deg, #6853df, #4f3ccd);
  color: white;
  border-radius: 14px;
  text-align: center;
  padding: 12px 8px;
}

.main-podium {
  transform: translateY(-8px);
}

.podium-card strong {
  display: block;
  font-size: 22px;
}

.podium-card span {
  display: block;
  font-size: 10px;
  opacity: 0.8;
}

.podium-card p {
  margin: 8px 0 0;
  font-size: 11px;
}

.rank-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 14px;
  padding: 12px;
  border: 1px solid #e6ebf5;
  margin-bottom: 10px;
}

.rank-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.rank-left strong {
  font-size: 16px;
}

.rank-left p {
  margin: 0;
  font-size: 13px;
}

.rank-left span {
  font-size: 11px;
  color: #74819a;
}

.rank-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.your-batch {
  font-size: 9px;
  font-weight: 700;
  color: white;
  background: #4834cb;
  padding: 5px 8px;
  border-radius: 999px;
}

.share-btn {
  border: none;
  background: #eef2fa;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 11px;
}

.leader-summary {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 12px;
}

.leader-summary div {
  background: white;
  border-radius: 14px;
  padding: 12px;
  border: 1px solid #e6ebf5;
}

.leader-summary p {
  margin: 0 0 6px;
  font-size: 10px;
  color: #74819a;
}

.notif-head {
  background: linear-gradient(90deg, #4732c9, #5d45de);
  color: white;
  border-radius: 18px 18px 0 0;
  padding: 16px;
  margin: -18px -18px 0;
}

.mark-btn {
  border: none;
  background: rgba(255,255,255,0.16);
  color: white;
  padding: 8px 10px;
  border-radius: 999px;
  font-size: 11px;
}

.notif-tabs {
  display: flex;
  gap: 8px;
  padding: 14px 0;
}

.notif-card {
  display: flex;
  gap: 10px;
  background: white;
  border-radius: 14px;
  padding: 12px;
  border: 1px solid #e6ebf5;
  margin-bottom: 10px;
}

.notif-line {
  width: 4px;
  border-radius: 999px;
  flex-shrink: 0;
}

.danger { background: #ff6767; }
.info { background: #5c8cff; }
.warning { background: #ffbe55; }
.success { background: #54c98f; }

.notif-content {
  flex: 1;
}

.notif-top {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 12px;
}

.notif-top span {
  color: #78859d;
}

.notif-content p {
  margin: 6px 0 0;
  color: #66748d;
  font-size: 12px;
}

.bottom-nav {
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 14px;
  background: white;
  border: 1px solid #e5eaf3;
  border-radius: 18px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  padding: 8px;
}

.nav-item {
  border: none;
  background: transparent;
  border-radius: 12px;
  padding: 8px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  cursor: pointer;
}

.nav-item span {
  font-size: 18px;
  line-height: 1;
}

.nav-item small {
  font-size: 10px;
}

.activeNav {
  background: #ece8ff;
  color: #4c39cb;
  font-weight: 700;
}
</style>