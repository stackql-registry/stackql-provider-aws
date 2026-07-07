--- 
title: automated_discovery_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - automated_discovery_configurations
  - macie2
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

Creates, updates, deletes, gets or lists an <code>automated_discovery_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automated_discovery_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.automated_discovery_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_automated_discovery_configuration"
    values={[
        { label: 'get_automated_discovery_configuration', value: 'get_automated_discovery_configuration' }
    ]}
>
<TabItem value="get_automated_discovery_configuration">

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
    <td><CopyableCode code="autoEnableOrganizationMembers" /></td>
    <td><code>string</code></td>
    <td>Specifies whether automated sensitive data discovery is enabled automatically for accounts in the organization. Possible values are: ALL, enable it for all existing accounts and new member accounts; NEW, enable it only for new member accounts; and, NONE, don't enable it for any accounts. (ALL, NEW, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="classificationScopeId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the classification scope that's used when performing automated sensitive data discovery. The classification scope specifies S3 buckets to exclude from analyses. (pattern: &lt;code&gt;^&#91;0-9a-z&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="disabledAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when automated sensitive data discovery was most recently disabled. This value is null if automated sensitive data discovery is currently enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="firstEnabledAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when automated sensitive data discovery was initially enabled. This value is null if automated sensitive data discovery has never been enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when the configuration settings or status of automated sensitive data discovery was most recently changed.</td>
</tr>
<tr>
    <td><CopyableCode code="sensitivityInspectionTemplateId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the sensitivity inspection template that's used when performing automated sensitive data discovery. The template specifies which allow lists, custom data identifiers, and managed data identifiers to use when analyzing data.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of automated sensitive data discovery for the organization or account. Possible values are: ENABLED, use the specified settings to perform automated sensitive data discovery activities; and, DISABLED, don't perform automated sensitive data discovery activities. (ENABLED, DISABLED)</td>
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
    <td><a href="#get_automated_discovery_configuration"><CopyableCode code="get_automated_discovery_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the configuration settings and status of automated sensitive data discovery for an organization or standalone account.</td>
</tr>
<tr>
    <td><a href="#update_automated_discovery_configuration"><CopyableCode code="update_automated_discovery_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Changes the configuration settings and status of automated sensitive data discovery for an organization or standalone account.</td>
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
    defaultValue="get_automated_discovery_configuration"
    values={[
        { label: 'get_automated_discovery_configuration', value: 'get_automated_discovery_configuration' }
    ]}
>
<TabItem value="get_automated_discovery_configuration">

Retrieves the configuration settings and status of automated sensitive data discovery for an organization or standalone account.

```sql
SELECT
autoEnableOrganizationMembers,
classificationScopeId,
disabledAt,
firstEnabledAt,
lastUpdatedAt,
sensitivityInspectionTemplateId,
status
FROM aws.macie2.automated_discovery_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_automated_discovery_configuration"
    values={[
        { label: 'update_automated_discovery_configuration', value: 'update_automated_discovery_configuration' }
    ]}
>
<TabItem value="update_automated_discovery_configuration">

Changes the configuration settings and status of automated sensitive data discovery for an organization or standalone account.

```sql
UPDATE aws.macie2.automated_discovery_configurations
SET 
autoEnableOrganizationMembers = '{{ autoEnableOrganizationMembers }}',
status = '{{ status }}'
WHERE 
region = '{{ region }}' --required
AND status = '{{ status }}' --required;
```
</TabItem>
</Tabs>
