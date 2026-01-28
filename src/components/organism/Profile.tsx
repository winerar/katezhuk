import Typography from "../atom/Typography";
import content from "@/assets/data/content.json";

function Profile() {
  return (
    <div className="flex justify-between gap-3 flex-wrap">
      <div>
        <Typography component="h1">{content.fullName}</Typography>
        <Typography component="h2">{content.professionDescription}</Typography>
        <p>Мой подход — интегративный.</p>
        <p>Я не за «метод», я за результат.</p>
        <p>Подбираю то, что работает с тобой здесь и сейчас.</p>
        <p>
          Использую:
          <ul>
            <li>техники КПТ, гештальта, IFS;</li>
            <li>
              клиническую базу и нейрофизиологию (мозг — он и про чувства тоже);
            </li>
            <li>
              тонкую настройку: слышу не только слова, но и то, что между строк;
            </li>
            <li>
              и юмор как катализатор трансформаций (со мной душно не будет).
            </li>
          </ul>
        </p>
        <p>Во мне сочетается западная наука и восточная глубина.</p>
        <p>Без магического мышления.</p>
        <p>
          Но с магией понимания себя — когда ты вдруг ясно видишь: «вот кто я. И
          вот куда идти.»
        </p>
        <p>Со мной можно без масок.</p>
      </div>
      <div className="w-100 h-100 border-1">Место для фото</div>
    </div>
  );
}

export default Profile;
