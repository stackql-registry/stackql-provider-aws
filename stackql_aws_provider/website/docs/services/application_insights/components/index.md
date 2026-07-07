--- 
title: components
hide_title: false
hide_table_of_contents: false
keywords:
  - components
  - application_insights
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

Creates, updates, deletes, gets or lists a <code>components</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="components" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_insights.components" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_component"
    values={[
        { label: 'describe_component', value: 'describe_component' },
        { label: 'list_components', value: 'list_components' }
    ]}
>
<TabItem value="describe_component">

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
    <td><CopyableCode code="ApplicationComponent" /></td>
    <td><code>object</code></td>
    <td>Describes a standalone resource or similarly grouped resources that the application is made up of.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceList" /></td>
    <td><code>array</code></td>
    <td>The list of resource ARNs that belong to the component.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_components">

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
    <td><CopyableCode code="ApplicationComponentList" /></td>
    <td><code>array</code></td>
    <td>The list of application components.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to request the next page of results. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
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
    <td><a href="#describe_component"><CopyableCode code="describe_component" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a component and lists the resources that are grouped together in a component.</td>
</tr>
<tr>
    <td><a href="#list_components"><CopyableCode code="list_components" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the auto-grouped, standalone, and custom components of the application.</td>
</tr>
<tr>
    <td><a href="#create_component"><CopyableCode code="create_component" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceGroupName"><code>ResourceGroupName</code></a>, <a href="#parameter-ComponentName"><code>ComponentName</code></a>, <a href="#parameter-ResourceList"><code>ResourceList</code></a></td>
    <td></td>
    <td>Creates a custom component by grouping similar standalone instances to monitor.</td>
</tr>
<tr>
    <td><a href="#update_component"><CopyableCode code="update_component" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceGroupName"><code>ResourceGroupName</code></a>, <a href="#parameter-ComponentName"><code>ComponentName</code></a></td>
    <td></td>
    <td>Updates the custom component name and/or the list of resources that make up the component.</td>
</tr>
<tr>
    <td><a href="#delete_component"><CopyableCode code="delete_component" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.</td>
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
    defaultValue="describe_component"
    values={[
        { label: 'describe_component', value: 'describe_component' },
        { label: 'list_components', value: 'list_components' }
    ]}
>
<TabItem value="describe_component">

Describes a component and lists the resources that are grouped together in a component.

```sql
SELECT
ApplicationComponent,
ResourceList
FROM aws.application_insights.components
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_components">

Lists the auto-grouped, standalone, and custom components of the application.

```sql
SELECT
ApplicationComponentList,
NextToken
FROM aws.application_insights.components
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_component"
    values={[
        { label: 'create_component', value: 'create_component' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_component">

Creates a custom component by grouping similar standalone instances to monitor.

```sql
INSERT INTO aws.application_insights.components (
ResourceGroupName,
ComponentName,
ResourceList,
region
)
SELECT 
'{{ ResourceGroupName }}' /* required */,
'{{ ComponentName }}' /* required */,
'{{ ResourceList }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: components
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the components resource.
    - name: ResourceGroupName
      value: "{{ ResourceGroupName }}"
      description: |
        The name of the resource group.
    - name: ComponentName
      value: "{{ ComponentName }}"
      description: |
        The name of the component.
    - name: ResourceList
      value:
        - "{{ ResourceList }}"
      description: |
        The list of resource ARNs that belong to the component.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_component"
    values={[
        { label: 'update_component', value: 'update_component' }
    ]}
>
<TabItem value="update_component">

Updates the custom component name and/or the list of resources that make up the component.

```sql
UPDATE aws.application_insights.components
SET 
ResourceGroupName = '{{ ResourceGroupName }}',
ComponentName = '{{ ComponentName }}',
NewComponentName = '{{ NewComponentName }}',
ResourceList = '{{ ResourceList }}'
WHERE 
region = '{{ region }}' --required
AND ResourceGroupName = '{{ ResourceGroupName }}' --required
AND ComponentName = '{{ ComponentName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_component"
    values={[
        { label: 'delete_component', value: 'delete_component' }
    ]}
>
<TabItem value="delete_component">

Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.

```sql
DELETE FROM aws.application_insights.components
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
