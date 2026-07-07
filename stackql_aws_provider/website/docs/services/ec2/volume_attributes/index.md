--- 
title: volume_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - volume_attributes
  - ec2
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

Creates, updates, deletes, gets or lists a <code>volume_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="volume_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.volume_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_volume_attribute"
    values={[
        { label: 'describe_volume_attribute', value: 'describe_volume_attribute' }
    ]}
>
<TabItem value="describe_volume_attribute">

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
    <td><CopyableCode code="ProductCodeId" /></td>
    <td><code>string</code></td>
    <td>The product code.</td>
</tr>
<tr>
    <td><CopyableCode code="ProductCodeType" /></td>
    <td><code>string</code></td>
    <td>The type of product code.</td>
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
    <td><a href="#describe_volume_attribute"><CopyableCode code="describe_volume_attribute" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-Attribute"><code>Attribute</code></a>, <a href="#parameter-VolumeId"><code>VolumeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the specified attribute of the specified volume. You can specify only one attribute at a time. For more information about EBS volumes, see Amazon EBS volumes in the Amazon EBS User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_volume_attribute"><CopyableCode code="modify_volume_attribute" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-VolumeId"><code>VolumeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AutoEnableIO"><code>AutoEnableIO</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies a volume attribute. By default, all I/O operations for the volume are suspended when the data on the volume is determined to be potentially inconsistent, to prevent undetectable, latent data corruption. The I/O access to the volume can be resumed by first enabling I/O access and then checking the data consistency on your volume. You can change the default behavior to resume I/O operations. We recommend that you change this only for boot volumes or for volumes that are stateless or disposable.</td>
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
<tr id="parameter-Attribute">
    <td><CopyableCode code="Attribute" /></td>
    <td><code>string</code></td>
    <td>The attribute of the volume. This parameter is required.</td>
</tr>
<tr id="parameter-VolumeId">
    <td><CopyableCode code="VolumeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the volume.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AutoEnableIO">
    <td><CopyableCode code="AutoEnableIO" /></td>
    <td><code>object</code></td>
    <td>Indicates whether the volume should be auto-enabled for I/O operations.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_volume_attribute"
    values={[
        { label: 'describe_volume_attribute', value: 'describe_volume_attribute' }
    ]}
>
<TabItem value="describe_volume_attribute">

Describes the specified attribute of the specified volume. You can specify only one attribute at a time. For more information about EBS volumes, see Amazon EBS volumes in the Amazon EBS User Guide.

```sql
SELECT
ProductCodeId,
ProductCodeType
FROM aws.ec2.volume_attributes
WHERE Attribute = '{{ Attribute }}' -- required
AND VolumeId = '{{ VolumeId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_volume_attribute"
    values={[
        { label: 'modify_volume_attribute', value: 'modify_volume_attribute' }
    ]}
>
<TabItem value="modify_volume_attribute">

Modifies a volume attribute. By default, all I/O operations for the volume are suspended when the data on the volume is determined to be potentially inconsistent, to prevent undetectable, latent data corruption. The I/O access to the volume can be resumed by first enabling I/O access and then checking the data consistency on your volume. You can change the default behavior to resume I/O operations. We recommend that you change this only for boot volumes or for volumes that are stateless or disposable.

```sql
UPDATE aws.ec2.volume_attributes
SET 
-- No updatable properties
WHERE 
VolumeId = '{{ VolumeId }}' --required
AND region = '{{ region }}' --required
AND AutoEnableIO = '{{ AutoEnableIO}}'
AND DryRun = {{ DryRun}};
```
</TabItem>
</Tabs>
