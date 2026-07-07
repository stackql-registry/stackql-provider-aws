--- 
title: code_review_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - code_review_jobs
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

Creates, updates, deletes, gets or lists a <code>code_review_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="code_review_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityagent.code_review_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_code_review_jobs"
    values={[
        { label: 'batch_get_code_review_jobs', value: 'batch_get_code_review_jobs' }
    ]}
>
<TabItem value="batch_get_code_review_jobs">

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
    <td><CopyableCode code="codeReviewJobs" /></td>
    <td><code>array</code></td>
    <td>The list of code review jobs that were found.</td>
</tr>
<tr>
    <td><CopyableCode code="notFound" /></td>
    <td><code>array</code></td>
    <td>List of code review job IDs.</td>
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
    <td><a href="#batch_get_code_review_jobs"><CopyableCode code="batch_get_code_review_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about one or more code review jobs in an agent space.</td>
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
    defaultValue="batch_get_code_review_jobs"
    values={[
        { label: 'batch_get_code_review_jobs', value: 'batch_get_code_review_jobs' }
    ]}
>
<TabItem value="batch_get_code_review_jobs">

Retrieves information about one or more code review jobs in an agent space.

```sql
SELECT
codeReviewJobs,
notFound
FROM aws.securityagent.code_review_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
