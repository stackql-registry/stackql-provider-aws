--- 
title: virtual_mfa_devices
hide_title: false
hide_table_of_contents: false
keywords:
  - virtual_mfa_devices
  - iam
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

Creates, updates, deletes, gets or lists a <code>virtual_mfa_devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="virtual_mfa_devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.virtual_mfa_devices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_virtual_mfa_devices"
    values={[
        { label: 'list_virtual_mfa_devices', value: 'list_virtual_mfa_devices' }
    ]}
>
<TabItem value="list_virtual_mfa_devices">

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
    <td><CopyableCode code="Base32StringSeed" /></td>
    <td><code>string</code></td>
    <td>The base32 seed defined as specified in RFC3548. The Base32StringSeed is base32-encoded.</td>
</tr>
<tr>
    <td><CopyableCode code="EnableDate" /></td>
    <td><code>string</code></td>
    <td>The date and time on which the virtual MFA device was enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="QRCodePNG" /></td>
    <td><code>string</code></td>
    <td>A QR code PNG image that encodes otpauth:​//totp/$virtualMFADeviceName@$AccountName?secret=$Base32String where $virtualMFADeviceName is one of the create call arguments. AccountName is the user name if set (otherwise, the account ID otherwise), and Base32String is the seed in base32 format. The Base32String value is base64-encoded.</td>
</tr>
<tr>
    <td><CopyableCode code="SerialNumber" /></td>
    <td><code>string</code></td>
    <td>The serial number associated with VirtualMFADevice.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>A list of tags that are attached to the virtual MFA device. For more information about tagging, see Tagging IAM resources in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="User" /></td>
    <td><code>string</code></td>
    <td>The IAM user associated with this virtual MFA device.</td>
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
    <td><a href="#list_virtual_mfa_devices"><CopyableCode code="list_virtual_mfa_devices" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AssignmentStatus"><code>AssignmentStatus</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists the virtual MFA devices defined in the Amazon Web Services account by assignment status. If you do not specify an assignment status, the operation returns a list of all virtual MFA devices. Assignment status can be Assigned, Unassigned, or Any. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view tag information for a virtual MFA device, see ListMFADeviceTags. You can paginate the results using the MaxItems and Marker parameters.</td>
</tr>
<tr>
    <td><a href="#create_virtual_mfa_device"><CopyableCode code="create_virtual_mfa_device" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-VirtualMFADeviceName"><code>VirtualMFADeviceName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Path"><code>Path</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a new virtual MFA device for the Amazon Web Services account. After creating the virtual MFA, use EnableMFADevice to attach the MFA device to an IAM user. For more information about creating and working with virtual MFA devices, see Using a virtual MFA device in the IAM User Guide. For information about the maximum number of MFA devices you can create, see IAM and STS quotas in the IAM User Guide. The seed information contained in the QR code and the Base32 string should be treated like any other secret access information. In other words, protect the seed information as you would your Amazon Web Services access keys or your passwords. After you provision your virtual device, you should ensure that the information is destroyed following secure procedures.</td>
</tr>
<tr>
    <td><a href="#delete_virtual_mfa_device"><CopyableCode code="delete_virtual_mfa_device" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-SerialNumber"><code>SerialNumber</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a virtual MFA device. You must deactivate a user's virtual MFA device before you can delete it. For information about deactivating MFA devices, see DeactivateMFADevice.</td>
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
<tr id="parameter-SerialNumber">
    <td><CopyableCode code="SerialNumber" /></td>
    <td><code>string</code></td>
    <td>The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the same as the ARN. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@:/-</td>
</tr>
<tr id="parameter-VirtualMFADeviceName">
    <td><CopyableCode code="VirtualMFADeviceName" /></td>
    <td><code>string</code></td>
    <td>The name of the virtual MFA device, which must be unique. Use with path to uniquely identify a virtual MFA device. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AssignmentStatus">
    <td><CopyableCode code="AssignmentStatus" /></td>
    <td><code>string</code></td>
    <td>The status (Unassigned or Assigned) of the devices to list. If you do not specify an AssignmentStatus, the operation defaults to Any, which lists both assigned and unassigned virtual MFA devices.,</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true, and Marker contains a value to include in the subsequent call that tells the service where to continue from.</td>
</tr>
<tr id="parameter-Path">
    <td><CopyableCode code="Path" /></td>
    <td><code>string</code></td>
    <td>The path for the virtual MFA device. For more information about paths, see IAM identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags that you want to attach to the new IAM virtual MFA device. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_virtual_mfa_devices"
    values={[
        { label: 'list_virtual_mfa_devices', value: 'list_virtual_mfa_devices' }
    ]}
>
<TabItem value="list_virtual_mfa_devices">

Lists the virtual MFA devices defined in the Amazon Web Services account by assignment status. If you do not specify an assignment status, the operation returns a list of all virtual MFA devices. Assignment status can be Assigned, Unassigned, or Any. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view tag information for a virtual MFA device, see ListMFADeviceTags. You can paginate the results using the MaxItems and Marker parameters.

```sql
SELECT
Base32StringSeed,
EnableDate,
QRCodePNG,
SerialNumber,
Tags,
User
FROM aws.iam.virtual_mfa_devices
WHERE region = '{{ region }}' -- required
AND AssignmentStatus = '{{ AssignmentStatus }}'
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_virtual_mfa_device"
    values={[
        { label: 'create_virtual_mfa_device', value: 'create_virtual_mfa_device' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_virtual_mfa_device">

Creates a new virtual MFA device for the Amazon Web Services account. After creating the virtual MFA, use EnableMFADevice to attach the MFA device to an IAM user. For more information about creating and working with virtual MFA devices, see Using a virtual MFA device in the IAM User Guide. For information about the maximum number of MFA devices you can create, see IAM and STS quotas in the IAM User Guide. The seed information contained in the QR code and the Base32 string should be treated like any other secret access information. In other words, protect the seed information as you would your Amazon Web Services access keys or your passwords. After you provision your virtual device, you should ensure that the information is destroyed following secure procedures.

```sql
INSERT INTO aws.iam.virtual_mfa_devices (
VirtualMFADeviceName,
region,
Path,
Tags
)
SELECT 
'{{ VirtualMFADeviceName }}',
'{{ region }}',
'{{ Path }}',
'{{ Tags }}'
RETURNING
Base32StringSeed,
EnableDate,
QRCodePNG,
SerialNumber,
Tags,
User
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: virtual_mfa_devices
  props:
    - name: VirtualMFADeviceName
      value: "{{ VirtualMFADeviceName }}"
      description: Required parameter for the virtual_mfa_devices resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the virtual_mfa_devices resource.
    - name: Path
      value: "{{ Path }}"
      description: The path for the virtual MFA device. For more information about paths, see IAM identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\\u0021) through the DEL character (\\u007F), including most punctuation characters, digits, and upper and lowercased letters.
      description: The path for the virtual MFA device. For more information about paths, see IAM identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\\u0021) through the DEL character (\\u007F), including most punctuation characters, digits, and upper and lowercased letters.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tags that you want to attach to the new IAM virtual MFA device. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
      description: A list of tags that you want to attach to the new IAM virtual MFA device. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_virtual_mfa_device"
    values={[
        { label: 'delete_virtual_mfa_device', value: 'delete_virtual_mfa_device' }
    ]}
>
<TabItem value="delete_virtual_mfa_device">

Deletes a virtual MFA device. You must deactivate a user's virtual MFA device before you can delete it. For information about deactivating MFA devices, see DeactivateMFADevice.

```sql
DELETE FROM aws.iam.virtual_mfa_devices
WHERE SerialNumber = '{{ SerialNumber }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
