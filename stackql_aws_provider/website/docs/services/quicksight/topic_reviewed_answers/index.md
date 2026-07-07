--- 
title: topic_reviewed_answers
hide_title: false
hide_table_of_contents: false
keywords:
  - topic_reviewed_answers
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>topic_reviewed_answers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="topic_reviewed_answers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.topic_reviewed_answers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_topic_reviewed_answers"
    values={[
        { label: 'list_topic_reviewed_answers', value: 'list_topic_reviewed_answers' }
    ]}
>
<TabItem value="list_topic_reviewed_answers">

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
    <td><CopyableCode code="Answers" /></td>
    <td><code>array</code></td>
    <td>The definition of all Answers in the topic.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="TopicArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the topic.</td>
</tr>
<tr>
    <td><CopyableCode code="TopicId" /></td>
    <td><code>string</code></td>
    <td>The ID for the topic that contains the reviewed answer that you want to list. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. (pattern: &lt;code&gt;^&#91;A-Za-z0-9-_.\\+&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#list_topic_reviewed_answers"><CopyableCode code="list_topic_reviewed_answers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all reviewed answers for a Q Topic.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that containd the reviewed answers that you want listed.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-topic_id">
    <td><CopyableCode code="topic_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the topic that contains the reviewed answer that you want to list. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_topic_reviewed_answers"
    values={[
        { label: 'list_topic_reviewed_answers', value: 'list_topic_reviewed_answers' }
    ]}
>
<TabItem value="list_topic_reviewed_answers">

Lists all reviewed answers for a Q Topic.

```sql
SELECT
Answers,
RequestId,
Status,
TopicArn,
TopicId
FROM aws.quicksight.topic_reviewed_answers
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND topic_id = '{{ topic_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
