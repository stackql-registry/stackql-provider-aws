--- 
title: source_identifier_to_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - source_identifier_to_subscriptions
  - rds
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

Creates, updates, deletes, gets or lists a <code>source_identifier_to_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="source_identifier_to_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.source_identifier_to_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#add_source_identifier_to_subscription"><CopyableCode code="add_source_identifier_to_subscription" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-SubscriptionName"><code>SubscriptionName</code></a>, <a href="#parameter-SourceIdentifier"><code>SourceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds a source identifier to an existing RDS event notification subscription.</td>
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
<tr id="parameter-SourceIdentifier">
    <td><CopyableCode code="SourceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the event source to be added. Constraints: If the source type is a DB instance, a DBInstanceIdentifier value must be supplied. If the source type is a DB cluster, a DBClusterIdentifier value must be supplied. If the source type is a DB parameter group, a DBParameterGroupName value must be supplied. If the source type is a DB security group, a DBSecurityGroupName value must be supplied. If the source type is a DB snapshot, a DBSnapshotIdentifier value must be supplied. If the source type is a DB cluster snapshot, a DBClusterSnapshotIdentifier value must be supplied. If the source type is an RDS Proxy, a DBProxyName value must be supplied.</td>
</tr>
<tr id="parameter-SubscriptionName">
    <td><CopyableCode code="SubscriptionName" /></td>
    <td><code>string</code></td>
    <td>The name of the RDS event notification subscription you want to add a source identifier to.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="add_source_identifier_to_subscription"
    values={[
        { label: 'add_source_identifier_to_subscription', value: 'add_source_identifier_to_subscription' }
    ]}
>
<TabItem value="add_source_identifier_to_subscription">

Adds a source identifier to an existing RDS event notification subscription.

```sql
UPDATE aws.rds.source_identifier_to_subscriptions
SET 
-- No updatable properties
WHERE 
SubscriptionName = '{{ SubscriptionName }}' --required
AND SourceIdentifier = '{{ SourceIdentifier }}' --required
AND region = '{{ region }}' --required
RETURNING
CustSubscriptionId,
CustomerAwsId,
Enabled,
EventCategoriesList,
EventSubscriptionArn,
SnsTopicArn,
SourceIdsList,
SourceType,
Status,
SubscriptionCreationTime;
```
</TabItem>
</Tabs>
