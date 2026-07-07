--- 
title: destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - destinations
  - logs
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

Creates, updates, deletes, gets or lists a <code>destinations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="destinations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.destinations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_destinations"
    values={[
        { label: 'describe_destinations', value: 'describe_destinations' }
    ]}
>
<TabItem value="describe_destinations">

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
    <td><CopyableCode code="accessPolicy" /></td>
    <td><code>string</code></td>
    <td>An IAM policy document that governs which Amazon Web Services accounts can create subscription filters against this destination.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of this destination.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>The creation time of the destination, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationName" /></td>
    <td><code>string</code></td>
    <td>The name of the destination. (pattern: &lt;code&gt;&#91;^:*&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>A role for impersonation, used when delivering log events to the target.</td>
</tr>
<tr>
    <td><CopyableCode code="targetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the physical target where the log events are delivered (for example, a Kinesis stream).</td>
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
    <td><a href="#describe_destinations"><CopyableCode code="describe_destinations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all your destinations. The results are ASCII-sorted by destination name.</td>
</tr>
<tr>
    <td><a href="#put_destination"><CopyableCode code="put_destination" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-destinationName"><code>destinationName</code></a>, <a href="#parameter-targetArn"><code>targetArn</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Creates or updates a destination. This operation is used only to create destinations for cross-account subscriptions. A destination encapsulates a physical resource (such as an Amazon Kinesis stream). With a destination, you can subscribe to a real-time stream of log events for a different account, ingested using PutLogEvents. Through an access policy, a destination controls what is written to it. By default, PutDestination does not set any access policy with the destination, which means a cross-account user cannot call PutSubscriptionFilter against this destination. To enable this, the destination owner must call PutDestinationPolicy after PutDestination. To perform a PutDestination operation, you must also have the iam:PassRole permission.</td>
</tr>
<tr>
    <td><a href="#put_destination_policy"><CopyableCode code="put_destination_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-destinationName"><code>destinationName</code></a>, <a href="#parameter-accessPolicy"><code>accessPolicy</code></a></td>
    <td></td>
    <td>Creates or updates an access policy associated with an existing destination. An access policy is an IAM policy document that is used to authorize claims to register a subscription filter against a given destination.</td>
</tr>
<tr>
    <td><a href="#delete_destination"><CopyableCode code="delete_destination" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified destination, and eventually disables all the subscription filters that publish to it. This operation does not delete the physical resource encapsulated by the destination.</td>
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
    defaultValue="describe_destinations"
    values={[
        { label: 'describe_destinations', value: 'describe_destinations' }
    ]}
>
<TabItem value="describe_destinations">

Lists all your destinations. The results are ASCII-sorted by destination name.

```sql
SELECT
accessPolicy,
arn,
creationTime,
destinationName,
roleArn,
targetArn
FROM aws.logs.destinations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_destination"
    values={[
        { label: 'put_destination', value: 'put_destination' },
        { label: 'put_destination_policy', value: 'put_destination_policy' }
    ]}
>
<TabItem value="put_destination">

Creates or updates a destination. This operation is used only to create destinations for cross-account subscriptions. A destination encapsulates a physical resource (such as an Amazon Kinesis stream). With a destination, you can subscribe to a real-time stream of log events for a different account, ingested using PutLogEvents. Through an access policy, a destination controls what is written to it. By default, PutDestination does not set any access policy with the destination, which means a cross-account user cannot call PutSubscriptionFilter against this destination. To enable this, the destination owner must call PutDestinationPolicy after PutDestination. To perform a PutDestination operation, you must also have the iam:PassRole permission.

```sql
REPLACE aws.logs.destinations
SET 
destinationName = '{{ destinationName }}',
targetArn = '{{ targetArn }}',
roleArn = '{{ roleArn }}',
tags = '{{ tags }}'
WHERE 
region = '{{ region }}' --required
AND destinationName = '{{ destinationName }}' --required
AND targetArn = '{{ targetArn }}' --required
AND roleArn = '{{ roleArn }}' --required
RETURNING
destination;
```
</TabItem>
<TabItem value="put_destination_policy">

Creates or updates an access policy associated with an existing destination. An access policy is an IAM policy document that is used to authorize claims to register a subscription filter against a given destination.

```sql
REPLACE aws.logs.destinations
SET 
destinationName = '{{ destinationName }}',
accessPolicy = '{{ accessPolicy }}',
forceUpdate = {{ forceUpdate }}
WHERE 
region = '{{ region }}' --required
AND destinationName = '{{ destinationName }}' --required
AND accessPolicy = '{{ accessPolicy }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_destination"
    values={[
        { label: 'delete_destination', value: 'delete_destination' }
    ]}
>
<TabItem value="delete_destination">

Deletes the specified destination, and eventually disables all the subscription filters that publish to it. This operation does not delete the physical resource encapsulated by the destination.

```sql
DELETE FROM aws.logs.destinations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
