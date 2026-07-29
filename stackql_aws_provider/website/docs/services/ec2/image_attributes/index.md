--- 
title: image_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - image_attributes
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

Creates, updates, deletes, gets or lists an <code>image_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.image_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_image_attribute"
    values={[
        { label: 'describe_image_attribute', value: 'describe_image_attribute' }
    ]}
>
<TabItem value="describe_image_attribute">

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
    <td><CopyableCode code="block_device_mappings" /></td>
    <td><code>string</code></td>
    <td>The block device mapping entries.</td>
</tr>
<tr>
    <td><CopyableCode code="boot_mode" /></td>
    <td><code>string</code></td>
    <td>The boot mode.</td>
</tr>
<tr>
    <td><CopyableCode code="deregistration_protection" /></td>
    <td><code>string</code></td>
    <td>Indicates whether deregistration protection is enabled for the AMI.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description for the AMI.</td>
</tr>
<tr>
    <td><CopyableCode code="image_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the AMI.</td>
</tr>
<tr>
    <td><CopyableCode code="imds_support" /></td>
    <td><code>string</code></td>
    <td>If v2.0, it indicates that IMDSv2 is specified in the AMI. Instances launched from this AMI will have HttpTokens automatically set to required so that, by default, the instance requires that IMDSv2 is used when requesting instance metadata. In addition, HttpPutResponseHopLimit is set to 2. For more information, see Configure the AMI in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="kernel_id" /></td>
    <td><code>string</code></td>
    <td>The kernel ID.</td>
</tr>
<tr>
    <td><CopyableCode code="last_launched_time" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the AMI was last used to launch an EC2 instance. When the AMI is used to launch an instance, there is a 24-hour delay before that usage is reported. lastLaunchedTime data is available starting April 2017.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_permissions" /></td>
    <td><code>string</code></td>
    <td>The launch permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="product_codes" /></td>
    <td><code>string</code></td>
    <td>The product codes.</td>
</tr>
<tr>
    <td><CopyableCode code="ramdisk_id" /></td>
    <td><code>string</code></td>
    <td>The RAM disk ID.</td>
</tr>
<tr>
    <td><CopyableCode code="sriov_net_support" /></td>
    <td><code>string</code></td>
    <td>Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="tpm_support" /></td>
    <td><code>string</code></td>
    <td>If the image is configured for NitroTPM support, the value is v2.0.</td>
</tr>
<tr>
    <td><CopyableCode code="uefi_data" /></td>
    <td><code>string</code></td>
    <td>Base64 representation of the non-volatile UEFI variable store. To retrieve the UEFI data, use the GetInstanceUefiData command. You can inspect and modify the UEFI data by using the python-uefivars tool on GitHub. For more information, see UEFI Secure Boot for Amazon EC2 instances in the Amazon EC2 User Guide.</td>
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
    <td><a href="#describe_image_attribute"><CopyableCode code="describe_image_attribute" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-Attribute"><code>Attribute</code></a>, <a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the specified attribute of the specified AMI. You can specify only one attribute at a time. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.</td>
</tr>
<tr>
    <td><a href="#modify_image_attribute"><CopyableCode code="modify_image_attribute" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Attribute"><code>Attribute</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-LaunchPermission"><code>LaunchPermission</code></a>, <a href="#parameter-OperationType"><code>OperationType</code></a>, <a href="#parameter-ProductCode"><code>ProductCode</code></a>, <a href="#parameter-UserGroup"><code>UserGroup</code></a>, <a href="#parameter-UserId"><code>UserId</code></a>, <a href="#parameter-Value"><code>Value</code></a>, <a href="#parameter-OrganizationArn"><code>OrganizationArn</code></a>, <a href="#parameter-OrganizationalUnitArn"><code>OrganizationalUnitArn</code></a>, <a href="#parameter-ImdsSupport"><code>ImdsSupport</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies the specified attribute of the specified AMI. You can specify only one attribute at a time. To specify the attribute, you can use the Attribute parameter, or one of the following parameters: Description, ImdsSupport, or LaunchPermission. Images with an Amazon Web Services Marketplace product code cannot be made public. To enable the SriovNetSupport enhanced networking attribute of an image, enable SriovNetSupport on an instance and create an AMI from the instance.</td>
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
    <td>The AMI attribute. Note: The blockDeviceMapping attribute is deprecated. Using this attribute returns the Client.AuthFailure error. To get information about the block device mappings for an AMI, describe the image instead.</td>
</tr>
<tr id="parameter-ImageId">
    <td><CopyableCode code="ImageId" /></td>
    <td><code>string</code></td>
    <td>The ID of the AMI.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Attribute">
    <td><CopyableCode code="Attribute" /></td>
    <td><code>string</code></td>
    <td>The name of the attribute to modify. Valid values: description | imdsSupport | launchPermission</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>object</code></td>
    <td>A new description for the AMI.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-ImdsSupport">
    <td><CopyableCode code="ImdsSupport" /></td>
    <td><code>object</code></td>
    <td>Set to v2.0 to indicate that IMDSv2 is specified in the AMI. Instances launched from this AMI will have HttpTokens automatically set to required so that, by default, the instance requires that IMDSv2 is used when requesting instance metadata. In addition, HttpPutResponseHopLimit is set to 2. For more information, see Configure the AMI in the Amazon EC2 User Guide. Do not use this parameter unless your AMI software supports IMDSv2. After you set the value to v2.0, you can't undo it. The only way to “reset” your AMI is to create a new AMI from the underlying snapshot.</td>
</tr>
<tr id="parameter-LaunchPermission">
    <td><CopyableCode code="LaunchPermission" /></td>
    <td><code>object</code></td>
    <td>A new launch permission for the AMI.</td>
</tr>
<tr id="parameter-OperationType">
    <td><CopyableCode code="OperationType" /></td>
    <td><code>string</code></td>
    <td>The operation type. This parameter can be used only when the Attribute parameter is launchPermission.</td>
</tr>
<tr id="parameter-OrganizationArn">
    <td><CopyableCode code="OrganizationArn" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Name (ARN) of an organization. This parameter can be used only when the Attribute parameter is launchPermission.</td>
</tr>
<tr id="parameter-OrganizationalUnitArn">
    <td><CopyableCode code="OrganizationalUnitArn" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Name (ARN) of an organizational unit (OU). This parameter can be used only when the Attribute parameter is launchPermission.</td>
</tr>
<tr id="parameter-ProductCode">
    <td><CopyableCode code="ProductCode" /></td>
    <td><code>array</code></td>
    <td>Not supported.</td>
</tr>
<tr id="parameter-UserGroup">
    <td><CopyableCode code="UserGroup" /></td>
    <td><code>array</code></td>
    <td>The user groups. This parameter can be used only when the Attribute parameter is launchPermission.</td>
</tr>
<tr id="parameter-UserId">
    <td><CopyableCode code="UserId" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services account IDs. This parameter can be used only when the Attribute parameter is launchPermission.</td>
</tr>
<tr id="parameter-Value">
    <td><CopyableCode code="Value" /></td>
    <td><code>string</code></td>
    <td>The value of the attribute being modified. This parameter can be used only when the Attribute parameter is description or imdsSupport.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_image_attribute"
    values={[
        { label: 'describe_image_attribute', value: 'describe_image_attribute' }
    ]}
>
<TabItem value="describe_image_attribute">

Describes the specified attribute of the specified AMI. You can specify only one attribute at a time. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.

```sql
SELECT
block_device_mappings,
boot_mode,
deregistration_protection,
description,
image_id,
imds_support,
kernel_id,
last_launched_time,
launch_permissions,
product_codes,
ramdisk_id,
sriov_net_support,
tpm_support,
uefi_data
FROM aws.ec2.image_attributes
WHERE Attribute = '{{ Attribute }}' -- required
AND ImageId = '{{ ImageId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_image_attribute"
    values={[
        { label: 'modify_image_attribute', value: 'modify_image_attribute' }
    ]}
>
<TabItem value="modify_image_attribute">

Modifies the specified attribute of the specified AMI. You can specify only one attribute at a time. To specify the attribute, you can use the Attribute parameter, or one of the following parameters: Description, ImdsSupport, or LaunchPermission. Images with an Amazon Web Services Marketplace product code cannot be made public. To enable the SriovNetSupport enhanced networking attribute of an image, enable SriovNetSupport on an instance and create an AMI from the instance.

```sql
UPDATE aws.ec2.image_attributes
SET 
-- No updatable properties
WHERE 
ImageId = '{{ ImageId }}' --required
AND region = '{{ region }}' --required
AND Attribute = '{{ Attribute}}'
AND Description = '{{ Description}}'
AND LaunchPermission = '{{ LaunchPermission}}'
AND OperationType = '{{ OperationType}}'
AND ProductCode = '{{ ProductCode}}'
AND UserGroup = '{{ UserGroup}}'
AND UserId = '{{ UserId}}'
AND Value = '{{ Value}}'
AND OrganizationArn = '{{ OrganizationArn}}'
AND OrganizationalUnitArn = '{{ OrganizationalUnitArn}}'
AND ImdsSupport = '{{ ImdsSupport}}'
AND DryRun = {{ DryRun}};
```
</TabItem>
</Tabs>
