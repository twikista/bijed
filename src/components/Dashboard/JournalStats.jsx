import { connectDB } from '@/lib/mongoose/config'
import { Article, Issue } from '@/lib/mongoose/models'
import { QueueListIcon, BookmarkIcon } from '@heroicons/react/24/outline'
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
  } catch (error) {
    console.log(error)
  }
}
async function JournalStats() {
  const { numberOfVolume, numberOfIssues, numberOfArticles } =
    await getMaxVolume()
  return (
    <section className='flex justify-around gap-10 font-lato'>
      <JournalStatCard
        title='Published volumes'
        value={numberOfVolume}
        Icon={VolumeIcon}
        bg='bg-[#e5d4ff]'
      />
      <JournalStatCard
        title='Published issues'
        value={numberOfIssues}
        Icon={IssuesIcon}
        bg='bg-green-100'
      />
      <JournalStatCard
        title='Published articles'
        value={numberOfArticles}
        Icon={ArticlesIcon}
        bg='bg-[#fff0c6]'
      />
    </section>
  )
}

export default JournalStats
