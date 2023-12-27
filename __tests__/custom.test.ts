import { mergeConfiguration, resolveConfiguration, writeOutput } from '../src/utils'
import { ReleaseNotesBuilder } from '../src/releaseNotesBuilder'
import { GithubRepository } from '../src/repositories/GithubRepository'

jest.setTimeout(180000)

const token = process.env.GITHUB_TOKEN || ''
const githubRepository = new GithubRepository(token, undefined, 'UWHealth/website')
it('Test custom changelog builder', async () => {
  const configuration = mergeConfiguration(undefined, resolveConfiguration(
    '',
    'configs_test/custom.json'
  ))
  
  const releaseNotesBuilder = new ReleaseNotesBuilder(
    null, // baseUrl
    githubRepository, // token
    '.',  // repoPath
    'UWHealth',                                         // user
    'website',      // repo
    'v5.26.1',         // fromTag
    '',         // toTag
    false, // includeOpen
    false, // failOnError
    false, // ignorePrePrelease
    true, // enable to fetch via commits
    true, // enable to fetch reviewers
    true, // enable to fetch release information
    false, // enable to fetch reviews
    false, // enable commitMode
    false, // enable exportCache
    false, // enable exportOnly
    null,  // path to the cache
    configuration  // configuration
  )

  const changeLog = await releaseNotesBuilder.build()
  console.log(changeLog)
  writeOutput('.', "CHANGELOG.md", changeLog)

})