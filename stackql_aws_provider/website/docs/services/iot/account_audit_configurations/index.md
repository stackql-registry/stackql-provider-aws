--- 
title: account_audit_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - account_audit_configurations
  - iot
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

Creates, updates, deletes, gets or lists an <code>account_audit_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_audit_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.account_audit_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_account_audit_configuration"
    values={[
        { label: 'describe_account_audit_configuration', value: 'describe_account_audit_configuration' }
    ]}
>
<TabItem value="describe_account_audit_configuration">

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
    <td><CopyableCode code="audit_check_configurations" /></td>
    <td><code>object</code></td>
    <td>Which audit checks are enabled and disabled for this account.</td>
</tr>
<tr>
    <td><CopyableCode code="audit_notification_target_configurations" /></td>
    <td><code>object</code></td>
    <td>Information about the targets to which audit notifications are sent for this account.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the role that grants permission to IoT to access information about your devices, policies, certificates, and other items as required when performing an audit. On the first call to UpdateAccountAuditConfiguration, this parameter is required.</td>
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
    <td><a href="#describe_account_audit_configuration"><CopyableCode code="describe_account_audit_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled. Requires permission to access the DescribeAccountAuditConfiguration action.</td>
</tr>
<tr>
    <td><a href="#update_account_audit_configuration"><CopyableCode code="update_account_audit_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Configures or reconfigures the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled. Requires permission to access the UpdateAccountAuditConfiguration action.</td>
</tr>
<tr>
    <td><a href="#delete_account_audit_configuration"><CopyableCode code="delete_account_audit_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-deleteScheduledAudits"><code>deleteScheduledAudits</code></a></td>
    <td>Restores the default settings for Device Defender audits for this account. Any configuration data you entered is deleted and all audit checks are reset to disabled. Requires permission to access the DeleteAccountAuditConfiguration action.</td>
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
<tr id="parameter-deleteScheduledAudits">
    <td><CopyableCode code="deleteScheduledAudits" /></td>
    <td><code>boolean</code></td>
    <td>If true, all scheduled audits are deleted.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_account_audit_configuration"
    values={[
        { label: 'describe_account_audit_configuration', value: 'describe_account_audit_configuration' }
    ]}
>
<TabItem value="describe_account_audit_configuration">

Gets information about the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled. Requires permission to access the DescribeAccountAuditConfiguration action.

```sql
SELECT
audit_check_configurations,
audit_notification_target_configurations,
role_arn
FROM aws.iot.account_audit_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_account_audit_configuration"
    values={[
        { label: 'update_account_audit_configuration', value: 'update_account_audit_configuration' }
    ]}
>
<TabItem value="update_account_audit_configuration">

Configures or reconfigures the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled. Requires permission to access the UpdateAccountAuditConfiguration action.

```sql
UPDATE aws.iot.account_audit_configurations
SET 
roleArn = '{{ roleArn }}',
auditNotificationTargetConfigurations = '{{ auditNotificationTargetConfigurations }}',
auditCheckConfigurations = '{{ auditCheckConfigurations }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_account_audit_configuration"
    values={[
        { label: 'delete_account_audit_configuration', value: 'delete_account_audit_configuration' }
    ]}
>
<TabItem value="delete_account_audit_configuration">

Restores the default settings for Device Defender audits for this account. Any configuration data you entered is deleted and all audit checks are reset to disabled. Requires permission to access the DeleteAccountAuditConfiguration action.

```sql
DELETE FROM aws.iot.account_audit_configurations
WHERE region = '{{ region }}' --required
AND deleteScheduledAudits = '{{ deleteScheduledAudits }}'
;
```
</TabItem>
</Tabs>
