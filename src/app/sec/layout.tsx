import SubHeader from "../../components/SubHeader"
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function SecPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <SubHeader/>
    {children}
    
    </>
  )
}