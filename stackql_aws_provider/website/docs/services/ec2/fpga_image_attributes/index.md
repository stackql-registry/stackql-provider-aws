--- 
title: fpga_image_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - fpga_image_attributes
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

Creates, updates, deletes, gets or lists a <code>fpga_image_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fpga_image_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.fpga_image_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fpga_image_attribute"
    values={[
        { label: 'describe_fpga_image_attribute', value: 'describe_fpga_image_attribute' }
    ]}
>
<TabItem value="describe_fpga_image_attribute">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the AFI.</td>
</tr>
<tr>
    <td><CopyableCode code="FpgaImageId" /></td>
    <td><code>string</code></td>
    <td>The ID of the AFI.</td>
</tr>
<tr>
    <td><CopyableCode code="LoadPermissions" /></td>
    <td><code>string</code></td>
    <td>The load permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the AFI.</td>
</tr>
<tr>
    <td><CopyableCode code="ProductCodes" /></td>
    <td><code>string</code></td>
    <td>The product codes.</td>
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
    <td><a href="#describe_fpga_image_attribute"><CopyableCode code="describe_fpga_image_attribute" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-FpgaImageId"><code>FpgaImageId</code></a>, <a href="#parameter-Attribute"><code>Attribute</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the specified attribute of the specified Amazon FPGA Image (AFI).</td>
</tr>
<tr>
    <td><a href="#modify_fpga_image_attribute"><CopyableCode code="modify_fpga_image_attribute" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-FpgaImageId"><code>FpgaImageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Attribute"><code>Attribute</code></a>, <a href="#parameter-OperationType"><code>OperationType</code></a>, <a href="#parameter-UserId"><code>UserId</code></a>, <a href="#parameter-UserGroup"><code>UserGroup</code></a>, <a href="#parameter-ProductCode"><code>ProductCode</code></a>, <a href="#parameter-LoadPermission"><code>LoadPermission</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td>Modifies the specified attribute of the specified Amazon FPGA Image (AFI).</td>
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
    <td>The AFI attribute.</td>
</tr>
<tr id="parameter-FpgaImageId">
    <td><CopyableCode code="FpgaImageId" /></td>
    <td><code>string</code></td>
    <td>The ID of the AFI.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Attribute">
    <td><CopyableCode code="Attribute" /></td>
    <td><code>string</code></td>
    <td>The name of the attribute.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description for the AFI.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-LoadPermission">
    <td><CopyableCode code="LoadPermission" /></td>
    <td><code>object</code></td>
    <td>The load permission for the AFI.</td>
</tr>
<tr id="parameter-Name">
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A name for the AFI.</td>
</tr>
<tr id="parameter-OperationType">
    <td><CopyableCode code="OperationType" /></td>
    <td><code>string</code></td>
    <td>The operation type.</td>
</tr>
<tr id="parameter-ProductCode">
    <td><CopyableCode code="ProductCode" /></td>
    <td><code>array</code></td>
    <td>The product codes. After you add a product code to an AFI, it can't be removed. This parameter is valid only when modifying the productCodes attribute.</td>
</tr>
<tr id="parameter-UserGroup">
    <td><CopyableCode code="UserGroup" /></td>
    <td><code>array</code></td>
    <td>The user groups. This parameter is valid only when modifying the loadPermission attribute.</td>
</tr>
<tr id="parameter-UserId">
    <td><CopyableCode code="UserId" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services account IDs. This parameter is valid only when modifying the loadPermission attribute.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_fpga_image_attribute"
    values={[
        { label: 'describe_fpga_image_attribute', value: 'describe_fpga_image_attribute' }
    ]}
>
<TabItem value="describe_fpga_image_attribute">

Describes the specified attribute of the specified Amazon FPGA Image (AFI).

```sql
SELECT
Description,
FpgaImageId,
LoadPermissions,
Name,
ProductCodes
FROM aws.ec2.fpga_image_attributes
WHERE FpgaImageId = '{{ FpgaImageId }}' -- required
AND Attribute = '{{ Attribute }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_fpga_image_attribute"
    values={[
        { label: 'modify_fpga_image_attribute', value: 'modify_fpga_image_attribute' }
    ]}
>
<TabItem value="modify_fpga_image_attribute">

Modifies the specified attribute of the specified Amazon FPGA Image (AFI).

```sql
UPDATE aws.ec2.fpga_image_attributes
SET 
-- No updatable properties
WHERE 
FpgaImageId = '{{ FpgaImageId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND Attribute = '{{ Attribute}}'
AND OperationType = '{{ OperationType}}'
AND UserId = '{{ UserId}}'
AND UserGroup = '{{ UserGroup}}'
AND ProductCode = '{{ ProductCode}}'
AND LoadPermission = '{{ LoadPermission}}'
AND Description = '{{ Description}}'
AND Name = '{{ Name}}'
RETURNING
Description,
FpgaImageId,
LoadPermissions,
Name,
ProductCodes;
```
</TabItem>
</Tabs>
