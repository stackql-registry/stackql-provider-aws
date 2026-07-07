--- 
title: service_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - service_settings
  - ssm
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

Creates, updates, deletes, gets or lists a <code>service_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.service_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_setting"
    values={[
        { label: 'get_service_setting', value: 'get_service_setting' }
    ]}
>
<TabItem value="get_service_setting">

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
    <td><CopyableCode code="ARN" /></td>
    <td><code>string</code></td>
    <td>The ARN of the service setting.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the service setting was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedUser" /></td>
    <td><code>string</code></td>
    <td>The ARN of the last modified user. This field is populated only if the setting value was overwritten.</td>
</tr>
<tr>
    <td><CopyableCode code="SettingId" /></td>
    <td><code>string</code></td>
    <td>The ID of the service setting.</td>
</tr>
<tr>
    <td><CopyableCode code="SettingValue" /></td>
    <td><code>string</code></td>
    <td>The value of the service setting.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the service setting. The value can be Default, Customized or PendingUpdate. Default: The current setting uses a default value provisioned by the Amazon Web Services service team. Customized: The current setting use a custom value specified by the customer. PendingUpdate: The current setting uses a default or custom value, but a setting change request is pending approval.</td>
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
    <td><a href="#get_service_setting"><CopyableCode code="get_service_setting" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>ServiceSetting is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of false. This means the user can't use this feature unless they change the setting to true and intentionally opt in for a paid feature. Services map a SettingId object to a setting value. Amazon Web Services services teams define the default value for a SettingId. You can't create a new SettingId, but you can overwrite the default value if you have the ssm:UpdateServiceSetting permission for the setting. Use the UpdateServiceSetting API operation to change the default setting. Or use the ResetServiceSetting to change the value back to the original value defined by the Amazon Web Services service team. Query the current service setting for the Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#update_service_setting"><CopyableCode code="update_service_setting" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SettingId"><code>SettingId</code></a>, <a href="#parameter-SettingValue"><code>SettingValue</code></a></td>
    <td></td>
    <td>ServiceSetting is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature. Services map a SettingId object to a setting value. Amazon Web Services services teams define the default value for a SettingId. You can't create a new SettingId, but you can overwrite the default value if you have the ssm:UpdateServiceSetting permission for the setting. Use the GetServiceSetting API operation to view the current value. Or, use the ResetServiceSetting to change the value back to the original value defined by the Amazon Web Services service team. Update the service setting for the account.</td>
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
    defaultValue="get_service_setting"
    values={[
        { label: 'get_service_setting', value: 'get_service_setting' }
    ]}
>
<TabItem value="get_service_setting">

ServiceSetting is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of false. This means the user can't use this feature unless they change the setting to true and intentionally opt in for a paid feature. Services map a SettingId object to a setting value. Amazon Web Services services teams define the default value for a SettingId. You can't create a new SettingId, but you can overwrite the default value if you have the ssm:UpdateServiceSetting permission for the setting. Use the UpdateServiceSetting API operation to change the default setting. Or use the ResetServiceSetting to change the value back to the original value defined by the Amazon Web Services service team. Query the current service setting for the Amazon Web Services account.

```sql
SELECT
ARN,
LastModifiedDate,
LastModifiedUser,
SettingId,
SettingValue,
Status
FROM aws.ssm.service_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service_setting"
    values={[
        { label: 'update_service_setting', value: 'update_service_setting' }
    ]}
>
<TabItem value="update_service_setting">

ServiceSetting is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature. Services map a SettingId object to a setting value. Amazon Web Services services teams define the default value for a SettingId. You can't create a new SettingId, but you can overwrite the default value if you have the ssm:UpdateServiceSetting permission for the setting. Use the GetServiceSetting API operation to view the current value. Or, use the ResetServiceSetting to change the value back to the original value defined by the Amazon Web Services service team. Update the service setting for the account.

```sql
UPDATE aws.ssm.service_settings
SET 
SettingId = '{{ SettingId }}',
SettingValue = '{{ SettingValue }}'
WHERE 
region = '{{ region }}' --required
AND SettingId = '{{ SettingId }}' --required
AND SettingValue = '{{ SettingValue }}' --required;
```
</TabItem>
</Tabs>
