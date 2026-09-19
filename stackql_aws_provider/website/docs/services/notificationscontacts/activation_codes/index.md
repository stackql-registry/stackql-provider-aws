--- 
title: activation_codes
hide_title: false
hide_table_of_contents: false
keywords:
  - activation_codes
  - notificationscontacts
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

Creates, updates, deletes, gets or lists an <code>activation_codes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="activation_codes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.notificationscontacts.activation_codes" /></td></tr>
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
    <td><a href="#send_activation_code"><CopyableCode code="send_activation_code" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sends an activation email to the email address associated with the specified email contact. It might take a few minutes for the activation email to arrive. If it doesn't arrive, check in your spam folder or try sending another activation email.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="send_activation_code"
    values={[
        { label: 'send_activation_code', value: 'send_activation_code' }
    ]}
>
<TabItem value="send_activation_code">

Sends an activation email to the email address associated with the specified email contact. It might take a few minutes for the activation email to arrive. If it doesn't arrive, check in your spam folder or try sending another activation email.

```sql
EXEC aws.notificationscontacts.activation_codes.send_activation_code 
@arn='{{ arn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
