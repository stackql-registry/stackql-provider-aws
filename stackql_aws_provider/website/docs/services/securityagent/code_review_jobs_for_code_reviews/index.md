--- 
title: code_review_jobs_for_code_reviews
hide_title: false
hide_table_of_contents: false
keywords:
  - code_review_jobs_for_code_reviews
  - securityagent
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

Creates, updates, deletes, gets or lists a <code>code_review_jobs_for_code_reviews</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="code_review_jobs_for_code_reviews" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityagent.code_review_jobs_for_code_reviews" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_code_review_jobs_for_code_review"
    values={[
        { label: 'list_code_review_jobs_for_code_review', value: 'list_code_review_jobs_for_code_review' }
    ]}
>
<TabItem value="list_code_review_jobs_for_code_review">

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
    <td><CopyableCode code="codeReviewId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the code review associated with the job.</td>
</tr>
<tr>
    <td><CopyableCode code="codeReviewJobId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the code review job.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the code review job was created, in UTC format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the code review job. (IN_PROGRESS, STOPPING, STOPPED, FAILED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the code review job.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the code review job was last updated, in UTC format.</td>
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
    <td><a href="#list_code_review_jobs_for_code_review"><CopyableCode code="list_code_review_jobs_for_code_review" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of code review job summaries for the specified code review configuration.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_code_review_jobs_for_code_review"
    values={[
        { label: 'list_code_review_jobs_for_code_review', value: 'list_code_review_jobs_for_code_review' }
    ]}
>
<TabItem value="list_code_review_jobs_for_code_review">

Returns a paginated list of code review job summaries for the specified code review configuration.

```sql
SELECT
codeReviewId,
codeReviewJobId,
createdAt,
status,
title_,
updatedAt
FROM aws.securityagent.code_review_jobs_for_code_reviews
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
