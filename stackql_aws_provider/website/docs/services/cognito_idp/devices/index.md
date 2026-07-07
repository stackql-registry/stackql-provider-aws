--- 
title: devices
hide_title: false
hide_table_of_contents: false
keywords:
  - devices
  - cognito_idp
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.devices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_device"
    values={[
        { label: 'get_device', value: 'get_device' },
        { label: 'list_devices', value: 'list_devices' }
    ]}
>
<TabItem value="get_device">

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
    <td><CopyableCode code="DeviceAttributes" /></td>
    <td><code>array</code></td>
    <td>Metadata about a user's device, like name and last-access source IP.</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceCreateDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceKey" /></td>
    <td><code>string</code></td>
    <td>The device key, for example us-west-2_EXAMPLE-a1b2c3d4-5678-90ab-cdef-EXAMPLE22222. (pattern: &lt;code&gt;&#91;\w-&#93;+_&#91;0-9a-f-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceLastAuthenticatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the user last signed in with the device.</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceLastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_devices">

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
    <td><CopyableCode code="Devices" /></td>
    <td><code>array</code></td>
    <td>An array of devices and their details. Each entry that's returned includes device information, last-accessed and created dates, and the device key.</td>
</tr>
<tr>
    <td><CopyableCode code="PaginationToken" /></td>
    <td><code>string</code></td>
    <td>The identifier that Amazon Cognito returned with the previous request to this operation. When you include a pagination token in your request, Amazon Cognito returns the next set of items in the list. By use of this token, you can paginate through the full list of items. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_device"><CopyableCode code="get_device" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given a device key, returns information about a remembered device for the current user. For more information about device authentication, see Working with user devices in your user pool. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.</td>
</tr>
<tr>
    <td><a href="#list_devices"><CopyableCode code="list_devices" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the devices that Amazon Cognito has registered to the currently signed-in user. For more information about device authentication, see Working with user devices in your user pool. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.</td>
</tr>
<tr>
    <td><a href="#update_device_status"><CopyableCode code="update_device_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccessToken"><code>AccessToken</code></a>, <a href="#parameter-DeviceKey"><code>DeviceKey</code></a></td>
    <td></td>
    <td>Updates the status of a the currently signed-in user's device so that it is marked as remembered or not remembered for the purpose of device authentication. Device authentication is a "remember me" mechanism that silently completes sign-in from trusted devices with a device key instead of a user-provided MFA code. This operation changes the status of a device without deleting it, so you can enable it again later. For more information about device authentication, see Working with devices. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.</td>
</tr>
<tr>
    <td><a href="#admin_list_devices"><CopyableCode code="admin_list_devices" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-Username"><code>Username</code></a></td>
    <td></td>
    <td>Lists a user's registered devices. Remembered devices are used in authentication services where you offer a "Remember me" option for users who you want to permit to sign in without MFA from a trusted device. Users can bypass MFA while your application performs device SRP authentication on the back end. For more information, see Working with devices. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
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
    defaultValue="get_device"
    values={[
        { label: 'get_device', value: 'get_device' },
        { label: 'list_devices', value: 'list_devices' }
    ]}
>
<TabItem value="get_device">

Given a device key, returns information about a remembered device for the current user. For more information about device authentication, see Working with user devices in your user pool. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.

```sql
SELECT
DeviceAttributes,
DeviceCreateDate,
DeviceKey,
DeviceLastAuthenticatedDate,
DeviceLastModifiedDate
FROM aws.cognito_idp.devices
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_devices">

Lists the devices that Amazon Cognito has registered to the currently signed-in user. For more information about device authentication, see Working with user devices in your user pool. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.

```sql
SELECT
Devices,
PaginationToken
FROM aws.cognito_idp.devices
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_device_status"
    values={[
        { label: 'update_device_status', value: 'update_device_status' }
    ]}
>
<TabItem value="update_device_status">

Updates the status of a the currently signed-in user's device so that it is marked as remembered or not remembered for the purpose of device authentication. Device authentication is a "remember me" mechanism that silently completes sign-in from trusted devices with a device key instead of a user-provided MFA code. This operation changes the status of a device without deleting it, so you can enable it again later. For more information about device authentication, see Working with devices. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.

```sql
UPDATE aws.cognito_idp.devices
SET 
AccessToken = '{{ AccessToken }}',
DeviceKey = '{{ DeviceKey }}',
DeviceRememberedStatus = '{{ DeviceRememberedStatus }}'
WHERE 
region = '{{ region }}' --required
AND AccessToken = '{{ AccessToken }}' --required
AND DeviceKey = '{{ DeviceKey }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="admin_list_devices"
    values={[
        { label: 'admin_list_devices', value: 'admin_list_devices' }
    ]}
>
<TabItem value="admin_list_devices">

Lists a user's registered devices. Remembered devices are used in authentication services where you offer a "Remember me" option for users who you want to permit to sign in without MFA from a trusted device. Users can bypass MFA while your application performs device SRP authentication on the back end. For more information, see Working with devices. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.devices.admin_list_devices 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"Username": "{{ Username }}", 
"Limit": {{ Limit }}, 
"PaginationToken": "{{ PaginationToken }}"
}'
;
```
</TabItem>
</Tabs>
