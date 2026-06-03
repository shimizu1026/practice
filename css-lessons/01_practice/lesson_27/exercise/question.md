# 練習問題


## 1. 「index.html」に「execises」› 「assets」 › 「styles」フォルダにある「global.css」をリンク


## 2. 以下のクエリコンテナーを定義
   | セレクタ | クエリコンテナーの種類 | クエリコンテナー名 |  
   | --- | --- | --- | 
   | .container | インラインサイズ | `container` |
   | .service | インラインサイズ | `service` |
 

## 3. メディアクエリを以下のコンテナークエリに変更
   | セレクタ | コンテナークエリ | プロパティ | 値 |  
   | --- | --- | --- | --- |
   | .service-cover | クエリコンテナー「service」のインラインサイズが`30rem` 以上の時 | `--service-ratio` | 1.5 : 1 |
   | ^^ | クエリコンテナー「service」のインラインサイズが`40rem` 以上の時 | ^^ | 2 : 1 |

## 4. 以下の箇所をコンテナークエリの単位に変更
   | セレクタ |  プロパティ | 値 |  
   | --- | --- | --- | 
   | .services | `gap` | `1.5rem` と クエリコンテナー「service」のインラインサイズの2.5% の大きい方  |
   |  .service-name | `font-size` | `clamp(var(--font-lg), 1.2949rem + 1.0256cqi, var(--font-xl))` |
