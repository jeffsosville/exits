// Shared NDA page. Logic and markup live in packages/core/nda/NdaPage.tsx.
import type { GetServerSideProps } from 'next';
import NdaPage, { getServerSideProps as ndaProps } from '@exits/core/nda/NdaPage';

export default NdaPage;
export const getServerSideProps: GetServerSideProps = (ctx) => ndaProps(ctx);
