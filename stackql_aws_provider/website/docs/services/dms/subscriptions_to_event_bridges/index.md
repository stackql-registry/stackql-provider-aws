--- 
title: subscriptions_to_event_bridges
hide_title: false
hide_table_of_contents: false
keywords:
  - subscriptions_to_event_bridges
  - dms
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

Creates, updates, deletes, gets or lists a <code>subscriptions_to_event_bridges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subscriptions_to_event_bridges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.subscriptions_to_event_bridges" /></td></tr>
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
    <td><a href="#update_subscriptions_to_event_bridge"><CopyableCode code="update_subscriptions_to_event_bridge" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Migrates 10 active and enabled Amazon SNS subscriptions at a time and converts them to corresponding Amazon EventBridge rules. By default, this operation migrates subscriptions only when all your replication instance versions are 3.4.5 or higher. If any replication instances are from versions earlier than 3.4.5, the operation raises an error and tells you to upgrade these instances to version 3.4.5 or higher. To enable migration regardless of version, set the Force option to true. However, if you don't upgrade instances earlier than version 3.4.5, some types of events might not be available when you use Amazon EventBridge. To call this operation, make sure that you have certain permissions added to your user account. For more information, see Migrating event subscriptions to Amazon EventBridge in the Amazon Web Services Database Migration Service User Guide.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="update_subscriptions_to_event_bridge"
    values={[
        { label: 'update_subscriptions_to_event_bridge', value: 'update_subscriptions_to_event_bridge' }
    ]}
>
<TabItem value="update_subscriptions_to_event_bridge">

Migrates 10 active and enabled Amazon SNS subscriptions at a time and converts them to corresponding Amazon EventBridge rules. By default, this operation migrates subscriptions only when all your replication instance versions are 3.4.5 or higher. If any replication instances are from versions earlier than 3.4.5, the operation raises an error and tells you to upgrade these instances to version 3.4.5 or higher. To enable migration regardless of version, set the Force option to true. However, if you don't upgrade instances earlier than version 3.4.5, some types of events might not be available when you use Amazon EventBridge. To call this operation, make sure that you have certain permissions added to your user account. For more information, see Migrating event subscriptions to Amazon EventBridge in the Amazon Web Services Database Migration Service User Guide.

```sql
UPDATE aws.dms.subscriptions_to_event_bridges
SET 
ForceMove = {{ ForceMove }}
WHERE 
region = '{{ region }}' --required
RETURNING
Result;
```
</TabItem>
</Tabs>
