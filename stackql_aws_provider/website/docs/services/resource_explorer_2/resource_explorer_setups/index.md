--- 
title: resource_explorer_setups
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_explorer_setups
  - resource_explorer_2
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

Creates, updates, deletes, gets or lists a <code>resource_explorer_setups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_explorer_setups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resource_explorer_2.resource_explorer_setups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_explorer_setup"
    values={[
        { label: 'get_resource_explorer_setup', value: 'get_resource_explorer_setup' }
    ]}
>
<TabItem value="get_resource_explorer_setup">

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
    <td><CopyableCode code="index" /></td>
    <td><code>object</code></td>
    <td>The status information for the Resource Explorer index in this Region.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region for which this status information applies. (pattern: &lt;code&gt;&#91;a-z-&#93;+-&#91;a-z&#93;+-&#91;0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="view" /></td>
    <td><code>object</code></td>
    <td>The status information for the Resource Explorer view in this Region.</td>
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
    <td><a href="#get_resource_explorer_setup"><CopyableCode code="get_resource_explorer_setup" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the status and details of a Resource Explorer setup operation. This operation returns information about the progress of creating or deleting Resource Explorer configurations across Regions.</td>
</tr>
<tr>
    <td><a href="#create_resource_explorer_setup"><CopyableCode code="create_resource_explorer_setup" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RegionList"><code>RegionList</code></a>, <a href="#parameter-ViewName"><code>ViewName</code></a></td>
    <td></td>
    <td>Creates a Resource Explorer setup configuration across multiple Amazon Web Services Regions. This operation sets up indexes and views in the specified Regions. This operation can also be used to set an aggregator Region for cross-Region resource search.</td>
</tr>
<tr>
    <td><a href="#delete_resource_explorer_setup"><CopyableCode code="delete_resource_explorer_setup" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Resource Explorer setup configuration. This operation removes indexes and views from the specified Regions or all Regions where Resource Explorer is configured.</td>
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
    defaultValue="get_resource_explorer_setup"
    values={[
        { label: 'get_resource_explorer_setup', value: 'get_resource_explorer_setup' }
    ]}
>
<TabItem value="get_resource_explorer_setup">

Retrieves the status and details of a Resource Explorer setup operation. This operation returns information about the progress of creating or deleting Resource Explorer configurations across Regions.

```sql
SELECT
index,
region,
view
FROM aws.resource_explorer_2.resource_explorer_setups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resource_explorer_setup"
    values={[
        { label: 'create_resource_explorer_setup', value: 'create_resource_explorer_setup' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resource_explorer_setup">

Creates a Resource Explorer setup configuration across multiple Amazon Web Services Regions. This operation sets up indexes and views in the specified Regions. This operation can also be used to set an aggregator Region for cross-Region resource search.

```sql
INSERT INTO aws.resource_explorer_2.resource_explorer_setups (
RegionList,
AggregatorRegions,
ViewName,
region
)
SELECT 
'{{ RegionList }}' /* required */,
'{{ AggregatorRegions }}',
'{{ ViewName }}' /* required */,
'{{ region }}'
RETURNING
task_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resource_explorer_setups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resource_explorer_setups resource.
    - name: RegionList
      value:
        - "{{ RegionList }}"
    - name: AggregatorRegions
      value:
        - "{{ AggregatorRegions }}"
    - name: ViewName
      value: "{{ ViewName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource_explorer_setup"
    values={[
        { label: 'delete_resource_explorer_setup', value: 'delete_resource_explorer_setup' }
    ]}
>
<TabItem value="delete_resource_explorer_setup">

Deletes a Resource Explorer setup configuration. This operation removes indexes and views from the specified Regions or all Regions where Resource Explorer is configured.

```sql
DELETE FROM aws.resource_explorer_2.resource_explorer_setups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
