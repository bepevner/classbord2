// Firebase 콘솔(console.firebase.google.com) > 프로젝트 설정 > 웹 앱 추가에서
// 발급받은 값을 아래에 그대로 붙여넣으세요.
window.db firebaseConfig = {
  apiKey: AIzaSyBJPO4tP-bLkc5WPJohVsj0-eA5s_9k5M8,
  authDomain: edde-86754.firebaseapp.com,
  projectId: edde-86754,
  storageBucket: edde-86754.firebasestorage.app,
  messagingSenderId: 500519498865,
  appId: 1:500519498865:web:c0e16c7e6a47f302f457d0,
};

firebase.initializeApp(firebaseConfig);
window.db = firebase.firestore();
