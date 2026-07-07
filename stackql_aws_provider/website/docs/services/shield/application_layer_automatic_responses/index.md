--- 
title: application_layer_automatic_responses
hide_title: false
hide_table_of_contents: false
keywords:
  - application_layer_automatic_responses
  - shield
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

Creates, updates, deletes, gets or lists an <code>application_layer_automatic_responses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_layer_automatic_responses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.shield.application_layer_automatic_responses" /></td></tr>
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
    <td><a href="#update_application_layer_automatic_response"><CopyableCode code="update_application_layer_automatic_response" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-Action"><code>Action</code></a></td>
    <td></td>
    <td>Updates an existing Shield Advanced automatic application layer DDoS mitigation configuration for the specified resource.</td>
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
    defaultValue="update_application_layer_automatic_response"
    values={[
        { label: 'update_application_layer_automatic_response', value: 'update_application_layer_automatic_response' }
    ]}
>
<TabItem value="update_application_layer_automatic_response">

Updates an existing Shield Advanced automatic application layer DDoS mitigation configuration for the specified resource.

```sql
UPDATE aws.shield.application_layer_automatic_responses
SET 
ResourceArn = '{{ ResourceArn }}',
Action = '{{ Action }}'
WHERE 
region = '{{ region }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required
AND Action = '{{ Action }}' --required;
```
</TabItem>
</Tabs>
