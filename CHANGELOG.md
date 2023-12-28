<details><summary><strong>Stats from previous release: v5.26.1, 6 total pull requests</strong></summary><p>

**Compare**: https://github.com/UWHealth/website/compare/v5.26.1...v5.29.0<br/>**Changed Files:** 35<br/>**New Lines:** 851<br/>**Deleted Lines:** 4472<br/>**Changed Lines:** 5323</p></details>

# Changes

### 💥 Breaking

<details><summary><strong>STRY0041481, Fix: Patient Search: `searchHub` <a href="https://github.com/UWHealth/website/pull/570">(#570)</a></strong></summary><p>

Started by: @christopher-theagen<br/>Approvers: @cmatthews-uwhealth, @Cleecanth<br/></p><blockquote><details><summary>ℹ PR Details</summary>

# PR Details

## Description

Fixes bug introduced in [530](https://github.com/UWHealth/website/pull/530/commits/eb542ca240f99ab951797c2c0a4699897aea56e1#diff-985492fc4a41609ca611ea83e01a690904f63e4222d532db183f5b9d14931624R773) that set `searchHub` in the search request params (action), the result of which led searches on `patient.uwhealth.org` to use the fallback `searchHub` value "uwh-global" instead of necessary "patient-uwhealth-org". The `searchHub` value is used in Coveo `pipeline` config, which then in turn sets which sources to pull results from.

### Task(s)

- [STRY0041481](https://uwhealth.service-now.com/nav_to.do?uri=rm_story.do?sys_id=739abe3b8787f510af2e8626cebb355f%26sysparm_view=scrum)

### Documentation

- ~~[Document name here (Inline documentation format)](https://github.com/UWHealth/website/blob/NAME_OF_BRANCH/common/uwhealth-component-library/src/components/_docs/________.md)~~
- ~~[Document name here (Knowledgebase documentation format)](https://uwhealth.atlassian.net/wiki/spaces/MRTK/parent_document/child_document)~~

### Change(s)

- fix(`searchActions`): `UPDATE_PARAMS` now checking `isPatient` before setting `searchHub` (https://github.com/UWHealth/website/pull/570/commits/fe51851268e68bd499438bc1b2e2db8fd58d26e9)

### Change(s) from CR / QA

- Pending

## Testing

### How to test

- [/patient-search (deploy-preview)](https://deploy-preview-570.patient.uwh-content.dev/patient-search) should _not_ show non-patient results (like that of [PRD](https://patient.uwhealth.org/patient-search).
- Query suggestion requests on FAD & global using the "Providers" tab should yet set the `pipeline` key to a value of `uwh-providers`.
- Other searches and query suggestion searches should function as expected.

#### Contentful space

- [`master`](https://app.contentful.com/spaces/4yx69hifndy8/home/)

#### ~~Content model changes~~

| Content Model | Field name  | Type   | Change(s) |
| ------------- | ----------- | ------ | --------- |
| {modelName}   | {fieldName} | {type} | {changes} |

#### Preview URLs

- [uwhealth.org Netlify Preview #570](https://deploy-preview-570.uwh-content.dev/)
- [patient.uwhealth.org Netlify Preview #570](https://deploy-preview-570.patient.uwh-content.dev/)
- [patient-external-content Netlify Preview #570](https://deploy-preview-570.patient-ext.uwh-content.dev/)

#### Screenshot(s)

## PR Task list

- [X] Fill out all sections
- [x] Check SonarCloud Code Analysis
- [x] Add GitHub labels
- [x] Request reviewers
- [x] Send to QA for testing
</blockquote></details></details>

### 🧬 Content Model Changes

<details><summary><strong>fix: remove announcement from li content on Mac Voiceover <a href="https://github.com/UWHealth/website/pull/565">(#565)</a></strong></summary><p>

Started by: @da-uwhealth<br/>Approvers: @christopher-theagen<br/></p><blockquote><details><summary>ℹ PR Details</summary>

# PR Details
This PR is to fix a small defect that occurs for Mac users when they use the Voiceover (accessibility) program. CSS field "content" allows for alt text which can be overridden using a slash, and then followed by whatever text you want. 

## Description
This defect was discovered during manual testing, and this fix should not affect other voice over programs, but should instead reinforce the behaviour that they should not announce the content of the list tag, but instead should either ignore the bullet entirely or announce the word "Bullet". 

### Task(s)

- [STRY0041150](https://uwhealth.service-now.com/rm_story.do?sys_id=a0239ad4878fb550af2e8626cebb35f8&sysparm_view=&sysparm_time=1701880408282)

### Documentation
![image](https://github.com/UWHealth/website/assets/147553266/31e0749d-48c3-4757-a262-acb0d038d123)

### Change(s)
- RichTextParser.module.css


### Change(s) from CR / QA

- Pending

## Testing

### How to test
**This bug is only for the VoiceOver program as part of iOS, so testing should be done on an iOS device. **
- Navigate to the deploy preview, and utilise any page that has a benzene ring as a list bullet point, an example page is [allergy-asthma-immunology](https://deploy-preview-565.uwh-content.dev/services/allergy-asthma-immunology) but there are other pages as well. 
- Open the VoiceOver program, and navigate down the page until you get to the benzene ring list, once VoiceOver reads the list it should say "Bullet List Start {content}"


#### Contentful space

- [`master`](https://app.contentful.com/spaces/4yx69hifndy8/home/)

#### Content model changes

#### Preview URLs

- [uwhealth.org Netlify Preview #565](https://deploy-preview-565.uwh-content.dev/)
- [patient.uwhealth.org Netlify Preview #565](https://deploy-preview-565.patient.uwh-content.dev/)
- [patient-external-content Netlify Preview #5]65(https://deploy-preview-565.patient-ext.uwh-content.dev/)

#### Screenshot(s)

## PR Task list

- [x] Fill out all sections
- [x] Check SonarCloud Code Analysis
- [x] Add GitHub labels
- [x] Request reviewers
- [ ] Send to QA for testing
</blockquote></details></details>

### 🚀 Enhancements

<details><summary><strong>fix: remove announcement from li content on Mac Voiceover <a href="https://github.com/UWHealth/website/pull/565">(#565)</a></strong></summary><p>

Started by: @da-uwhealth<br/>Approvers: @christopher-theagen<br/></p><blockquote><details><summary>ℹ PR Details</summary>

# PR Details
This PR is to fix a small defect that occurs for Mac users when they use the Voiceover (accessibility) program. CSS field "content" allows for alt text which can be overridden using a slash, and then followed by whatever text you want. 

## Description
This defect was discovered during manual testing, and this fix should not affect other voice over programs, but should instead reinforce the behaviour that they should not announce the content of the list tag, but instead should either ignore the bullet entirely or announce the word "Bullet". 

### Task(s)

- [STRY0041150](https://uwhealth.service-now.com/rm_story.do?sys_id=a0239ad4878fb550af2e8626cebb35f8&sysparm_view=&sysparm_time=1701880408282)

### Documentation
![image](https://github.com/UWHealth/website/assets/147553266/31e0749d-48c3-4757-a262-acb0d038d123)

### Change(s)
- RichTextParser.module.css


### Change(s) from CR / QA

- Pending

## Testing

### How to test
**This bug is only for the VoiceOver program as part of iOS, so testing should be done on an iOS device. **
- Navigate to the deploy preview, and utilise any page that has a benzene ring as a list bullet point, an example page is [allergy-asthma-immunology](https://deploy-preview-565.uwh-content.dev/services/allergy-asthma-immunology) but there are other pages as well. 
- Open the VoiceOver program, and navigate down the page until you get to the benzene ring list, once VoiceOver reads the list it should say "Bullet List Start {content}"


#### Contentful space

- [`master`](https://app.contentful.com/spaces/4yx69hifndy8/home/)

#### Content model changes

#### Preview URLs

- [uwhealth.org Netlify Preview #565](https://deploy-preview-565.uwh-content.dev/)
- [patient.uwhealth.org Netlify Preview #565](https://deploy-preview-565.patient.uwh-content.dev/)
- [patient-external-content Netlify Preview #5]65(https://deploy-preview-565.patient-ext.uwh-content.dev/)

#### Screenshot(s)

## PR Task list

- [x] Fill out all sections
- [x] Check SonarCloud Code Analysis
- [x] Add GitHub labels
- [x] Request reviewers
- [ ] Send to QA for testing
</blockquote></details></details>

### 🐛 Defects

<details><summary><strong>STRY0041481, Fix: Patient Search: `searchHub` <a href="https://github.com/UWHealth/website/pull/570">(#570)</a></strong></summary><p>

Started by: @christopher-theagen<br/>Approvers: @cmatthews-uwhealth, @Cleecanth<br/></p><blockquote><details><summary>ℹ PR Details</summary>

# PR Details

## Description

Fixes bug introduced in [530](https://github.com/UWHealth/website/pull/530/commits/eb542ca240f99ab951797c2c0a4699897aea56e1#diff-985492fc4a41609ca611ea83e01a690904f63e4222d532db183f5b9d14931624R773) that set `searchHub` in the search request params (action), the result of which led searches on `patient.uwhealth.org` to use the fallback `searchHub` value "uwh-global" instead of necessary "patient-uwhealth-org". The `searchHub` value is used in Coveo `pipeline` config, which then in turn sets which sources to pull results from.

### Task(s)

- [STRY0041481](https://uwhealth.service-now.com/nav_to.do?uri=rm_story.do?sys_id=739abe3b8787f510af2e8626cebb355f%26sysparm_view=scrum)

### Documentation

- ~~[Document name here (Inline documentation format)](https://github.com/UWHealth/website/blob/NAME_OF_BRANCH/common/uwhealth-component-library/src/components/_docs/________.md)~~
- ~~[Document name here (Knowledgebase documentation format)](https://uwhealth.atlassian.net/wiki/spaces/MRTK/parent_document/child_document)~~

### Change(s)

- fix(`searchActions`): `UPDATE_PARAMS` now checking `isPatient` before setting `searchHub` (https://github.com/UWHealth/website/pull/570/commits/fe51851268e68bd499438bc1b2e2db8fd58d26e9)

### Change(s) from CR / QA

- Pending

## Testing

### How to test

- [/patient-search (deploy-preview)](https://deploy-preview-570.patient.uwh-content.dev/patient-search) should _not_ show non-patient results (like that of [PRD](https://patient.uwhealth.org/patient-search).
- Query suggestion requests on FAD & global using the "Providers" tab should yet set the `pipeline` key to a value of `uwh-providers`.
- Other searches and query suggestion searches should function as expected.

#### Contentful space

- [`master`](https://app.contentful.com/spaces/4yx69hifndy8/home/)

#### ~~Content model changes~~

| Content Model | Field name  | Type   | Change(s) |
| ------------- | ----------- | ------ | --------- |
| {modelName}   | {fieldName} | {type} | {changes} |

#### Preview URLs

- [uwhealth.org Netlify Preview #570](https://deploy-preview-570.uwh-content.dev/)
- [patient.uwhealth.org Netlify Preview #570](https://deploy-preview-570.patient.uwh-content.dev/)
- [patient-external-content Netlify Preview #570](https://deploy-preview-570.patient-ext.uwh-content.dev/)

#### Screenshot(s)

## PR Task list

- [X] Fill out all sections
- [x] Check SonarCloud Code Analysis
- [x] Add GitHub labels
- [x] Request reviewers
- [x] Send to QA for testing
</blockquote></details></details>
<details><summary><strong>fix: remove announcement from li content on Mac Voiceover <a href="https://github.com/UWHealth/website/pull/565">(#565)</a></strong></summary><p>

Started by: @da-uwhealth<br/>Approvers: @christopher-theagen<br/></p><blockquote><details><summary>ℹ PR Details</summary>

# PR Details
This PR is to fix a small defect that occurs for Mac users when they use the Voiceover (accessibility) program. CSS field "content" allows for alt text which can be overridden using a slash, and then followed by whatever text you want. 

## Description
This defect was discovered during manual testing, and this fix should not affect other voice over programs, but should instead reinforce the behaviour that they should not announce the content of the list tag, but instead should either ignore the bullet entirely or announce the word "Bullet". 

### Task(s)

- [STRY0041150](https://uwhealth.service-now.com/rm_story.do?sys_id=a0239ad4878fb550af2e8626cebb35f8&sysparm_view=&sysparm_time=1701880408282)

### Documentation
![image](https://github.com/UWHealth/website/assets/147553266/31e0749d-48c3-4757-a262-acb0d038d123)

### Change(s)
- RichTextParser.module.css


### Change(s) from CR / QA

- Pending

## Testing

### How to test
**This bug is only for the VoiceOver program as part of iOS, so testing should be done on an iOS device. **
- Navigate to the deploy preview, and utilise any page that has a benzene ring as a list bullet point, an example page is [allergy-asthma-immunology](https://deploy-preview-565.uwh-content.dev/services/allergy-asthma-immunology) but there are other pages as well. 
- Open the VoiceOver program, and navigate down the page until you get to the benzene ring list, once VoiceOver reads the list it should say "Bullet List Start {content}"


#### Contentful space

- [`master`](https://app.contentful.com/spaces/4yx69hifndy8/home/)

#### Content model changes

#### Preview URLs

- [uwhealth.org Netlify Preview #565](https://deploy-preview-565.uwh-content.dev/)
- [patient.uwhealth.org Netlify Preview #565](https://deploy-preview-565.patient.uwh-content.dev/)
- [patient-external-content Netlify Preview #5]65(https://deploy-preview-565.patient-ext.uwh-content.dev/)

#### Screenshot(s)

## PR Task list

- [x] Fill out all sections
- [x] Check SonarCloud Code Analysis
- [x] Add GitHub labels
- [x] Request reviewers
- [ ] Send to QA for testing
</blockquote></details></details>
<details><summary><strong>Fix: reduce production bundle <a href="https://github.com/UWHealth/website/pull/568">(#568)</a></strong></summary><p>

Started by: @Cleecanth<br/>Approvers: @cmatthews-uwhealth<br/></p><blockquote><details><summary>ℹ PR Details</summary>

# PR Details

## Description

Fixes the 1MB size increase caused by #508 

#### Preview URLs

- [uwhealth.org Netlify Preview #0000](https://deploy-preview-0000.uwh-content.dev/)
- [patient.uwhealth.org Netlify Preview #0000](https://deploy-preview-0000.patient.uwh-content.dev/)
- [patient-external-content Netlify Preview #0000](https://deploy-preview-0000.patient-ext.uwh-content.dev/)

#### Screenshot(s)

##### Deploy file sizes
**Before:**
![image](https://github.com/UWHealth/website/assets/1230957/6c1a7670-1766-4946-94f6-52620569a2ff)

**After this PR:**
![image](https://github.com/UWHealth/website/assets/1230957/d7f3e01d-919c-4c5b-9d81-2226bb490d3a)


## PR Task list

- [x] Fill out all sections
- [x] Check SonarCloud Code Analysis
- [x] Add GitHub labels
- [x] Request reviewers
- [x] Send to QA for testing
</blockquote></details></details>
<details><summary><strong>Fix: STRY0033374 - tall card images <a href="https://github.com/UWHealth/website/pull/561">(#561)</a></strong></summary><p>

Started by: @Cleecanth<br/>Approvers: @christopher-theagen<br/></p><blockquote><details><summary>ℹ PR Details</summary>

# PR Details

## Description

Essentially makes tall card images act the way they always should have. Removes the unnecessary double-crop that made them virtually impossible to use. 

This will change how these types of cards layout on a page — which would ordinarily constitute a major change — but since their display was so crazy, they are very rarely used on the site. This will mostly affect the [Senior leadership](https://www.uwhealth.org/about-us/uw-health-executive-leadership) pages.

### Task(s)

- [STRY0033374](https://uwhealth.service-now.com/nav_to.do?uri=rm_story.do?sys_id=STRY0033374%26sysparm_view=scrum)


### Change(s)

- Removes max height from "tall" card images and enforces the aspect ratio at the image level.
- Fixes buttons in cards from overflowing their container (see [cancer](https://www.uwhealth.org/services/cancer))
- Fixes an "undefined" class that shows up in card groups.

### Change(s) from CR / QA

- Pending

## Testing

### How to test

- Compare the cards in the first section of [cancer PRD](https://www.uwhealth.org/services/cancer) to [cancer dev](https://deploy-preview-561.uwh-content.dev/services/cancer) to make sure the images and cards behave correctly.
- Compare the cards for leadership: [PRD](https://www.uwhealth.org/about-us/uw-health-executive-leadership) vs [Dev](https://deploy-preview-561.uwh-content.dev/about-us/uw-health-executive-leadership)

#### Contentful space

- [`master`](https://app.contentful.com/spaces/4yx69hifndy8/home/)

#### Preview URLs

- [uwhealth.org Netlify Preview #561](https://deploy-preview-561.uwh-content.dev/)
- [patient.uwhealth.org Netlify Preview #561](https://deploy-preview-561.patient.uwh-content.dev/)
- [patient-external-content Netlify Preview #561](https://deploy-preview-561.patient-ext.uwh-content.dev/)

#### Screenshot(s)
Before:
![image](https://github.com/UWHealth/website/assets/1230957/5dd8f7ab-85a2-4694-b0d1-ac43f68a2664)
![image](https://github.com/UWHealth/website/assets/1230957/7ebfc297-3f4b-4615-bf30-1a63ff6f3a2a)

After:
![image](https://github.com/UWHealth/website/assets/1230957/60998033-6d7f-4569-b817-92b6ec3377f0)
![image](https://github.com/UWHealth/website/assets/1230957/53ddabc0-3424-4ccd-8366-d392b752160b)


## PR Task list

- [x] Fill out all sections
- [x] Check SonarCloud Code Analysis
- [x] Add GitHub labels
- [x] Request reviewers
- [x] Send to QA for testing
</blockquote></details></details>
<details><summary><strong>fix: Jest config cleanup + lerna removal <a href="https://github.com/UWHealth/website/pull/566">(#566)</a></strong></summary><p>

Started by: @moop-moop<br/>Approvers: @da-uwhealth, @david-pulkowski, @christopher-theagen, @JasonRitthaler, @Cleecanth, @cmatthews-uwhealth<br/></p><blockquote><details><summary>ℹ PR Details</summary>

# PR Details

## Description

Updating jest configurations to do the following:
- same `jest` version of `29` for all of monorepo, updated in the monorepo root
- jest configurations inherited from a base configuration
- jest itself is only used to run all tests in all packages in monorepo from root, lerna not needed
- each package has its own jest configuration file, with special configurations as needed.
- jest run from the mono repo root creates all the combined coverage and test reports, no extra scripts needed.
- jest configuration at the root of monorepo include a memory configuration "hack" provided by jest to counteract a Node memory leak with testing.
- build-tools tests are properly included in the coverage report and reporting
- Confirmed test running changes also work on Windows native.

Fix: a GH Actions workflow logic bug was fixed to allow proper workflow cancelling logic

Chore: lerna, nyc, pm2 libraries were able to be removed.

### Task(s)

- [STRY0040849](https://uwhealth.service-now.com/nav_to.do?uri=rm_story.do?sys_id=42384dbd8772b9d0af2e8626cebb35fd%26sysparm_view=scrum)

### Documentation

There were minimal changes to the names of npm scripts. Simplification mostly, as options were moved to proper configuration files.

## Testing

### How to test

Needs local testing of jest on Windows if necessary. Including jest watch type functionality.

## PR Task list

- [x] Fill out all sections
- [x] Check SonarCloud Code Analysis
- [x] Add GitHub labels
- [x] Request reviewers
- [ ] Send to QA for testing</blockquote></details></details>
<details><summary><strong>fix: update cancel GH workflows early action <a href="https://github.com/UWHealth/website/pull/557">(#557)</a></strong></summary><p>

Started by: @moop-moop<br/>Approvers: @david-pulkowski<br/></p><blockquote><details><summary>ℹ PR Details</summary>

# PR Details

## Description

bug: fixing a little logic error in the cancel job early github composite action. The bug causes push events to get cancelled early.
bug: updated VRT screenshots to match updated consistency.

## Testing

### How to test

When the push to development branch occurs after merge, the Code Quality tests should still all run.

## PR Task list

- [x] Fill out all sections
- [x] Check SonarCloud Code Analysis
- [x] Add GitHub labels
- [x] Request reviewers
- [ ] Send to QA for testing
</blockquote></details></details>

### 📦 Dependencies

<details><summary><strong>fix: Jest config cleanup + lerna removal <a href="https://github.com/UWHealth/website/pull/566">(#566)</a></strong></summary><p>

Started by: @moop-moop<br/>Approvers: @da-uwhealth, @david-pulkowski, @christopher-theagen, @JasonRitthaler, @Cleecanth, @cmatthews-uwhealth<br/></p><blockquote><details><summary>ℹ PR Details</summary>

# PR Details

## Description

Updating jest configurations to do the following:
- same `jest` version of `29` for all of monorepo, updated in the monorepo root
- jest configurations inherited from a base configuration
- jest itself is only used to run all tests in all packages in monorepo from root, lerna not needed
- each package has its own jest configuration file, with special configurations as needed.
- jest run from the mono repo root creates all the combined coverage and test reports, no extra scripts needed.
- jest configuration at the root of monorepo include a memory configuration "hack" provided by jest to counteract a Node memory leak with testing.
- build-tools tests are properly included in the coverage report and reporting
- Confirmed test running changes also work on Windows native.

Fix: a GH Actions workflow logic bug was fixed to allow proper workflow cancelling logic

Chore: lerna, nyc, pm2 libraries were able to be removed.

### Task(s)

- [STRY0040849](https://uwhealth.service-now.com/nav_to.do?uri=rm_story.do?sys_id=42384dbd8772b9d0af2e8626cebb35fd%26sysparm_view=scrum)

### Documentation

There were minimal changes to the names of npm scripts. Simplification mostly, as options were moved to proper configuration files.

## Testing

### How to test

Needs local testing of jest on Windows if necessary. Including jest watch type functionality.

## PR Task list

- [x] Fill out all sections
- [x] Check SonarCloud Code Analysis
- [x] Add GitHub labels
- [x] Request reviewers
- [ ] Send to QA for testing</blockquote></details></details>

