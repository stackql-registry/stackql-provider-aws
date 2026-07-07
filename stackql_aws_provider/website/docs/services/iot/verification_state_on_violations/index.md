--- 
title: verification_state_on_violations
hide_title: false
hide_table_of_contents: false
keywords:
  - verification_state_on_violations
  - iot
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

Creates, updates, deletes, gets or lists a <code>verification_state_on_violations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="verification_state_on_violations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.verification_state_on_violations" /></td></tr>
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
    <td><a href="#put_verification_state_on_violation"><CopyableCode code="put_verification_state_on_violation" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-violation_id"><code>violation_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-verificationState"><code>verificationState</code></a></td>
    <td></td>
    <td>Set a verification state and provide a description of that verification state on a violation (detect alarm).</td>
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
<tr id="parameter-violation_id">
    <td><CopyableCode code="violation_id" /></td>
    <td><code>string</code></td>
    <td>The violation ID.</td>
</tr>
</tbody>
</table>

## `REPLACE` examples

<Tabs
    defaultValue="put_verification_state_on_violation"
    values={[
        { label: 'put_verification_state_on_violation', value: 'put_verification_state_on_violation' }
    ]}
>
<TabItem value="put_verification_state_on_violation">

Set a verification state and provide a description of that verification state on a violation (detect alarm).

```sql
REPLACE aws.iot.verification_state_on_violations
SET 
verificationState = '{{ verificationState }}',
verificationStateDescription = '{{ verificationStateDescription }}'
WHERE 
violation_id = '{{ violation_id }}' --required
AND region = '{{ region }}' --required
AND verificationState = '{{ verificationState }}' --required;
```
</TabItem>
</Tabs>
