--- 
title: feedbacks
hide_title: false
hide_table_of_contents: false
keywords:
  - feedbacks
  - devops_guru
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

Creates, updates, deletes, gets or lists a <code>feedbacks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="feedbacks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_guru.feedbacks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_feedback"
    values={[
        { label: 'describe_feedback', value: 'describe_feedback' }
    ]}
>
<TabItem value="describe_feedback">

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
    <td><CopyableCode code="Feedback" /></td>
    <td><code>string</code></td>
    <td>The feedback provided by the customer. (VALID_COLLECTION, RECOMMENDATION_USEFUL, ALERT_TOO_SENSITIVE, DATA_NOISY_ANOMALY, DATA_INCORRECT)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The insight feedback ID. (pattern: &lt;code&gt;^&#91;\w-&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#describe_feedback"><CopyableCode code="describe_feedback" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the most recent feedback submitted in the current Amazon Web Services account and Region.</td>
</tr>
<tr>
    <td><a href="#put_feedback"><CopyableCode code="put_feedback" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Collects customer feedback about the specified insight.</td>
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
    defaultValue="describe_feedback"
    values={[
        { label: 'describe_feedback', value: 'describe_feedback' }
    ]}
>
<TabItem value="describe_feedback">

Returns the most recent feedback submitted in the current Amazon Web Services account and Region.

```sql
SELECT
Feedback,
Id
FROM aws.devops_guru.feedbacks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_feedback"
    values={[
        { label: 'put_feedback', value: 'put_feedback' }
    ]}
>
<TabItem value="put_feedback">

Collects customer feedback about the specified insight.

```sql
REPLACE aws.devops_guru.feedbacks
SET 
InsightFeedback = '{{ InsightFeedback }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
