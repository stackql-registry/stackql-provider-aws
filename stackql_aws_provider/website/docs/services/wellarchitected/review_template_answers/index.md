--- 
title: review_template_answers
hide_title: false
hide_table_of_contents: false
keywords:
  - review_template_answers
  - wellarchitected
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>review_template_answers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="review_template_answers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.review_template_answers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_review_template_answer"
    values={[
        { label: 'get_review_template_answer', value: 'get_review_template_answer' },
        { label: 'list_review_template_answers', value: 'list_review_template_answers' }
    ]}
>
<TabItem value="get_review_template_answer">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="answer" /></td>
    <td><code>object</code></td>
    <td>An answer of the question.</td>
</tr>
<tr>
    <td><CopyableCode code="lens_alias" /></td>
    <td><code>string</code></td>
    <td>The alias of the lens. For Amazon Web Services official lenses, this is either the lens alias, such as serverless, or the lens ARN, such as arn:aws:wellarchitected:us-east-1::lens/serverless. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses. For custom lenses, this is the lens ARN, such as arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef. Each lens is identified by its LensSummary$LensAlias.</td>
</tr>
<tr>
    <td><CopyableCode code="template_arn" /></td>
    <td><code>string</code></td>
    <td>The review template ARN. (pattern: &lt;code&gt;arn:aws(-us-gov|-iso(-&#91;a-z&#93;)?|-cn)?:wellarchitected:&#91;a-z&#93;&#123;2&#125;(-gov|-iso(&#91;a-z&#93;)?)?-&#91;a-z&#93;+-\d:\d&#123;12&#125;:(review-template)/&#91;a-f0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_review_template_answers">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="answer_summaries" /></td>
    <td><code>array</code></td>
    <td>List of answer summaries of a lens review in a review template.</td>
</tr>
<tr>
    <td><CopyableCode code="lens_alias" /></td>
    <td><code>string</code></td>
    <td>The alias of the lens. For Amazon Web Services official lenses, this is either the lens alias, such as serverless, or the lens ARN, such as arn:aws:wellarchitected:us-east-1::lens/serverless. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses. For custom lenses, this is the lens ARN, such as arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef. Each lens is identified by its LensSummary$LensAlias.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next set of results. (pattern: &lt;code&gt;&#91;A-Za-z0-9+\/=_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="template_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the review template. (pattern: &lt;code&gt;arn:aws(-us-gov|-iso(-&#91;a-z&#93;)?|-cn)?:wellarchitected:&#91;a-z&#93;&#123;2&#125;(-gov|-iso(&#91;a-z&#93;)?)?-&#91;a-z&#93;+-\d:\d&#123;12&#125;:(review-template)/&#91;a-f0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_review_template_answer"><CopyableCode code="get_review_template_answer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template_arn"><code>template_arn</code></a>, <a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-question_id"><code>question_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get review template answer.</td>
</tr>
<tr>
    <td><a href="#list_review_template_answers"><CopyableCode code="list_review_template_answers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template_arn"><code>template_arn</code></a>, <a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PillarId"><code>PillarId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>List the answers of a review template.</td>
</tr>
<tr>
    <td><a href="#update_review_template_answer"><CopyableCode code="update_review_template_answer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-template_arn"><code>template_arn</code></a>, <a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-question_id"><code>question_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update a review template answer.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-lens_alias">
    <td><CopyableCode code="lens_alias" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-question_id">
    <td><CopyableCode code="question_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-template_arn">
    <td><CopyableCode code="template_arn" /></td>
    <td><code>string</code></td>
    <td>The review template ARN.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for this request.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-PillarId">
    <td><CopyableCode code="PillarId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_review_template_answer"
    values={[
        { label: 'get_review_template_answer', value: 'get_review_template_answer' },
        { label: 'list_review_template_answers', value: 'list_review_template_answers' }
    ]}
>
<TabItem value="get_review_template_answer">

Get review template answer.

```sql
SELECT
answer,
lens_alias,
template_arn
FROM aws.wellarchitected.review_template_answers
WHERE template_arn = '{{ template_arn }}' -- required
AND lens_alias = '{{ lens_alias }}' -- required
AND question_id = '{{ question_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_review_template_answers">

List the answers of a review template.

```sql
SELECT
answer_summaries,
lens_alias,
next_token,
template_arn
FROM aws.wellarchitected.review_template_answers
WHERE template_arn = '{{ template_arn }}' -- required
AND lens_alias = '{{ lens_alias }}' -- required
AND region = '{{ region }}' -- required
AND PillarId = '{{ PillarId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_review_template_answer"
    values={[
        { label: 'update_review_template_answer', value: 'update_review_template_answer' }
    ]}
>
<TabItem value="update_review_template_answer">

Update a review template answer.

```sql
UPDATE aws.wellarchitected.review_template_answers
SET 
SelectedChoices = '{{ SelectedChoices }}',
ChoiceUpdates = '{{ ChoiceUpdates }}',
Notes = '{{ Notes }}',
IsApplicable = {{ IsApplicable }},
Reason = '{{ Reason }}'
WHERE 
template_arn = '{{ template_arn }}' --required
AND lens_alias = '{{ lens_alias }}' --required
AND question_id = '{{ question_id }}' --required
AND region = '{{ region }}' --required
RETURNING
answer,
lens_alias,
template_arn;
```
</TabItem>
</Tabs>
