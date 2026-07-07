--- 
title: devices
hide_title: false
hide_table_of_contents: false
keywords:
  - devices
  - cognito_sync
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

Creates, updates, deletes, gets or lists a <code>devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_sync.devices" /></td></tr>
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
    <td><a href="#register_device"><CopyableCode code="register_device" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-identity_pool_id"><code>identity_pool_id</code></a>, <a href="#parameter-identity_id"><code>identity_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Platform"><code>Platform</code></a>, <a href="#parameter-Token"><code>Token</code></a></td>
    <td></td>
    <td>Registers a device to receive push sync notifications. This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</td>
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
<tr id="parameter-identity_id">
    <td><CopyableCode code="identity_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for this identity.</td>
</tr>
<tr id="parameter-identity_pool_id">
    <td><CopyableCode code="identity_pool_id" /></td>
    <td><code>string</code></td>
    <td>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. Here, the ID of the pool that the identity belongs to.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="register_device"
    values={[
        { label: 'register_device', value: 'register_device' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_device">

Registers a device to receive push sync notifications. This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.

```sql
INSERT INTO aws.cognito_sync.devices (
Platform,
Token,
identity_pool_id,
identity_id,
region
)
SELECT 
'{{ Platform }}' /* required */,
'{{ Token }}' /* required */,
'{{ identity_pool_id }}',
'{{ identity_id }}',
'{{ region }}'
RETURNING
DeviceId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: devices
  props:
    - name: identity_pool_id
      value: "{{ identity_pool_id }}"
      description: Required parameter for the devices resource.
    - name: identity_id
      value: "{{ identity_id }}"
      description: Required parameter for the devices resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the devices resource.
    - name: Platform
      value: "{{ Platform }}"
      valid_values: ['APNS', 'APNS_SANDBOX', 'GCM', 'ADM']
    - name: Token
      value: "{{ Token }}"
`}</CodeBlock>

</TabItem>
</Tabs>
