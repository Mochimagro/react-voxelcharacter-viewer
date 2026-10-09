# フェーズ1：3Dモデルを1体表示

- React + TypeScript + Viteを作成
- Three.jsとReact Three Fiberを導入
- BlenderでFBXをGLBへ変換
- GLBを1体表示
- カメラ、ライト、OrbitControlsを設定

# フェーズ2：アニメーション再生

- Mixamoからアニメーションを取得
- Blenderで自作モデルへ適用
- Idle、Walk、AttackをGLBに含める
- ボタンでアニメーションを切り替える

# フェーズ3：キャラクター一覧

- characters.tsを作成
- キャラクターカードを表示
- カードクリックで選択中のキャラクターを変更
- 詳細ビューアーへモデルURLを渡す

# フェーズ4：見た目と操作性

- ローディング表示
- モデル読み込みエラー表示
- アニメーション切り替え時のフェード
- スマートフォン向けレイアウト
- 背景色や床の追加
- 自動回転の切り替え

# フェーズ5：公開

- GitHubへプッシュ
- GitHub Actionsを設定
- GitHub Pagesで確認
- モデルURL、画像URL、base設定を確認
