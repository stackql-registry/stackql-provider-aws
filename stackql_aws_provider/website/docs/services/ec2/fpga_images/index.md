--- 
title: fpga_images
hide_title: false
hide_table_of_contents: false
keywords:
  - fpga_images
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

Creates, updates, deletes, gets or lists a <code>fpga_images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fpga_images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.fpga_images" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fpga_images"
    values={[
        { label: 'describe_fpga_images', value: 'describe_fpga_images' }
    ]}
>
<TabItem value="describe_fpga_images">

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
    <td><CopyableCode code="create_time" /></td>
    <td><code>string</code></td>
    <td>The date and time the AFI was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_retention_support" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether data retention support is enabled for the AFI.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the AFI.</td>
</tr>
<tr>
    <td><CopyableCode code="fpga_image_global_id" /></td>
    <td><code>string</code></td>
    <td>The global FPGA image identifier (AGFI ID).</td>
</tr>
<tr>
    <td><CopyableCode code="fpga_image_id" /></td>
    <td><code>string</code></td>
    <td>The FPGA image identifier (AFI ID).</td>
</tr>
<tr>
    <td><CopyableCode code="instance_types" /></td>
    <td><code>string</code></td>
    <td>The instance types supported by the AFI.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the AFI.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_alias" /></td>
    <td><code>string</code></td>
    <td>The alias of the AFI owner. Possible values include self, amazon, and aws-marketplace.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the AFI.</td>
</tr>
<tr>
    <td><CopyableCode code="pci_id" /></td>
    <td><code>string</code></td>
    <td>Information about the PCI bus.</td>
</tr>
<tr>
    <td><CopyableCode code="product_codes" /></td>
    <td><code>string</code></td>
    <td>The product codes for the AFI.</td>
</tr>
<tr>
    <td><CopyableCode code="public" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the AFI is public.</td>
</tr>
<tr>
    <td><CopyableCode code="shell_version" /></td>
    <td><code>string</code></td>
    <td>The version of the Amazon Web Services Shell that was used to create the bitstream.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Information about the state of the AFI.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the AFI.</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string</code></td>
    <td>The time of the most recent update to the AFI.</td>
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
    <td><a href="#describe_fpga_images"><CopyableCode code="describe_fpga_images" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-FpgaImageId"><code>FpgaImageId</code></a>, <a href="#parameter-Owner"><code>Owner</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Describes the Amazon FPGA Images (AFIs) available to you. These include public AFIs, private AFIs that you own, and AFIs owned by other Amazon Web Services accounts for which you have load permissions.</td>
</tr>
<tr>
    <td><a href="#create_fpga_image"><CopyableCode code="create_fpga_image" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-InputStorageLocation"><code>InputStorageLocation</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-LogsStorageLocation"><code>LogsStorageLocation</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Creates an Amazon FPGA Image (AFI) from the specified design checkpoint (DCP). The create operation is asynchronous. To verify that the AFI was successfully created and is ready for use, check the output logs. An AFI contains the FPGA bitstream that is ready to download to an FPGA. You can securely deploy an AFI on multiple FPGA-accelerated instances. For more information, see the Amazon Web Services FPGA Hardware Development Kit.</td>
</tr>
<tr>
    <td><a href="#delete_fpga_image"><CopyableCode code="delete_fpga_image" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-FpgaImageId"><code>FpgaImageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified Amazon FPGA Image (AFI).</td>
</tr>
<tr>
    <td><a href="#reset_fpga_image_attribute"><CopyableCode code="reset_fpga_image_attribute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-FpgaImageId"><code>FpgaImageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Attribute"><code>Attribute</code></a></td>
    <td>Resets the specified attribute of the specified Amazon FPGA Image (AFI) to its default value. You can only reset the load permission attribute.</td>
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
<tr id="parameter-FpgaImageId">
    <td><CopyableCode code="FpgaImageId" /></td>
    <td><code>string</code></td>
    <td>The ID of the AFI.</td>
</tr>
<tr id="parameter-InputStorageLocation">
    <td><CopyableCode code="InputStorageLocation" /></td>
    <td><code>object</code></td>
    <td>The location of the encrypted design checkpoint in Amazon S3. The input must be a tarball.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Attribute">
    <td><CopyableCode code="Attribute" /></td>
    <td><code>string</code></td>
    <td>The attribute.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring Idempotency.</td>
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
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. create-time - The creation time of the AFI. fpga-image-id - The FPGA image identifier (AFI ID). fpga-image-global-id - The global FPGA image identifier (AGFI ID). name - The name of the AFI. owner-id - The Amazon Web Services account ID of the AFI owner. product-code - The product code. shell-version - The version of the Amazon Web Services Shell that was used to create the bitstream. state - The state of the AFI (pending | failed | available | unavailable). tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. update-time - The time of the most recent update.</td>
</tr>
<tr id="parameter-FpgaImageId">
    <td><CopyableCode code="FpgaImageId" /></td>
    <td><code>array</code></td>
    <td>The AFI IDs.</td>
</tr>
<tr id="parameter-LogsStorageLocation">
    <td><CopyableCode code="LogsStorageLocation" /></td>
    <td><code>object</code></td>
    <td>The location in Amazon S3 for the output logs.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-Name">
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A name for the AFI.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next page of results.</td>
</tr>
<tr id="parameter-Owner">
    <td><CopyableCode code="Owner" /></td>
    <td><code>array</code></td>
    <td>Filters the AFI by owner. Specify an Amazon Web Services account ID, self (owner is the sender of the request), or an Amazon Web Services owner alias (valid values are amazon | aws-marketplace).</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the FPGA image during creation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_fpga_images"
    values={[
        { label: 'describe_fpga_images', value: 'describe_fpga_images' }
    ]}
>
<TabItem value="describe_fpga_images">

Describes the Amazon FPGA Images (AFIs) available to you. These include public AFIs, private AFIs that you own, and AFIs owned by other Amazon Web Services accounts for which you have load permissions.

```sql
SELECT
create_time,
data_retention_support,
description,
fpga_image_global_id,
fpga_image_id,
instance_types,
name,
owner_alias,
owner_id,
pci_id,
product_codes,
public,
shell_version,
state,
tags,
update_time
FROM aws.ec2.fpga_images
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND FpgaImageId = '{{ FpgaImageId }}'
AND Owner = '{{ Owner }}'
AND Filter = '{{ Filter }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_fpga_image"
    values={[
        { label: 'create_fpga_image', value: 'create_fpga_image' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_fpga_image">

Creates an Amazon FPGA Image (AFI) from the specified design checkpoint (DCP). The create operation is asynchronous. To verify that the AFI was successfully created and is ready for use, check the output logs. An AFI contains the FPGA bitstream that is ready to download to an FPGA. You can securely deploy an AFI on multiple FPGA-accelerated instances. For more information, see the Amazon Web Services FPGA Hardware Development Kit.

```sql
INSERT INTO aws.ec2.fpga_images (
InputStorageLocation,
region,
DryRun,
LogsStorageLocation,
Description,
Name,
ClientToken,
TagSpecification
)
SELECT 
'{{ InputStorageLocation }}',
'{{ region }}',
'{{ DryRun }}',
'{{ LogsStorageLocation }}',
'{{ Description }}',
'{{ Name }}',
'{{ ClientToken }}',
'{{ TagSpecification }}'
RETURNING
fpga_image_global_id,
fpga_image_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: fpga_images
  props:
    - name: InputStorageLocation
      value: "{{ InputStorageLocation }}"
      description: Required parameter for the fpga_images resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the fpga_images resource.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: LogsStorageLocation
      value: "{{ LogsStorageLocation }}"
      description: The location in Amazon S3 for the output logs.
      description: The location in Amazon S3 for the output logs.
    - name: Description
      value: "{{ Description }}"
      description: A description for the AFI.
      description: A description for the AFI.
    - name: Name
      value: "{{ Name }}"
      description: A name for the AFI.
      description: A name for the AFI.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring Idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring Idempotency.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the FPGA image during creation.
      description: The tags to apply to the FPGA image during creation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_fpga_image"
    values={[
        { label: 'delete_fpga_image', value: 'delete_fpga_image' }
    ]}
>
<TabItem value="delete_fpga_image">

Deletes the specified Amazon FPGA Image (AFI).

```sql
DELETE FROM aws.ec2.fpga_images
WHERE FpgaImageId = '{{ FpgaImageId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reset_fpga_image_attribute"
    values={[
        { label: 'reset_fpga_image_attribute', value: 'reset_fpga_image_attribute' }
    ]}
>
<TabItem value="reset_fpga_image_attribute">

Resets the specified attribute of the specified Amazon FPGA Image (AFI) to its default value. You can only reset the load permission attribute.

```sql
EXEC aws.ec2.fpga_images.reset_fpga_image_attribute 
@FpgaImageId='{{ FpgaImageId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@Attribute='{{ Attribute }}'
;
```
</TabItem>
</Tabs>
