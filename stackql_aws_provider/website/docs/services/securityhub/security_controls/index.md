--- 
title: security_controls
hide_title: false
hide_table_of_contents: false
keywords:
  - security_controls
  - securityhub
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

Creates, updates, deletes, gets or lists a <code>security_controls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_controls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.security_controls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_security_controls"
    values={[
        { label: 'batch_get_security_controls', value: 'batch_get_security_controls' }
    ]}
>
<TabItem value="batch_get_security_controls">

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
    <td><CopyableCode code="SecurityControls" /></td>
    <td><code>array</code></td>
    <td>An array that returns the identifier, Amazon Resource Name (ARN), and other details about a security control. The same information is returned whether the request includes SecurityControlId or SecurityControlArn.</td>
</tr>
<tr>
    <td><CopyableCode code="UnprocessedIds" /></td>
    <td><code>array</code></td>
    <td>A security control (identified with SecurityControlId, SecurityControlArn, or a mix of both parameters) for which details cannot be returned.</td>
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
    <td><a href="#batch_get_security_controls"><CopyableCode code="batch_get_security_controls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about a batch of security controls for the current Amazon Web Services account and Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#update_security_control"><CopyableCode code="update_security_control" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecurityControlId"><code>SecurityControlId</code></a>, <a href="#parameter-Parameters"><code>Parameters</code></a></td>
    <td></td>
    <td>Updates the properties of a security control.</td>
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
    defaultValue="batch_get_security_controls"
    values={[
        { label: 'batch_get_security_controls', value: 'batch_get_security_controls' }
    ]}
>
<TabItem value="batch_get_security_controls">

Provides details about a batch of security controls for the current Amazon Web Services account and Amazon Web Services Region.

```sql
SELECT
SecurityControls,
UnprocessedIds
FROM aws.securityhub.security_controls
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_security_control"
    values={[
        { label: 'update_security_control', value: 'update_security_control' }
    ]}
>
<TabItem value="update_security_control">

Updates the properties of a security control.

```sql
UPDATE aws.securityhub.security_controls
SET 
SecurityControlId = '{{ SecurityControlId }}',
Parameters = '{{ Parameters }}',
LastUpdateReason = '{{ LastUpdateReason }}'
WHERE 
region = '{{ region }}' --required
AND SecurityControlId = '{{ SecurityControlId }}' --required
AND Parameters = '{{ Parameters }}' --required;
```
</TabItem>
</Tabs>
