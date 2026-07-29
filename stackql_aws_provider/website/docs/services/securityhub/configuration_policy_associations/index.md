--- 
title: configuration_policy_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_policy_associations
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

Creates, updates, deletes, gets or lists a <code>configuration_policy_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_policy_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.configuration_policy_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_configuration_policy_associations"
    values={[
        { label: 'batch_get_configuration_policy_associations', value: 'batch_get_configuration_policy_associations' },
        { label: 'get_configuration_policy_association', value: 'get_configuration_policy_association' },
        { label: 'list_configuration_policy_associations', value: 'list_configuration_policy_associations' }
    ]}
>
<TabItem value="batch_get_configuration_policy_associations">

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
    <td><CopyableCode code="configuration_policy_associations" /></td>
    <td><code>array</code></td>
    <td>Describes associations for the target accounts, OUs, or the root.</td>
</tr>
<tr>
    <td><CopyableCode code="unprocessed_configuration_policy_associations" /></td>
    <td><code>array</code></td>
    <td>An array of configuration policy associations, one for each configuration policy association identifier, that was specified in the request but couldn’t be processed due to an error.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_configuration_policy_association">

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
    <td><CopyableCode code="association_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the association between the specified target and the configuration. (PENDING, SUCCESS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="association_status_message" /></td>
    <td><code>string</code></td>
    <td>The explanation for a FAILED value for AssociationStatus. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="association_type" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the association between the specified target and the configuration was directly applied by the Security Hub CSPM delegated administrator or inherited from a parent. (INHERITED, APPLIED)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_policy_id" /></td>
    <td><code>string</code></td>
    <td>The universally unique identifier (UUID) of a configuration policy. For self-managed behavior, the value is SELF_MANAGED_SECURITY_HUB. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="target_id" /></td>
    <td><code>string</code></td>
    <td>The target account ID, organizational unit ID, or the root ID for which the association is retrieved. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="target_type" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the target is an Amazon Web Services account, organizational unit, or the organization root. (ACCOUNT, ORGANIZATIONAL_UNIT, ROOT)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and ISO 8601 format, that the configuration policy association was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_configuration_policy_associations">

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
    <td><CopyableCode code="association_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the association between the specified target and the configuration. (PENDING, SUCCESS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="association_status_message" /></td>
    <td><code>string</code></td>
    <td>The explanation for a FAILED value for AssociationStatus. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="association_type" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the association between the specified target and the configuration was directly applied by the Security Hub CSPM delegated administrator or inherited from a parent. (INHERITED, APPLIED)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_policy_id" /></td>
    <td><code>string</code></td>
    <td>The universally unique identifier (UUID) of the configuration policy. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="target_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the target account, organizational unit, or the root. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="target_type" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the target is an Amazon Web Services account, organizational unit, or the root. (ACCOUNT, ORGANIZATIONAL_UNIT, ROOT)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and ISO 8601 format, that the configuration policy association was last updated.</td>
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
    <td><a href="#batch_get_configuration_policy_associations"><CopyableCode code="batch_get_configuration_policy_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns associations between an Security Hub CSPM configuration and a batch of target accounts, organizational units, or the root. Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region. A configuration can refer to a configuration policy or to a self-managed configuration.</td>
</tr>
<tr>
    <td><a href="#get_configuration_policy_association"><CopyableCode code="get_configuration_policy_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the association between a configuration and a target account, organizational unit, or the root. The configuration can be a configuration policy or self-managed behavior. Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region.</td>
</tr>
<tr>
    <td><a href="#list_configuration_policy_associations"><CopyableCode code="list_configuration_policy_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about the associations for your configuration policies and self-managed behavior. Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region.</td>
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
    defaultValue="batch_get_configuration_policy_associations"
    values={[
        { label: 'batch_get_configuration_policy_associations', value: 'batch_get_configuration_policy_associations' },
        { label: 'get_configuration_policy_association', value: 'get_configuration_policy_association' },
        { label: 'list_configuration_policy_associations', value: 'list_configuration_policy_associations' }
    ]}
>
<TabItem value="batch_get_configuration_policy_associations">

Returns associations between an Security Hub CSPM configuration and a batch of target accounts, organizational units, or the root. Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region. A configuration can refer to a configuration policy or to a self-managed configuration.

```sql
SELECT
configuration_policy_associations,
unprocessed_configuration_policy_associations
FROM aws.securityhub.configuration_policy_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_configuration_policy_association">

Returns the association between a configuration and a target account, organizational unit, or the root. The configuration can be a configuration policy or self-managed behavior. Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region.

```sql
SELECT
association_status,
association_status_message,
association_type,
configuration_policy_id,
target_id,
target_type,
updated_at
FROM aws.securityhub.configuration_policy_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_configuration_policy_associations">

Provides information about the associations for your configuration policies and self-managed behavior. Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region.

```sql
SELECT
association_status,
association_status_message,
association_type,
configuration_policy_id,
target_id,
target_type,
updated_at
FROM aws.securityhub.configuration_policy_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
