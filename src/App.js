function App() {
  const report = `
本日は、修了報告や確認書、詳細メールの作成など、日々の業務を丁寧に進めました。
特に、スタッフ名の確認やカタカナでの読み方にも意識を向けながら対応を行い、少しずつ自然に覚えられるようになってきました。

今後、現場とのやり取りが発生した際にもスムーズに対応できるよう、日々の積み重ねを通じて基礎力を養っていきたいと思います。
`;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', fontFamily: 'sans-serif', lineHeight: '1.8' }}>
      <h1>📋 2025年6月25日（火） 日報</h1>
      <pre style={{ whiteSpace: 'pre-wrap', fontSize: '1.1rem' }}>
        {report}
      </pre>
    </div>
  );
}

export default App;
