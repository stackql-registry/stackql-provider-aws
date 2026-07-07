--- 
title: member_ec2_deep_inspection_status
hide_title: false
hide_table_of_contents: false
keywords:
  - member_ec2_deep_inspection_status
  - inspector2
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

Creates, updates, deletes, gets or lists a <code>member_ec2_deep_inspection_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="member_ec2_deep_inspection_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.member_ec2_deep_inspection_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_member_ec2_deep_inspection_status"
    values={[
        { label: 'batch_get_member_ec2_deep_inspection_status', value: 'batch_get_member_ec2_deep_inspection_status' }
    ]}
>
<TabItem value="batch_get_member_ec2_deep_inspection_status">

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
    <td><CopyableCode code="accountIds" /></td>
    <td><code>array</code></td>
    <td>An array of objects that provide details on the activation status of Amazon Inspector deep inspection for each of the requested accounts.</td>
</tr>
<tr>
    <td><CopyableCode code="failedAccountIds" /></td>
    <td><code>array</code></td>
    <td>An array of objects that provide details on any accounts that failed to activate Amazon Inspector deep inspection and why.</td>
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
    <td><a href="#batch_get_member_ec2_deep_inspection_status"><CopyableCode code="batch_get_member_ec2_deep_inspection_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves Amazon Inspector deep inspection activation status of multiple member accounts within your organization. You must be the delegated administrator of an organization in Amazon Inspector to use this API.</td>
</tr>
<tr>
    <td><a href="#batch_update_member_ec2_deep_inspection_status"><CopyableCode code="batch_update_member_ec2_deep_inspection_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-accountIds"><code>accountIds</code></a></td>
    <td></td>
    <td>Activates or deactivates Amazon Inspector deep inspection for the provided member accounts in your organization. You must be the delegated administrator of an organization in Amazon Inspector to use this API.</td>
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
    defaultValue="batch_get_member_ec2_deep_inspection_status"
    values={[
        { label: 'batch_get_member_ec2_deep_inspection_status', value: 'batch_get_member_ec2_deep_inspection_status' }
    ]}
>
<TabItem value="batch_get_member_ec2_deep_inspection_status">

Retrieves Amazon Inspector deep inspection activation status of multiple member accounts within your organization. You must be the delegated administrator of an organization in Amazon Inspector to use this API.

```sql
SELECT
accountIds,
failedAccountIds
FROM aws.inspector2.member_ec2_deep_inspection_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_update_member_ec2_deep_inspection_status"
    values={[
        { label: 'batch_update_member_ec2_deep_inspection_status', value: 'batch_update_member_ec2_deep_inspection_status' }
    ]}
>
<TabItem value="batch_update_member_ec2_deep_inspection_status">

Activates or deactivates Amazon Inspector deep inspection for the provided member accounts in your organization. You must be the delegated administrator of an organization in Amazon Inspector to use this API.

```sql
EXEC aws.inspector2.member_ec2_deep_inspection_status.batch_update_member_ec2_deep_inspection_status 
@region='{{ region }}' --required 
@@json=
'{
"accountIds": "{{ accountIds }}"
}'
;
```
</TabItem>
</Tabs>
