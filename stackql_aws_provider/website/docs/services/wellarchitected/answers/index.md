--- 
title: answers
hide_title: false
hide_table_of_contents: false
keywords:
  - answers
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

Creates, updates, deletes, gets or lists an <code>answers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="answers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.answers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_answer"
    values={[
        { label: 'get_answer', value: 'get_answer' },
        { label: 'list_answers', value: 'list_answers' }
    ]}
>
<TabItem value="get_answer">

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
    <td><CopyableCode code="lens_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the lens.</td>
</tr>
<tr>
    <td><CopyableCode code="milestone_number" /></td>
    <td><code>integer</code></td>
    <td>The milestone number. A workload can have a maximum of 100 milestones.</td>
</tr>
<tr>
    <td><CopyableCode code="workload_id" /></td>
    <td><code>string</code></td>
    <td>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_answers">

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
    <td>List of answer summaries of lens review in a workload.</td>
</tr>
<tr>
    <td><CopyableCode code="lens_alias" /></td>
    <td><code>string</code></td>
    <td>The alias of the lens. For Amazon Web Services official lenses, this is either the lens alias, such as serverless, or the lens ARN, such as arn:aws:wellarchitected:us-east-1::lens/serverless. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses. For custom lenses, this is the lens ARN, such as arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef. Each lens is identified by its LensSummary$LensAlias.</td>
</tr>
<tr>
    <td><CopyableCode code="lens_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the lens.</td>
</tr>
<tr>
    <td><CopyableCode code="milestone_number" /></td>
    <td><code>integer</code></td>
    <td>The milestone number. A workload can have a maximum of 100 milestones.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next set of results.</td>
</tr>
<tr>
    <td><CopyableCode code="workload_id" /></td>
    <td><code>string</code></td>
    <td>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_answer"><CopyableCode code="get_answer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-question_id"><code>question_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MilestoneNumber"><code>MilestoneNumber</code></a></td>
    <td>Get the answer to a specific question in a workload review.</td>
</tr>
<tr>
    <td><a href="#list_answers"><CopyableCode code="list_answers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PillarId"><code>PillarId</code></a>, <a href="#parameter-MilestoneNumber"><code>MilestoneNumber</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-QuestionPriority"><code>QuestionPriority</code></a></td>
    <td>List of answers for a particular workload and lens.</td>
</tr>
<tr>
    <td><a href="#update_answer"><CopyableCode code="update_answer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-question_id"><code>question_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update the answer to a specific question in a workload review.</td>
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
<tr id="parameter-workload_id">
    <td><CopyableCode code="workload_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for this request.</td>
</tr>
<tr id="parameter-MilestoneNumber">
    <td><CopyableCode code="MilestoneNumber" /></td>
    <td><code>integer</code></td>
    <td></td>
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
<tr id="parameter-QuestionPriority">
    <td><CopyableCode code="QuestionPriority" /></td>
    <td><code>string</code></td>
    <td>The priority of the question.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_answer"
    values={[
        { label: 'get_answer', value: 'get_answer' },
        { label: 'list_answers', value: 'list_answers' }
    ]}
>
<TabItem value="get_answer">

Get the answer to a specific question in a workload review.

```sql
SELECT
answer,
lens_alias,
lens_arn,
milestone_number,
workload_id
FROM aws.wellarchitected.answers
WHERE workload_id = '{{ workload_id }}' -- required
AND lens_alias = '{{ lens_alias }}' -- required
AND question_id = '{{ question_id }}' -- required
AND region = '{{ region }}' -- required
AND MilestoneNumber = '{{ MilestoneNumber }}'
;
```
</TabItem>
<TabItem value="list_answers">

List of answers for a particular workload and lens.

```sql
SELECT
answer_summaries,
lens_alias,
lens_arn,
milestone_number,
next_token,
workload_id
FROM aws.wellarchitected.answers
WHERE workload_id = '{{ workload_id }}' -- required
AND lens_alias = '{{ lens_alias }}' -- required
AND region = '{{ region }}' -- required
AND PillarId = '{{ PillarId }}'
AND MilestoneNumber = '{{ MilestoneNumber }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND QuestionPriority = '{{ QuestionPriority }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_answer"
    values={[
        { label: 'update_answer', value: 'update_answer' }
    ]}
>
<TabItem value="update_answer">

Update the answer to a specific question in a workload review.

```sql
UPDATE aws.wellarchitected.answers
SET 
SelectedChoices = '{{ SelectedChoices }}',
ChoiceUpdates = '{{ ChoiceUpdates }}',
Notes = '{{ Notes }}',
IsApplicable = {{ IsApplicable }},
Reason = '{{ Reason }}'
WHERE 
workload_id = '{{ workload_id }}' --required
AND lens_alias = '{{ lens_alias }}' --required
AND question_id = '{{ question_id }}' --required
AND region = '{{ region }}' --required
RETURNING
answer,
lens_alias,
lens_arn,
workload_id;
```
</TabItem>
</Tabs>
