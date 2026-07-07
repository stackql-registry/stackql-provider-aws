--- 
title: organization_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_configurations
  - securityhub
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

Creates, updates, deletes, gets or lists an <code>organization_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.organization_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_organization_configuration"
    values={[
        { label: 'describe_organization_configuration', value: 'describe_organization_configuration' }
    ]}
>
<TabItem value="describe_organization_configuration">

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
    <td><CopyableCode code="AutoEnable" /></td>
    <td><code>boolean</code></td>
    <td>Whether to automatically enable Security Hub CSPM in new member accounts when they join the organization. If set to true, then Security Hub CSPM is automatically enabled in new accounts. If set to false, then Security Hub CSPM isn't enabled in new accounts automatically. The default value is false. If the ConfigurationType of your organization is set to CENTRAL, then this field is set to false and can't be changed in the home Region and linked Regions. However, in that case, the delegated administrator can create a configuration policy in which Security Hub CSPM is enabled and associate the policy with new organization accounts.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoEnableStandards" /></td>
    <td><code>string</code></td>
    <td>Whether to automatically enable Security Hub CSPM default standards in new member accounts when they join the organization. If equal to DEFAULT, then Security Hub CSPM default standards are automatically enabled for new member accounts. If equal to NONE, then default standards are not automatically enabled for new member accounts. The default value of this parameter is equal to DEFAULT. If the ConfigurationType of your organization is set to CENTRAL, then this field is set to NONE and can't be changed in the home Region and linked Regions. However, in that case, the delegated administrator can create a configuration policy in which specific security standards are enabled and associate the policy with new organization accounts. (NONE, DEFAULT)</td>
</tr>
<tr>
    <td><CopyableCode code="MemberAccountLimitReached" /></td>
    <td><code>boolean</code></td>
    <td>Whether the maximum number of allowed member accounts are already associated with the Security Hub CSPM administrator account.</td>
</tr>
<tr>
    <td><CopyableCode code="OrganizationConfiguration" /></td>
    <td><code>object</code></td>
    <td>Provides information about the way an organization is configured in Security Hub CSPM.</td>
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
    <td><a href="#describe_organization_configuration"><CopyableCode code="describe_organization_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the way your organization is configured in Security Hub CSPM. Only the Security Hub CSPM administrator account can invoke this operation.</td>
</tr>
<tr>
    <td><a href="#update_organization_configuration"><CopyableCode code="update_organization_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AutoEnable"><code>AutoEnable</code></a></td>
    <td></td>
    <td>Updates the configuration of your organization in Security Hub CSPM. Only the Security Hub CSPM administrator account can invoke this operation.</td>
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
    defaultValue="describe_organization_configuration"
    values={[
        { label: 'describe_organization_configuration', value: 'describe_organization_configuration' }
    ]}
>
<TabItem value="describe_organization_configuration">

Returns information about the way your organization is configured in Security Hub CSPM. Only the Security Hub CSPM administrator account can invoke this operation.

```sql
SELECT
AutoEnable,
AutoEnableStandards,
MemberAccountLimitReached,
OrganizationConfiguration
FROM aws.securityhub.organization_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_organization_configuration"
    values={[
        { label: 'update_organization_configuration', value: 'update_organization_configuration' }
    ]}
>
<TabItem value="update_organization_configuration">

Updates the configuration of your organization in Security Hub CSPM. Only the Security Hub CSPM administrator account can invoke this operation.

```sql
UPDATE aws.securityhub.organization_configurations
SET 
AutoEnable = {{ AutoEnable }},
AutoEnableStandards = '{{ AutoEnableStandards }}',
OrganizationConfiguration = '{{ OrganizationConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND AutoEnable = {{ AutoEnable }} --required;
```
</TabItem>
</Tabs>
