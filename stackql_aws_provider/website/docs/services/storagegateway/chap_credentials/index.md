--- 
title: chap_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - chap_credentials
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

Creates, updates, deletes, gets or lists a <code>chap_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="chap_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.chap_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_chap_credentials"
    values={[
        { label: 'describe_chap_credentials', value: 'describe_chap_credentials' }
    ]}
>
<TabItem value="describe_chap_credentials">

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
    <td><CopyableCode code="chap_credentials" /></td>
    <td><code>array</code></td>
    <td>An array of ChapInfo objects that represent CHAP credentials. Each object in the array contains CHAP credential information for one target-initiator pair. If no CHAP credentials are set, an empty array is returned. CHAP credential information is provided in a JSON object with the following fields: InitiatorName: The iSCSI initiator that connects to the target. SecretToAuthenticateInitiator: The secret key that the initiator (for example, the Windows client) must provide to participate in mutual CHAP with the target. SecretToAuthenticateTarget: The secret key that the target must provide to participate in mutual CHAP with the initiator (e.g. Windows client). TargetARN: The Amazon Resource Name (ARN) of the storage volume.</td>
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
    <td><a href="#describe_chap_credentials"><CopyableCode code="describe_chap_credentials" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair. This operation is supported in the volume and tape gateway types.</td>
</tr>
<tr>
    <td><a href="#update_chap_credentials"><CopyableCode code="update_chap_credentials" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TargetARN"><code>TargetARN</code></a>, <a href="#parameter-SecretToAuthenticateInitiator"><code>SecretToAuthenticateInitiator</code></a>, <a href="#parameter-InitiatorName"><code>InitiatorName</code></a></td>
    <td></td>
    <td>Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for added security, you might use it. This operation is supported in the volume and tape gateway types. When you update CHAP credentials, all existing connections on the target are closed and initiators must reconnect with the new credentials.</td>
</tr>
<tr>
    <td><a href="#delete_chap_credentials"><CopyableCode code="delete_chap_credentials" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair. This operation is supported in volume and tape gateway types.</td>
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
    defaultValue="describe_chap_credentials"
    values={[
        { label: 'describe_chap_credentials', value: 'describe_chap_credentials' }
    ]}
>
<TabItem value="describe_chap_credentials">

Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair. This operation is supported in the volume and tape gateway types.

```sql
SELECT
chap_credentials
FROM aws.storagegateway.chap_credentials
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_chap_credentials"
    values={[
        { label: 'update_chap_credentials', value: 'update_chap_credentials' }
    ]}
>
<TabItem value="update_chap_credentials">

Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for added security, you might use it. This operation is supported in the volume and tape gateway types. When you update CHAP credentials, all existing connections on the target are closed and initiators must reconnect with the new credentials.

```sql
UPDATE aws.storagegateway.chap_credentials
SET 
TargetARN = '{{ TargetARN }}',
SecretToAuthenticateInitiator = '{{ SecretToAuthenticateInitiator }}',
InitiatorName = '{{ InitiatorName }}',
SecretToAuthenticateTarget = '{{ SecretToAuthenticateTarget }}'
WHERE 
region = '{{ region }}' --required
AND TargetARN = '{{ TargetARN }}' --required
AND SecretToAuthenticateInitiator = '{{ SecretToAuthenticateInitiator }}' --required
AND InitiatorName = '{{ InitiatorName }}' --required
RETURNING
initiator_name,
target_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_chap_credentials"
    values={[
        { label: 'delete_chap_credentials', value: 'delete_chap_credentials' }
    ]}
>
<TabItem value="delete_chap_credentials">

Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair. This operation is supported in volume and tape gateway types.

```sql
DELETE FROM aws.storagegateway.chap_credentials
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
