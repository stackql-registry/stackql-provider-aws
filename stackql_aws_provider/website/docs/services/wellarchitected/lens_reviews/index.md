--- 
title: lens_reviews
hide_title: false
hide_table_of_contents: false
keywords:
  - lens_reviews
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

Creates, updates, deletes, gets or lists a <code>lens_reviews</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lens_reviews" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.lens_reviews" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_lens_review"
    values={[
        { label: 'get_lens_review', value: 'get_lens_review' },
        { label: 'list_lens_reviews', value: 'list_lens_reviews' }
    ]}
>
<TabItem value="get_lens_review">

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
    <td><CopyableCode code="LensReview" /></td>
    <td><code>object</code></td>
    <td>A lens review of a question.</td>
</tr>
<tr>
    <td><CopyableCode code="MilestoneNumber" /></td>
    <td><code>integer</code></td>
    <td>The milestone number. A workload can have a maximum of 100 milestones.</td>
</tr>
<tr>
    <td><CopyableCode code="WorkloadId" /></td>
    <td><code>string</code></td>
    <td>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_lens_reviews">

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
    <td><CopyableCode code="LensReviewSummaries" /></td>
    <td><code>array</code></td>
    <td>List of lens summaries of lens reviews of a workload.</td>
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
    <td><a href="#get_lens_review"><CopyableCode code="get_lens_review" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MilestoneNumber"><code>MilestoneNumber</code></a></td>
    <td>Get lens review.</td>
</tr>
<tr>
    <td><a href="#list_lens_reviews"><CopyableCode code="list_lens_reviews" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MilestoneNumber"><code>MilestoneNumber</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>List lens reviews for a particular workload.</td>
</tr>
<tr>
    <td><a href="#update_lens_review"><CopyableCode code="update_lens_review" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update lens review for a particular workload.</td>
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
    <td></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_lens_review"
    values={[
        { label: 'get_lens_review', value: 'get_lens_review' },
        { label: 'list_lens_reviews', value: 'list_lens_reviews' }
    ]}
>
<TabItem value="get_lens_review">

Get lens review.

```sql
SELECT
LensReview,
MilestoneNumber,
WorkloadId
FROM aws.wellarchitected.lens_reviews
WHERE workload_id = '{{ workload_id }}' -- required
AND lens_alias = '{{ lens_alias }}' -- required
AND region = '{{ region }}' -- required
AND MilestoneNumber = '{{ MilestoneNumber }}'
;
```
</TabItem>
<TabItem value="list_lens_reviews">

List lens reviews for a particular workload.

```sql
SELECT
LensReviewSummaries,
MilestoneNumber,
NextToken,
WorkloadId
FROM aws.wellarchitected.lens_reviews
WHERE workload_id = '{{ workload_id }}' -- required
AND region = '{{ region }}' -- required
AND MilestoneNumber = '{{ MilestoneNumber }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_lens_review"
    values={[
        { label: 'update_lens_review', value: 'update_lens_review' }
    ]}
>
<TabItem value="update_lens_review">

Update lens review for a particular workload.

```sql
UPDATE aws.wellarchitected.lens_reviews
SET 
LensNotes = '{{ LensNotes }}',
PillarNotes = '{{ PillarNotes }}',
JiraConfiguration = '{{ JiraConfiguration }}'
WHERE 
workload_id = '{{ workload_id }}' --required
AND lens_alias = '{{ lens_alias }}' --required
AND region = '{{ region }}' --required
RETURNING
LensReview,
WorkloadId;
```
</TabItem>
</Tabs>
