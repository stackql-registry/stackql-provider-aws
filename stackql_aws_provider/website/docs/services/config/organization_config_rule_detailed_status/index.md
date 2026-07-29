--- 
title: organization_config_rule_detailed_status
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_config_rule_detailed_status
  - config
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

Creates, updates, deletes, gets or lists an <code>organization_config_rule_detailed_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_config_rule_detailed_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.organization_config_rule_detailed_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_organization_config_rule_detailed_status"
    values={[
        { label: 'get_organization_config_rule_detailed_status', value: 'get_organization_config_rule_detailed_status' }
    ]}
>
<TabItem value="get_organization_config_rule_detailed_status">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account ID of a member account. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="config_rule_name" /></td>
    <td><code>string</code></td>
    <td>The name of Config rule deployed in the member account.</td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>An error code that is returned when Config rule creation or deletion failed in the member account.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>An error message indicating that Config rule account creation or deletion has failed due to an error in the member account.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last status update.</td>
</tr>
<tr>
    <td><CopyableCode code="member_account_rule_status" /></td>
    <td><code>string</code></td>
    <td>Indicates deployment status for Config rule in the member account. When management account calls PutOrganizationConfigRule action for the first time, Config rule status is created in the member account. When management account calls PutOrganizationConfigRule action for the second time, Config rule status is updated in the member account. Config rule status is deleted when the management account deletes OrganizationConfigRule and disables service access for config-multiaccountsetup.amazonaws.com. Config sets the state of the rule to: CREATE_SUCCESSFUL when Config rule has been created in the member account. CREATE_IN_PROGRESS when Config rule is being created in the member account. CREATE_FAILED when Config rule creation has failed in the member account. DELETE_FAILED when Config rule deletion has failed in the member account. DELETE_IN_PROGRESS when Config rule is being deleted in the member account. DELETE_SUCCESSFUL when Config rule has been deleted in the member account. UPDATE_SUCCESSFUL when Config rule has been updated in the member account. UPDATE_IN_PROGRESS when Config rule is being updated in the member account. UPDATE_FAILED when Config rule deletion has failed in the member account. (CREATE_SUCCESSFUL, CREATE_IN_PROGRESS, CREATE_FAILED, DELETE_SUCCESSFUL, DELETE_FAILED, DELETE_IN_PROGRESS, UPDATE_SUCCESSFUL, UPDATE_IN_PROGRESS, UPDATE_FAILED)</td>
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
    <td><a href="#get_organization_config_rule_detailed_status"><CopyableCode code="get_organization_config_rule_detailed_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed status for each member account within an organization for a given organization Config rule.</td>
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
    defaultValue="get_organization_config_rule_detailed_status"
    values={[
        { label: 'get_organization_config_rule_detailed_status', value: 'get_organization_config_rule_detailed_status' }
    ]}
>
<TabItem value="get_organization_config_rule_detailed_status">

Returns detailed status for each member account within an organization for a given organization Config rule.

```sql
SELECT
account_id,
config_rule_name,
error_code,
error_message,
last_update_time,
member_account_rule_status
FROM aws.config.organization_config_rule_detailed_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
