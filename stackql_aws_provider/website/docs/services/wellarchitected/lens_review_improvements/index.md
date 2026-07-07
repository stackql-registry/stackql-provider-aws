--- 
title: lens_review_improvements
hide_title: false
hide_table_of_contents: false
keywords:
  - lens_review_improvements
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

Creates, updates, deletes, gets or lists a <code>lens_review_improvements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lens_review_improvements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.lens_review_improvements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_lens_review_improvements"
    values={[
        { label: 'list_lens_review_improvements', value: 'list_lens_review_improvements' }
    ]}
>
<TabItem value="list_lens_review_improvements">

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
    <td><CopyableCode code="ImprovementSummaries" /></td>
    <td><code>array</code></td>
    <td>List of improvement summaries of lens review in a workload.</td>
</tr>
<tr>
    <td><CopyableCode code="LensAlias" /></td>
    <td><code>string</code></td>
    <td>The alias of the lens. For Amazon Web Services official lenses, this is either the lens alias, such as serverless, or the lens ARN, such as arn:aws:wellarchitected:us-east-1::lens/serverless. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses. For custom lenses, this is the lens ARN, such as arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef. Each lens is identified by its LensSummary$LensAlias.</td>
</tr>
<tr>
    <td><CopyableCode code="LensArn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the lens.</td>
</tr>
<tr>
    <td><CopyableCode code="MilestoneNumber" /></td>
    <td><code>integer</code></td>
    <td>The milestone number. A workload can have a maximum of 100 milestones.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next set of results.</td>
</tr>
<tr>
    <td><CopyableCode code="WorkloadId" /></td>
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
    <td><a href="#list_lens_review_improvements"><CopyableCode code="list_lens_review_improvements" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PillarId"><code>PillarId</code></a>, <a href="#parameter-MilestoneNumber"><code>MilestoneNumber</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-QuestionPriority"><code>QuestionPriority</code></a></td>
    <td>List the improvements of a particular lens review.</td>
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
    defaultValue="list_lens_review_improvements"
    values={[
        { label: 'list_lens_review_improvements', value: 'list_lens_review_improvements' }
    ]}
>
<TabItem value="list_lens_review_improvements">

List the improvements of a particular lens review.

```sql
SELECT
ImprovementSummaries,
LensAlias,
LensArn,
MilestoneNumber,
NextToken,
WorkloadId
FROM aws.wellarchitected.lens_review_improvements
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
