import { connectDB } from '@/lib/mongoose/config'
import { Article, Issue } from '@/lib/mongoose/models'
import JournalStatCard from './JournalStatCard'
import { VolumeIcon, IssuesIcon, ArticlesIcon } from '../Icons'

const getMaxVolume = async () => {
  connectDB()
  try {
    const ArticleWithMaxVolume = Issue.find().sort({ volume: -1 }).limit(1)
    const issuesCount = Issue.find({ published: true }).count()
    const articlesCount = Article.find({ published: true }).count()
    const [[{ volume: numberOfVolume }], numberOfIssues, numberOfArticles] =
      await Promise.all([ArticleWithMaxVolume, issuesCount, articlesCount])
    return { numberOfVolume, numberOfIssues, numberOfArticles }
  } catch (error) {}
}
async function JournalStats() {
  const data = await getMaxVolume()
  return (
    <section className='flex justify-around gap-10 font-lato'>
      <JournalStatCard
        title='Published volumes'
        value={data?.numberOfVolume}
        Icon={VolumeIcon}
        bg='bg-[#e5d4ff]'
      />
      <JournalStatCard
        title='Published issues'
        value={data?.numberOfIssues}
        Icon={IssuesIcon}
        bg='bg-green-100'
      />
      <JournalStatCard
        title='Published articles'
        value={data?.numberOfArticles}
        Icon={ArticlesIcon}
        bg='bg-[#ffff33]/30'
      />
    </section>
  )
}

export default JournalStats
