--- 
title: components
hide_title: false
hide_table_of_contents: false
keywords:
  - components
  - ssm_sap
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_sap.components" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_component"
    values={[
        { label: 'get_component', value: 'get_component' },
        { label: 'list_components', value: 'list_components' }
    ]}
>
<TabItem value="get_component">

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
    <td><CopyableCode code="Component" /></td>
    <td><code>object</code></td>
    <td>The component of an application registered with AWS Systems Manager for SAP.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags of a component.</td>
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
    <td><CopyableCode code="ApplicationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the application. (pattern: &lt;code&gt;&#91;\w\d\.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the component summary. (pattern: &lt;code&gt;arn:(.+:)&#123;2,4&#125;.+$|^arn:(.+:)&#123;1,3&#125;.+\/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ComponentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the component. (pattern: &lt;code&gt;&#91;\w\d-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ComponentType" /></td>
    <td><code>string</code></td>
    <td>The type of the component. (HANA, HANA_NODE, ABAP, ASCS, DIALOG, WEBDISP, WD, ERS)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags of the component.</td>
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
    <td><a href="#get_component"><CopyableCode code="get_component" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the component of an application registered with AWS Systems Manager for SAP.</td>
</tr>
<tr>
    <td><a href="#list_components"><CopyableCode code="list_components" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the components registered with AWS Systems Manager for SAP.</td>
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
    defaultValue="get_component"
    values={[
        { label: 'get_component', value: 'get_component' },
        { label: 'list_components', value: 'list_components' }
    ]}
>
<TabItem value="get_component">

Gets the component of an application registered with AWS Systems Manager for SAP.

```sql
SELECT
Component,
Tags
FROM aws.ssm_sap.components
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_components">

Lists all the components registered with AWS Systems Manager for SAP.

```sql
SELECT
ApplicationId,
Arn,
ComponentId,
ComponentType,
Tags
FROM aws.ssm_sap.components
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
