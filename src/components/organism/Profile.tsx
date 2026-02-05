import Typography from "../atom/Typography";
import getContent from "../../assets/data/content";
import photo from "@/assets/images/kate_zhuk.jpg";
import Image from "../molecule/Image";
import Link from "../molecule/Link";
import ContentBox from "../molecule/ContentBox";

function Profile() {
  const content = getContent();

  return (
    <div className="flex flex-col-reverse justify-between gap-6 2xl:flex-row">
      <div className="w-full 2xl:w-2/3">
        <Typography component="h1">{content.fullName}</Typography>
        <ContentBox title={content.info.title} paragraphs={content.info.text} />
        <div className="flex justify-center py-6">
          <Link href={content.blogLink} title={content.blog} />
        </div>
      </div>
      <div className="flex justify-center">
        <Image src={photo} alt="Profile" className="w-150" />
      </div>
    </div>
  );
}

export default Profile;
