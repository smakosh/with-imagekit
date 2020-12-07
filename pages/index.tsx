import ImageKit from "imagekit";
import Image from "next/image";
import Layout from "../components/Layout";
import UploadForm from "../components/UploadForm";

interface IndexProps {
	images: {
		fileId: string;
		name: string;
		filePath: string;
	}[];
}

const IndexPage = ({ images }: IndexProps) => (
	<Layout title="Home | Next.js + TypeScript Example">
		<h1>Imagekit Next js 👋</h1>
		{images.map(({ fileId, name, filePath }) => (
			<div key={fileId}>
				<Image src={filePath} alt={name} width={512} height={512} />
			</div>
		))}
		<UploadForm />
	</Layout>
);

export const getStaticProps = async () => {
	const imagekit = new ImageKit({
		publicKey: process.env.NEXT_PUBLIC_IMAGE_KIT_PUBLIC_API_KEY || "",
		privateKey: process.env.IMAGE_KIT_PRIVATE_KEY || "",
		urlEndpoint: process.env.IMAGE_KIT_URL_ENDPOINT || "",
	});

	const images = await imagekit.listFiles({
		limit: 5,
	});

	return {
		props: {
			images,
		},
		revalidate: 2,
	};
};

export default IndexPage;
