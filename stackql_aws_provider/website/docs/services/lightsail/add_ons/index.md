--- 
title: add_ons
hide_title: false
hide_table_of_contents: false
keywords:
  - add_ons
  - lightsail
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

Creates, updates, deletes, gets or lists an <code>add_ons</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="add_ons" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.add_ons" /></td></tr>
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
    <td><a href="#disable_add_on"><CopyableCode code="disable_add_on" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-addOnType"><code>addOnType</code></a>, <a href="#parameter-resourceName"><code>resourceName</code></a></td>
    <td></td>
    <td>Disables an add-on for an Amazon Lightsail resource. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#enable_add_on"><CopyableCode code="enable_add_on" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceName"><code>resourceName</code></a>, <a href="#parameter-addOnRequest"><code>addOnRequest</code></a></td>
    <td></td>
    <td>Enables or modifies an add-on for an Amazon Lightsail resource. For more information, see the Amazon Lightsail Developer Guide.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="disable_add_on"
    values={[
        { label: 'disable_add_on', value: 'disable_add_on' },
        { label: 'enable_add_on', value: 'enable_add_on' }
    ]}
>
<TabItem value="disable_add_on">

Disables an add-on for an Amazon Lightsail resource. For more information, see the Amazon Lightsail Developer Guide.

```sql
EXEC aws.lightsail.add_ons.disable_add_on 
@region='{{ region }}' --required 
@@json=
'{
"addOnType": "{{ addOnType }}", 
"resourceName": "{{ resourceName }}"
}'
;
```
</TabItem>
<TabItem value="enable_add_on">

Enables or modifies an add-on for an Amazon Lightsail resource. For more information, see the Amazon Lightsail Developer Guide.

```sql
EXEC aws.lightsail.add_ons.enable_add_on 
@region='{{ region }}' --required 
@@json=
'{
"resourceName": "{{ resourceName }}", 
"addOnRequest": "{{ addOnRequest }}"
}'
;
```
</TabItem>
</Tabs>
