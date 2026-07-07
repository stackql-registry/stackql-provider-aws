--- 
title: queue_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - queue_urls
  - sqs
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

Creates, updates, deletes, gets or lists a <code>queue_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="queue_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sqs.queue_urls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_queue_url"
    values={[
        { label: 'get_queue_url', value: 'get_queue_url' }
    ]}
>
<TabItem value="get_queue_url">

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
    <td><CopyableCode code="QueueUrl" /></td>
    <td><code>string</code></td>
    <td>The URL of the queue.</td>
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
    <td><a href="#get_queue_url"><CopyableCode code="get_queue_url" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The GetQueueUrl API returns the URL of an existing Amazon SQS queue. This is useful when you know the queue's name but need to retrieve its URL for further operations. To access a queue owned by another Amazon Web Services account, use the QueueOwnerAWSAccountId parameter to specify the account ID of the queue's owner. Note that the queue owner must grant you the necessary permissions to access the queue. For more information about accessing shared queues, see the AddPermission API or Allow developers to write messages to a shared queue in the Amazon SQS Developer Guide.</td>
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
    defaultValue="get_queue_url"
    values={[
        { label: 'get_queue_url', value: 'get_queue_url' }
    ]}
>
<TabItem value="get_queue_url">

The GetQueueUrl API returns the URL of an existing Amazon SQS queue. This is useful when you know the queue's name but need to retrieve its URL for further operations. To access a queue owned by another Amazon Web Services account, use the QueueOwnerAWSAccountId parameter to specify the account ID of the queue's owner. Note that the queue owner must grant you the necessary permissions to access the queue. For more information about accessing shared queues, see the AddPermission API or Allow developers to write messages to a shared queue in the Amazon SQS Developer Guide.

```sql
SELECT
QueueUrl
FROM aws.sqs.queue_urls
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
