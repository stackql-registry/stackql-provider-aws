--- 
title: index_fields
hide_title: false
hide_table_of_contents: false
keywords:
  - index_fields
  - cloudsearch
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

Creates, updates, deletes, gets or lists an <code>index_fields</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="index_fields" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudsearch.index_fields" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_index_fields"
    values={[
        { label: 'describe_index_fields', value: 'describe_index_fields' }
    ]}
>
<TabItem value="describe_index_fields">

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
    <td><CopyableCode code="options" /></td>
    <td><code>string</code></td>
    <td>Configuration information for a field in the index, including its name, type, and options. The supported options depend on the IndexFieldType.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of domain configuration option.</td>
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
    <td><a href="#describe_index_fields"><CopyableCode code="describe_index_fields" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-FieldNames"><code>FieldNames</code></a>, <a href="#parameter-Deployed"><code>Deployed</code></a></td>
    <td>Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Getting Domain Information in the Amazon CloudSearch Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_index_field"><CopyableCode code="delete_index_field" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-IndexFieldName"><code>IndexFieldName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes an IndexField from the search domain. For more information, see Configuring Index Fields in the Amazon CloudSearch Developer Guide.</td>
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
<tr id="parameter-DomainName">
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-IndexFieldName">
    <td><CopyableCode code="IndexFieldName" /></td>
    <td><code>string</code></td>
    <td>The name of the index field your want to remove from the domain's indexing options.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Deployed">
    <td><CopyableCode code="Deployed" /></td>
    <td><code>boolean</code></td>
    <td>Whether to display the deployed configuration (true) or include any pending changes (false). Defaults to false.</td>
</tr>
<tr id="parameter-FieldNames">
    <td><CopyableCode code="FieldNames" /></td>
    <td><code>array</code></td>
    <td>A list of the index fields you want to describe. If not specified, information is returned for all configured index fields.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_index_fields"
    values={[
        { label: 'describe_index_fields', value: 'describe_index_fields' }
    ]}
>
<TabItem value="describe_index_fields">

Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Getting Domain Information in the Amazon CloudSearch Developer Guide.

```sql
SELECT
options,
status
FROM aws.cloudsearch.index_fields
WHERE DomainName = '{{ DomainName }}' -- required
AND region = '{{ region }}' -- required
AND FieldNames = '{{ FieldNames }}'
AND Deployed = '{{ Deployed }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_index_field"
    values={[
        { label: 'delete_index_field', value: 'delete_index_field' }
    ]}
>
<TabItem value="delete_index_field">

Removes an IndexField from the search domain. For more information, see Configuring Index Fields in the Amazon CloudSearch Developer Guide.

```sql
DELETE FROM aws.cloudsearch.index_fields
WHERE DomainName = '{{ DomainName }}' --required
AND IndexFieldName = '{{ IndexFieldName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
