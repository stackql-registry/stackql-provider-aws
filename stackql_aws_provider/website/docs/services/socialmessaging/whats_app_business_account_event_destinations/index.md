--- 
title: whats_app_business_account_event_destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - whats_app_business_account_event_destinations
  - socialmessaging
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

Creates, updates, deletes, gets or lists a <code>whats_app_business_account_event_destinations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="whats_app_business_account_event_destinations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.socialmessaging.whats_app_business_account_event_destinations" /></td></tr>
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
    <td><a href="#put_whats_app_business_account_event_destinations"><CopyableCode code="put_whats_app_business_account_event_destinations" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-eventDestinations"><code>eventDestinations</code></a></td>
    <td></td>
    <td>Add an event destination to log event data from WhatsApp for a WhatsApp Business Account (WABA). A WABA can only have one event destination at a time. All resources associated with the WABA use the same event destination.</td>
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
    defaultValue="put_whats_app_business_account_event_destinations"
    values={[
        { label: 'put_whats_app_business_account_event_destinations', value: 'put_whats_app_business_account_event_destinations' }
    ]}
>
<TabItem value="put_whats_app_business_account_event_destinations">

Add an event destination to log event data from WhatsApp for a WhatsApp Business Account (WABA). A WABA can only have one event destination at a time. All resources associated with the WABA use the same event destination.

```sql
REPLACE aws.socialmessaging.whats_app_business_account_event_destinations
SET 
id = '{{ id }}',
eventDestinations = '{{ eventDestinations }}'
WHERE 
region = '{{ region }}' --required
AND id = '{{ id }}' --required
AND eventDestinations = '{{ eventDestinations }}' --required;
```
</TabItem>
</Tabs>
