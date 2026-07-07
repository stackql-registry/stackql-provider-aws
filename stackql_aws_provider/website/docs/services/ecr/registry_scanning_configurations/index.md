--- 
title: registry_scanning_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - registry_scanning_configurations
  - ecr
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

Creates, updates, deletes, gets or lists a <code>registry_scanning_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="registry_scanning_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecr.registry_scanning_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_registry_scanning_configuration"
    values={[
        { label: 'get_registry_scanning_configuration', value: 'get_registry_scanning_configuration' }
    ]}
>
<TabItem value="get_registry_scanning_configuration">

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
    <td><CopyableCode code="registryId" /></td>
    <td><code>string</code></td>
    <td>The registry ID associated with the request. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scanningConfiguration" /></td>
    <td><code>object</code></td>
    <td>The scanning configuration for the registry.</td>
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
    <td><a href="#get_registry_scanning_configuration"><CopyableCode code="get_registry_scanning_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the scanning configuration for a registry.</td>
</tr>
<tr>
    <td><a href="#put_registry_scanning_configuration"><CopyableCode code="put_registry_scanning_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates or updates the scanning configuration for your private registry.</td>
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
    defaultValue="get_registry_scanning_configuration"
    values={[
        { label: 'get_registry_scanning_configuration', value: 'get_registry_scanning_configuration' }
    ]}
>
<TabItem value="get_registry_scanning_configuration">

Retrieves the scanning configuration for a registry.

```sql
SELECT
registryId,
scanningConfiguration
FROM aws.ecr.registry_scanning_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_registry_scanning_configuration"
    values={[
        { label: 'put_registry_scanning_configuration', value: 'put_registry_scanning_configuration' }
    ]}
>
<TabItem value="put_registry_scanning_configuration">

Creates or updates the scanning configuration for your private registry.

```sql
REPLACE aws.ecr.registry_scanning_configurations
SET 
scanType = '{{ scanType }}',
rules = '{{ rules }}'
WHERE 
region = '{{ region }}' --required
RETURNING
registryScanningConfiguration;
```
</TabItem>
</Tabs>
