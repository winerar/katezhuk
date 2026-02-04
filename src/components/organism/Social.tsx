import getContent from "../../assets/data/content";
import TelegramIcon from "../../assets/icons/TelegramIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";

function Social() {
  const content = getContent();

  return (
    <ul className="flex gap-3">
      <li>
        <a
          href={content.telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          title={content.telegram}
        >
          <TelegramIcon color="var(--color-platinum)" />
        </a>
      </li>
      <li>
        <a
          href={content.instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          title={content.instagram}
        >
          <InstagramIcon color="var(--color-platinum)" />
        </a>
      </li>
    </ul>
  );
}

export default Social;
