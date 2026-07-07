--- 
title: group_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - group_configurations
  - resource_groups
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

Creates, updates, deletes, gets or lists a <code>group_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="group_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resource_groups.group_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_group_configuration"
    values={[
        { label: 'get_group_configuration', value: 'get_group_configuration' }
    ]}
>
<TabItem value="get_group_configuration">

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
    <td><CopyableCode code="Configuration" /></td>
    <td><code>array</code></td>
    <td>The configuration currently associated with the group and in effect.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>If present, the reason why a request to update the group configuration failed.</td>
</tr>
<tr>
    <td><CopyableCode code="ProposedConfiguration" /></td>
    <td><code>array</code></td>
    <td>If present, the new configuration that is in the process of being applied to the group.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of an attempt to update the group configuration. (UPDATING, UPDATE_COMPLETE, UPDATE_FAILED)</td>
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
    <td><a href="#get_group_configuration"><CopyableCode code="get_group_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the service configuration associated with the specified resource group. For details about the service configuration syntax, see Service configurations for Resource Groups. Minimum permissions To run this command, you must have the following permissions: resource-groups:GetGroupConfiguration</td>
</tr>
<tr>
    <td><a href="#put_group_configuration"><CopyableCode code="put_group_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Attaches a service configuration to the specified group. This occurs asynchronously, and can take time to complete. You can use GetGroupConfiguration to check the status of the update. Minimum permissions To run this command, you must have the following permissions: resource-groups:PutGroupConfiguration</td>
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
    defaultValue="get_group_configuration"
    values={[
        { label: 'get_group_configuration', value: 'get_group_configuration' }
    ]}
>
<TabItem value="get_group_configuration">

Retrieves the service configuration associated with the specified resource group. For details about the service configuration syntax, see Service configurations for Resource Groups. Minimum permissions To run this command, you must have the following permissions: resource-groups:GetGroupConfiguration

```sql
SELECT
Configuration,
FailureReason,
ProposedConfiguration,
Status
FROM aws.resource_groups.group_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_group_configuration"
    values={[
        { label: 'put_group_configuration', value: 'put_group_configuration' }
    ]}
>
<TabItem value="put_group_configuration">

Attaches a service configuration to the specified group. This occurs asynchronously, and can take time to complete. You can use GetGroupConfiguration to check the status of the update. Minimum permissions To run this command, you must have the following permissions: resource-groups:PutGroupConfiguration

```sql
REPLACE aws.resource_groups.group_configurations
SET 
Group = '{{ Group }}',
Configuration = '{{ Configuration }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
