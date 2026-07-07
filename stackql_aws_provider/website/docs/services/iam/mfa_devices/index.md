--- 
title: mfa_devices
hide_title: false
hide_table_of_contents: false
keywords:
  - mfa_devices
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

Creates, updates, deletes, gets or lists a <code>mfa_devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mfa_devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.mfa_devices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_mfa_device"
    values={[
        { label: 'get_mfa_device', value: 'get_mfa_device' },
        { label: 'list_mfa_devices', value: 'list_mfa_devices' }
    ]}
>
<TabItem value="get_mfa_device">

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
    <td><CopyableCode code="Certifications" /></td>
    <td><code>string</code></td>
    <td>The certifications of a specified user's MFA device. We currently provide FIPS-140-2, FIPS-140-3, and FIDO certification levels obtained from FIDO Alliance Metadata Service (MDS).</td>
</tr>
<tr>
    <td><CopyableCode code="EnableDate" /></td>
    <td><code>string</code></td>
    <td>The date that a specified user's MFA device was first enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="SerialNumber" /></td>
    <td><code>string</code></td>
    <td>Serial number that uniquely identifies the MFA device. For this API, we only accept FIDO security key ARNs.</td>
</tr>
<tr>
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The friendly name identifying the user.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_mfa_devices">

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
    <td><CopyableCode code="EnableDate" /></td>
    <td><code>string</code></td>
    <td>The date when the MFA device was enabled for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="SerialNumber" /></td>
    <td><code>string</code></td>
    <td>The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the device ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The user with whom the MFA device is associated.</td>
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
    <td><a href="#get_mfa_device"><CopyableCode code="get_mfa_device" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-SerialNumber"><code>SerialNumber</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a></td>
    <td>Retrieves information about an MFA device for a specified user.</td>
</tr>
<tr>
    <td><a href="#list_mfa_devices"><CopyableCode code="list_mfa_devices" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists the MFA devices for an IAM user. If the request includes a IAM user name, then this operation lists all the MFA devices associated with the specified user. If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request for this operation. You can paginate the results using the MaxItems and Marker parameters.</td>
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
    <td>Serial number that uniquely identifies the MFA device. For this API, we only accept FIDO security key ARNs.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
<tr id="parameter-UserName">
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The name of the user whose MFA devices you want to list. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_mfa_device"
    values={[
        { label: 'get_mfa_device', value: 'get_mfa_device' },
        { label: 'list_mfa_devices', value: 'list_mfa_devices' }
    ]}
>
<TabItem value="get_mfa_device">

Retrieves information about an MFA device for a specified user.

```sql
SELECT
Certifications,
EnableDate,
SerialNumber,
UserName
FROM aws.iam.mfa_devices
WHERE SerialNumber = '{{ SerialNumber }}' -- required
AND region = '{{ region }}' -- required
AND UserName = '{{ UserName }}'
;
```
</TabItem>
<TabItem value="list_mfa_devices">

Lists the MFA devices for an IAM user. If the request includes a IAM user name, then this operation lists all the MFA devices associated with the specified user. If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request for this operation. You can paginate the results using the MaxItems and Marker parameters.

```sql
SELECT
EnableDate,
SerialNumber,
UserName
FROM aws.iam.mfa_devices
WHERE region = '{{ region }}' -- required
AND UserName = '{{ UserName }}'
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>
