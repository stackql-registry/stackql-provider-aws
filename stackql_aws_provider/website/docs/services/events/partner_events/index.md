--- 
title: partner_events
hide_title: false
hide_table_of_contents: false
keywords:
  - partner_events
  - events
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

Creates, updates, deletes, gets or lists a <code>partner_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="partner_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.events.partner_events" /></td></tr>
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
    <td><a href="#put_partner_events"><CopyableCode code="put_partner_events" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is used by SaaS partners to write events to a customer's partner event bus. Amazon Web Services customers do not use this operation. For information on calculating event batch size, see Calculating EventBridge PutEvents event entry size in the EventBridge User Guide.</td>
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

## `REPLACE` examples

<Tabs
    defaultValue="put_partner_events"
    values={[
        { label: 'put_partner_events', value: 'put_partner_events' }
    ]}
>
<TabItem value="put_partner_events">

This is used by SaaS partners to write events to a customer's partner event bus. Amazon Web Services customers do not use this operation. For information on calculating event batch size, see Calculating EventBridge PutEvents event entry size in the EventBridge User Guide.

```sql
REPLACE aws.events.partner_events
SET 
Entries = '{{ Entries }}'
WHERE 
region = '{{ region }}' --required
RETURNING
entries,
failed_entry_count;
```
</TabItem>
</Tabs>
