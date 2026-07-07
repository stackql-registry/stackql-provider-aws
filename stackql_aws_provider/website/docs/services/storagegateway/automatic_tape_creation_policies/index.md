--- 
title: automatic_tape_creation_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - automatic_tape_creation_policies
  - storagegateway
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

Creates, updates, deletes, gets or lists an <code>automatic_tape_creation_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automatic_tape_creation_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.automatic_tape_creation_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_automatic_tape_creation_policies"
    values={[
        { label: 'list_automatic_tape_creation_policies', value: 'list_automatic_tape_creation_policies' }
    ]}
>
<TabItem value="list_automatic_tape_creation_policies">

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
    <td><CopyableCode code="AutomaticTapeCreationPolicyInfos" /></td>
    <td><code>array</code></td>
    <td>Gets a listing of information about the gateway's automatic tape creation policies, including the automatic tape creation rules and the gateway that is using the policies.</td>
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
    <td><a href="#list_automatic_tape_creation_policies"><CopyableCode code="list_automatic_tape_creation_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the automatic tape creation policies for a gateway. If there are no automatic tape creation policies for the gateway, it returns an empty list. This operation is only supported for tape gateways.</td>
</tr>
<tr>
    <td><a href="#update_automatic_tape_creation_policy"><CopyableCode code="update_automatic_tape_creation_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AutomaticTapeCreationRules"><code>AutomaticTapeCreationRules</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a></td>
    <td></td>
    <td>Updates the automatic tape creation policy of a gateway. Use this to update the policy with a new set of automatic tape creation rules. This is only supported for tape gateways. By default, there is no automatic tape creation policy. A gateway can have only one automatic tape creation policy.</td>
</tr>
<tr>
    <td><a href="#delete_automatic_tape_creation_policy"><CopyableCode code="delete_automatic_tape_creation_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the automatic tape creation policy of a gateway. If you delete this policy, new virtual tapes must be created manually. Use the Amazon Resource Name (ARN) of the gateway in your request to remove the policy.</td>
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
    defaultValue="list_automatic_tape_creation_policies"
    values={[
        { label: 'list_automatic_tape_creation_policies', value: 'list_automatic_tape_creation_policies' }
    ]}
>
<TabItem value="list_automatic_tape_creation_policies">

Lists the automatic tape creation policies for a gateway. If there are no automatic tape creation policies for the gateway, it returns an empty list. This operation is only supported for tape gateways.

```sql
SELECT
AutomaticTapeCreationPolicyInfos
FROM aws.storagegateway.automatic_tape_creation_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_automatic_tape_creation_policy"
    values={[
        { label: 'update_automatic_tape_creation_policy', value: 'update_automatic_tape_creation_policy' }
    ]}
>
<TabItem value="update_automatic_tape_creation_policy">

Updates the automatic tape creation policy of a gateway. Use this to update the policy with a new set of automatic tape creation rules. This is only supported for tape gateways. By default, there is no automatic tape creation policy. A gateway can have only one automatic tape creation policy.

```sql
UPDATE aws.storagegateway.automatic_tape_creation_policies
SET 
AutomaticTapeCreationRules = '{{ AutomaticTapeCreationRules }}',
GatewayARN = '{{ GatewayARN }}'
WHERE 
region = '{{ region }}' --required
AND AutomaticTapeCreationRules = '{{ AutomaticTapeCreationRules }}' --required
AND GatewayARN = '{{ GatewayARN }}' --required
RETURNING
GatewayARN;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_automatic_tape_creation_policy"
    values={[
        { label: 'delete_automatic_tape_creation_policy', value: 'delete_automatic_tape_creation_policy' }
    ]}
>
<TabItem value="delete_automatic_tape_creation_policy">

Deletes the automatic tape creation policy of a gateway. If you delete this policy, new virtual tapes must be created manually. Use the Amazon Resource Name (ARN) of the gateway in your request to remove the policy.

```sql
DELETE FROM aws.storagegateway.automatic_tape_creation_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
