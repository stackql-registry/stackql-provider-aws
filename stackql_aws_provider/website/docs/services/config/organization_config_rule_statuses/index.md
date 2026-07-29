--- 
title: organization_config_rule_statuses
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_config_rule_statuses
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

Creates, updates, deletes, gets or lists an <code>organization_config_rule_statuses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_config_rule_statuses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.organization_config_rule_statuses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_organization_config_rule_statuses"
    values={[
        { label: 'describe_organization_config_rule_statuses', value: 'describe_organization_config_rule_statuses' }
    ]}
>
<TabItem value="describe_organization_config_rule_statuses">

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
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>An error code that is returned when organization Config rule creation or deletion has failed.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>An error message indicating that organization Config rule creation or deletion failed due to an error.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last update.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_config_rule_name" /></td>
    <td><code>string</code></td>
    <td>The name that you assign to organization Config rule. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="organization_rule_status" /></td>
    <td><code>string</code></td>
    <td>Indicates deployment status of an organization Config rule. When management account calls PutOrganizationConfigRule action for the first time, Config rule status is created in all the member accounts. When management account calls PutOrganizationConfigRule action for the second time, Config rule status is updated in all the member accounts. Additionally, Config rule status is updated when one or more member accounts join or leave an organization. Config rule status is deleted when the management account deletes OrganizationConfigRule in all the member accounts and disables service access for config-multiaccountsetup.amazonaws.com. Config sets the state of the rule to: CREATE_SUCCESSFUL when an organization Config rule has been successfully created in all the member accounts. CREATE_IN_PROGRESS when an organization Config rule creation is in progress. CREATE_FAILED when an organization Config rule creation failed in one or more member accounts within that organization. DELETE_FAILED when an organization Config rule deletion failed in one or more member accounts within that organization. DELETE_IN_PROGRESS when an organization Config rule deletion is in progress. DELETE_SUCCESSFUL when an organization Config rule has been successfully deleted from all the member accounts. UPDATE_SUCCESSFUL when an organization Config rule has been successfully updated in all the member accounts. UPDATE_IN_PROGRESS when an organization Config rule update is in progress. UPDATE_FAILED when an organization Config rule update failed in one or more member accounts within that organization. (CREATE_SUCCESSFUL, CREATE_IN_PROGRESS, CREATE_FAILED, DELETE_SUCCESSFUL, DELETE_FAILED, DELETE_IN_PROGRESS, UPDATE_SUCCESSFUL, UPDATE_IN_PROGRESS, UPDATE_FAILED)</td>
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
    <td><a href="#describe_organization_config_rule_statuses"><CopyableCode code="describe_organization_config_rule_statuses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides organization Config rule deployment status for an organization. The status is not considered successful until organization Config rule is successfully deployed in all the member accounts with an exception of excluded accounts. When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization Config rule names. It is only applicable, when you request all the organization Config rules.</td>
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
    defaultValue="describe_organization_config_rule_statuses"
    values={[
        { label: 'describe_organization_config_rule_statuses', value: 'describe_organization_config_rule_statuses' }
    ]}
>
<TabItem value="describe_organization_config_rule_statuses">

Provides organization Config rule deployment status for an organization. The status is not considered successful until organization Config rule is successfully deployed in all the member accounts with an exception of excluded accounts. When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization Config rule names. It is only applicable, when you request all the organization Config rules.

```sql
SELECT
error_code,
error_message,
last_update_time,
organization_config_rule_name,
organization_rule_status
FROM aws.config.organization_config_rule_statuses
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
